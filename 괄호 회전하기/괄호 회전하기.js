function solution(s) {
  var answer = -1
  let length = s.length
  let cnt = 0

  for (let i = 0; i < length; i++) {
    console.log(i)
    let new_str
    console.log(`s를 왼쪽으로 ${i}칸만큼 회전`)
    if (i === 0) {
      //그대로
      new_str = s
    } else {
      //1이상인경우...
      new_str = s.slice(i, length) + s.slice(0, i)
    }
    let new_arr = new_str.split('')
    while (true) {
        if(new_arr.length === 0){
            cnt++
            break
        }


      if (new_str[0] === ']' || new_str[0] === '}' || new_str[0] === ')') {
        //닫는 괄호들로 시작하면 절대 맞지 않는다...
        break
      } else {
        console.log(new_arr)
        if (new_arr[0] === '[') {
          //여는 태그라면 닫는태그가 바로 옆에 있어야함.
          if (new_arr[1] === ']') {
            new_arr = new_arr.slice(2, new_arr.length)

          } else {
            break
          }
        } else if (new_arr[0] === '{') {
          //여는 태그라면 닫는태그가 바로 옆에 있어야함.
          if (new_arr[1] === '}') {
            new_arr = new_arr.slice(2, new_arr.length)

          } else {
            break
          }
        } else if (new_arr[0] === '(') {
          //여는 태그라면 닫는태그가 바로 옆에 있어야함.
          if (new_arr[1] === ')') {
            new_arr = new_arr.slice(2, new_arr.length)

          } else {
            break
          }
        }
      }
    }
  }
  return cnt
}



solution("}]()[{")