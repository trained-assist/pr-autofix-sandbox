// Tiny cart module — the smoke target. Smoke PRs break it on purpose.
export function lineTotal(item) {
  return item.price * item.qty;
}

export function cartTotal(items) {
  return items.reduce((sum, it) => sum + lineTotal(it), 0);
}

export function applyDiscount(total, percent) {
  if (percent < 0 || percent > 100) throw new RangeError('percent out of range');
  return Math.round(total * (100 - percent)) / 100;
}

// Free shipping from FREE_SHIPPING_FROM (inclusive), flat fee below it.
export const FREE_SHIPPING_FROM = 50;
export function shippingCost(total) {
  return total > FREE_SHIPPING_FROM ? 0 : 5;
}
