import {expectType} from 'tsd';
import pAny, {AggregateError, CancelablePromise} from './index.js';

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

// TODO: TypeScript bug.
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const aggregateError = new AggregateError([new Error('error')]);
expectType<AggregateError>(aggregateError);
