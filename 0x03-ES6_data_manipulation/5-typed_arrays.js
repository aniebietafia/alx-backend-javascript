export default function createInt8TypedArray(length, position, value) {
  let arrayBuffer = new ArrayBuffer(length);
  let view = new DataView(arrayBuffer, 0);

  if (position > length - 1) {
    throw new Error('Position outside range');
  }

  view.setInt8(position, value);

  return view;
}
