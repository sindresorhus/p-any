'use strict';
const pSome = require('p-some');

module.exports = (iterable, filter) => pSome(iterable, {count: 1, filter}).then(values => values[0]);

module.exports.AggregateError = pSome.AggregateError;
