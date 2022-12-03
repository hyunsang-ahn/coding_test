function solution(n) {
    let target_num = n
    let ans = 0


    while (true) {
        if (parseInt(target_num % 2) === 0) {
            //짝수면 그대로 나눈다.
            target_num = (parseInt(target_num / 2))
        } else {
            //아니면 - 1즉 앒쪽으로 쩜프
            target_num = (parseInt((target_num - 1)))
            ans++
        }


        if (target_num === 0) {
            break
        }


    }




    return ans;
}


