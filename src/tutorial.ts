export interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number;
}

const laptop: Computer = {
  id: 1,
  brand: "random brand",
  ram: 8,
  upgradeRam(amount) {
    this.ram += amount
    return this.ram;
  }
};


laptop.storage = 256;
console.log(laptop.upgradeRam(5));

console.log(laptop);

// ANOTHER EXAMPLE 

// Define an enum named UserRole

export enum UserRole {
    Admin,
    Manager,
    Employee
}

// Define a type alias named User

export type User = {
    id: number,
    name: string,
    role: UserRole,
    contact: [string, string]; // Tuple: [email, phone]
}

// Define a function named createUser

export function createUser(user: User) : User {
    return user
}

// Call the createUser function

const user: User = createUser({
    id: 1,
    name: 'John Doe',
    role: UserRole.Admin,
    contact: ['john.doe@example.com', '123-456-7890'],
  });
  
  console.log(user);