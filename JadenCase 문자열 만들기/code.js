function solution(s) {
    let check_arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    let temp_arr = s.split(" ")
    let res_arr = []
    let res = ''
    temp_arr.forEach((c) => {
        if (check_arr.includes(c[0])) {
            //아니라면 숫자가 맞는거임
            let converted_str = c.toLowerCase()
            // res_arr.push(converted_str)
            if (res === '') {
                res = converted_str
            } else {
                res = res + " " + converted_str

            }
        } else if (c === "") {
            //공백의 경우
            if (res === '') {
                res = " "
            } else {
                res = res + " "
            }
        }

        else {
            //아니면 첫자리는 대문자 나머지는 소문자
            let converted_str_first = c[0].toUpperCase()
            let converted_str_second = c.substr(1).toLowerCase()

            let converted_str = converted_str_first + converted_str_second
            // res_arr.push(converted_str)
            if (res === '') {
                res = converted_str
            } else {
                res = res + " " + converted_str

            }

        }
    })
    // var answer = res_arr.join(" ")
    return res;
}