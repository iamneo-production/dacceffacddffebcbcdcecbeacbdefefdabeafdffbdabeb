function Odd(...nums) {
    return nums.filter((num) => num % 2 === 1);
  }
  
  function Even(...nums) {
    return nums.filter((num) => num % 2 === 0);
  }
  
  function generateRandomList(n = 7) {
    const nums = [];
    for (let i = 0; i < n; i++) {
      nums.push(Math.floor(Math.random() * 100) + 1);
    }
    return nums;
  }
  
  export { Odd, Even, generateRandomList };