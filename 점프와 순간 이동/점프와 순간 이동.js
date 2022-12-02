function solution(n) {
    let target_num = n
    var ans = 1;
    let tele = 2

    while (true) {
        if (target_num === 1) {
            break
        } else if (target_num === 1) {
            break
        }
        else if (target_num > tele) {
            tele = tele * 2

        } else {
            target_num = target_num - (tele / 2)
            ans++
        }
    }



    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return ans;
}