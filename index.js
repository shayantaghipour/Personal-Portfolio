let intro = document.querySelector('.intro');
let HeyThere = document.querySelector('.HeyThere-header');
let HeyThereSpan = document.querySelectorAll('.HeyThere');


window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        HeyThereSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });


        setTimeout(()=>{
            HeyThereSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)

                
            })
        }, 3000)
        

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 3000)

        var audio = document.getElementById("myAudio");
            audio.play();
    })
})
