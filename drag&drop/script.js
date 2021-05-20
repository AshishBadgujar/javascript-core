const imgBox = document.querySelector('.imgBox');
const whiteBoxs=document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart',(e)=>{
    console.log('drag start has been trigered')
    setTimeout(() => {
        e.target.className='hide';
    }, 0);
})
imgBox.addEventListener('dragend',(e)=>{
    console.log('drag end has been trigered')
    e.target.className ='imgBox';
})
for(whiteBox of whiteBoxs){
    whiteBox.addEventListener('dragover',(e)=>{
        console.log('dragover')
        e.preventDefault()
    })
    whiteBox.addEventListener('dragenter',()=>{
        console.log('dragenter')
    })
    whiteBox.addEventListener('dragleave',()=>{
        console.log('dragleave')
    })
    whiteBox.addEventListener('drop',(e)=>{
        console.log('drop')
        e.target.append(imgBox)

    })
}