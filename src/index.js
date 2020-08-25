import {
	sortByPriceAscending,
	sortByPriceDescending,
	sortByNameAscending,
	sortByNameDescending,
} from './sort.js';

import {
	clearInv,
	hideConfirm,
	displayInventory,
	showCart,
	displayTotal,
	removeItem,
} from './render.js';

import { inventoryArray } from './inventoryArray.js';

let itemList = inventoryArray;
let cart = [];

let index;

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
	clearInv();
	displayInventory(itemList, index, cart);
};

categorySelect.onchange = () => {
	clearInv();
	displayInventory(itemList, index, cart);
};

topCart.onclick = () => {
	document.getElementById('cartTotal').style.height = '50px';
	document.getElementById('total').textContent =
		'Total: $' + displayTotal(cart);
	clearInv();
	if (cart.length > 0) {
		showCart(cart);
	} else {
		console.log('empty');
	}
};

continueButton.onclick = () => {
	clearInv();
	displayInventory(itemList, index, cart);
	console.log(displayTotal(cart));
	document.getElementById('cartTotal').style.height = 0;
};

displayInventory(itemList, index, cart);
