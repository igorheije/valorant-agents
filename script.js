const slider =document.querySelectorAll('.agent')

const next = document.getElementById('next')
const prev = document.getElementById('previous')


const nextSlider = ()=>{

        const active = document.querySelector('.agent.active')
        active.classList.toggle('active')
        if(active.nextElementSibling){
            active.nextElementSibling.classList.toggle('active')
        }else{
            slider[0].classList.toggle('active')
        }
        
}

const prevSlider = ()=>{

        const active = document.querySelector('.agent.active')
        active.classList.toggle('active')
        if(active.previousElementSibling){
            active.previousElementSibling.classList.toggle('active')
        }else{
            slider[slider.length-1].classList.toggle('active')
        }
       
}



next.addEventListener('click',nextSlider)
prev.addEventListener('click',prevSlider)