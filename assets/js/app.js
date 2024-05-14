function longestConsecutive() {
    const input = document.getElementById("numbers").value.trim();
    const numbers = input.split(",").map(num => parseInt(num.trim()));
  
    const longestSequence = findLongestConsecutiveSequence(numbers);
  
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<strong>Longest Consecutive Sequence Length:</strong> " + longestSequence;
  }
  
  function findLongestConsecutiveSequence(nums) {
    const numSet = new Set(nums);
    let longestSequence = 0;
  
    for (const num of numSet) {
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentSequence = 1;
  
        while (numSet.has(currentNum + 1)) {
          currentNum++;
          currentSequence++;
        }
  
        longestSequence = Math.max(longestSequence, currentSequence);
      }
    }
  
    return longestSequence;
  }
  