function solution(s) {
    var answer = -1;

    let temp_arr = s.split("")
    let res_arr = []
    temp_arr.map((c) => {
        if (res_arr.length === 0) {
            res_arr.push(c)
        } else {
            if (res_arr[res_arr.length - 1] === c) {
                res_arr.pop()
            } else {
                res_arr.push(c)
            }
        }
    })
    if (res_arr.length > 0) {
        return answer = 0;

    } else {
        return answer = 1;

    }

}