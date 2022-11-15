function solution(s) {
    let temp_arr = s.split(" ")
    temp_arr.sort(function (a, b) {
        return a - b
    })
    let res_str = ''
    res_str = res_str + temp_arr[0] + " " + temp_arr[temp_arr.length - 1]
    console.log(res_str)
    var answer = `${res_str}`;
    return answer;
}