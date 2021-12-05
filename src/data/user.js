class User {
    constructor(
      id,
      name,
      email,
      admin_flag,
      fonction
    ) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.admin_flag = admin_flag;
      this.fonction = fonction;
    }
  }
  
  export default User;