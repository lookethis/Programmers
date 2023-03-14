function solution(numbers) {
    const answer = [];
    
    let cnt = 0;
    while(cnt < numbers.length) {
        answer.push(numbers[cnt] * 2);
        cnt = cnt + 1;
    }
    
//     for (let cnt = 0; cnt < numbers.length; cnt = cnt+1) {
//         answer.push(numbers[cnt] * 2)
//     }
    return answer;
}

// 1. 배열numbers의 원소를 배열에서 꺼내
// 2. 꺼낸 원소 두배 후 새 배열에 넣어야 함