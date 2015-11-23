import sinon from 'sinon';
import jsdom from 'mocha-jsdom';

import Cookies from './../src/Cookies';

let should = require('chai').should();

describe('Cookies', function() {

	jsdom();

	describe('#get()', function () {

		it('should return the value of the given key, or an empty string if the key does not exist', function () {
			Cookies.get('moniker').should.equal('');
			document.cookie = 'dummy=text';
			document.cookie = 'moniker=jmag';
			document.cookie = 'it-is=a-trap';
			Cookies.get('moniker').should.equal('jmag');
			Cookies.get('dummy').should.equal('text');
		});

	});

	describe('#set()', function () {

		it('should set the given value to the given key', function () {
			Cookies.get('setter').should.equal('');
			Cookies.set('setter', 'works!');
			Cookies.get('setter').should.equal('works!');

			Cookies.get('key with spaces').should.equal('');
			Cookies.set('key with spaces', 'should also work');
			Cookies.get('key with spaces').should.equal('should also work');
		});

	});

	describe('#delete()', function () {

		it('should clear the cookie of the given key', function () {
			Cookies.get('it-is').should.equal('a-trap');
			Cookies.delete('it-is');
			Cookies.get('it-is').should.equal('');

			Cookies.get('key with spaces').should.equal('should also work');
			Cookies.delete('key with spaces');
			Cookies.get('key with spaces').should.equal('');
		});

	});
});