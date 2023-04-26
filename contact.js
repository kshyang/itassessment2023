const name = document.getElementById('fname')
const email = document.getElementById('email')
const message = document.getElementById('message')
const form = document.getElementById('form')
const errorElement=document.getElementById('error')

    form.addEventListener('submit', (e) => {
        let messages=[]
        if (fname.value===''fname.value==null){
            messages.push('error')
        }
        if (email.value===''email.value==null){
            messages.push('error')
        }
        if (message.value===''||message.value==null){
            messages.push('error')
        }
        if (messages.length>0){
        e.preventDefault()
        errorElement.innerText=messages.join(', ')
        }
    })