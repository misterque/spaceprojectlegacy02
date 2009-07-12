var window_count = 0;
var top_window = "basewindowlayer";

function windowcreate(x,y,w,h,title) {
  if(x == -1) x = parseInt(document.getElementById(top_window).getElementsByTagName("div")[0].style.left) + 15;
  if(y == -1) y = parseInt(document.getElementById(top_window).getElementsByTagName("div")[0].style.top)  + 15;
  
  var window_id = "window" + window_count;
  window_count = window_count + 1;
  var neuWindow = document.getElementById("basewindowlayer").cloneNode(true);
  neuWindow.id = window_id;
  neuWindow.getElementsByTagName("div")[0].style.left=  x + "px";
  neuWindow.getElementsByTagName("div")[0].style.top=   y + "px";
  neuWindow.getElementsByTagName("div")[0].style.width= w + "px";
  neuWindow.getElementsByTagName("div")[0].style.height=h + "px";
  neuWindow.getElementsByTagName("div")[0].getElementsByTagName("div")[0].firstChild.data=title;
  neuWindow.getElementsByTagName("div")[0].getElementsByTagName("div")[0].setAttribute("onmousedown", "xselect('"+window_id+"');");
  neuWindow.getElementsByTagName("div")[0].getElementsByTagName("div")[2].setAttribute("onmousedown", "windowdestroy('"+window_id+"');");
  
  document.getElementById("blub").appendChild(neuWindow);

  xcreate(window_id);

  return window_id;
}


function windowdestroy(id) {
  xdestroy(id);
  document.getElementById("blub").removeChild(document.getElementById(id));
  if(!document.getElementById(top_window)) top_window = "basewindowlayer";

}


function xdestroy(window) {
  dummy = new Array();
  dummy = darray;
  
  for(var i=darray.length-1; i>=0; i--) {
    if(darray[i] == window) {
      dummy.splice(i,1);
    }
  }
  darray = dummy;

  for(var i=0; i<darray.length; i++) {
    document.getElementById(darray[i]).style.zIndex = 400+i;
    reczindex(document.getElementById(darray[i]).firstChild, 400+i);
  }
}

function xcreate(window) {
  darray.push(window);

  for(var i=0; i<darray.length; i++) {
    document.getElementById(darray[i]).style.zIndex = 400+i;
    reczindex(document.getElementById(darray[i]).firstChild, 400+i);
  }
  top_window=window;
}

function xselect(window) {
  xdestroy(window);
  xcreate(window);
  scrol=10;
  scrollwin=document.getElementById(window).firstChild;
  scrollwin=scrollwin.nextSibling;

}


function reczindex(node, zindex) {
  while( node != null ){
    if(node.nodeType == 1) {
      node.style.zIndex = zindex;
      reczindex(node.firstChild, zindex);
    }
    node = node.nextSibling;
  }
}
