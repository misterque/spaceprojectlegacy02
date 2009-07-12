<?php
  // Wenn ein Formular ausgefüllt wurde:
  if ($_GET['send'] == "true") {
    // eingaben überprüfen

    // Das System erstellen
    // 1. Das Backgroundimage sichern
    $backimage_str = rnd_str(64).".png";
    move_uploaded_file($_FILES['back']['tmp_name'], "./images/systembackgrounds/".$backimage_str);
    // 2. Den Objectlayer sichern
    $objcimage_str = rnd_str(64).".png";
    move_uploaded_file($_FILES['objc']['tmp_name'], "./images/systemobjects/".$objcimage_str);


    
    // Alle Werte in die Datenbank hühnern
    $query = "INSERT INTO systems (name,descr,backimage,objcimage) VALUES ('"
    .$_POST['name']."','"
    .$_POST['descr']."','"
    .$backimage_str."','"
    .$objcimage_str."');";
    echo $query;
    $result = mysql_query($query) or die(mysql_error());

    // System ID ermitteln
    $result = mysql_query("SELECT system_id FROM systems WHERE (name = '".$_POST['name']."');") OR die(mysql_error());
    $system_id = mysql_fetch_assoc($result); 
    $system_id = $system_id['system_id'];

    // Die Planetenplanquadrate erzeugen
    $ress = imagecreatefrompng("./images/systemobjects/".$objcimage_str);
    imageAlphaBlending($ress, true);
    imageSaveAlpha($ress, true);
    for($y=0; $y < 8; $y++) {
      for($x=0; $x < 8; $x++) {
        // bereitet ein leeres bild vor ($dest)
	$dest = imagecreate(64,64);
	imageAlphaBlending($dest, true);
	imageSaveAlpha($dest, true);
	$leer = imagecolorallocate ($dest, 0, 0, 0);
	imagecolortransparent($dest, $leer);

	// erstelle einen 64stellen schlüssen, kopiere und sichere den bildausschnitt
	$dest_str = rnd_str(64).".png";
	imagecopy($dest, $ress, 0, 0, $x*64, $y*64, 64, 64 );
	imagepng($dest, "./images/systemcells/".$dest_str);
        // Alle Werte in die Datenbank hühnern
       $query = "INSERT INTO system_cells (system_link, x, y, bitmap_key) VALUES ('"
       .$system_id."','"
       .$x."','"
       .$y."','"
       .$dest_str."');";
       $result = mysql_query($query) or die(mysql_error());
      }
    }
    die();
  }


// wenn verarbeitet wurde hier beenden
//sonst das formular anzeigen
?>
<form enctype="multipart/form-data" action="./?action=createsystem&send=true" method="post">
<input type="hidden" name="MAX_FILE_SIZE" value="3000000">

Formular zum erstellen Eines Systems<br/>
Name des Systems: <input name="name" type="text"><br/>
Beschreibung:     <input name="descr" type="text"><br/>
Backgroundimage: (512x512 / PNG) <input name="back" type="file"><br/>
Objectlayer: (512x512 / PNG) <input name="objc" type="file"><br/>
<input type="submit" value="System erstellen">
</form>


Das System wird automatisch in 8 mal 8 64x64 große Planquadrate eingeteilt.<br/>Die Karten müssen PNG dateien sein, 512x512 Pixel groß.
