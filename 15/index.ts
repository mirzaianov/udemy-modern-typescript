const departments: string[] = ['dev', 'design', 'marketing'];

const department = departments[0];

// departments.push(5);
const report = departments
  .filter((d: string) => d !== 'dev')
  .map((d: string) => `${d} - done`);

const nums: number[][] = [
  [3, 5, 6],
  [7, 8, 9],
];

const [first] = report;
console.log(first);
