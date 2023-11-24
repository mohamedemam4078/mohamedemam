url = "https://api.ipify.org/?format=json" ;
var ip = document.getElementById("found");
function find(){
    fetch(url).then(res => res.json().then(result =>  {
        ip.innerText = result.ip;
    }))
}