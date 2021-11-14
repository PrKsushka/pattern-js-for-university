function baseMemberShip(amount){
	return amount;
}
function premiumMemberShip(amount){
	return amount*0.4;
}
function platinumMemberShip(amount){
	return amount*0.2;
}
class Discont{
	constructor(discount){
		this.discount=discount;
		this.amount=0;
	}
	checkout(){
		return this.discount(this.amount);
	}
	setAmount(amount){
		this.amount=amount;
	}
}
let baseCustomer=new Discont(baseMemberShip),
	premiumCustomer=new Discont(premiumMemberShip),
	platinumCustomer=new Discont(platinumMemberShip);
baseCustomer.setAmount(5000);
premiumCustomer.setAmount(5000);
platinumCustomer.setAmount(5000);
console.log(baseCustomer.checkout());
console.log(premiumCustomer.checkout());
console.log(platinumCustomer.checkout());
console.log(baseMemberShip);
