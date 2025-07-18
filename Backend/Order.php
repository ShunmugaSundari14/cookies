<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Bakery Menu</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .item { border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; }
        .item h3 { margin-top: 0; }
        .item a { display: inline-block; padding: 8px 15px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; }
        .item a:hover { background-color: #0056b3; }
    </style>
</head>
<body>
    <h1>Welcome to Our Bakery!</h1>
    <h2>Our Delicious Items:</h2>

    <?php
    // In a real application, you'd fetch this from a database
    $bakery_items = [
        ['id' => 1, 'name' => 'Chocolate Cake', 'price' => 25.00, 'description' => 'Rich chocolate cake with fudge frosting.'],
        ['id' => 2, 'name' => 'Croissant', 'price' => 3.50, 'description' => 'Flaky, buttery croissant, perfect for breakfast.'],
        ['id' => 3, 'name' => 'Blueberry Muffin', 'price' => 4.00, 'description' => 'Soft muffin packed with fresh blueberries.'],
        ['id' => 4, 'name' => 'Artisan Bread', 'price' => 6.00, 'description' => 'Freshly baked sourdough bread.'],
    ];

    foreach ($bakery_items as $item) {
        echo "<div class='item'>";
        echo "<h3>" . htmlspecialchars($item['name']) . "</h3>";
        echo "<p>" . htmlspecialchars($item['description']) . "</p>";
        echo "<p>Price: $" . number_format($item['price'], 2) . "</p>";
        // Link to order_details.php, passing item_id and item_name as GET parameters
        echo "<a href='order_details.php?item_id=" . htmlspecialchars($item['id']) . "&item_name=" . urlencode($item['name']) . "'>Order Now</a>";
        echo "</div>";
    }
    ?>

</body>
</html>