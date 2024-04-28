let flag = 0;

function slideShow(num){
    let slides =document.querySelectorAll('.slide')
    for(let x of slides){
        x.style.display ='none'
    }
    if(num>slides.length-1){
        num =0;
        flag= 0
    }
    if(num<0){
        num = slides.length-1;
        flag= slides.length-1
    }
    slides[num].style.display= 'block';
}

document.querySelector('.next').addEventListener('click', function(){
    flag++;
    slideShow(flag);
})

document.querySelector('.prev').addEventListener('click', function(){
   flag--;
   slideShow(flag);
})
slideShow(flag)
