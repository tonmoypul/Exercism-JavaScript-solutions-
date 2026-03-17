export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven (t) {
  return EXPECTED_MINUTES_IN_OVEN - t;
}

export function preparationTimeInMinutes (layers) {
  return layers * 2;
}

export function totalTimeInMinutes (layers, t) {
  let total = preparationTimeInMinutes(layers) + t;
  return total;
}

console.log(totalTimeInMinutes(3,20));