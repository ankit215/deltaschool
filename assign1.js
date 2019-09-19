//QUESTION 1 : (A)

for(var i = 0; i<10; i++){
    console.log("i >>>>" , i);
                setTimeout(function(){
                    console.log(i);
    },1000)
    }/*
    
    
                i >>>> 0
                i >>>> 1
                i >>>> 2
                i >>>> 3
                i >>>> 4
                i >>>> 5
                i >>>> 6
                i >>>> 7
                i >>>> 8
                i >>>> 9
                10
                10
                10
                10
                10
                10
                10
                10
                10
                10
    
    */
//QUESTION 1 : (B)
 for(let j = 0; j<10;j++){
    console.log("j >>>>" , j);
                setTimeout(function(){
                    console.log(j);
    },1000)
    }
    /*
    OUTPUT IS :
                    j >>>> 0
                    j >>>> 1
                    j >>>> 2
                    j >>>> 3
                    j >>>> 4
                    j >>>> 5
                    j >>>> 6
                    j >>>> 7
                    j >>>> 8
                    j >>>> 9
                    0
                    1
                    2
                    3
                    4
                    5
                    6
                    7
                    8
                    9
    */
      