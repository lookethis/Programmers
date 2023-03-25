function solution(my_string, letter) {
    
    let newS = '';
    let cnt = 0;
    
    while(cnt < my_string.length){
        if (my_string[cnt] !== letter) {
            newS += my_string[cnt]
        } 
        cnt = cnt + 1;
    }
    
    return newS;
}

// 주어진 것: 문자열, 그 안의 문자, 문자열 - 문자
// 1. 문자열의 문자가 letter문자랑 같냐?
// 2. 아니면 새 문자열에 넣고, 맞으면 걍 넘어가 다음 회차로..1~2 반복
// 3. 문자열 출력

// 걍 글자 빼도 되는데 잘 모름. 이거 해보고 보믄 됨