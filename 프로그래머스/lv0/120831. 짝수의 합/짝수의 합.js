function solution(n) {
    
    let sum = 0;
    let cnt = 1;
    
    while (cnt <= n) {
        if (cnt % 2 === 0) {
            sum += cnt; 
        } 
        cnt += 1; 
    }
    return sum;
}

// 1.짝수냐 물어
// 2.맞으면 더해, 틀리면 횟수만 늘려서 1~2 반복