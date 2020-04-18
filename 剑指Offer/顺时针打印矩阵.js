function core(n)
{
    let result = []
    let count = 0
    for (let i = 0; i < n; i++) {
        result[i] = []
        for (let j = 0; j < n; j++) {
            result[i][j] = 0
        }
    }

    search(0, 0, 'right')


    function search (i, j, direction) {
        if (result[i][j] !== undefined && result[i][j] === 0) {
            result[i][j] = ++count
        } else {
            return
        }
        if (direction === 'right') {
            if (result[i] && result[i][j+1] === 0) {
                search(i, j+1, 'right')
            } else {
                search(i+1, j, 'down')
            }
        } else if (direction === 'down') {
            if (result[i+1] && result[i+1][j] === 0) {
                search(i+1, j, 'down')
            } else {
                search(i, j-1, 'left')    
            }
        } else if (direction === 'left') {
            if (result[i] && result[i][j-1] === 0) {
                search(i, j-1, 'left')
            } else {
                search(i-1, j, 'up')
            }
        } else if (direction === 'up') {
            if (result[i-1] && result[i-1][j] === 0) {
                search(i-1, j, 'up')
            } else {
                search(i, j+1, 'right')
            }
        }
    }

    return result
}

console.log(core(4))