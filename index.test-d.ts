import {expectType} from 'tsd';
import pAny = require('.');
import {AggregateError, CancelablePromise} from '.';

expectType<CancelablePromise<number>>(pAny([Promise.resolve(1)]));
expectType<CancelablePromise<number | string>>(
	pAny<number | string>([Promise.resolve(1), Promise.resolve('hi')])
);

expectType<CancelablePromise<number>>(
	pAny([Promise.resolve(1)], {
		filter(number) {
			expectType<number>(number);
			return true;
		}
	})
);

const aggregateError = new AggregateError([new Error()]);
expectType<AggregateError>(aggregateError);
