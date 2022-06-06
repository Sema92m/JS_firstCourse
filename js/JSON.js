'use strict';
//В JSON все сущности(ключ\значение) пишутся в кавычках!

const persone = {
	name: 'Alex',
	tel: '+7493494999',
	parents: {
		mom: 'Ola',
		dad: 'Mike'
	}
};

// console.log(JSON.stringify(persone));
// //{"name":"Alex","tel":"+7493494999"}
// console.log(JSON.parse(JSON.stringify(persone)));
// //{ name: 'Alex', tel: '+7493494999' }

const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom ='Ann';
console.log(clone);