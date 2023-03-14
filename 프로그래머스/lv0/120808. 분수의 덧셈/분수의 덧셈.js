function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    let num1 = numer1*denom2
    let den3 = denom1*denom2
    let num2 = numer2*denom1
  
    let num3 = num1 + num2
    // console.log(numer1, denom1, numer2, denom2)
    // console.log(num1, num2, num3, den3)
    
    if (num3 > den3) {
        for(let i = den3; i > 0; i--) {
            if (num3 % i === 0 && den3 % i === 0) {
                return answer = [(num3/i), (den3/i)]
                
                console.log(answer);
            }    
        }
        
    } else if (num3 < den3) {
        for(let i = num3; i > 0; i--) {
            if (den3 % i === 0 && num3 % i === 0) {
                return answer = [(num3/i), (den3/i)]
            }    
        }
        
    } else {
       return answer = [1, 1]    
    }
    
    // return answer;
}

// 두 분수를 더한다1: 첫(두번째) 수의 분자/모에 각각 두번째(첫번째) 분모를 곱한다.
// 두 분수를 더한다2: 분모가 같아진 두 수를 걍 더하거나 / 변한 두 분자 합,최소공배수(분모) 배열에 넣는다
// 기약분수로 나눈다: 분자와 분모를 알고 있어야함. 분자/모 중 작은 수를 안 뒤,
// 기약분수로 나눈다2: 큰 수를 작은수로 나눈다. 안 나눠지면 나눠질 때까지 -1을 해서 나눈다.
// 큰 수를 나눠떨어지게 하는 작은 수로 분자/모를 나눈다. 
// 분자와 분모를 배열에 담는다

// 최소공배수 구하기..둘을 같은 수로 나눠서 나머지 0이어야 함.