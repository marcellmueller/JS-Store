export let clearInv = () => {
	let inventoryList = document.getElementById('inventoryList');
	inventoryList.innerHTML = '';
};

export let hideConfirm = () => {
	document.getElementById('confirm').style.visibility = 'hidden';
};

let createInventoryElements = (i, itemList, index) => {
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
	for (let i = 0; i < itemList.length; i++) {
		createInventoryElements(i, itemList, index);
	}
	cartDisplay(cart);
};
