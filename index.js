// Add your code here
function submitData(userName, email){
    let user = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": userName,
            "email": email
        }),
    }

   return fetch('http://localhost:3000/users', user).then(res => res.json()).then(returnedUser =>{
    const body = document.querySelector('body')
    body.innerHTML = returnedUser.id

   }).catch(message =>{
   document.querySelector('body').innerHTML = message
   })
}