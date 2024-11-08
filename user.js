//You are creating a website for your college. Create a class User with 2 properties, name & email. 
//It also has a method called viewData( ) that allows user to view website data.

class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    viewData() {
      console.log(`${this.name} with email ${this.email} is viewing the website data.`);
    }
  }
  
  // Example usage
  let user1 = new User("Jose Sierra", "jose.sierrar@outlook.com");
  user1.viewData(); // Output: "Jose Sierra with email jose.sierrar@outlook.com is viewing the website data."
  