// // create class or blueprint
// class Car {
//   // properties
//   brand: string;
//   speed: number;

//   // constructor
//   constructor(brand: string, speed: number) {
//     this.brand = brand;
//     this.speed = speed;
//   }

//   // method
//   drive(): void {
//     console.log(`${this.brand} গাড়িটি ${this.speed} km/h গতিতে চলছে।`);
//   }
// }

// // object or/ create real instence
// const car1 = new Car('BMW', 150);
// const car2 = new Car('Tesla', 120);

// car1.drive();
// car2.drive();

// ** Encapsulation
// class BankAccount {
//   public ownerName: string;
//   private _balance: number;

//   // constructor
//   constructor(ownerName: string, balance: number) {
//     this.ownerName = ownerName;
//     this._balance = balance;
//   }

//   // getter: for see private balance
//   get balance(): number {
//     return this._balance;
//   }

//   // deposit method
//   deposit(amount: number): void {
//     if (amount > 0) {
//       this._balance += amount;
//       console.log(
//         `${amount} টাকা জমা হয়েছে। বর্তমান ব্যালেন্স: ${this._balance}`,
//       );
//     } else {
//       console.log('ইনভ্যালিড অ্যামাউন্ট!');
//     }
//   }
// }

// const myAccount = new BankAccount('Sifat', 5000);
// myAccount.deposit(1000);

// ** Inheritance, Polymorphism & Method Overriding
// // Parent class (base class)
// class Animal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   makeSound(): void {
//     console.log('Some generic animal sound...');
//   }
// }

// // Child class 1
// class Dog extends Animal {
//   constructor(name: string) {
//     super(name); // call the constructor
//   }

//   // Method Overriding (Polymorphism)
//   makeSound(): void {
//     console.log(`${this.name} বলছে: ঘেউ ঘেউ!`);
//   }
// }

// // Child class 2
// class Cat extends Animal {
//   constructor(name: string) {
//     super(name);
//   }

//   // Method Overriding
//   makeSound(): void {
//     console.log(`${this.name} বলছে: মিঞাও মিঞাও!`);
//   }
// }

// const dog = new Dog('Tom');
// const cat = new Cat('Mini');

// dog.makeSound();
// cat.makeSound();

// ** // Method Overlading
class Calculator {
  // ? নোট: টাইপস্ক্রিপ্টে অন্যান্য ল্যাঙ্গুয়েজের (যেমন C++ বা Java) মতো সরাসরি একাধিক মেথড ডিফাইন করে ওভারলোডিং করা যায় না। টাইপস্ক্রিপ্টে ফাংশন সিগনেচার ডিফাইন করে ওভারলোড করতে হয়:
  // overload signature
  add(a: number, b: number): number;
  add(a: string, b: string): string;

  // single implementation
  add(a: any, b: any): any {
    return a + b;
  }
}

const calc = new Calculator();

console.log(calc.add(10, 20));
console.log(calc.add('Hello', 'World!'));
