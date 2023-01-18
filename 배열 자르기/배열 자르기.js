function solution(n, left, right) {
  let temp_arr = []
  for(let i=1; i<=n; i++){
    for(let k=1; k<=n; k++){
      let temp_arr2 = [i,k]
      let max_value = Math.max(...temp_arr2)
      temp_arr.push(max_value)
    }
  }
  console.log(temp_arr)
  let answer = temp_arr.slice(left, right+1)
  console.log(answer)

  return answer
}

solution(3, 2, 5)
