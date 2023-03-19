// function solution(price) {
//     var answer = 0;
//     let result = 0;
    
//     if (price <= 1000000) {
//         if (100000 <= price < 300000) {
//             result = price - price*0.05
//             break;
//         }
//         if (300000 <= price < 500000) {
//             result = price - price*0.1
//             break;
//         }
//         if (500000 <= price < 1000000) {
//             result = price - price*0.2
//             break;
//         }
//         return result;
//     }
    
// }

// result = price(10만 미만)
// result = price - price*0.05 (10만~29만9990원)
// result = price - price*0.1 (30만~49만9990원)
// result = price - price*0.2 (50만~99만9990원)

function solution(price) {

        if (price >= 500000) {
            return Math.floor(price * 0.8)
        }
        if (price >= 300000) {
            return Math.floor(price * 0.9)
        }
        if (price >= 100000) {
            return Math.floor(price * 0.95)
        } 
        return price;
}

// 주어진 옷의 가격 제외, 모든 성분이 숫자라서 변수 노