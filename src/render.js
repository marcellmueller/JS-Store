import { sortCategoryFunc } from './sort.js';

export let clearInv = () => {
	let inventoryList = document.getElementById('inventoryList');
	inventoryList.innerHTML = '';
};

export let hideConfirm = () => {
	document.getElementById('confirm').style.visibility = 'hidden';
};

let createInventoryElements = (i, itemList, index) => {
	//create a copy of inv array so we don't have to change original on catergory filtering
	let arrCopy = itemList;

	let invItems = document.createElement('div');
	let name = document.createElement('h3');
	let description = document.createElement('div');
	let price = document.createElement('div');
	let addToCart = document.createElement('div');

	invItems.classList.add('invItems');
	addToCart.classList.add('addToCart');

	name.textContent = itemList[i].name;
	description.textContent = itemList[i].description;
	price.textContent = '$' + itemList[i].price;
	addToCart.textContent = 'Add to cart';

	invItems.appendChild(name);
	invItems.appendChild(description);
	invItems.appendChild(price);
	invItems.appendChild(addToCart);
	inventoryList.appendChild(invItems);

	addToCart.onclick = () => {
		// showClickDiv();
		document.getElementById('confirm').style.visibility = 'visible';
		index = itemList.findIndex((x) => x.name === invItems.firstChild.innerHTML);
	};
};

//displays number of items in cart on top right of page
export let cartDisplay = (cart) => {
	let topCart = document.getElementById('topCart');
	topCart.textContent = 'Cart' + ' (' + cart.length + ')';
};

//iterates through products and at
export let displayInventory = (itemList, index, cart) => {
	let arrCopy = itemList;
	if (document.getElementById('categorySelect').value === 'laptops') {
		arrCopy = sortCategoryFunc(arrCopy, 'Laptops');
	} else if (document.getElementById('categorySelect').value === 'desktops') {
		arrCopy = sortCategoryFunc(arrCopy, 'Desktops');
	} else if (
		document.getElementById('categorySelect').value === 'accessories'
	) {
		arrCopy = sortCategoryFunc(arrCopy, 'Accessories');
	}
	for (let i = 0; i < arrCopy.length; i++) {
		createInventoryElements(i, arrCopy, index);
	}
	cartDisplay(cart);
};
