function solution(array) {
    
    let sortedArray = array.sort((a,b) => a-b); //정렬..은 간단히
    let cnt = 0;
    
    let choi = -1;         // 최빈값이 어떤 수인지(시작은 결과 될수없는 -1)
    let choiRepeatCnt = 0; // 최빈값이 될 때 몇번 반복해서 된건지
    let repeatCnt = 0;     // 현재 똑같은 숫자가 몇번 등장했는지
    let beforeNumber = -1; // 지금 보고있는 숫자 이전 숫자
    let isDupChoi = false;
    
    while(cnt < array.length) { // 배열의 전체 숫자에게 반복
        if (beforeNumber !== array[cnt]) { // 한 숫자 빈도를 센다
            repeatCnt = 1;
        } else {
            repeatCnt = repeatCnt + 1;
        }
        
        if(repeatCnt === choiRepeatCnt) { // 새최빈값=기존최빈(중복인지?)
            if(choi !== array[cnt]) { //최빈값인 원소와 지금 값 다를 때
                isDupChoi = true; // 중복인 것이다
            }
        }
        
        if(repeatCnt > choiRepeatCnt) { // 최빈값 갱신인지?
            choi = array[cnt]; // 최빈값인 원소와 지금 값 같다
            choiRepeatCnt = repeatCnt;
            isDupChoi = false;
        }
        
        beforeNumber = array[cnt]; // 이전 숫자 저장 후 다음 숫자 넘어가기
        cnt = cnt + 1;
    }
    if(isDupChoi) return -1;
    return choi;
}

// 1. 앞에서부터 차례대로 원소 확인하며 갯수 센다.repeatCnt
// 2. 최빈값 그때그때 기록

