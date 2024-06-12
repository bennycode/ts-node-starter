export function printArray(array: number[]) {
  let index = 0;
  while (index < array.length) {
    console.log(array[index]);
    index++;
  }
  return array[index - 1];
}
