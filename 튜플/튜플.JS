function solution(s) {
  let temp_arr = s.split('},')
  //튜플 스트링을 arr로 바꾸어서 활용한다.
  let convert_arr = []
  if (temp_arr.length > 1) {
    temp_arr.map((c, i) => {
      if (i === 0) {
        let temp_target = c.replace('{{', '').split(',')
        // console.log(temp_target)
        convert_arr.push(temp_target)
      } else if (i === temp_arr.length - 1) {
        let temp_target = c.replace('}}', '').replace('{', '').split(',')
        // console.log(temp_target)
        convert_arr.push(temp_target)
      } else {
        let temp_target = c.replace('{', '').split(',')
        // console.log(temp_target)
        convert_arr.push(temp_target)
      }
    })
  } else {
    //1자리면 앞뒤로만 자른다.
    let temp_target = temp_arr[0].replace('{{', '').replace('}}', '').split(',')
    convert_arr.push(temp_target)
  }
  //convert_arr를 obj 에서 cnt 형식으로 바꿔서 만든다.

  let temp_obj = {}
  convert_arr.map((c) => {
    c.map((d) => {
      if (temp_obj[d] === undefined) {
        temp_obj[d] = 1
      } else {
        temp_obj[d] = temp_obj[d] + 1
      }
    })
  })

  let sortable = []
  for (let target_num in temp_obj) {
    sortable.push([target_num, temp_obj[target_num]])
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1]
  })

  var answer = []
  sortable.map((c) => {
    answer.push(parseInt(c[0]))
  })

  console.log(answer)

  return answer
}

let s = '"{{123}}"'
solution(s)
