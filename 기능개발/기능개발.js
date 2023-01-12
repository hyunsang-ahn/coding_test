function solution(progresses, speeds) {
    let stack = []
    let stack_obj = {}
    progresses.map((c,i)=>{
        //남은 양
        let work = 100 -c
        //남은 일을 수행하는 날짜
        let day = Math.ceil(work / speeds[i]) +1

        console.log('day================',day)
        if(stack.length > 0){
            if(stack[stack.length-1] >= day){
                //날짜보다 더 크면 기다려야 하기때문에 카운트만 올려준다.
                stack_obj[stack[stack.length-1]] = stack_obj[stack[stack.length-1]] + 1
            }else{
                //그게 아니면 올려준다
                stack.push(day)
                stack_obj[day] = 1
            }
        }else{
            stack.push(day)
            stack_obj[day] = 1
        }

    })
    console.log('stack================',stack)
    console.log('stack_obj================',stack_obj)

    let obj_value = Object.values(stack_obj)
    console.log('obj_value================',obj_value)

   
    return obj_value;
}


let progresses = [95, 90, 99, 99, 80, 99]
let speeds = [1, 1, 1, 1, 1, 1]


solution(progresses, speeds)