const solution = (n) => {
    let piece = 6

    while(true) {
        if (piece % n === 0) { // 피자 조각이 사람으로 나눠떨어지면 나감 
            break               
        }
        piece += 6             // 안 나눠떨어지면 1판(6조각) 더해서 반복
    }

    return piece / 6           // 조각 수 / 1판 당 조각 수: 판 수
}

