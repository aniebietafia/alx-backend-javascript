export default function createInt8TypedArray(length, position, value) {
  const arrayBuffer = new ArrayBuffer(length);
  const view = new DataView(arrayBuffer);

  if (position > length - 1) {
    throw new Error('Position outside range');
  }

  view.setInt8(position, value);

  return view;
}
