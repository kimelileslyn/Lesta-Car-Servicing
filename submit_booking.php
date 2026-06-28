<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$service = $_POST['service'];
$date = $_POST['date'];
$time = $_POST['time'];
$vehicle = $_POST['vehicle_model'];

echo "<h1>Booking Successful!</h1>";
echo "<p>Thank you, $name. Your appointment has been booked.</p>";
echo "<p>Service: $service</p>";
echo "<p>Date: $date</p>";
echo "<p>Time: $time</p>";
echo "<p>Vehicle Model: $vehicle</p>";
echo "<p>We will contact you at $email or $phone if needed.</p>";
?>