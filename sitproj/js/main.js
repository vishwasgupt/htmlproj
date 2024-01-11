const btn = document.getElementById('b1');
const over = document.querySelector('.overlay');
const over1 = document.getElementById('over');
const para = document.querySelector('.p1');
const phigh = document.getElementById("p1");
const fir = document.getElementById('fir');
const buttons = document.querySelectorAll('.skill');
const inqueryclose = document.querySelector('.overlay .inqueryform .btn');

let pactive = null;

function toggleParagraph(num) {
    const pContent = document.querySelector(`.p${num}`);
    
    if (pactive && pContent!==pactive) {
        pactive.classList.remove('pactive');
        pContent.classList.add('pactive');
        pactive=pContent;
    }
else{
    pContent.classList.toggle('pactive');
    pactive = pContent;
    console.log(pactive);
}
}

buttons.forEach((button, num) => {
    button.addEventListener('click', function () {
        toggleParagraph(num + 1);
    });
});

btn.addEventListener('click', function () {
    over.classList.add('active');
})

over.addEventListener('click', function (e) {
    if (e.target !== this) {
        return;
    }
    else
        over.classList.remove('active');

})

document.body.addEventListener('click', (event) => {
    
    if (!event.target.classList.contains('skill') && !event.target.closest('.pactive')) {    
        t();
    }
});

inqueryclose.addEventListener('click', function(){
    over1.classList.remove('active');
})