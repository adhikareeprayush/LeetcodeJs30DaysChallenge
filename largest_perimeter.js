var largestPerimeter = function (nums) {
    var polygon = [];
    //sort the array in descending order
    nums.sort((a, b) => b - a);

    //iterate through the array and increase the no. of sides from 3 to nums.length and check if the sum of the sides is greater than any of the side
    for (var i = 0; i < nums.length - 2; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            for (var k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] > nums[k]) {
                    polygon.push(nums[i] + nums[j] + nums[k]);
                }
            }
        }
    }
    //return the maximum value from the array
    return Math.max(...polygon);


};

[62, 23, 3, 2, 1]