<?php 

// Credentials

$dbServername = "localhost";
$dbUsername = "admin";
$dbPassword = "admin";
$dbName = "repository";

// Connection Established

$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

// Database Access

if (!$conn) {

  die("connection failed: " . mysqli_connecti_error());

};