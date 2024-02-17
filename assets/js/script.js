
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

// function toggleImage(imageId){
//     var images = document.querySelectorAll('.info-imge > div ');
//     images.forEach(function(div) {
//         div.style.display = 'none'
//     });
//     var showimage = document.querySelector('.' + imageId);
//     if(showimage){
//         showimage.style.display = 'block'
//     }
// }


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







// function toggleImage(imageId) {
//     var images = document.querySelectorAll('.info-image > div');
//     images.forEach(function(div) {
//         div.style.display = 'none';
//     });
//     var showImage = document.querySelector('.' + imageId);
//     if (showImage) {
//         showImage.style.display = 'block';
//     }
// }

