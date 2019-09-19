var a = 'This is my book.'
var regex = (/(?=.*(t))(?=.*(o))(?=.*(o))/);
 /*if (regex.exec(a)){
     console.log(true);
 }else{
     false;
 }*/
 //var result = regex.test('t , m , o');
 console.log(regex.match(a));