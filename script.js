const x = 4

// console.log(x)

class MyClass {
    // class methods
    constructor(x,y) { 
        this.x = x
        this.y = y
     }
    // method1() { ... }
    // method2() { ... }
    // method3() { ... }

    addTwoNum(x, y){
        let z = x + y
        // console.log(z)
    }

    subtructTwoNum(x, y){
        let z = x - y
        // console.log(z)
    }

    divTwoNum(x, y){
        let z = x / y
        // console.log(z)
    }
    
  }




class SayHello{
 

    constructor(saySomething,a,b,c,d){
        this.saySomething = saySomething
        this.a = a
        this.b = b
        this.c = c
        this.d = d
    }

    saySentence(saySomething){
        console.log(saySomething)
    }

    myCat(saySomething){
        console.log(saySomething)
    }

    addValue(a,b,c,d){
        let final = a + b + c + d
        console.log('final number is: ' + final)
    }

}




// let newPhrase = new SayHello()
//     newPhrase.addValue(1,4,68,4)

//     newPhrase.saySentence('HI there')








// console.log(newPhrase)
















// let word = new SayHello()
// word.saySentence('hey how you doing')
// word.myCat('Luna')
// word.addValue(6,2,5,7)

//use keyword CLASS
//Give a name starting capital letter
// initialize ur constructor values




function sayHi(){

}

const sayName = ()=>{

}

const sayHello = function (){

}









//   let list = [1,3,4,5,6,67,7,2,3,5,65,52,324,23]


//   console.log(list)


  let newValue = new  MyClass()
    newValue.addTwoNum(11,5)
    newValue.subtructTwoNum(6,5)


//   class User {

//     constructor(name) {
//       this.name = name;
//     }
  
//     sayHi() {
//       alert(this.name);
//     }
  
//   }
  
//   // Usage:
//   let user = new User("John");
//   user.sayHi();





// class User {
    
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }d


//     sayName() {
//         console.log(this.name)
//     }

//     sayAge() {
//         console.log(this.name)
//         console.log(this.age)
//     }





// }


class User{
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

// let names = ['ed', 'dan', 'saeed', 'dave', 'ed']

// let filtered = names.filter((person) => {
//     return person === 'ed'
// })

// console.log(filtered)



class Admin extends User {

     deleteUser(users){
        user = user.filter((u)=>{
            return u.email !== users.email
        })
     }
}

















let userOne = new User('dan@gmail.com', 'Daniel',0)
userOne.login().creditScore();
userOne.logout();
userOne.login().creditScore();
console.log('--------------------------')

let userTwo = new User('saeed@gmail.com', 'Saeed', 5)
userTwo.login().creditScore();
userTwo.logout();

userTwo.login().creditScore();


console.log('--------------------------')

let userThree = new User('edmond@gmail.com', 'ed', 2)
userThree.login().creditScore();
userThree.logout();

userThree.login().creditScore();


let newAdmin = new Admin('dave@gmail.com', 'dave')

let user = [userOne, userTwo , userThree , newAdmin]

console.log(user)


newAdmin.deleteUser(userThree)

console.log(user)



























// let newUser = new User('Saeed')
// let newAge = new User('Ben',79)

// newUser.sayName()

// newAge.sayAge(76)
























// let user = {
//     name: 'john',
//     age: 28
// }

// let userTwo = {
//     name: 'Mike',
//     age: 28
// }




// console.log(userTwo.name)




