function solution(s) {
    let temp = s;
    let zero_cnt = 0;
    let action_cnt = 0
    while (temp !== "1") {
        action_cnt++
        let zero_arr = [...temp].filter((item) => item === "0")
        zero_cnt = zero_cnt + zero_arr.length
        let now_length = temp.length - zero_arr.length
        temp = now_length.toString(2)
    }
    var answer = [action_cnt, zero_cnt];
    return answer;
}