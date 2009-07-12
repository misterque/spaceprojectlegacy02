function xplanetdisplay(){
  var newPic1 = document.createElement("img");
  var newPic2 = document.createElement("img");
  var newPic3 = document.createElement("img");
  newPic1.setAttribute("src",   serverdir+"res/mars.jpg");
  newPic2.setAttribute("src",   serverdir+"res/mars.jpg");
  newPic3.setAttribute("src",   serverdir+"res/mars.jpg");

  newPic1.setAttribute("style", "position: absolute; top: 0px; left: 0px;");
  newPic2.setAttribute("style", "position: absolute; top: 0px; left: 1000px; ");
  newPic3.setAttribute("style", "position: absolute; top: 0px; left: 2000px; ");

 

  document.getElementById("map_content").appendChild(newPic1);
  document.getElementById("map_content").appendChild(newPic2);
  document.getElementById("map_content").appendChild(newPic3);

  document.getElementById("mapcontainer").setAttribute("style", "display: inline");

  SetLocation(100,100);
  xcreate("mapcontainer");
    
return true;
}

function xplanetdestroy(){
  document.getElementById("mapcontainer").setAttribute("style", "display: none");
  xdestroy("mapcontainer");

}
      
