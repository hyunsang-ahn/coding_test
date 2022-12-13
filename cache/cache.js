function solution(cacheSize, cities) {
    let arr = []
    // for (let i = 0; i < cacheSize; i++) {
    //     arr.push(0)
    // }
    // console.log(arr)
    if (cacheSize === 0) {
        return cities.length * 5;
    }
    let cnt = 0
    for (city of cities) {
        if (arr.length !== cacheSize) {
            if (arr.length === 0) {
                arr.push(city.toLowerCase())
                cnt = cnt + 5

            } else if (arr[0] === city) {
                //첫번째가 같다면 굳이 추가 안해줘도 된다.
                cnt = cnt + 1


            } else {

                if (arr.includes(city.toLowerCase())) {
                    const idx = arr.findIndex((el) => el === city.toLowerCase())
                    arr.splice(idx, 1)
                    arr.unshift(city.toLowerCase())

                    cnt = cnt + 1

                } else {

                    arr.unshift(city.toLowerCase())
                    cnt = cnt + 5
                }
            }
        } else {


            //cache size이라면..
            if (arr.includes(city.toLowerCase())) {
                //캐시에 저장되어 있다면
                //저장된 놈을 제일 앞으로 이동시킨다.
                // let idx = arr.indexOf(city.toLowerCase())
                // console.log('idx=============', idx)
                // let new_arr;
                // if (idx !== 0) {
                //     if (idx === arr.length) {
                //         //리스트 마지막 요소라면 
                //         let temp_arr_1 = arr.splice(0, idx)
                //         new_arr = [...temp_arr_1,]

                //     } else {

                //         let temp_arr_1 = arr.splice(0, idx)
                //         let temp_arr_2 = arr.splice(idx, arr.length)
                //         new_arr = [...temp_arr_1, ...temp_arr_2]
                //     }
                // } else {
                //     new_arr = arr
                // }
                // new_arr = arr
                // new_arr.pop()
                // new_arr.unshift(city.toLowerCase())
                // arr = new_arr
                // cnt = cnt + 1
                // console.log(city.toLowerCase())
                arr.pop(0)
                arr.unshift(city.toLowerCase())
                cnt = cnt + 1
            } else {
                arr.pop(0)
                arr.unshift(city.toLowerCase())
                cnt = cnt + 5

            }
        }


    }

    return cnt;
}



solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"])