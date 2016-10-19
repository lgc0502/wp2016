var x=false;
var y=false;
function greet() {
var today = new Date();
alert("Hello ! wellcome to my website~ today is " + today.toDateString());
}

function ABOUT()
{ 
if(x==false){
document.getElementById("demo").innerHTML="<p>Birth: 1997/  /  </p>Education: NCKU CSIE<br>Hobbit: Listen to music</br>";
x=true;
}
else{
document.getElementById("demo").innerHTML="<p></p>";
x=false;
}


}
function CONTACT()
{
if(y==false){
document.getElementById("demo1").innerHTML="<p>FB : joanne lee</p> IG : gc0502_kk<br></br>";
y=true;
}
else{
document.getElementById("demo1").innerHTML="<p></p>";
y=false;
}
}
greet();

