
//for responsive navbar hide and show.....

function showForm(){
    const  sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
    sidebar.style.transition = "all 0.2s";
}


    function hideForm(){
    const  sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

//for advertisment blur.....


function closeAdvertisement() {
    var advertisementWrapper = document.getElementById('advertisement-wrapper');
    advertisementWrapper.style.display = 'none';
    document.body.classList.remove('blur');
}

//for toggling the inforamtion ofo professors


function toggleInfo(elementId){
    var maininfo  =  document.querySelectorAll('.professor-detail > div');
    maininfo.forEach(function(div) {
        div.style.display = 'none'
    });
    var show = document.querySelector('.' + elementId);
    if(show){
        show.style.display = 'block'
    }
}


//for displaying the images of a course section....



function toggleImage(elementId){
    var maininfo  =  document.querySelectorAll('.info-image > div');
    maininfo.forEach(function(div) {
        div.style.display = 'none'
    });
    var show = document.querySelector('.' + elementId);
    if(show){
        show.style.display = 'block'
    }
}

//login form validation 

function passValid(){
    let password = document.querySelector('#password');
    let icon =  document.querySelector('#eye-icon')
    if(password.type === 'password'){
        password.type = 'text';
        icon.src = './icons/visible.png';
    }else{
        password.type = 'password';
        icon.src = './icons/eyebrow.png';

    }
}
// smooth scrolling--------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// function for displaying the forgot section and display none of the login page
