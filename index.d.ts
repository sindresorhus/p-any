import PCancelable from 'p-cancelable';
import {Options as PSomeOptions} from 'p-some';

export type Omit<RecordType, KeyType extends keyof RecordType> = Pick<
	RecordType,
	Exclude<keyof RecordType, KeyType>
>;
export type Value<T> = T | PromiseLike<T>;
export type Options<T> = Omit<PSomeOptions<T>, 'count'>;
export type CancelablePromise<ValueType> = PCancelable<ValueType>;

/**
 * Wait for any promise to be fulfilled.
 *
 * @param input - An `Iterable` collection of promises/values to wait for.
 * @returns A `Promise` that is fulfilled when any promise from `input` is fulfilled. If all the input promises reject, it will reject with an [`AggregateError`](https://github.com/sindresorhus/aggregate-error) error.
 */
export default function pAny<T>(
	input: Iterable<Value<T>>,
	options?: Options<T>
): CancelablePromise<T>;

export {default as AggregateError} from 'p-some';
