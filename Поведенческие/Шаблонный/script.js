class Employee{
	constructor(name,salary){
		this.name=name;
		this.salary=salary;
	}
	responsesibilities(){}
	work(){
		return `${this.name} выполняет ${this.responsesibilities()}`
	}
	getPaid(){
		return `${this.name} зарабатывает ${this.salary}`
	}
}


class Developer extends Employee{
	constructor(name,salary){
		super(name,salary);
	}
	responsesibilities(){
		return 'процесс создания программ';
	}
}
class Tester extends Employee{
	constructor(name,salary){
		super(name,salary);
	}
	responsesibilities(){
		return 'процесс проверки программ';
	}
}
let obj1=new Developer('Ksusha',100000);
console.log(obj1.work());
console.log(obj1.getPaid());
let obj2=new Tester('Nastya',5000);
console.log(obj2.work());
console.log(obj2.getPaid());
