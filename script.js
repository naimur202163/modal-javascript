'use strict'
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const btnShowModal=document.querySelectorAll('.show-modal');
console.log(btnShowModal)
    
// Opening The Modal

for(let i=0;i<btnShowModal.length;i++){
        btnShowModal[i].addEventListener('click',function(){
            console.log('btn clicked')
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden')
        })
};
// close the Modal
btnCloseModal.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})