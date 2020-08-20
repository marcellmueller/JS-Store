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
		name: 'Thinkpad X1 Carbon',
		description:
			'8th Gen\nIntel Core i5-10210U \n 16gb RAM \n 256gb nvme SSD \n 1920x1080 Display',
		price: 1830.0,
		inventory: 10,
		category: 'Laptops',
	},

	{
		id: 2,
		name: 'Thinkpad x280',
		description:
			'8th Gen\nIntel Core i5-10210U \n 16gb RAM \n 256gb nvme SSD \n 1920x1080 Display',

		price: 1190.45,
		inventory: 20,
		category: 'Laptops',
	},

	{
		id: 3,
		name: 'Thinkstation P340',
		description:
			'8th Gen\nIntel Core i5-10210U \n 16gb RAM \n 256gb nvme SSD \n 1920x1080 Display',

		price: 1182.95,
		inventory: 10,
		category: 'Desktops',
	},

	{
		id: 4,
		name: 'Thinkstation P520c',
		description:
			'8th Gen\nIntel Core i5-10210U \n 16gb RAM \n 256gb nvme SSD \n 1920x1080 Display',

		price: 1749.95,
		inventory: 100,
		category: 'Desktops',
	},

	{
		id: 5,
		name: '65w Slim Tip AC adapter',
		description: 'Works with any Lenovo Thinkpad with Slim Tip Port',
		price: 34.95,
		inventory: 10,
		category: 'Accessories',
	},
	{
		id: 6,
		name: 'Thinkpad P73 Workstation',
		description: 'Works with any Lenovo Thinkpad with Slim Tip Port',
		price: 3990.45,
		inventory: 10,
		category: 'Laptops',
	},
	{
		id: 7,
		name: 'Lenovo Power Bank',
		description:
			'14000 mAh power bank. Compatible with USB-C and Slim Tip powered laptops.',
		price: 89.95,
		inventory: 10,
		category: 'Accessories',
	},
	{
		id: 8,
		name: '65w USB-C AC Adapter',
		description: 'AC adapter for USB-C powered Thinkpads.',
		price: 34.95,
		inventory: 10,
		category: 'Accessories',
	},
];

let cart = [];

let index;

cancel.onclick = () => {
	hideConfirm();
	console.log(itemList);
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
displayInventory(itemList, index, cart);

console.log(sortCategoryFunc(itemList, 'Laptops'));
