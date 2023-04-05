function solution(emergency) {
    
    let newEmergencyArray = []; // 원 배열에서 꺼내 넣을 빈 배열
    let cnt = 0;
    while(cnt < emergency.length) { 
        newEmergencyArray.push({value: emergency[cnt], idx: cnt}) //원 배열에서 꺼내기
        // 두가지를 넣을 때 객체를 사용해서 key,index넣음(원래 자리 지켜서 출력해야함)
        cnt += 1;
    }
    newEmergencyArray.sort((a,b) => b.value-a.value) //b-a가 내림차순인디+밸류 꺼내기
    
    var answer = new Array(emergency.length); //미리 배열에 공간 확보..전 배열 길이만큼
    
    cnt = 0; // 위와 같은 변수 이름 그냥 쓰기 위해 다시 0으로 바꿔줌
    while(cnt < newEmergencyArray.length) { 
        let item = newEmergencyArray[cnt]; // 
        answer[item.idx] = cnt + 1;  //[]여기 우선순위 넣.우선순위가 cnt+1임(1부터 시작)
        cnt += 1;
    }
    return answer;
}

// 내림차순 정렬하믄 되는거였다.ㅠㅜ, 대신 원래의 위치를 기억해야함

// 1.배열 내 두 수 비교한다. 전 수와 현재 수 비교한다
// 2. 더 큰 수가 1번이 된다.
// 3. 모든 수끼리 비교한다...?
// 2개 -> 1번 비교, 3개-> 3비교, 4개->6비교, 5개->10비교..
// 등차수열...
