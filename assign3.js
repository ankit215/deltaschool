  //QUESTION 3

var a = new Date();
var b = a.getDay();
switch(b)
{    case 0: console.log('Today is : sunday');
             break;
    case 1: console.log('Today is : monday');
            break;
    case 2: console.log('Today is : tuesday');
            break;
    case 3: console.log('Today is : wednesday');
            break;
    case 4: console.log('Today is : thursday');
            break;
    case 5: console.log('Today is : friday');
            break;
    case 6: console.log('Today is : saturday');
            break;
   
    default: console.log('wrong choice');        
}
var c = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
console.log(`Current Time is : ${c}`);
