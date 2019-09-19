class User{
    constructor(firstname , middlename , lastname ,credit) 
    {
        this.firstname= firstname;
        this.middlename= middlename;
        this.lastname = lastname;
         this.credit= credit;
    }
    getFullName () 
    {
        let fullname = `${this.firstname} ${this.middlename} ${this.lastname} is my full name. credit ${this.credit}`;
    return fullname ;
}
editName(newname) {
    const myname = newname.split(" ");
    this.firstname = myname[0];
    this.middlename = myname[1];
    this.lastname = myname[2];
}



}
const john = new User ("John", "Anderson" , "bbb", 52);
console.log(john);
console.log(john.getFullName());
john.editName("Ankit kumar Rawat  ")
console.log(john.getFullName());

john.editName(" kajal raj koushal")
console.log(john.getFullName());
console.log(john);
john.editName(" simran raj koushal")
console.log(john.getFullName());
console.log(john);
john.editName(" divya raj koushal")
console.log(john.getFullName());
console.log(john);