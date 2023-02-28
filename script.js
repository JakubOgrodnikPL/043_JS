// const button1 = document.querySelector('.btn-1')
// const button2 = document.querySelector('.btn-2')
// const button3 = document.querySelector('.btn-3')
// const paragraph = document.querySelector('p')

// function Food (name, price) {
// 	this.name = name;
// 	this.price = price;
// }

// const meal1 = new Food ('Schabowy', 29)
// const meal2 = new Food ('Mielony', 26)
// const meal3 = new Food ('Carbonara', 30)

// Food.prototype.showInfo = function() {
// 	console.log(`${this.name} kosztuje ${this.price}zł`)
// }

// button1.addEventListener('click', () => meal1.showInfo())
// button2.addEventListener('click', () => meal2.showInfo())
// button3.addEventListener('click', () => meal3.showInfo())


//

// console.log(this)
// console.log(window.document)
// console.log(document)

// function test () {
// 	console.log(this)
// }
// test()

const person = {
	name: 'Lisa',
	'fav-meal': 'schabowy',
	address: {
		city: 'Kraków',
		'zip-code': '00-001',
		showCity: function(){
			console.log(this)
		}
	}
	// showInfo() {
	// 	console.log(this)
	// }
}
person.address.showCity()

function Food(name) {
	this.name = name
}

const meal1 = new Food('schabowy')
const meal2 = new Food('mielony')

console.log(meal1, meal2)