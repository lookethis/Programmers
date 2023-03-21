function solution(my_string) {
    var answer = '';
    let cnt = my_string.length - 1;
    
    while(cnt >= 0) {
        answer += my_string[cnt];
        cnt = cnt - 1;
    }
    return answer;
}
// 이거는 배열에 성분 나열하는게 아니고 더해야한다
// 1. my_string 맨 뒤 글자를 새 문자열에 넣어
// 2. cnt = 0일때까지 반복해