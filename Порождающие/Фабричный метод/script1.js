
class SimpleMembership{
	constructor(name){
		this.name=name,
		this.cost=50
	}
}
class StandartMembership{
	constructor(name){
		this.name=name,
		this.cost=100
	}
}
class PremiumMembership{
	constructor(name){
		this.name=name,
		this.cost=150
	}
}
class MemberFactory{
	static list={
		simple:SimpleMembership,
		standart:StandartMembership,
		premium:PremiumMembership
	}
	create(name, type='simple'){
		const MemberShip=MemberFactory.list[type] || MemberFactory.list.simple;
		const member=new MemberShip(name);
		member.define=function(){
			console.log(`${this.name},${this.cost}`);
		}
		return member;
	}
}
const factory=new MemberFactory();
const members=[
factory.create('Ksenia','premium'),
factory.create('Irina','standart'),
factory.create('Natasha','simple')
];
members.forEach(m=>{
	m.define();
	console.log(m);
})
console.log(members);
