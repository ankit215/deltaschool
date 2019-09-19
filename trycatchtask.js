function getMyRainbow(co){
    co = co - 1 ;
    var Rainbow= ['violet' , 'indigo' , 'blue' , 'green' , 'yellow' , 'orange' , 'red'];
    if (Rainbow[co]){
        return Rainbow[co];
    }else 
    {
        throw 'invalid color';
    }
}
try{
    var x = getMyRainbow(3);
    console.log(x);
   // colorName = getMyRainbow(mycolor);
}
catch(e){
    console.error(e);
}
finally{
    
}
