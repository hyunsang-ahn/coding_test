function solution(people, limit) {
    var answer = 0
    var res = 0
    let sIdx = 0
    let eIdx = people.length - 1
    people.sort(function (a, b) {
        return a - b
    })
    while (sIdx <= eIdx) {
        if (people[sIdx] + people[eIdx] <= limit) {
            sIdx++
        }
        eIdx--
        res++
    }
    console.log(res)


    return res;
}