"use strict";

// #1 
// 1920. Build Array from Permutation
// https://leetcode.com/problems/build-array-from-permutation/description/

// let nums = [0,2,1,5,3,4];
// let nums2 = [5,0,1,2,3,4];

// var buildArray = function(nums) {
//     let ans = Array(nums.length).fill(0);
//     for (let i = 0; i < nums.length; i++){
//         ans.splice(i, 1 ,nums[nums[i]]);
//     }
//     return ans;  
// };

// console.log(buildArray(nums));
// console.log(buildArray(nums2));


// #2 
// 1913. Maximum Product Difference Between Two Pairs
// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/

// let nums1 = [5,6,2,7,4];
// let nums2= [4,2,5,9,7,4,8];

// let maxProductDifference = function(nums) {
//     let a = 0;
//     let b = 0;
//     let c = 100000;
//     let d = 100000;

//     for (let i = 0; i < nums.length; i++){
//         if ( nums[i] >= a){
//             b = a;
//             a = nums[i];
//         } else { if (b < nums[i] && nums[i] < a){
//             b = nums[i];
//         }}
//         if (nums[i] <= d){
//             c = d;
//             d = nums[i];
//         } else {if (c > nums[i] && nums[i] > d) {
//             c = nums[i];
//         }}
//     }
//     return (a * b) - (d * c);
// };

// console.log(maxProductDifference(nums1));
// console.log(maxProductDifference(nums2));


// #3
// 1909. Remove One Element to Make the Array Strictly Increasing
// https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/description/

// let nums1 = [1,2,10,5,7];
// let nums2 = [2,3,1,2];
// let nums3 = [1,1,1];

// let canBeIncreasing = function(nums) {
//     nums.unshift(0);
//     nums.push(1001);
//     if (nums.length == 4){
//         return true;
//     }
//     for (let i = 0; i < nums.length-1; i++){
//         if (nums[i] > nums[i+1] && nums[i+1] > nums[i-1]){
//             nums.splice(i, 1);
//             break;
//         }
//         if (nums[i] < nums[i+1] && nums[i] < nums[i-1]){
//             nums.splice(i, 1);
//             break;
//         }  
//     };
//     for (let i = 0; i < nums.length-1; i++){
//         if (nums[i] >= nums[i+1]){
//             return false;
//         }
//     };
//     return true;
// };

// console.log(canBeIncreasing(nums1));
// console.log(canBeIncreasing(nums2));
// console.log(canBeIncreasing(nums3));


// #4
// 231. Power of Two
// https://leetcode.com/problems/power-of-two/description/?envType=daily-question&envId=2024-02-19

// let n1 = 1;
// let n2 = 16;
// let n3 = 3;

// var isPowerOfTwo = function(n) {
//     if (n == 0)
//         return false;
//     while (n != 1) {
//         if (n%2 != 0)
//             return false;
//         n = n/2;
//     }
//     return true;
// };

// console.log(isPowerOfTwo(n1));
// console.log(isPowerOfTwo(n2));
// console.log(isPowerOfTwo(n3));


// #5
// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// let nums1 = [1,1,2];
// let nums2 = [0,0,1,1,1,2,2,3,3,4];

// var removeDuplicates = function(nums) {
//     for (let i = 0; i < nums.length-1; i++){
//         if (nums[i] === nums[i+1]){
//             nums.splice(i+1, 1);
//             i--;
//         }
//     } 
//     return nums;
// };

// let answer1 = removeDuplicates(nums1);
// let answer2 = removeDuplicates(nums2);
// console.log(answer1.length, answer2);        
// console.log(answer2.length, answer2);


// #6
// 2032. Two Out of Three
// https://leetcode.com/problems/two-out-of-three/description/

// let nums1 = [3, 1]; 
// let nums2 = [2, 3];
// let nums3 = [1, 2];

// var twoOutOfThree = function(nums1, nums2, nums3) {
//     let mySet = new Set([...nums1, ...nums2, ...nums3]);
//     let answ = []
//     for (let value of mySet) {
//         if (nums1.includes(value) && nums2.includes(value)){
//             answ.push(value);
//         } else if (nums1.includes(value) && nums3.includes(value)){
//             answ.push(value);
//         } else if (nums2.includes(value) && nums3.includes(value)){
//             answ.push(value);
//         }
//     }
//     return answ;
// };

// console.log(twoOutOfThree(nums1, nums2, nums3));


// #7
// 1365. How Many Numbers Are Smaller Than the Current Number
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/

// let nums = [8,1,2,2,3]
// var smallerNumbersThanCurrent = function(nums) {
//     let answ = [];
//     for (let i = 0; i < nums.length; i++){
//         let count = 0;
//         for (let j = 0; j < nums.length; j++){
//             if (nums[i] > nums[j])
//             count++;
//         }
//         answ.push(count);
//     }
//     return answ;
// };

// console.log(smallerNumbersThanCurrent(nums));


// #8
// 1929. Concatenation of Array
// https://leetcode.com/problems/concatenation-of-array/description/

// let nums = [1,2,1];
// var getConcatenation = function(nums) {
//     let ans = nums.slice();
//     for (let i = 0; i < nums.length; i++){
//         ans.push(nums[i]);
//     }
//     return ans;
// };

// console.log(getConcatenation(nums));

// #9
// 1512. Number of Good Pairs
// https://leetcode.com/problems/number-of-good-pairs/description/

// let nums1 = [1,2,3,1,1,3];
// let nums2 = [1,1,1,1];
// let nums3 = [1,2,3];

// var numIdenticalPairs = function(nums) {
//     let count = 0;
//     nums.forEach(function(element, index) {
//         for (let i = index+1; i < nums.length; i++){
//             if (element == nums[i]) {
//             count++;
//             }   
//         }
//         return count;
//     });
//     return count;
// };

// console.log(numIdenticalPairs(nums1));
// console.log(numIdenticalPairs(nums2));
// console.log(numIdenticalPairs(nums3));

// #10
// 2011. Final Value of Variable After Performing Operations
// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/

// let operations = ["X++","++X","--X","X--"];
// var finalValueAfterOperations = function(operations) {
//     let x = 0;
//     operations.forEach(element => {
//         if (element.includes('+')){
//             x++;
//         } else x--;
//     });
//     return x;
// };

// console.log(finalValueAfterOperations(operations));


// #11
// 1470. Shuffle the Array
// https://leetcode.com/problems/shuffle-the-array/description/

// let nums1 = [2,5,1,3,4,7]; // [2,3,5,4,1,7] 
// let n1 = 3;
// let nums2 = [1,2,3,4,4,3,2,1]; // [1,4,2,3,3,2,4,1]
// let n2 = 4;
// var shuffle = function(nums, n) {
//     let answ = [];
//     for (let i = 0; i < nums.length-n; i++){
//         answ.push(nums[i]);
//         answ.push(nums[i+n]);
//     }
//     return answ;
// };

// console.log(shuffle(nums1, n1));
// console.log(shuffle(nums2, n2));


