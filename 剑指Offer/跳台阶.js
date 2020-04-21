function jumpFloor(number)
{
    let n = number
    let dp = []
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    dp[3] = 3
    for (let i = 4; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }

    console.log(dp[3])
    console.log(dp[4])

    return dp[n]
}

let n = jumpFloor(10)

// console.log(n)