
var visited = new Array(10);
for (var i = 0; i < 10; i++)
    visited[i] = false;

function randomItem() {
    while (1) {
        var temp = Math.floor(Math.random() * 10);
        console.log(temp);
        if (!visited[temp]) {
            visited[temp] = true;
            return temp;
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
document.getElementById('imgId').innerHTML = getImage(randomItem());