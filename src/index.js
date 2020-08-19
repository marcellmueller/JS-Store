import {
	sortByName,
	sortByPriceAscending,
	sortByPriceDescending,
} from './sort.js';

import {
	clearInv,
	hideConfirm,
	displayInventory,
	cartDisplay,
} from './render.js';

let itemList = [
	{
		name: 'first',
		description: 'product description',
		price: 10.45,
		inventory: 50,
	},

	{
		name: 'second',
		description: 'product description',
		price: 19.95,
		inventory: 20,
	},

	{
		name: 'third',
		description: 'product description',
		price: 34.5,
		inventory: 10,
	},

	{
		name: 'fourth',
		description: 'product description',
		price: 2.95,
		inventory: 100,
	},

	{
		name: 'fifth',
		description: 'product description',
		price: 34.5,
		inventory: 10,
	},
];

let cart = [];

let index;

confirmAdd.onclick = () => {
	cart.push(itemList[index]);
	cartDisplay(cart);
	hideConfirm();
};

cancel.onclick = () => {
	hideConfirm();
};

sortName.onclick = () => {
	sortByName(itemList);
	clearInv();
	displayInventory();
};

sortPrice.onclick = () => {
	if (document.getElementById('priceSelect').value === 'ascending') {
		sortByPriceAscending(itemList);
	} else if (document.getElementById('priceSelect').value === 'descending') {
		sortByPriceDescending(itemList);
	}
	clearInv();
	displayInventory();
};

priceSelect.onchange = () => {
	if (document.getElementById('priceSelect').value === 'default') {
	} else if (document.getElementById('priceSelect').value === 'ascending') {
		sortByPriceAscending(itemList);
	} else if (document.getElementById('priceSelect').value === 'descending') {
		sortByPriceDescending(itemList);
	}
	clearInv();
	displayInventory();
};

displayInventory(itemList, index, cart);
