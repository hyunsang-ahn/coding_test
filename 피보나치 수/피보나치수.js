function solution(n) {
    var answer = 0;
    let temp_arr = []
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            temp_arr.push(0)
        } else if (i === 1) {
            temp_arr.push(1)

        } else {
            const temp_num = (temp_arr[i - 2] + temp_arr[i - 1]) % 1234567
            temp_arr.push(temp_num)
        }
    }
    let res = temp_arr[n]
    console.log('res====================', res)
    return res;
}