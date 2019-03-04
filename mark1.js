
var a;
var b;

function displa(num)
{
a = document.getElementById('texd');

a.value += num;
//return a.value;
}
function eva(){
b = a; //document.getElementById('texd');
b.value = eval(b.value);
}
function clean(){
    a.value="";
    b.value="";
}

function remov()
{
  var c;
c=document.getElementById('texd');
var d = c.value;
c.value = d.substring(0, d.length-1);
}
