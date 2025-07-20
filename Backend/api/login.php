<?php
require "../lib/cors.php";
handleCors(['http://localhost:5173']);


require '../lib/db.php';


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);

    $email = $input['email'] ?? '';
    $password = $input['password'] ?? '';

    if (!$email || !$password) {
        http_response_code(400);
        echo json_encode(['error' => 'Email and password are required']);
        exit;
    }

    try {
        $stmt = $pdo->prepare("SELECT id, name, email, password FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch();

        if ($user && password_verify($password, $user['password'])) {
            unset($user['password']); // Never return password hash
            echo json_encode(['message' => 'Login successful', 'user' => $user]);
        } else {
            http_response_code(401);
            echo json_encode(['error' => 'Invalid email or password']);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Server error: ' . $e->getMessage()]);
    }
}
