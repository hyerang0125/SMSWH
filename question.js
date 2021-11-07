var visited = new Array(10);
for (var i = 0; i < 10; i++)
    visited[i] = false;

function randomItem() {
    while (1) {
        var temp = Math.floor(Math.random() * 10);
        if (!visited[temp]) {
            visited[temp] = true;
            return temp;
        }
    }
}

function getImage(temp) {
    var img = '<img src=\"';
    img += imgURL[temp];
    img += '\" class=\"startImg\"/>';
    return img;
}

let IE = [0, 0];
let NS = [0, 0];
let FT = [0, 0];
let PJ = [0, 0];

function score(e) {
    const idx = e.target.value.split(" ");
    
    for(let i=0; i < idx.length; i++)
        idx[i] = Number(idx[i]);

    for(let i = 0; i < idx.length; i++) {
        switch (idx[i]) {
            case 0: IE[0]++; break;
            case 1: IE[1]++; break;
            case 2: NS[0]++; break;
            case 3: NS[1]++; break;
            case 4: FT[0]++; break;
            case 5: FT[1]++; break;
            case 6: PJ[0]++; break;
            case 7: PJ[1]++;
        }    
    }
    console.log(IE[0]);
    console.log(IE[1]);
    console.log(NS[0]);
    console.log(NS[1]);    
    console.log(FT[1]);
    console.log(FT[1]);
    console.log(PJ[0]);
    console.log(PJ[1]);
}
let res = 0;
function result () {
    let arr = new Array(4);
    arr[0] = IE[0] > IE[1] ? 0 : 1;
    arr[1] = NS[0] > NS[1] ? 0 : 1;
    arr[2] = FT[0] > FT[1] ? 0 : 1;
    arr[3] = PJ[0] > PJ[1] ? 0 : 1;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            if (i == 3) return;
            res = res << 1;
        }
        else {
            res+1;
            if (i == 3) return;   
            res = res << 1;
        }
    }
}
// console.log(res);
// 0 1 2 3 4 5 6 7
// I E N S F T P J


let question = ['예정되어 있던 실시간 강의가 취소되었다. 이때 나는', 
'성적 짜기로 유명한 수업에서 좋은 성적을 받았다. 이때 나는', 
'녹화 강의가 왕창 밀려버렸다. 오늘이 아니면 제때 끝내기 힘들다. 이때 나는', 
'마니또 하다 들켰을때를 생각하는 나는', '전방 5m앞 카톡으로만 대화해본 동기가 있다.', 
'자살의 반대말은', '시험기간에 나는', '오징어 게임에 초대되었다. 이때 나는', 
'동기가 지원한 대외활동마다 떨어져 힘들어 한다. 이때 나는', 
'팀장이 되어 회사의 캐치프레이즈(catchphrase)를 정해야 한다. 당신의 선택은?'];

let imgURL = ['static/1.png', 'static/2.png', 'static/3.png', 'static/4.png', 'static/5.png',
    'static/6.png', 'static/7.png', 'static/8.png', 'static/9.png', 'static/10.png'];

let select = [['오늘 올라온 다른 강의를 듣는다.', '뭐? 강의 취소? 친구에게 연락한다.'], 
['혼자 맛있는 걸 먹으러 간다.', '맛집으로 친구들을 불러 모은다. 오늘은 내가 쏜다~!'], 
['나중으로 미루면 더 힘들어, 지금 해버리자! ', '오늘 하루만 놀지 뭐! 내일도 있잖아?'], 
['들키는 상황과 변명을 생각한다.', '사고회로 정지'], 
['다른 방향으로 돌아간다. 으음...인사하기 애매한 거리야…', '보자마자 달려가서 인사한다. 안녕!'], 
['살자이다.', '타살이다.'], ['교수님이 시험범위 줄여 주시면 좋겠다.', '이 머리 그대로 과거로 돌아가면 난 천재겠지?'], 
['이거 구라 아니야? 신종 사기인가,, 라며 혼자 깊게 생각한다.', '뭐? 당장가!! 우리 모두 화이팅~'], 
['함께 공감하며 위로한다. 인재를 못 알아 보다니! 넌 할 수 있어', '현실적인 조언을 해준다. 이런 활동을 더 해보는 건 어때?'], 
['실현 가능한 작은 목표부터 하나씩 도전하자!', '즐거운 상상, 조용한 꿈이 이상적인 미래를 부른다!', 
'계획한 즉시 함께 대화하고 말하는 대로 움직여라!', '우리의 열정과 가능성을 믿고 변화를 주저하지 말자!']];

let value = [['7', '6'], ['0', '1'], ['7', '6'], ['2', '3'], ['0', '1'], ['4', '5'],
['3', '2'], ['0 3', '1 6'], ['4', '5'], ['0 3', '0 2', '1 3', '1 2']];

function loadQuestion() {
    let num = randomItem();
    document.getElementsByClassName('questionText')[0].innerHTML = question[num];
    document.getElementsByClassName('startImg')[0].src = imgURL[num];
    
    let msg = "";
    for (let i = 0; i < select[num].length; i++) { 
        msg += `<button type='button' value='${value[num][i]}' onclick='score(event); loadQuestion()'>${select[num][i]}</button>`;
    }
    document.getElementsByClassName('selectBtn')[0].innerHTML = msg;
}