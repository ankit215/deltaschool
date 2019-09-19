function getreactarea(w,h)
{
if (isNaN(w) || isNaN(h))
{
    throw "Parameter is  not a number;"
}
}
try{
    getreactarea(10,'A');
}
catch(e){
    console.log(e);
}
console.log("<br><br> have no idea what going on above");