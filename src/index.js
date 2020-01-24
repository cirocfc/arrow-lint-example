// ! Does not get notified by WHERE rule
export const a = () => {
  console.log('a');
};

// * Gets notified by WHERE rule
export default () => {
  console.log('a');
};

// * OK according WHERE rule
export function b() {
  console.log('b');
}
