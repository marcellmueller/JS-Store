export let sortByPriceAscending = (arr) => {
	arr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
};

export let sortByPriceDescending = (arr) => {
	arr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
};

export let sortByNameAscending = (arr) => {
	arr.sort((a, b) => a.name.localeCompare(b.name));
};

export let sortByNameDescending = (arr) => {
	arr.sort((a, b) => b.name.localeCompare(a.name));
};

//filter through inventory for selected category
export let sortCategoryFunc = (arr, string) => {
	let filtered = arr.filter(function (list) {
		return list.category === string;
	});
	return filtered;
};

export let sortRefurbFunc = (arr, bool) => {
	let filtered = arr.filter(function (list) {
		return list.refurbished === bool;
	});
	return filtered;
};
