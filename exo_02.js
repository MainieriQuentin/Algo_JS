function compare(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    canSee = true;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        canSee = false;
        break;
      }
    }
    if (canSee == true) {
      count++;
    }
  }
  return count;
}

const nums = [3, 7, 8, 3, 6, 1];
const nums2 = [1, 4, 5, 8];
console.log(compare(nums));
console.log(compare(nums2));
