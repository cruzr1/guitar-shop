export function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : '';
}

export function generateRandomValue(min: number, max: number, numAfterDigit = 0) {
  return +((Math.random() * (max - min)) + min).toFixed(numAfterDigit);
}

export function getRandomItem<T>(items: T[]):T {
  return items[generateRandomValue(0, items.length - 1)];
}

export function generateRandomDate(
  from = new Date(2023, 0, 1),
  to = new Date(2024, 0, 1),
) {
  return new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
}
