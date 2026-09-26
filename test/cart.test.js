import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lineTotal, cartTotal, applyDiscount } from '../src/cart.js';

test('lineTotal', () => assert.equal(lineTotal({ price: 5, qty: 3 }), 15));
test('cartTotal', () => assert.equal(cartTotal([{ price: 5, qty: 2 }, { price: 1, qty: 4 }]), 14));
test('applyDiscount', () => assert.equal(applyDiscount(200, 10), 180));
test('applyDiscount range', () => assert.throws(() => applyDiscount(10, 120), RangeError));

import { shippingCost } from '../src/cart.js';
test('shippingCost: free from 50 inclusive', () => {
  assert.equal(shippingCost(49.99), 5);
  assert.equal(shippingCost(50), 0);
  assert.equal(shippingCost(120), 0);
});
