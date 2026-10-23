// class
class Fruit {
  name: string;
  kg: number;

  constructor(name: string, kg: number) {
    this.name = name;
    this.kg = kg;
  }

  accelator(): void {
    console.log('You wanna eat?', this.name, this.kg);
  }
}

const fruit1 = new Fruit('Apple', 2.4);
const fruit2 = new Fruit('Mango', 3);

fruit1.accelator();
fruit2.accelator();

// encapsulation practice
class BankAcc {
  public ownerName: string;
  private _balance: number;

  // constructor
  constructor(ownerName: string, balance: number) {
    this.ownerName = ownerName;
    this._balance = balance;
  }

  // getter func
  get balance(): number {
    return this._balance;
  }

  // deposit
  deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
      console.log(`${amount} added. now balance ${this._balance}`);
    } else {
      console.log('Invalid amount');
    }
  }
}

const myAcc = new BankAcc('Sifat', 2000);
myAcc.deposit(1000);
