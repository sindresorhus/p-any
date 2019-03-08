import {expectType} from 'tsd-check';
import pAny, {AggregateError, CancelablePromise} from '.';

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

expectType<typeof AggregateError>(AggregateError);
