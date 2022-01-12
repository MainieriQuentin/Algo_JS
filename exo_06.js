function compare(nums) {
  let exo6Counter = 0;
  let result = 1;
  let highest = nums[nums.length - 1];
  for (let i = nums.length - 1; i >= 1; i--) {
    exo6Counter++;
    if (nums[i] > highest) {
      result++;
      highest = nums[i];
    }
  }
  return [result, exo6Counter];
}

const nums = [3, 7, 8, 3, 6, 1];
const nums2 = [1, 4, 5, 8];

console.log(compare(nums));
console.log(compare(nums2));
