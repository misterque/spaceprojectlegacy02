Bla
<a href="./?action=showsystemlist">Systeme anzeigen</a>
<a href="./?action=createsystem">Neues System</a>
<br/>
<br/>
<?php
  error_reporting(E_ALL);
  $db_link = mysql_connect("localhost", "browsergame", "rowser");
  
  mysql_select_db("browsergame", $db_link);

  function rnd_str($length) {
    $acceptedChars = 'AZERTYUIOPQSDFGHJKLMWXCVBN0123456789';
    $max = strlen($acceptedChars)-1;
    $code1 = null;
    for($i=0; $i < $length; $i++) {
      $code1 .= $acceptedChars{mt_rand(0, $max)};
    } 
    return $code1;
  }

  if ($_GET['action'] == "showsystemlist")   include("./inc/systemlist.php");
  if ($_GET['action'] == "createsystem") include("./inc/create_system.php");
  if ($_GET['action'] == "createplanet") include("./inc/create_planet.php");
  if ($_GET['action'] == "editsystem") include("./inc/edit_system.php");

  

?>
