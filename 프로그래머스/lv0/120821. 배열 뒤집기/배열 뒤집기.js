function solution(num_list) {
    
    const answer = [];
    let cnt = num_list.length-1;
    
    while(cnt >= 0) {
        answer.push(num_list[cnt]); 
        cnt = cnt - 1;
    }
    
    return answer;
}

// rev_list = num_list 순서 뒤집음 
// 1. num_list 맨 뒤 원소를 꺼낸다
// 2. rev_list(answer)에 넣는다
// 3. 1,2를 반복한다

// 참고
// 1. num_list 맨 뒤 원소를 rev_list(answer)에 넣는다
//(빼지 않고 걍 같은 걸 넣으면 된다)
// 2. 1을 반복. cnt >= 0 될때까지
