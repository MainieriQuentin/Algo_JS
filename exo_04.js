function compare(nums) {
  let count = 1;
  let maxnums = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums.length) {
      count++;
      maxnums = nums[i];
    }
  }
  return count;
}

const nums = [3, 7, 8, 3, 6, 1];
const nums2 = [1, 4, 5, 8];
console.log(compare(nums));
console.log(compare(nums2));
