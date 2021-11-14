class mercedesCars{
	constructor(model, price, interior, autopilot){
		this.model=model;
		this.price=price;
		this.interior=interior;
		this.autopilot=autopilot;
	}
	produce(){
		return new mercedesCars(this.model, this.price, this.interior, this.autopilot);
	}
}
const carPrototype=new mercedesCars('cla',100000,'white',true);

const car1=carPrototype.produce(),
	  car2=carPrototype.produce(),
	  car3=carPrototype.produce();
car2.interior='black';
car2.autopilot=false;
console.log(car1,car2,car3);