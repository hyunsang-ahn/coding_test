function solution(s) {
  var answer = -1
  let length = s.length
  let cnt = 0

  //이거..스택으로 풀어야함..
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

    if (new_str[0] === ']' || new_str[0] === '}' || new_str[0] === ')') {
      //닫는 괄호들로 시작하면 절대 맞지 않는다...
    } else {
      let new_stack_arr = []

      new_arr.map((c, i) => {
        if (new_stack_arr.length === 0) {
          new_stack_arr.push(c)
        } else {
          if (c === ']' || c === '}' || c === ')') {
            //닫는 괄호들로 시작하면 앞에꺼랑 비교하고
            if (c === '}') {
              if (new_stack_arr[new_stack_arr.length - 1] === '{') {
                //삭제한다.
                new_stack_arr.pop()
              } else {
                new_stack_arr.push(c)
              }
            } else if (c === ']') {
              if (new_stack_arr[new_stack_arr.length - 1] === '[') {
                //삭제한다.
                new_stack_arr.pop()
              } else {
                new_stack_arr.push(c)
              }
            } else if (c === ')') {
              if (new_stack_arr[new_stack_arr.length - 1] === '(') {
                //삭제한다.
                new_stack_arr.pop()
              } else {
                new_stack_arr.push(c)
              }
            }
          } else {
            //여는 괄호면 무조건 넣는다.
            new_stack_arr.push(c)
          }
        }
      })

      if (new_stack_arr.length === 0) {
        //빈 배열이라면 cnt 늘린다.
        cnt = cnt + 1
      }
    }
  }


  console.log('cnt===============', cnt)

  return cnt
}

solution('}]()[{')
