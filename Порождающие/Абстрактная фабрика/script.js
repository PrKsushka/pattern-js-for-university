function mercedesProducer(kind){
	return kind==='classic'? classicCars : familyCars;
};
function classicCars(){
	return new cla();
}
function familyCars(){
	return new cls();
}
class cla{
	info(){
		return 'this is classic car';
	}
}
class cls{
	info(){
		return 'this is family car';
	}
}
const producer=mercedesProducer('classic');
const myCar=new producer();
console.log(myCar.info());