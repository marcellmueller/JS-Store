export let sortByName = (arr) => {
	arr.sort((a, b) => a.name.localeCompare(b.name));
};

export let sortByPriceAscending = (arr) => {
	arr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
};

export let sortByPriceDescending = (arr) => {
	arr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
};
