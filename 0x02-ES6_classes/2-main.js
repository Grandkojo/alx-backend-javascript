import HolbertonCourse from './2-hbtn_course';

const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
console.log(c1.name);
c1.name = 'Python 101';
console.log(c1);

try {
  c1.name = 12;
} catch (error) {
  console.log(error);
}

try {
  /* eslint-disable no-unused-vars */
  const c2 = new HolbertonCourse('ES6', '1', ['Bob', 'Jane']);
} catch (error) {
  console.log(error);
}
