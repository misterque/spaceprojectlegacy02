<?php echo '
<?xml version="1.0" encoding="UTF-8"?>
' ?>
<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
         "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" 
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
<head>
  <title>Space Opera Aledebaran</title>
  <script type="text/javascript">serverdir="http://misterque.is-a-geek.net/browsergame/server/"</script>
  <script src="javascripts/js.js" type="text/javascript"></script>
  <script src="javascripts/login.js" type="text/javascript"></script>
  <script src="javascripts/ajax.js" type="text/javascript"></script>
  <script src="javascripts/xplanet.js" type="text/javascript"></script>
  <script src="javascripts/xuser.js" type="text/javascript"></script>
  <script src="javascripts/xwindow.js" type="text/javascript"></script>
</head>
<body style="font-family: monospace; overflow: hidden;" >
  <object id="AdobeSVG" classid="clsid:78156a80-c6a1-4bbf-8e6a-3cd390eeb4e2"> </object>
  <?php echo ' <?import namespace="svg" urn="http://www.w3.org/2000/svg" implementation="#AdobeSVG"?>' ?>

  <div style="position: absolute; left: 0px; top: 0px; width: 100%; height:10%; background-color: black"> </div>

  <div style="position: absolute; left: 0px; bottom: 0px; width: 100%; height:10%; background-color: black"> </div>
 
  <div id="blub" style="position: absolute; left: 0px; top: 10%; width: 100%; height:80%; background-color: #33271a; color: #eee;">
    <div style="position: absolute; right: 0px; bottom: 0px">
      <img src="res/galaxy.png" />
    </div>
    <div id="console" style="display: inline;">
      Willkommen bei Space Opera Aledebaran<br/>

      loading interfaces ... successful <br/>
      loading com channels ... succesful <br/>
      loading ... <br/>
      ... <br/>
      loading things ... logging in <br/>
      <br/>
    </div>
    <div id="commandline" style="display: inline;">
      <div id="prompt" style="display: inline;">login as:</div>
      <form id="logininputform" action="javascript:login();" style="display: inline;" >
        <input id="logininput" name="logininput" type="text" size="100" style="background-color: transparent; border: 0px; color: #eee; font-family: monospace;"/>
      </form>
      <form id="passwdform" action="javascript:passwd();" style="display: none;" >
        <input id="passwd" name="passwd" type="password" size="100" style="background-color: transparent; border: 0px; color: #eee; font-family: monospace;"/>
      </form>
      <form id="consoleinputform" action="javascript:shellcommand();" style="display: none;" >
        <input id="consoleinput" name="consoleinput" type="text" size="100" style="background-color: transparent; border: 0px; color: #eee; font-family: monospace;"/>
      </form>
    </div>
    <?php
      include("javascripts/templates/window.html");
      include("javascripts/templates/planet.html");
      include("javascripts/templates/user.html");
    ?>
  </div>
  <script type="text/javascript">
      document.getElementById("logininput").focus();
  </script>
</body>
