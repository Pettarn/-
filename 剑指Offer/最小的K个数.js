// 快排

function GetLeastNumbers_Solution(input, k)
{

    if (input.length < k) {
        return false
    }
    // write code here
    function quickSort (arr) {
        if (arr.length === 0) {
            return []
        }

        let left = []
        let right = []
        
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] <= arr[0]) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
        return quickSort(left).concat(arr[0], quickSort(right))
    }

    let result = []
    result = quickSort(input).slice(0, k)
    return result
}

console.log(GetLeastNumbers_Solution([1,2,3,4,5,6,7,8], 5)) 