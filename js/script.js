const td = document.querySelectorAll('td');
const btn = document.querySelector('.button');


Array.from(td).map(function(item, index){
    item.onclick = function () {
        if (status === 'edit') {
            const h = Math.round(Math.random()*359);
            const s = 70+Math.random()*30;
            const l = 45+Math.random()*10;
            const color = `hsl(${h}, ${s}%, ${l}%)`;
            this.style.backgroundColor = color;
            this.style.boxShadow = `0px 0px 10px ${color}`
        }
    };
});

let status = "idle";

btn.onclick = function (event) {
    if (status === 'idle') {
        status = 'edit'
    }
    else {
        status = 'idle'
    };

    btn.innerHTML = status;
}

