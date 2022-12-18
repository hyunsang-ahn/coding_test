function solution(arr1, arr2) {
    let res_arr = []
    for (let i = 0; i < arr1.length; i++) {
      let temp = []
      for (let j = 0; j < arr2[0].length; j++) {
        console.log(j)
        let cnt = 0
        for (let k = 0; k < arr2.length; k++) {
          let temp_num = arr1[i][k] * arr2[k][j]
          cnt += temp_num
        }
        temp.push(cnt)
      }
      res_arr.push(temp)
    }
    return res_arr
  }
  