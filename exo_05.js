const nums = [10, 15, 3, 7];
const nums2 = [1, 8, 10, 21];
const k = 17;
const l = 19;

const exo05 = (nums, k) => nums.filter((e) => nums.includes(k - e)).length > 1;

console.log(exo05(nums, k));
console.log(exo05(nums2, l));
