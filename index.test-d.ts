import {expectType} from 'tsd-check';
import pAny, {AggregateError} from '.';
import {PCancelable} from 'p-cancelable';

expectType<PCancelable<number>>(pAny([Promise.resolve(1)]));
expectType<PCancelable<number | string>>(
	pAny<number | string>([Promise.resolve(1), Promise.resolve('hi')])
);

expectType<PCancelable<number>>(
	pAny([Promise.resolve(1)], {
		filter(number) {
			expectType<number>(number);
			return true;
		}
	})
);

expectType<typeof AggregateError>(AggregateError);
