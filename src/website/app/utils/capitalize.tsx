/* @flow */
export default function capitalize(string: string) {
  return string && string.charAt(0).toUpperCase() + string.slice(1);
}
