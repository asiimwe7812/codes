class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
        this.score =0;


    }
    logIn(){
        console.log(this.email,"just logged in");
        return this;
    }
    logOut(){
        console.log(this.email,"just logged out");
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email,'the score is now',this.score);
        return this ;
    }
}
class Admin extends User{
          deleteUser(User){
              Users =Users.filter(u=>{ return u.email !=u.email})


          }
function Admin(...args){
        User.apply(this,args);
        this.role="Super Admin";
}          


}
var userOne =new User("Asiimwe","asiimwe@gmail.com");
var userTwo =new User("Ivan","tecton@gmail.com");
var admin = new admin("Benjamin","ben@gmail.com");
var Users =[userOne,userTwo];
admin.deleteUser(userTwo);
console.log(Users);

