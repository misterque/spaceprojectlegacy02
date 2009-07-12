function createRequestObject() {
  var ro;
  var browser = navigator.appName;
  if(browser == "Microsoft Internet Explorer"){
    ro = new ActiveXObject("Microsoft.XMLHTTP");
  }else{
    ro = new XMLHttpRequest();
  }
  return ro;
}

var http = createRequestObject();
var htp = createRequestObject();


function sndReq(action) {
  http.open('get', serverdir+'inc/planet.php'+action);
  http.onreadystatechange = handleResponse;
  http.send(null);
}

function handleResponse() {
  if(http.readyState == 4){
    var response = http.responseText;
 
    var Element = document.getElementById("blub");
    Element.innerHTML = Element.innerHTML + response;
  }
  document.getElementById("consoleinput").focus();

}


