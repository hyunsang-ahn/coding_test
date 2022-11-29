function solution(arr) {
    var answer = 1;
    while (true) {
        let cnt = 0
        arr.map((c) => {
            if (answer % c === 0) {
                cnt++
            } else {
                answer++
            }
        })
        if (cnt === arr.length) {
            break
        }
    }
    return answer;
}