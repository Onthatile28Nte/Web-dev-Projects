const togglebtn = document.getElementById('togglebtn')
const body = document.body;

function darkMode(){
        body.classList.toggle('darkmode');

    if (body.classList.contains('darkmode')){
        togglebtn.textContent = 'Light Mode'
    }
    else{
        togglebtn.textContent = 'Dark Mode'
    }
}

