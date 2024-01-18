const funcLogin = document.getElementById('flogin')
if(funcLogin) {
    const baseURL = 'http://localhost:8080'
    funcLogin.addEventListener('click',async () => {
        const userName = document.getElementById('loginframe__userframe--login').value
        const passWord = document.getElementById('loginframe__passwordframe--password').value
    
        const callAPI = await fetch(`${baseURL}/checkauth`,{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                userName,
                passWord
            })
        })
        if(callAPI.ok) {
            const data = await callAPI.json()
            console.log(data); 
            if(data.message == 'Login Success'){
                window.location.href = `${baseURL}/home`
            }
        }
    })
}