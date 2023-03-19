function solution(numbers) {
    
    let cnt = 0;
    let sum = 0;
    
    while(cnt < numbers.length) {
        sum = sum + numbers[cnt]; 
        cnt = cnt + 1;
    }
    
    return sum / numbers.length;
}

// 1. 원소를 꺼낸다
// 2. 꺼낸 원소들을 계속 더한다
// 3. 배열 길이 되기 전까지 반복