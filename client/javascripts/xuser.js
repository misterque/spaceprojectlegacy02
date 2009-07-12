function xuserdisplay(){
  /*
  if(document.getElementById("usercontainer").style.display == "none") {
    var newPic1 = document.createElement("img");
    newPic1.setAttribute("src",   serverdir+"res/captain.png");

    document.getElementById("user_content").appendChild(newPic1);

    document.getElementById("usercontainer").setAttribute("style", "display: inline");
  }
  xcreate("usercontainer");
  */
  
  var newPic1 = document.createElement("img");
  
  newPic1.setAttribute("src",   serverdir+"res/captain.png");
  var window = windowcreate(-1,-1,
                            newPic1.width,
                            newPic1.height+15,
			    "USER: Captain James Charlson");  
  

  document.getElementById(window).getElementsByTagName("div")[0].getElementsByTagName("div")[3].appendChild(newPic1);

  document.getElementById(window).style.display = "inline";
  
  return true;
  
}


function xuserdestroy(){
  document.getElementById("user_content").removeChild(document.getElementById("user_content").firstChild.nextSibling);
  document.getElementById("usercontainer").setAttribute("style", "display: none");
  xdestroy("usercontainer");

}

