
function mypass(pa){
    var password = 'ankitrawat';
    if (pa==password)
{
    return password;
}
else {
    throw 'PASSWORD IS INCORRECT' 
}
}
 try {
      var x = mypass('ankitrawat');
       console.log(x);
     }
 
 catch(error)
  {
    // console.log('ggjgjgjg');
     console.error(error);
 }
 finally
 {
     console.log(' forget password');
 }