let img = document.querySelector('#img1')
document.addEventListener('mousemove',(e)=>{
    let x = (e.clientX)
    let y = (e.clientY)
    img.style.left = x + 'px' 
    img.style.top =  y + 'px'
})


