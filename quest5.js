const price=document.querySelector('.input-price')
const count=document.querySelector('.input-count')
const button=document.querySelector('.submit-choose')
const sum=document.querySelector('.sum')

button.addEventListener('click',(e)=>{
    e.preventDefault()
    sum.innerHTML= (parseInt(price.value) * parseInt(count.value)).toString();
})
