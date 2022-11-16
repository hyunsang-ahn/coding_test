function solution(A, B) {
    var answer = 0;
    A.sort(function (a, b) {
        return a - b
    })
    B.sort(function (a, b) {
        return b - a
    })
    let res = 0
    A.map((c, i) => {
        res = res + c * B[i]
    })


    return res;
}