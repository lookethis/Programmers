// function solution(n) {
    
//     let i = 1;
//     let odd = 0;
//     let newA = [];
    
//     let cnt = 1;
    
//     while(cnt <= n) {
//         while(i <= n) {
//             if(i % 2 !== 0) {
//                 odd = i;
//             }
//             i = i + 1;
//         }
//         newA.push(odd);
//         cnt = cnt + 1;
//     }

//     return newA;
// } // cnt, i라고 변수 두개 지정해서..한 변수만 움직여야 함.정확힌 모름.
// odd라는거 따로 지정할 필요없다. 여기선 순서가 곧 그 수라서

// 1.홀수 골라내기(홀수 찾고 새 배열에 넣어-이때 원배열에서 지워야 하나?)
// 2.1을 반복
// 3.오름차순으로 배열, 반환

function solution(n) {
    
    let newA = [];
    
    let cnt = 1;
    
    while(cnt <= n) {
        if(cnt % 2 !== 0) {
            newA.push(cnt);
        }
            cnt = cnt + 1;
    } 
    return newA;
}