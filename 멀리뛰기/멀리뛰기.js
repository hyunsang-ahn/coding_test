function solution(n) {
    var answer = 0;




    if (n === 1) {

        return 1

    } else if (n === 2) {
        return 2
    } else {
        let arr = [1, 2]
        for (let i = 2; i < n; i++) {
            let num = arr[i - 1] + arr[i - 2]
            arr.push(num)
        }

        return arr[n - 1]
    }


}




solution(7)