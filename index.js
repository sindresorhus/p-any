'use strict';
const pSome = require('p-some');
const PCancelable = require('p-cancelable');

const pAny = (iterable, options) => {
	const anyCancelable = pSome(iterable, {...options, count: 1});

	return new PCancelable((resolve, reject, onCancel) => {
		(async () => {
			try {
				const [value] = await anyCancelable;
				resolve(value);
			} catch (error) {
				reject(error);
			}
		})();

		onCancel(() => anyCancelable.cancel());
	});
};

module.exports = pAny;
module.exports.default = pAny;

module.exports.AggregateError = pSome.AggregateError;
