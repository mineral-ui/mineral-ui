/* @flow */
let currentId = 0;

export function generateId() {
  currentId += 1;
  return currentId.toString();
}

export function resetId() {
  currentId = 0;
}
