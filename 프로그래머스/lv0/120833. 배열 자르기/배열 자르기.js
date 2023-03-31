function solution(numbers, num1, num2) {
    
    let newN = [];
    let cnt = num1;
    
    while (cnt <= num2) {
        newN.push(numbers[cnt]);
        cnt += 1;
    }
    return newN;
}

// numbers에서 젤 큰 원소~2+1번째, 0번째~1번째 원소 빼믄 된다.
// 아니면 걍 1~2번째까지만 새 배열에 넣으면 된다.