var ankit = {name : 'My name is Ankit',
              age : 20,
              school : 'Delta School'}
          
var kajal = {name : 'My name is Kajal',
              age : 19,
              school : 'K V'}
             
 var megha = {name : 'My name is Megha',
              age : 21,
              school : 'Little Flower'}
                                     
              let users = new Map()
              users.set('ankit' , ankit)
              users.set('kajal' , kajal)
              users.set('megha' , megha)

             // console.log(users.get('megha'));
              //console.log(users.values( 'kajal'));
 for (const array of users.arrays()) {
    console.log(array) ;
 }
 