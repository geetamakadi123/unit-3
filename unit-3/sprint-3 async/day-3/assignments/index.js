//object orietnted programming

//object

//three ways to create objects

//1. let obj = {} //object literal
//2. Object.create()
//3. constructor function
//4. Classes

//Create a login/signup system

//User
//Admin
//Author

//functinalities
//1. user can signup - validateUsername, validatePassword
//2. user can login

//1. encapsulation - making private variables or methods that are used only inside class

class User {
    #password;
    constructor(name) {
      this.name = name;
    }
  
    #validateUsername(userName) {
      //validating userName through if else
      //by default, we are simulating all usernames are correct
  
      return true;
    }
  
    #validatePassword(password) {
        //validating password through if else
    //by default, we are simulating all passwords are correct

    return true;
}

signUp(userName, password) {
  let isValidated = false;

  //when user inputs valid username and password

  isValidated = this.#validateUsername(userName) && this.#validatePassword(password);

  if (isValidated) {
    this.userName = userName;
    this.#password = password;

    console.log('user signed up successfully');
  } else {
    console.log('signup failure');
}
//isvalidated = true && true
}

login(username, password) {
if (username === this.userName && password === this.#password) {
  console.log('logged in successfully');
} else {
  console.log('authentication failed');
}
}

//   changePassword(newPassword) {
//     this.#password = newPassword;
//   }

set password(newPassword) {
    this.#password = newPassword;
}

get naamBatao() {
  return this.name;
}
}

class Author extends User {
constructor(name) {
  super(name);
  //   this.type = 'author'
}
}

class Admin extends User {
    constructor(name) {
        super(name);
      }
    }
    
    // let a1 = new Author('vivekananda');
    // console.log('a1:', a1);
    
    // let u1 = new User('pablo');
    
    // //clicked on button
    
    // u1.signUp('real_pablo_official_7', 'pablo123');
    
    // u1.login('real_pablo_official_7', 'pablo123');
    
    // let a1 = new Author('vivekananda');
    
    // a1.signUp('vivekananda_', 'vivekananda123');
    // console.log('a1:', a1);
    
    let admin1 = new Admin('babu bhaiyaa');
    admin1.signUp('paisahipaisa', 'khopodi_tod');

    admin1.login('paisahipaisa', 'khopodi_tod');
    
    // admin1.password('are ja re, tu jaa re');
    
    admin1.password = 'are ja re, tu ja re';
    
    // console.log('admin1:', admin1.name);
    
    console.log(admin1.naamBatao);
    
    //will user need u1.validateUsername()
    
    //en-capsulation
    
    //change of password    