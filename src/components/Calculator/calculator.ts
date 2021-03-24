import { writable } from 'svelte/store';

function evil(fn) {
  return new Function('return ' + fn)();
}

function calculator() {
	const { subscribe, set, update } = writable('');

	return {
		subscribe,
		one: () => update(n => n += '1'),
		two: () => update(n => n += '2'),
		three: () => update(n => n += '3'),
		four: () => update(n => n += '4'),
		five: () => update(n => n += '5'),
		six: () => update(n => n += '6'),
		seven: () => update(n => n += '7'),
		eight: () => update(n => n += '8'),
		nine: () => update(n => n += '9'),
		zero: () => update(n => n += '0'),
		dot: () => update(n => n += '.'),
		sum: () => update(n => n += '+'),
		sub: () => update(n => n += '-'),
		mul: () => update(n => n += '*'),
		div: () => update(n => n += '/'),
		fra: () => update(n => n += '%'),
    c: () => set(''),
		equal: () => update(n => n = evil(n)),
	};
}

export const result = calculator();