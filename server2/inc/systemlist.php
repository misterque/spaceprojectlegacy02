<h3>System</h3>
<?php
  $result = mysql_query('SELECT system_id, name FROM systems') OR die(mysql_error());

  while($row = mysql_fetch_assoc($result)) {
    echo "<a href='./?action=editsystem&system=".$row['system_id']."'>".
    $row['name']."</a><br/>";
  }

?>
