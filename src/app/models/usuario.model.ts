export class User {
    id: number;
    name: string;
    lastName: string;
    mail: string;
    password: string;
    role: string;
    
    constructor(
      id: number,
      name: string,
      lastName: string,
      email: string,
      password: string,
      role: string
    ) {
      this.id = id;
      this.name = name;
      this.lastName = lastName;
      this.mail = email;
      this.password = password;
      this.role = role;
    }
  }
  