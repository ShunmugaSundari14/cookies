<?php
require "../lib/db.php";
require "../lib/cors.php";

handleCors();

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    $product_name = $input['product_name'] ?? "";
    $product_price = $input["product_price"] ??"";
    $user = $input["user"] ??"";
    
}


?>