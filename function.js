/*function myFunc(theObject) {
    theObject.make = 'Toyota';
  }
  
  var mycar = {make: 'Honda', model: 'Accord', year: 1998};
  var x, y;
  
  x = mycar.make; // x gets the value "Honda"
  
  myFunc(mycar);
  y = mycar.make; 
  console.log(y); */




  /*function add(x){
       return x+x ;
  }
  console.log(add(5));*/
/*
  var x = 1;
  var y = 5 ;
  var name =  'ankit';
*/

  function myfun(){
      var x = 2;
      function myfunct(x){
      return x+2;   
      }
      return myfunct;
  }
  console.log(myfun()(15));
  