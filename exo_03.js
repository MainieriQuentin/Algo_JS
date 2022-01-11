function compare(nums, k) {
  // Je boucle tous mes éléments
  for (let i = 0; i < nums.length - 1; i++) {
    // Diff = La différence pour obetnir le résultat voulu
    let diff = k - nums[i];
    // Condition si j'ai la diff donc true
    if (nums.includes(diff)) {
      return true;
    }
  }
  // Si pas diff c'est false
  return false;
}

const nums = [10, 15, 3, 7];
const k = 17;
const l = 19;

console.log(compare(nums, k));
console.log(compare(nums, l));
