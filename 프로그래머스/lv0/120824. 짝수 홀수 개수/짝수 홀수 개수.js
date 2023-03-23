function solution(num_list) {
    
    let cnt = 0;
    let odd = 0;
    let even = 0;
    
    while(cnt < num_list.length) {
        if (num_list[cnt] % 2 === 0) {
            even = even + 1;
        } else {
            odd = odd + 1;
        }
        cnt += 1
    }    
    
    return [even,odd];
}

// newA = [짝수갯수, 홀수갯수]
// 1. 배열 첫번째 원소한테 짝수냐고 묻는다
// 2. 짝수면 짝수카운트 1 올린다
// 3. 홀수면 홀수 카운트 1 올린다
// 4. 위를 마지막 원소한테까지 반복한다
// 5. 새 배열에 갯수를 넣음