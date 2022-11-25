function solution(n, words) {
    var answer = [];
    let temp_arr = []
    for (let i = 0; i < words.length; i++) {
        if (i > 0) {
            if (words[i - 1].substr(-1) !== words[i][0]) {
                const idx = i + 1
                //번호
                const num1 = Math.ceil(idx / n)

                //차례
                const num2 = idx % n === 0 ? n : idx % n
                return [num2, num1]
            }
        }
        if (!temp_arr.includes(words[i])) {
            temp_arr.push(words[i])
        } else {
            //있다고 하면...
            //중복 단어의 위치는 i 니까
            const idx = i + 1
            //번호
            const num1 = Math.ceil(idx / n)
            //차례
            const num2 = idx % n === 0 ? n : idx % n
            return [num2, num1]
        }
    }





    return [0, 0];
}