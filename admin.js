class Admin extends User
 {
    editData()
     {
        console.log(`${this.name} with email ${this.email} is editing the website data.`);
     }
  }
  // Example usage
  let admin = new Admin("Admin User", "admin@example.com");
  admin.viewData(); // Output: "Admin User with email admin@example.com is viewing the website data."
  admin.editData(); // Output: "Admin User with email admin@example.com is editing the website data."
  