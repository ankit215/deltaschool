var pet = function(name) {  
  var getName = function() 
  {
    return name;              
           }
  return getName;         
   }
myPet = pet('Tyson');
   
console.log(myPet());   