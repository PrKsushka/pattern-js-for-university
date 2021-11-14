
class Much{
	constructor(){
		if(typeof Much.instance==='object'){
			return Much.instance;
		}
		this.count=0;
		Much.instance=this;
		return this;
	}
	howMuch(){
		return this.count;
	}
	increaseCount(){
		return this.count++;
	}
}
const t=new Much(),
	  d=new Much();
d.increaseCount();
d.increaseCount();
t.increaseCount();
t.increaseCount();


console.log(d.howMuch());
console.log(t.howMuch());
