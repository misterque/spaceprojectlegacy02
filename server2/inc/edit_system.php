<h3>System</h3>
<?php
  // Hintergrundbild laden
  $result = mysql_query("SELECT backimage FROM systems WHERE (system_id = '".$_GET['system']."');") OR die(mysql_error());
  $back = mysql_fetch_assoc($result);
  $back = $back['backimage'];
  // Ausgabe
?>
<div id="map" style="height:512px;width:512px">
  <div id="background" style="position:absolute;">
    <img src="./images/systembackgrounds/<?php echo $back ?>" style="z-index:0" />
  </div>
  <div id="cells" style="position:absolute;width:512px;">
<?php
  // Zellenbildchen erstellen
  $result = mysql_query("SELECT system_cell_id,x,y,bitmap_key FROM system_cells WHERE (system_link = '".$_GET['system']."');") OR die(mysql_error());
  while($row = mysql_fetch_assoc($result)) {
    echo "<a href='./?action=editsystem&cell=".$row['system_cell_id']."' style=':0px'>";
    echo "<img src='./images/systemcells/".$row['bitmap_key']."' style=\"border:0px;position:relative;\" />";
    echo "</a>";
  }
?>
  </div>
  <div id="planets" style="position:absolute;">
    <a href="#"><img src="./images/misc/2020fuzzybig.png" style="position: absolute; top:246px; left: 246px"/></a>
    <a href="#"><img src="./images/misc/minimars.png" style="position: absolute; top:100px; left: 300px"/></a>
    <a href="#"><img src="./images/misc/2020solidsmall.png" style="position: absolute; top:120px; left: 276px"/></a>
  </div>  
</div>  

<?php
 //
?>
<br/>
<div id="editmenu">
<?php
  // unterscheiden ob celle editieren, planet/object editieru

?>Namen ändern: ---- <br/>
Beschreibung ändern: ----- <br/>
Hintergrundbild ändern: ----<br/>
Objectlayer  ändern: ---- (orginal downladen)<br/>
<a href="./?action=createplanet&system=<?php echo $_GET['system'] ?>">Planeten erstellen</a><br/>
</div>

<div id="objclist">
Objekte in diesem System:
Planeten
</div>





