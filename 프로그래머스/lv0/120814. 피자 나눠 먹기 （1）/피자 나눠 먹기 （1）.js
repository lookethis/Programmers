function solution(n) {
    
    let answer = 0; 
    
    if (n % 7 > 0) {
        answer = Math.trunc(n / 7) + 1;
    } else {
        answer = Math.trunc(n / 7)
    }
    
    return answer  
}

// 다른 풀이 1
// function solution(n) {
    
//     let cnt = 0;
//     let answer = 0;
    
//     while(cnt < 15) {
//         if (cnt < n/7 <= cnt+1) {
//             answer = cnt + 1;
//             break;
//         } 
//         cnt = cnt + 1;    
//     }
//     return answer;
// }

// 7명은 최소 1판, 8~14명 최소 2판, 15~21명 최소 3판, 22~28명 최소 4판
// 1~7/7 = 1, 8~14/7 = 2이하, 15~21/7 =3이하, 22~28/7 = 4이하 
// 사람이 n명일 때  0 < n/7 <=1이면 1판 필요
// 0 < n/7 <=1이면 1판 필요....만약 이 이외이면 뒤의 숫자에 1 더하고 밑으로
// 1 < n/7 <=2이면 2판 필요
// 2 < n/7 <=3이면 3판 필요
// 3 < n/7 <=4이면 4판 필요

// 다른 풀이 2
// function solution(n) {
//     const answer = Math.ceil(n/7);
//     return answer;
// }

// 간만에 돌아와 다시 풀어봄
// 사람 % 7조각: 0보다 크면 피자는 : 사람 / 7 + 1
// 사람 % 7조각: 0이면 피자는 : 사람 / 7





