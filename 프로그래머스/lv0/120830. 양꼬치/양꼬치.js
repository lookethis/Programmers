function solution(n, k) {
    
    if (n >= 10 ) {
        return n * 12000 + Math.trunc(k-n/10) * 2000;
    }
    return n * 12000 + k * 2000;
}

// 1.n이 10 이상이냐?
// 2. 맞으면 밑의 식, 아니면 괄호 빼고
// 지불할 돈(10인분 이상시): n * 12000 + k * 2000 (+ n/10 * 2000)
// 아 몫으로 하는게 더 쉽겠

// 참고: 변수 늘리고 식을 줄이는 편이 더 전문가같은가?

function solution(n, k) {
    let lambPrice = n * 12000;
    let drinkPrice = k * 2000; 
    let discntDrink = Math.trunc(n/10) * 2000;
    return lambPrice + drinkPrice - discntDrink;
}