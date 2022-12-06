function solution(cacheSize, cities) {
    let arr = []
    let cnt = 0


    if (cacheSize === 0) {
        //캐시 사이즈가 0일때는 그대로 5를 곱해서 리턴한다.
        return cities.length * 5
    } else {
        //0이 아닌경우에서

        for (city of cities) {
            if (arr.includes(city.toLowerCase())) {
                //arr 안에 city가 있는경우...
                console.log('city=================', city)
                const idx = arr.indexOf(city.toLowerCase())
                if (idx === 0) {
                    //0이면 아무것도 할일잉 없다...
                    //캐시 히트 
                    cnt = cnt + 1
                } else {
                    arr.splice(idx, 1)
                    arr.unshift(city.toLowerCase())
                    //기존에 있던것을 삭제하고 가장 앞으로 이동시킨다.
                    //캐시 히트 
                    cnt = cnt + 1
                }

            } else {
                //arr 안에 city가 없는경우
                //무조건 넣어야 하는대
                //이때 캐쉬 사이즈의 한계를 설정한다.
                if (arr.length < cacheSize) {
                    //캐쉬사이즈보다 작으면 일단 추가
                    arr.unshift(city.toLowerCase())
                    //캐시 미스 
                    cnt = cnt + 5
                } else {
                    //캐시시아즈보다 크거나 같으면
                    //가장 뒤에거가 삭제되고.. 
                    //추가된다.
                    arr.pop()
                    arr.unshift(city.toLowerCase())
                    //캐시 미스 
                    cnt = cnt + 5
                }

            }
            //포문 한번 돌때마다 arr 확인
            console.log('arr=================', arr)
            console.log('cnt=================', cnt)
        }
    }


    return cnt;
}



solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"])