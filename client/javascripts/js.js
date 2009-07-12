  var x = 0;
  var altmx = 0;
  var y = 0;
  var altmy = 0;
  var scroll = 0;
  var scrol = 0;
  var scrollwin;
  

function move (value) {
  x = x + value;
  if (x > 500) x = x -1000;
  if (x < - 500) x = x +1000;
  document.getElementById("map").style.left = x + "px";
  return true;
}

function windowmove (xvalue, yvalue, window) {
  window.style.left = parseInt(window.style.left) + xvalue + "px"; 
  window.style.top = parseInt(window.style.top) + yvalue + "px"; 

  //alert(parseInt(document.getElementById(window).style.left)); 
  return true;

}

function windowclick (window) {
  scrol = window;
}


darray = new Array();

function Mauskontrolle (Ereigniss) {
  if (scroll == 1 && scrol == 1)  {
    if (!Ereigniss) Ereigniss = window.event;
    move (Ereigniss.clientX-altmx);
  }
  if (scroll == 1 && scrol == 10)  {
    if (!Ereigniss) Ereigniss = window.event;
    windowmove (Ereigniss.clientX-altmx,
                Ereigniss.clientY-altmy,
                scrollwin);
  }
  altmx = Ereigniss.clientX
  altmy = Ereigniss.clientY;


  return true;
}



function MDown (Ereigniss) {
  if (!Ereigniss) Ereigniss = window.event;
  altmx = Ereigniss.clientX;
  scroll = 1;
}

function MUp (Ereigniss) {
  if (!Ereigniss) Ereigniss = window.event;
  altmx = Ereigniss.clientX;
  scroll = 0;
  scrol = 0;
}

function SetLocation ( xpos, ypos ) {
  var newPic1 = document.createElement("img");
  var newPic2 = document.createElement("img");
  var newPic3 = document.createElement("img");
  newPic1.setAttribute("src",   "res/ore.png");
  newPic2.setAttribute("src",   "res/ore.png");
  newPic3.setAttribute("src",   "res/ore.png");

  newPic1.setAttribute("style", "position: absolute; top: "+ (ypos-10) +"px; left: "+  ( xpos +    0 - 10) +"px; z-index: 500;");
  newPic2.setAttribute("style", "position: absolute; top: "+ (ypos-10) +"px; left: "+  ( xpos + 1000 - 10) +"px; z-index: 500;");
  newPic3.setAttribute("style", "position: absolute; top: "+ (ypos-10) +"px; left: "+  ( xpos + 2000 - 10) +"px; z-index: 500;");
  
  document.getElementById("map_content").appendChild(newPic1);
  document.getElementById("map_content").appendChild(newPic2);
  document.getElementById("map_content").appendChild(newPic3);
  return true;
  
}

function LineLine ( x1, y1, x2, y2) {
  
  var newLine1 = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'line'
  );
  var newLine2 = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'line'
  );
  var newLine3 = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'line'
  );

  if ( Math.sqrt ( ((x1-x2)*(x1-x2)) + ((y1-y2)*(y1-y2)) )  >  Math.sqrt ( ((x1-(x2-1000))*(x1-(x2-1000))) + ((y1-y2)*(y1-y2)) ) ){
    x2 = x2 - 1000;
  }
  
  newLine1.setAttribute("x1", x1);
  newLine1.setAttribute("y1", y1);
  newLine1.setAttribute("x2", x2);
  newLine1.setAttribute("y2", y2);
  newLine1.setAttribute("style", "stroke:black; stroke-width: 1px; stroke-dasharray: 5,6");

  newLine2.setAttribute("x1", x1 + 1000);
  newLine2.setAttribute("y1", y1);
  newLine2.setAttribute("x2", x2 + 1000);
  newLine2.setAttribute("y2", y2);
  newLine2.setAttribute("style", "stroke:black; stroke-width: 1px; stroke-dasharray: 5,6");

  newLine3.setAttribute("x1", x1 + 2000);
  newLine3.setAttribute("y1", y1);
  newLine3.setAttribute("x2", x2 + 2000);
  newLine3.setAttribute("y2", y2);
  newLine3.setAttribute("style", "stroke:black; stroke-width: 1px; stroke-dasharray: 5,6");


  document.getElementById("svgbla").appendChild(newLine1);
  document.getElementById("svgbla").appendChild(newLine2);
  document.getElementById("svgbla").appendChild(newLine3);
  return true;
}

document.onmousemove = Mauskontrolle;
document.onmousedown = MDown;
document.onmouseup   = MUp;
