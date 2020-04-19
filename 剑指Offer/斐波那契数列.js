function Fibonacci(n)
{
    let dp = []
    dp[0] = 0
    dp[1] = 1
    dp[2] = 1
    if (n <= 2) {
        return dp[n]
    }
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
}

console.log(Fibonacci(4))