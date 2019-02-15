const isNumber = (value: string) => isNaN(Number(value)) === false;

export default function enumToArray(e) {
  return Object.keys(e)
    .filter(isNumber)
    .map((key) => e[key]);
}
