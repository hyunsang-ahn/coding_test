function solution(n, left, right) {
    let res_arr = []
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      //첫번째의 경우
      let temp_arr = []
      for (let k = 1; k <= n; k++) {
        temp_arr.push(k)
      }
      res_arr.push(temp_arr)
    } else {
        //i가 2 이상인경우 2면 2개 3이면 3개 씩 넣는다..
        let temp_cnt = i
        let temp_arr2 = []

        while(temp_arr2.length !== n){
            if(temp_cnt === i){
                //2이며ㅑㄴ 2개..
                for(let j=1; j<= temp_cnt; j++){

                    temp_arr2.push(temp_cnt)
                }
                temp_cnt = temp_cnt +1

            }else{
                temp_arr2.push(temp_cnt)
                temp_cnt = temp_cnt +1

            }
        }
        res_arr.push(temp_arr2)

    }
  }
  console.log('res_arr=====================',res_arr)
  //res_arr를 한줄로 만들어 주는 작업 진행
  let result_arr= []
  res_arr.map((c,i)=>{
    c.map((d,k)=>{
        result_arr.push(d)
    })
  })
  console.log('result_arr=====================',result_arr)




  var answer = result_arr.slice(left,right+1)
  console.log('answer=====================',answer)

  return answer
}

solution(3, 2, 5)
