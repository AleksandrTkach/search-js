const data = require('../data');

const filteringObject = {
	"category": "bal",
	// "ID": "004",
	// "name": "Vertball Raise",
	// "image": "bal_004.png",
	// "video": {"en": "se_bal_004_en.mp4", "nl": "se_bal_004_nl.mp4", "de": "se_bal_004_de.mp4"},
	"regions": ["shoulders"]
};

/**
 *
 * @param items
 * @param filteringObject
 */
function customFilter(items, filteringObject) {
	let filteredItems = [];
	let isSearchingForAllItems = true;

	for (const filteringKey in filteringObject) {
		if (!isSearchingForAllItems) items = filteredItems;

		const neededValues = _getType(filteringObject[filteringKey]) === 'string'
			? [filteringObject[filteringKey]] : filteringObject[filteringKey];

		filteredItems = items.filter(item => _isIsset(item[filteringKey], neededValues))
		isSearchingForAllItems = false;
	}
	console.log(filteredItems);
}

/**
 *
 * @param checkingValues
 * @param neededValues
 * @returns {boolean}
 * @private
 */
function _isIsset(checkingValues, neededValues) {
	switch (_getType(checkingValues)) {
		case 'string':
			for (const value of neededValues)
				if (checkingValues === value)
					return true;
		break;

		case 'array':
			if (_isIncludes(checkingValues, neededValues)) return true;
		break;

		case 'object':
			// object transformation to array strings
			checkingValues = JSON.stringify(checkingValues).slice(0, -1).slice(1).split(',');
			neededValues = JSON.stringify(neededValues).slice(0, -1).slice(1).split(',');

			if (_isIncludes(checkingValues, neededValues)) return true;
		break;
	}
	return false;
}

/**
 *
 * @param val
 * @returns {string}
 * @private
 */
function _getType(val) {
	if (typeof val === 'undefined') return 'undefined';
	if (typeof val === 'object' && !val) return 'null';
	return ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

/**
 *
 * @param checkingValues
 * @param neededValues
 * @returns {boolean}
 * @private
 */
function _isIncludes(checkingValues, neededValues) {
	for (const value of neededValues) {
		if (checkingValues.includes(value))
			return true;
	}
	return false
}

customFilter(data, filteringObject);