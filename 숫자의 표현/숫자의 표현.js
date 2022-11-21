function solution(n) {
    var answer = 0;
    if (n === 1) {
        return 1;
    }
    for (let i = 1; i <= n; i++) {
        let temp_res = 0
        let temp_i = i
        while (temp_res <= n) {
            // console.log('temp_i=================',temp_i)
            // console.log('temp_res=================',temp_res)

            temp_res = temp_res + temp_i
            temp_i++
            if (temp_res === n) {
                answer++
            }
        }

        // console.log('answer=================',answer)
    }
    return answer;
}