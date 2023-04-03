function solution(age) {
    
    const stringAge = String(age);
    let cnt = 0;
    let answer = '';
    while (cnt < stringAge.length) {
        answer += String.fromCharCode(stringAge[cnt].charCodeAt(0) + 49);
        
        // 반복 줄이기 위해 아스키 코드를 보고
        // 영어를 숫자로 봐서 걍 원래 숫자에 더해서 영어를 표현
        
        cnt += 1;
    }
    return answer;
}

// 영어를 스트링으로 만들어..
// 1.숫자를 스트링으로 고쳐
// 2. 한 숫자의 순서는 영어 스트링과 같은 순서의 결과야..?
// 3. 숫자 길이까지 반복