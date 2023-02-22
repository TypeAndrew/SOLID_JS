class MachinePriuse {
    constructor() {
        this.brand = 'Toyota'
        this.model = 'Prius V15'
    }

    drive() {
        return console.log('make speed 220km')
    }
    1
}

class MachineYaris {
    constructor() {
        this.brand = 'Toyota'
        this.model = 'Yaris B-3'

    }

    drive() {
        return console.log('make speed 180km')
    }
}


class Order {
    constructor(number, date, { model }) {
        this.number = number;
        this.date = date;
        this.model = model;
        this.price = 0;
    }

    setPrice() {
        if (this.model === 'Prius V15') {
            this.price = 11500;
        } else if (this.model === 'Yaris B-3') {
            this.price = 9500;
        }

    }

}


newCar = new MachinePriuse();
newCar.drive();
console.log(newCar)
newOrder = new Order(15, '15.02.2023', newCar);
newOrder.setPrice()
console.log(newOrder);
newCar = new MachineYaris();
newOrder = new Order(16, '16.02.2023', newCar);
newOrder.setPrice()
console.log(newOrder);


//console.log(newCar);