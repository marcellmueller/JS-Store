import {
	sortByPriceAscending,
	sortByPriceDescending,
	sortByNameAscending,
	sortByNameDescending,
	sortCategoryFunc,
} from './sort.js';

import {
	clearInv,
	hideConfirm,
	displayInventory,
	cartDisplay,
} from './render.js';

let itemList = [
	{
		id: 1,
		name: 'first',
		description: 'product description',
		price: 10.45,
		inventory: 50,
		category: 'Laptops',
	},

	{
		id: 2,
		name: 'second',
		description: 'product description',
		price: 19.95,
		inventory: 20,
		category: 'Laptops',
	},

	{
		id: 3,
		name: 'third',
		description: 'product description',
		price: 34.5,
		inventory: 10,
		category: 'Desktops',
	},

	{
		id: 4,
		name: 'fourth',
		description: 'product description',
		price: 2.95,
		inventory: 100,
		category: 'Accessories',
	},

	{
		id: 5,
		name: 'fifth',
		description: 'product description',
		price: 34.5,
		inventory: 10,
		category: 'Accessories',
	},
];

let cart = [];

let index;

let category = 'default';

confirmAdd.onclick = () => {
	cart.push(itemList[index]);
	cartDisplay(cart);
	hideConfirm();
};

cancel.onclick = () => {
	hideConfirm();
};

sortPrice.onclick = () => {
	if (document.getElementById('priceSelect').value === 'ascending') {
		sortByPriceAscending(itemList);
	} else if (document.getElementById('priceSelect').value === 'descending') {
		sortByPriceDescending(itemList);
	}
	clearInv();
	displayInventory(itemList, index, cart);
};

priceSelect.onchange = () => {
	if (document.getElementById('priceSelect').value === 'default') {
	} else if (document.getElementById('priceSelect').value === 'ascending') {
		sortByPriceAscending(itemList);
	} else if (document.getElementById('priceSelect').value === 'descending') {
		sortByPriceDescending(itemList);
	}
	clearInv();
	displayInventory(itemList, index, cart);
};

sortName.onclick = () => {
	if (document.getElementById('nameSelect').value === 'ascending') {
		sortByNameAscending(itemList);
	} else if (document.getElementById('nameSelect').value === 'descending') {
		sortByNameDescending(itemList);
	}
	clearInv();
	displayInventory(itemList, index, cart);
};

nameSelect.onchange = () => {
	if (document.getElementById('nameSelect').value === 'default') {
	} else if (document.getElementById('nameSelect').value === 'ascending') {
		sortByNameAscending(itemList);
	} else if (document.getElementById('nameSelect').value === 'descending') {
		sortByNameDescending(itemList);
	}
	clearInv();
	displayInventory(itemList, index, cart);
};

sortCategory.onclick = () => {
	// if (document.getElementById('categorySelect').value === 'laptops') {
	// 	sortCategoryFunc(itemList, 'Laptops');
	// } else if (document.getElementById('categorySelect').value === 'desktops') {
	// 	sortCategoryFunc(itemList, 'Desktops');
	// } else if (
	// 	document.getElementById('categorySelect').value === 'accessories'
	// ) {
	// 	sortCategoryFunc(itemList, 'Accessories');
	// }
	clearInv();
	displayInventory(itemList, index, cart);
};

categorySelect.onchange = () => {
	// if (document.getElementById('categorySelect').value === 'default') {
	// } else if (document.getElementById('categorySelect').value === 'laptops') {
	// 	sortCategoryFunc(itemList, 'Laptops');
	// } else if (document.getElementById('categorySelect').value === 'desktops') {
	// 	sortCategoryFunc(itemList, 'Desktops');
	// } else if (
	// 	document.getElementById('categorySelect').value === 'accessories'
	// ) {
	// 	sortCategoryFunc(itemList, 'Accessories');
	// }
	clearInv();
	displayInventory(itemList, index, cart);
};
displayInventory(itemList, index, cart);

console.log(sortCategoryFunc(itemList, 'Laptops'));
