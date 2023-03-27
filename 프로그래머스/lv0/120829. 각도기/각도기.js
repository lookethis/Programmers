function solution(angle) {
    
    if (angle === 180) {
        return 4;
    } 
    if (90 < angle && angle < 180) {
        return 3;
    }
    if (angle === 90) {
        return 2;
    }
    
    return 1;
    
}

//주어짐: 현재 각 -> 1, 2, 3, 4중 뭐냐
// 1.앵글을 조건(크기)에 넣는다
// 2. 해당되믄 거기서 조건문 빠져나온다