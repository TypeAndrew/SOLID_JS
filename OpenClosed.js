class Auto {
    setPrice() {
        throw new Error('set method should be implemented')
    };
}



class MachinePriuse extends Auto {
    constructor() {
        super();
        this.brand = 'Toyota'
        this.model = 'Prius V15'
    }

    drive() {
        return console.log('make speed 220km')
    }
    setPrice() {
        return this.price = 11500
    };
}

class MachineYaris extends Auto {
    constructor() {
        super();
        this.brand = 'Toyota'
        this.model = 'Yaris B-3'

    }

    drive() {
        return console.log('make speed 180km')
    }
    setPrice() {
        return this.price = 9500
    };
}


class MachineX5 extends Auto {
    constructor() {
        super();
        this.brand = 'BMW'
        this.model = 'X5'

    }

    drive() {
        return console.log('make speed 180km')
    }

    setPrice() {
        return this.price = 25000
    };
}


class Order {
    constructor(number, date, model) {
        this.number = number;
        this.date = date;
        this.model = model;
        this.price = 0;
    }

    setOrderPrice() {
        this.price = this.model.setPrice();
    }
}


newCar = new MachinePriuse();
//newCar.drive();
console.log(newCar)
newOrder = new Order(15, '15.02.2023', newCar);
newOrder.setOrderPrice()
console.log(newOrder);
newCar = new MachineYaris();
newOrder = new Order(16, '16.02.2023', newCar);
newOrder.setOrderPrice()
console.log(newOrder);


//console.log(newCar);