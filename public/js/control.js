const controloutput = document.getElementById('check-box')
const baseURL = 'http://localhost:8080'
if(controloutput){
    controloutput.addEventListener('change',async () => {
       const statusCheckBox = controloutput.checked 
       if(statusCheckBox == true) {
        const callAPI = await fetch(`${baseURL}/on`,{
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        if(callAPI.ok){
            const res = await callAPI.json()
            console.log(res);
        }
       }

       if(statusCheckBox == false) {
        const callAPI = await fetch(`${baseURL}/off`,{
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        if(callAPI.ok){
            const res = await callAPI.json()
            console.log(res);
        }
       }
    })
}