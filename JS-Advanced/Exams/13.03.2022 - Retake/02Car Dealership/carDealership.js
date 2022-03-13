class CarDealership {
    constructor(name) {
        this.name = name;
        this.$availableCars = [

        ];
        this.$soldCars = [];
        this.$totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (this.name == '') {
            throw new Error('Invalid input!');

        }
        //console.log(this.name);
        let hp = Number(horsepower);
        let pr = Number(price);
        let m = Number(mileage);

        if (model == '' || hp < 0 || pr < 0 || m < 0) {
            throw new Error('Invalid input!');
        }

        this.$availableCars.push({
            "model": model,
            "horsepower": horsepower,
            "price": price,
            "mileage": mileage,
        });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let models = this.$availableCars.find(m => m.model == model);
        if (models == undefined) {
            throw new Error(`${model} was not found!`);
        }

        let price = 0;

        for (let i = 0; i < this.$availableCars.length; i++) {
            let curr = this.$availableCars[i];

            if (curr.model == model) {
                price = curr.price;

                if (curr.mileage > desiredMileage) {
                    let diff = curr.mileage - desiredMileage;

                    if (diff <= 40000) {
                        price = price - (price * 0.05);
                    } else if (diff > 40000) {
                        price = price - (price * 0.1);
                    }
                }

            }
            this.$soldCars.push([{
                "model": curr.model,
                "horsepower": curr.horsepower,
                "soldPrice": price
            }]);
            this.$totalIncome += price;
            this.$availableCars.splice(i, 1);

            return `${model} was sold for ${price.toFixed(2)}$`;
        }
        // let curr = this.$availableCars.includes;
        //console.log(index);


    }

    currentCar() {
        
        for(let i = 0;i< this.$availableCars.length;i++){
            console.log(this.$availableCars[i]);
        }
        //return `-Available cars: \n ${}`;

    }

    salesReport(criteria) {

    }

}
let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('Audi A3', 120, 4900, 240000));
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));
console.log(dealership.currentCar());