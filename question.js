var visited = new Array(10);
for (var i = 0; i < 10; i++)
    visited[i] = false;

function randomItem() {
    while (1) {
        var temp = Math.floor(Math.random() * 10);
        console.log(temp);
        if (!visited[temp]) {
            visited[temp] = true;
            let url = `question${temp}.html`;
            location.replace(url);
        }
    }
}

var imgURL = ['static/1.png', 'static/2.png', 'static/3.png', 'static/4.png', 'static/5.png',
    'static/6.png', 'static/7.png', 'static/8.png', 'static/9.png', 'static/10.png'];

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
console.log(res);
// 0 1 2 3 4 5 6 7
// I E N S F T P J