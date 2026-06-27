<?php
$name = $_POST['name'];
$email = $_POST['email'];
$service = $_POST['service'];
$date = $_POST['date'];

echo "<h1>Booking Successful!</h1>";
echo "<p>Thank you, <strong>$name</strong>.</p>";
echo "<p>Your booking for <strong>$service</strong> on <strong>$date</strong> has been received.</p>";
echo "<p>We will contact you at <strong>$email</strong>.</p>";
?>