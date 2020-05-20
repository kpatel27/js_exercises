var moveZeroes = function(nums) {
  let i = 0;

  while(i < nums.length){
    if(nums[i] === 0){
      nums.splice(i,1);
      nums.push(0);
    } else {
      i += 1;
    }
  }

  return nums;
};


console.log(moveZeroes([0,0,1,0,3,12]))
