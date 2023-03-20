function solution(money) {
    
    const cupsCnt = Math.trunc(money / 5500);
    const nam = money - cupsCnt * 5500; 
    return [cupsCnt, nam];
}

// answer = [최대 마실 아메 잔 수, 남는 돈]
// money = 잔 수 * 5500 + 남는 돈
// 잔 수 = (money - 남는 돈) / 5500
// (money / 5500)의 몫이: 잔 수, 나머지:nam 
// 12000 = 2잔, 1000원

// 발전한 점. 주어진 변수가 특정식의 변수로 정의되어서는
// 안된다는 점 기억하고, 구할 값 먼저 생각했다