'use strict';
const pSome = require('p-some');
const PCancelable = require('p-cancelable');

const pAny = (iterable, opts) => {
	const anyCancelable = pSome(iterable, Object.assign({}, opts, {count: 1}));

	return new PCancelable((resolve, reject, onCancel) => {
		anyCancelable.then(([value]) => resolve(value), reject);

		onCancel(() => anyCancelable.cancel());
	});
};

module.exports = pAny;
module.exports.default = pAny;

module.exports.AggregateError = pSome.AggregateError;
