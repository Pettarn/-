function minNumberInRotateArray(rotateArray)
{
    let inputArray = rotateArray
    let len = inputArray.length
    let turnNumb = inputArray[0]

    for (let i = 0; i < len; i++) {
        if (inputArray[i] >= turnNumb) {
            turnNumb = inputArray[i]
        } else {
            turnNumb = inputArray[i]
            break
        }
    }

    return turnNumb
}