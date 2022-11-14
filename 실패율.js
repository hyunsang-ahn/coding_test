

function solution(N, stages) {
    var answer = [];
    var temp_arr = []

    for (var i = 1; i < N + 1; i++) {
        //단계는 i입니다
        let stage = i
        //그 단계에서 플레이 했던 유저 즉 모수이다.
        let target_user_arr = stages.filter((c) => c >= i)
        //그 단계에서 걸려 있는 사람
        let target_failed_user_arr = stages.filter((c) => c === i)
        let temp_arr_1 = []
        temp_arr_1.push(i * 1)
        temp_arr_1.push((target_failed_user_arr.length / target_user_arr.length) * 1)

        temp_arr.push(temp_arr_1)


    }
    let res_arr = []
    temp_arr.sort(function (a, b) {
        return b[1] - a[1];
    });
    console.log(temp_arr)
    temp_arr.map(c => {
        res_arr.push(c[0])
    })
    console.log(res_arr)














    answer = res_arr


    return answer;
}