<?php
require '../lib/db.php';

// CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    $name = $input['name'] ?? '';
    $email = $input['email'] ?? '';
    $password = $input['password'] ?? '';

    if (!$name || !$email || !$password) {
        http_response_code(400);
        echo json_encode([
            'error' => 'All fields are required',
            'debug' => [
                'name' => $name ?: 'missing',
                'email' => $email ?: 'missing',
                'password' => $password ? 'provided' : 'missing'
            ]
        ]);
        exit;
    }

    try {
        // Check for existing email
        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$email]);
        if ($stmt->fetch()) {
            http_response_code(409);
            echo json_encode(['error' => 'Email already exists']);
            exit;
        }

        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

        $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?) RETURNING id, name, email");
        if ($stmt->execute([$name, $email, $hashedPassword])) {
            $user = $stmt->fetch();
            echo json_encode(['message' => 'Registration successful', 'user' => $user]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to register user']);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Server error: ' . $e->getMessage()]);
    }
}
