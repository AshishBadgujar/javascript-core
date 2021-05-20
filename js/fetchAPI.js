let mybtn=document.getElementById('mybtn');
let conatent=document.getElementById('content');

// 




function getData(){
    console.log('we are in function')
    url="https://api.github.com/users"
    fetch(url).then((response)=>{
        console.log('first then')
        return response.json();
    }).then((data)=>{
        console.log('second then')
        console.log(data)
    })
}


function postData(){
    url="https://api.github.com/users"
    data='{"login":"ashi87 h","id":554,"type":"user"}'
    params={
        method:'post',
        headers:  {
            'Content-type':'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(url,params).then(response => response.text()).then(data => console.log(data))
}

postData();