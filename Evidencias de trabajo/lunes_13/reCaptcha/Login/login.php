<?php

ini_set('display_errors', 'off');
ini_set('display_startup_errors', 'off');
error_reporting(0);

$username = $_POST['username'];
$password = $_POST['password'];

function Coneccion()
{
	if(!($link=mysql_connect("localhost","root")))
	{
		echo "Error conectando a la base de datos";
		exit();
	}
	if(!mysql_select_db("usecadalumnos", $link))
	{
		echo "Error seleccionando la base de datos";
		exit();
	}
	return $link;
}

$con = Coneccion();
$query = "SELECT * FROM usecadalumnos WHERE username = '".$username."' AND password = '".$password."'";
$q = mysql_query($query, $con);

try{
	if(mysql_result($q,0)){
		$result = mysql_result($q, 0);
		echo "Usuario validado correctamente";
	}else{
		echo "Usuario o password erróneos";
	}
}catch(Exception $error){}
mysql_close($con);
?>
