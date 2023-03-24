function solution(my_string, n) {
    var answer = '';
    
    let cnt = 0;
    
    while(cnt < my_string.length) {
        const repeatC = my_string[cnt];
        
        let repeatCnt = 0;
        while(repeatCnt < n) {
            answer = answer + repeatC;
            repeatCnt = repeatCnt + 1;
        }
        cnt = cnt + 1;
    }
    
    return answer;
}

// 1.첫번째 원소 문자를 n번 반복해서 새 배열에 넣어+
// 2.위를 반복