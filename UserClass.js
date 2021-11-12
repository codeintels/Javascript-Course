
//Generatiing generic users
class User{

    //Constructor runs immediately a new class is created
    constructor(email, name, score){
        this.email = email
        this.name = name
        this.score = score
    }

    
    login(){
        console.log('User with email ' + this.email + 'has logged in as ' + this.name) 
        return this  
        
    }

    logout() {
        console.log('User with email ' + this.email + 'has signed out as ' + this.name)
    }


    creditScore(){
        this.score++
        console.log(this.email + ' has a creditScore of : ' + this.score)
        return this.score
    }

   

}


//Creating an Admin upper class to manage users
class Admin extends User {

     deleteUser(users){
        user = user.filter((u)=>{
            return u.email !== users.email
        })
     }
}


//create a instance of the class
//Instance of user 1
let userOne = new User('dan@gmail.com', 'Daniel',0)

//calling the new class instance
userOne.login().creditScore();
userOne.logout();
userOne.login().creditScore();
console.log('--------------------------')


//Instance of user 2
let userTwo = new User('saeed@gmail.com', 'Saeed', 5)
userTwo.login().creditScore();
userTwo.logout();

userTwo.login().creditScore();


console.log('--------------------------')

//Instance of user 3
let userThree = new User('edmond@gmail.com', 'ed', 2)
userThree.login().creditScore();
userThree.logout();

userThree.login().creditScore();


//creating new instance of admin
let newAdmin = new Admin('dave@gmail.com', 'dave')

//storing all logged in users 
let user = [userOne, userTwo , userThree , newAdmin]

console.log(user)

//Deleting user three
newAdmin.deleteUser(userThree)

console.log(user)
