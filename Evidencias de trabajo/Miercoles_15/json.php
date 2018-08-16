<?php

$str_obj_json = '{
   "nombre": "Erick",
   "edad": 22,
   "novia": null,
   "actividades": {
      "Universidad": "UNAM",
      "Hobby": "Cazar mariposas"
   }
}';


echo "<h1> Mi primer Json</h1>";

$obj_php = json_decode($str_obj_json);

echo "Nombre: " . $obj_php->nombre; 
echo "</br>";
echo "Edad: " . $obj_php->edad;
echo "</br>";
echo "Novia: " . $obj_php->novia;
echo "</br>";
echo "<br>";
echo "<strong>Json de Json</strong>";
echo "<br>";
echo "Actividades: " . $obj_php->actividades->Universidad;
echo "</br>";
echo "Hobby: " . $obj_php->actividades->Hobby;
echo "</br>";
echo "</br>";

echo "<strong>Otro ejemplo</strong>";
$str_obj_json_2 = '{"nombre": "cualquier valor"}';

$json_2 = json_decode($str_obj_json_2);
echo "<br>" . $json_2->nombre;
echo "</br>";
echo "</br>";
echo "<strong>Accediendo a una lista</strong>";

$str_obj_json_3 = '{"frutas": ["pera", "uva"]}';
$json_3 = json_decode($str_obj_json_3);
echo "</br>".$json_3->frutas[0];
?>