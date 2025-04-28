import { describe, it } from 'node:test';
import assert from 'node:assert';

import { sayHelloWorld, add } from '../src/index.ts';
import npmPackage from '../src/index.ts';

describe('NPM Packageのテスト', () => {
	it('npmパッケージの型がオブジェクト型であること', () => {
		assert.strictEqual(typeof npmPackage, 'object');
	});

	it('npmパッケージのkayが「sayHelloWorld」と「add」であること', () => {
		assert.deepStrictEqual(Object.keys(npmPackage), ['sayHelloWorld', 'add']);
	});
});

describe('sayHelloWorld関数のテスト', () => {
	it('sayHelloWorldの型が関数型であること', () => {
		assert.strictEqual(typeof sayHelloWorld, 'function');
	});

	it('sayHelloWorld関数を実行すると、「Hello World」という文字が返ってくること', () => {
		const expected = 'Hello World';
		const actual = sayHelloWorld();
		assert.equal(actual, expected);
	});
});

describe('add関数のテスト', () => {
	it('addの型が関数型であること', () => {
		assert.strictEqual(typeof add, 'function');
	});

	it('add関数に数値を渡すと、足し算した結果が返ってくること', () => {
		const actual = add(1, 2);
		assert.equal(actual, 3);
	});
});
