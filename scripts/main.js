
const btnBar=document.getElementById('btnbar')
const btnClose=document.getElementById('btnclose')

btnBar.addEventListener('click',()=>{
    document.getElementById('responsive-topbar').style.display='block'
    btnBar.style.display='none'
    btnClose.style.visibility='visible'
})
btnClose.addEventListener('click',()=>{
    document.getElementById('responsive-topbar').style.display='none'
    btnBar.style.display='block'
    btnClose.style.visibility='hidden'
})