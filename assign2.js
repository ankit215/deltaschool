  //QUESTION 2 : (A)

function abc(){
    console.log(b)
    }
    let b = 'delta'; //delta is output bcz func is called after the declaration of b,
    abc();
  //QUESTION 2 : (B)
    
    function abc(){
    console.log(c)
    }
    abc();  //Error bcz the function is called first.
    let c = 'delta';
    
    