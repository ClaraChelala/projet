class User {
    constructor(
      id,
      name,
      email,
      admin_flag,
      fonction,
      branche,
    ) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.admin_flag = admin_flag;
      this.fonction = fonction;
      this.branche = branche;
    }
  }
  
  export default User;