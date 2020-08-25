import { sortCategoryFunc, sortRefurbFunc } from './sort.js';

//clear inventory DOM before we repopulate it
export let clearInv = () => {
	let inventoryList = document.getElementById('inventoryList');
	inventoryList.innerHTML = '';
};

export let hideConfirm = () => {
	document.getElementById('confirm').style.visibility = 'hidden';
};

let createInventoryElements = (i, itemList, index, cart) => {
	//create product DOM elements.
	let invItems = document.createElement('div');
	let name = document.createElement('h3');
	let description = document.createElement('div');
	let price = document.createElement('div');
	let addToCart = document.createElement('div');
	let image = document.createElement('img');

	invItems.classList.add('invItems');
	addToCart.classList.add('addToCart');
	image.classList.add('productImage');

	name.textContent = itemList[i].name;
	description.textContent = itemList[i].description;
	price.textContent = '$' + itemList[i].price;
	addToCart.textContent = 'Add to cart';
	image.src = '/img/' + itemList[i].id + '.jpg';

	invItems.appendChild(image);
	invItems.appendChild(name);
	invItems.appendChild(description);
	invItems.appendChild(price);
	invItems.appendChild(addToCart);
	inventoryList.appendChild(invItems);

	addToCart.onclick = () => {
		document.getElementById('confirm').style.visibility = 'visible';
		index = itemList.findIndex(
			(x) => x.name === invItems.firstChild.nextSibling.innerHTML
		);
		confirmAdd.onclick = () => {
			cart.push(itemList[index]);
			itemList[index].inventory = itemList[index].inventory - 1;
			console.log(itemList[index].inventory);
			cartDisplay(cart);
			hideConfirm();
		};
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

	//Check to see if a category is specified before displaying the whole inventory.
	//If category isn't default then we will filter through the inventory array
	//	and use a temporary, non destructive array 'arrCopy' to display selection
	if (document.getElementById('categorySelect').value === 'laptops') {
		arrCopy = sortCategoryFunc(arrCopy, 'Laptops');
	} else if (document.getElementById('categorySelect').value === 'desktops') {
		arrCopy = sortCategoryFunc(arrCopy, 'Desktops');
	} else if (
		document.getElementById('categorySelect').value === 'accessories'
	) {
		arrCopy = sortCategoryFunc(arrCopy, 'Accessories');
	} else if (
		document.getElementById('categorySelect').value === 'refurbished'
	) {
		arrCopy = sortRefurbFunc(arrCopy, true);
	}

	for (let i = 0; i < arrCopy.length; i++) {
		createInventoryElements(i, arrCopy, index, cart);
	}
	cartDisplay(cart);
};

let renderCart = (i, cart) => {
	let inventoryList = document.getElementById('inventoryList');
	let cartItems = document.createElement('div');
	let cartName = document.createElement('h3');
	let cartPrice = document.createElement('div');
	let cartImage = document.createElement('img');
	let removeCart = document.createElement('div');
	cartItems.classList.add('cartItems');
	removeCart.classList.add('removeCart');
	cartImage.classList.add('cartImage');

	cartName.textContent = cart[i].name;
	cartPrice.textContent = '$' + cart[i].price;
	removeCart.textContent = 'Remove from cart X';
	cartImage.src = '/img/' + cart[i].id + '.jpg';

	cartItems.appendChild(cartImage);
	cartItems.appendChild(cartName);
	cartItems.appendChild(cartPrice);
	cartItems.appendChild(removeCart);
	inventoryList.appendChild(cartItems);
	removeCart.onclick = () => {
		removeItem(cart);
		clearInv();
		showCart(cart);
		document.getElementById('total').textContent =
			'Total: ' + displayTotal(cart);
		cartDisplay(cart);
	};
};

export let showCart = (cart) => {
	for (let i = 0; i < cart.length; i++) {
		renderCart(i, cart);
	}
};

export let displayTotal = (cart) => {
	let total = 0;
	for (let i = 0; i < cart.length; i++) {
		console.log(cart[i].price);
		total = total + cart[i].price;
	}
	return total.toFixed(2);
};

export let removeItem = (cart) => {
	let findIndex = cart.findIndex((x) => x.name === name.textContent);
	cart.splice(findIndex, 1);
};
