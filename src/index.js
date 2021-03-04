const data = require('../data');

const filteringObject = {
	"category": "bal",
	// "ID": "004",
	// "name": "Vertball Raise",
	// "image": "bal_004.png",
	// "video": {"en": "se_bal_004_en.mp4", "nl": "se_bal_004_nl.mp4", "de": "se_bal_004_de.mp4"},
	"regions": ["shoulders"]
};

function customFilter(items, filteringObject) {

	let res = [];
	let isSearchingForAllItems = true;

	for (const filteringKey in filteringObject) {

		if (!isSearchingForAllItems) items = res;

		const filteringValues = getType(filteringObject[filteringKey]) === 'string'
			? [filteringObject[filteringKey]] : filteringObject[filteringKey];

		res = items.filter(item => isFind(item, filteringKey, filteringValues))

		isSearchingForAllItems = false;
	}

	console.log(res);
}

function isFind(item, filteringKey, filteringValues) {

	switch (getType(item[filteringKey])) {
		case 'string':
			for (const value of filteringValues)
				if (item[filteringKey] === value)
					return true;
		break;

		case 'array':
			for (const value of filteringValues)
				if (item[filteringKey].includes(value))
					return true;
		break;

		case 'object':
			item[filteringKey] = JSON.stringify(item[filteringKey]).slice(0, -1).slice(1).split(',');
			filteringValues = JSON.stringify(filteringValues).slice(0, -1).slice(1).split(',');

			for (const value of filteringValues)
				if (item[filteringKey].includes(value))
					return true;
		break;
	}

	return false;
}

function getType (val) {
	if (typeof val === 'undefined') return 'undefined';
	if (typeof val === 'object' && !val) return 'null';
	return ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

customFilter(data, filteringObject);