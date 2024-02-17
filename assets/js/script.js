function showForm(){
    const  sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
    sidebar.style.transition = "all 0.2s";
}


    function hideForm(){
    const  sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function closeAdvertisement() {
    var advertisementWrapper = document.getElementById('advertisement-wrapper');
    advertisementWrapper.style.display = 'none';
    document.body.classList.remove('blur'); // Remove blur effect from the rest of the webpage
}



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