
 
//QUESTION 4:SPLICE
//QUESTION 5 :DELETE



  //QUESTION 6

  var a=10
let func = ()=>{
 console.log(a) // 1st console
 for(var a=1; a<5; a++)
 {
   console.log(a) // 2nd console
 }
 console.log(a); // 3rd console
}
 
func()
  
/* OUTPUT IS :
          undefined // because var a is not declared before 1st console inside the function.
           1
            2
             3
              4
               5  //it is because of 3rd console.
*/
