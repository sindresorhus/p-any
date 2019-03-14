import PCancelable from 'p-cancelable';
import {Omit} from 'type-fest';
import {Options as PSomeOptions} from 'p-some';

export type Value<ValueType> = ValueType | PromiseLike<ValueType>;
export type Options<ValueType> = Omit<PSomeOptions<ValueType>, 'count'>;
export type CancelablePromise<ValueType> = PCancelable<ValueType>;

/**
Wait for any promise to be fulfilled.

@param input - An `Iterable` collection of promises/values to wait for.
@returns A `Promise` that is fulfilled when any promise from `input` is fulfilled. If all the input promises reject, it will reject with an [`AggregateError`](https://github.com/sindresorhus/aggregate-error) error.
 */
export default function pAny<ValueType>(
	input: Iterable<Value<ValueType>>,
	options?: Options<ValueType>
): CancelablePromise<ValueType>;

export {default as AggregateError} from 'p-some';
