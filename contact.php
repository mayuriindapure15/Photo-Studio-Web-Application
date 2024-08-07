<?php 
include("connection.php");
$fname=$_POST['firstName'];
$Lname=$_POST['lastName'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$DOB=$_POST['dob'];
$address=$_POST['address'];
$service=$_POST['service'];
$find=$_POST['howFind'];
$message=$_POST['message'];


$insert=mysqli_query($conn,"insert into customer_details(fristname,lastname,phoneNumber,email,DateOfBirth,address,services,howfind,message)values('$fname','$Lname','$phone','$email','$DOB','$address','$service','$find','$message')");

if($insert){
    echo '<script>
            alert("you will be connected within 2 hours!!");
            window.location = "./";
        </script>';
}
?>