function getMonthName(mo) {
    mo = mo - 1 ; 
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo]) {
      return months[mo];
    } else {
      throw 'InvalidMonthNo'; 
    }
  }
  
  try { 
  //  monthName = 
    var x = getMonthName(2); 
   console.log(x);
  }
  catch (e) {
    //monthName = 'unknown';
    console.error(e);
    //logMyErrors(e);
  }