function solution(brown, yellow) {
    let y_arr = []
    //노랑의 약수를 찾는다...

    for (let i = 1; i <= yellow; i++) {
        if (yellow % i === 0) {
            y_arr.push(i)
        }
    }
    //코드가 개판이긴한데...
    //일단 yellow의 약수를 기준으로 본인을 감쌀수 있는 값을 찾는다..
    // 그 값중에 가로가 무조건 더 긴것으로 찾고..
    //결과적으로 그 값은 yellow가로 세로 보다 2씩 큰놈임..
    //리턴값은 res_ge, res_se
    //ga 는 가로 se 는 세로
    let res_ga;
    let res_se;
    for (k of y_arr) {
        let yellow_ga = k
        let yellow_se = yellow / k
        if ((yellow_ga + 2) * (yellow_se + 2) <= brown + yellow) {
            if (yellow_ga >= yellow_se) {
                console.log('yellow_ga===============', yellow_ga)
                console.log('yeloow_se===============', yellow_se)
                res_ga = yellow_ga + 2
                res_se = yellow_se + 2

            }


        }
    }


    var answer = [res_ga, res_se];
    return answer;
}