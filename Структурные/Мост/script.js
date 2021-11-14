
class Model{
	constructor(color){
		this.color=color;
	}
}

class Color{
	constructor(type){
		this.type=type;
	}
	getType(){
		return this.type;
	}
}
class BlackColor extends Color{
	constructor(){
		super("Black");
	}

}
class GreyColor extends Color{
	constructor(){
		super("Grey");
	}
}
class Audi extends Model{
	constructor(color){
		super(color);
	}
	paint(){
		return `This is audi, color: ${this.color.getType()}`;
	}
}
class Mercedes extends Model{
	constructor(color){
		super(color);
	}
	paint(){
		return `This is mercedes, color: ${this.color.getType()}`;
	}
}
const blackMercedes=new Mercedes(new BlackColor());
console.log(blackMercedes.paint());