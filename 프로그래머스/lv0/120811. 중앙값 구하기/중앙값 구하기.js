// function solution(array) {
    
//     let arrayCnt = 0;
//     let newArray = [];
//     while(arrayCnt < array.length) {
    
//         let minNumber = 1000;
        
//         let cnt = 0;
//         while(cnt < array.length) {
//             if(minNumber > array[cnt]) {
//                 minNumber = array[cnt];
//             }
//             cnt = cnt + 1;
//         }

//         newArray.push(minNumber);

//         let cnt2 = 0;
//         while(cnt2 < array.length) {
//             if(minNumber === array[cnt2]) {
//                 array[cnt2] = 1000;
//                 break;
//             }
//             cnt2 = cnt2 + 1;
//         }
//         arrayCnt = arrayCnt + 1;
//     }
//     console.log("new Array : ", newArray);
//     return newArray[Math.floor(array.length/2)];
// }

// 1. 배열 array의 길이를 2로 나눈 후 1을 더한 순서의 수를 꺼낸다

// 참고(초보는 무식하게 해라! 이쁘게 안해도 된다!)
// 1. 정렬
// 1-1. 배열에서 가장 작은 값을 찾아
// 1-2. 찾으면 새 배열에 넣어
// 1-3. 원래 배열에서 새 배열로 넣은거 지워라, 1-1가서 모든 수에 반복해(따로 조건 없)
// 1-4. 만약 원래 배열 길이만큼 반복했으면 끝. 아니면 1-1로 돌아가.
// 2. 가운데 값 꺼내
// 

// function solution(array) {
//     let newA = [];
//     let arrayCnt = 0;
//     while (arrayCnt < array.length) {
        
//         let cnt = 0;
//         let minN = 1000;    
//         while (cnt < array.length) {
//             if (minN > array[cnt]) {
//                 minN = array[cnt];
//             }
//             cnt = cnt + 1;
//         } 

        
//         newA.push(minN);

//         let cnt2 = 0;
//         while (cnt2 < array.length) {
//             if (minN === array[cnt2]) {
//                 array[cnt2] = 1000;
//                 break;
//             }
//             cnt2 = cnt2 + 1;
//         }
//         arrayCnt = arrayCnt + 1;
//     }
//     return newA[Math.floor(array.length/2)];
    
// }

// 간단히도 풀어보자 
function solution(array) {
    let arr = array.sort((a,b) => a-b)
    let answer = Math.floor(arr.length/2)
    console.log(arr)
    console.log(answer)
    
    return arr[answer]
}
// 1. 오름차순 정렬
// 2. 배열 길이 /2 + 1번 인덱스 꺼내