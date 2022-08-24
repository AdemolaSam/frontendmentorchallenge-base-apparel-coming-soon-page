
let btn = document.querySelector('button')
let input = document.querySelector('input')
let feedback = document.querySelector('.feedback')
let errorSign = document.querySelector('.icon-error')
let form = document.querySelector('form')
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener('click', validate)

function validate(e){
    // prevent default form behaviour
    e.preventDefault()
    // display error 
    if (input.value == '' || input.value === undefined){
       feedback.style.visibility = 'visible'
       feedback.innerHTML = 'Please provide us your email'
    } else if (!input.value.match(validRegex)){
        errorSign.style.display = 'block'
        feedback.style.visibility = 'visible'
        feedback.innerHTML = 'Please provide a valid email'
    } else{
        // display success message
        feedback.style.visibility = 'visible'
        feedback.classList.toggle('success')
        feedback.innerHTML = 'Thank you for subscribing to our newsletter.'
        console.log(feedback)
    }
}