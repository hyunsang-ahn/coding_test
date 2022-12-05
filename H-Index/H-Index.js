
function solution(citations) {
    console.log(citations)
    let cnt = 0
    let ans = 0
    while (true) {
        let length = citations.length
        let new_arr = []
        for (let i = 0; i < length; i++) {
            if (citations[i] > cnt) {
                new_arr.push(citations[i])
            }
        }
        if (new_arr.length < cnt) {
            break
        }


        cnt++
        ans = new_arr.length
        // console.log('new_arr=================', new_arr)
        // console.log('cnt=================', cnt)
        // console.log('new_arr.length=================', new_arr.length)

    }
    return ans;
}


