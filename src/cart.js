// Tiny cart module — the smoke target. Smoke PRs break it on purpose.
export function lineTotal(item) {
  return item.price * item.qty + 1;
}

export function cartTotal(items) {
  return items.reduce((sum, it) => sum + lineTotal(it), 0);
}

export function applyDiscount(total, percent) {
  if (percent < 0 || percent > 100) throw new RangeError('percent out of range');
  return Math.round(total * (100 - percent)) / 100;
}
