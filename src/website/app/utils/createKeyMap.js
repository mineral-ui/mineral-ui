/* @flow */
export default function createKeyMap(arr: Array<Object>, key: string) {
  return arr.reduce((acc, item) => {
    acc[item[key]] = item;
    return acc;
  }, {});
}
