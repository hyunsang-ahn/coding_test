function solution(n, left, right) {
  let temp_arr = []
  for(let i = left; i <= right; i++){
    // console.log('i================',i)


    // console.log('Number.parseInt(a / n)===============',Number.parseInt(i / n))

    // console.log('a % n================',i % n)


    // console.log('aMath.max(Number.parseInt(a / n), a % n) + 1================',Math.max(Number.parseInt(i / n), i % n) + 1 % n)
    temp_arr.push(Math.max(Number.parseInt(i / n), i % n) + 1);

    
  }
  // console.log('temp_arr===============',temp_arr)

  return temp_arr
}

solution(3, 2, 5)
