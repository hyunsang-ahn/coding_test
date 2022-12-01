function solution(n, a, b) {
    var answer = 1;
    var a_num = a
    var b_num = b
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    while (true) {

        if (a_num > b_num) {
            //a가 더 클때
            if (b_num % 2 === 0) {
                if (a_num === b_num + 1) {
                    //1개 차이나면 바로 끗
                    break
                } else {
                    a_num = Math.round(a_num / 2)
                    b_num = Math.round(b_num / 2)
                    answer++
                }
            } else {
                a_num = Math.round(a_num / 2)
                b_num = Math.round(b_num / 2)
                answer++
            }




        } else {
            //b가 더 클때

            if (b_num % 2 === 0) {
                //b가 더 클때, b를 2로 나누면 바로 0이 아니다면 두개가 붙은 숫자라도 같은 라운드에 붙지않는다.
                if (a_num + 1 === b_num) {
                    //1개 차이나면 바로 끗
                    break
                } else {
                    a_num = Math.round(a_num / 2)
                    b_num = Math.round(b_num / 2)
                    answer++
                }
            } else {

                a_num = Math.round(a_num / 2)
                b_num = Math.round(b_num / 2)
                answer++
            }



        }
    }

    return answer;
}