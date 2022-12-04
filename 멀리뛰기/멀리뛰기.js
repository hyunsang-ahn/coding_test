function solution(n) {
    var answer = 0;




    if (n === 1) {

        return 1 % 1234567

    } else if (n === 2) {
        return 2 % 1234567
    } else {
        let arr = [1, 2]
        for (let i = 2; i < n; i++) {
            num = (arr[i - 2] + arr[i - 1]) % 1234567;
            arr.push(num)
        }
        console.log(arr)
        return arr[n - 1]
    }


}




solution(7)