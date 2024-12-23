# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The best case would be sorted on the first loop so O(n). The worst case would be O(n*n!) because it would go through every permutaion with a recursive swap so for an array length of n it would be n! and then checking if it was sorted is O(n). The expected complexity for randomly generated permutations would still be O(n⋅n!). This is because, on average, n!/2 permutations are needed to find the sorted array, and each permutation requires O(n) to check if it is sorted. Together, this results in O(n⋅n!). There could be repeats in permutations if generated randomly so checking if the array is sorted so the runtime could vary. The best case scenerio would also be O(n) which is sorted on the first try. However, there is no guarantee that the list will be sorted if permutations are generated randomly. The randomness introduces the possibility of infinite runtime, as the algorithm might never produce the sorted permutation.


Used geeksforgeeks for ideas on how to permutate the array. https://www.geeksforgeeks.org/different-ways-to-generate-permutations-of-an-array/ “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
