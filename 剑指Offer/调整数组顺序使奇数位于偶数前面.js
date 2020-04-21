function reOrderArray(array)
{
    // write code here
    // 判断是偶数吗？
    function isOu (numb) {
        if (numb % 2 === 0) {
            return true
        }
        return false
    }
    let list = array
    let leftList = []
    let rightList = []
    for (let i = 0; i < list.length; i++) {
        if (isOu(list[i])) {
            rightList.push(list[i])
        } else {
            leftList.push(list[i])
        }
    }

    return leftList.concat(rightList)
}