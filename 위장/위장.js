function solution(clothes) {
  let clothes_type = []
  
  clothes.map((c)=>{
      if(clothes_type.includes(c[1])){
          
      }else{
          clothes_type.push(c[1])
      }
  })
  
  console.log(clothes_type)
  let new_obj = {}
  clothes_type.map((d)=>{
      new_obj[d] = 0
      
  })
  

  clothes.map((c)=>{
      let target = c[1]
      new_obj[target]++
  })

  let values_arr = Object.values(new_obj)
  let cnt= 1
  values_arr.map((e)=>{
      cnt *=e+1
  })
                  console.log(cnt)

  var answer = cnt-1;
  return answer;
}