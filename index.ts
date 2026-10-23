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
