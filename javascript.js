const submit = document.querySelector('.create_button')
const para = document.querySelector('.para')
const pass1 = document.querySelector('.error')
const pass2 = document.querySelector('.error2')
const email = document.getElementById("Email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

submit.addEventListener('click', function (e) {
    if (pass1.value1===pass2.value) {
        para.textContent= 'Registration Successful, welcome'
   }
   if (pass1.value1!==pass2.value) {
         para.textContent= '*Passwords do not match'
    }
   if (pass1.value==='' && pass2.value==='') {
    para.textContent ='Fill all fields'
    }
})



if (title.value,author.value,pages.value!==''  ) {
    const list1 =document.createElement('li')
     const info = document.createElement('span')
     const check = document.createElement('span')
     const del = document.createElement('button')

     info.textContent= title.value+' by '+author.value+ ' has '+pages.value+ ' pages.'          
       if (status.checked) {
         check.textContent= 'Read'
       } else {
         check.textContent = 'Unread'
       };
       del.textContent = 'delete'
      del.addEventListener('click', ()=>{
        bookList.removeChild(list1)
      })

     list1.appendChild(info),
     list1.appendChild(check)
     list1.appendChild(del),
     bookList.appendChild(list1);
       console.log('author.value')
};