var loginname;
var loginpasswd;

function writetoconsole(Element){
  printc( document.getElementById("prompt").firstChild.data + " "
        + document.getElementById(Element).value );
        
  document.getElementById(Element).value = "";
}

function printc(Text){
  var newLine = document.createTextNode(Text);
  var newBr = document.createElement("br");
  document.getElementById("console").appendChild(newLine);  
  document.getElementById("console").appendChild(newBr);  
  if(newBr.offsetTop > (window.innerHeight*75/100)) {
    document.getElementById("console").removeChild(document.getElementById("console").firstChild);
    document.getElementById("console").removeChild(document.getElementById("console").firstChild);
  }
}

function login() {
  loginname = document.getElementById("logininput").value;

  writetoconsole("logininput");
  document.getElementById("passwdform").setAttribute("style", "display: inline;" );
  document.getElementById("logininputform").setAttribute("style", "display: none;" );
  document.getElementById("prompt").firstChild.data = "password:";
  document.getElementById("passwd").focus();

}
    
function passwd() {
  loginpasswd = document.getElementById("passwd").value;
  
  writetoconsole("logininput");
  document.getElementById("passwdform").setAttribute("style", "display: none;" );
  loginrequest("");  
  //Req("");
}


function loginrequest(action) {
  htp.open('get', serverdir+'inc/login.php?login='+loginname+'&passwd='+loginpasswd);
  htp.onreadystatechange = responseloginrequest;
  htp.send(null);

}



function responseloginrequest() {
  if(htp.readyState == 4){
 
  if(htp.responseText == "true") {
    document.getElementById("consoleinputform").setAttribute("style", "display: inline;" );
    document.getElementById("prompt").firstChild.data = "$";
    document.getElementById("consoleinput").focus();
  } else {
    document.getElementById("logininputform").setAttribute("style", "display: inline;" );

    printc("wrong password or login name!!!");
    printc("");
    document.getElementById("prompt").firstChild.data = "login as:";
    document.getElementById("logininput").focus();

  }
  }
}
			 
function shell (input){
  
  if     (input == "x")       sndReq("");
  else if(input == "kill x")  xplanetdestroy();
  
  else if(input == "x mars")  xplanetdisplay();
  else if(input == "xuser")   xuserdisplay();
  else if(input == "kill xuser")   xuserdestroy();
  else printc("unknown command");
 

}

function shellcommand(){
  var input = document.getElementById("consoleinput").value;
  writetoconsole("consoleinput");
  shell(input);
  
  document.getElementById("consoleinput").focus();
  document.getElementById("consoleinput").focus();

}

  
