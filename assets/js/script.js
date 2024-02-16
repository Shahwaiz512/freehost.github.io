function showForm(){
    const  sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
    sidebar.style.transition = "all 0.2s";
}


    function hideForm(){
    const  sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


// function toggleBorderShadow(selectedDiv) {
//     // Reset border and box shadow for all divs
//     var divs = document.querySelectorAll('.active1');
//     divs.forEach(function(div) {
//       div.style.borderRight = 'none';
//       div.style.boxShadow = 'none';
//     });
  
//     // Apply border and box shadow to the selected div
//     var selectedDivIndex = selectedDiv - 1;
//     var selectedDivElem = divs[selectedDivIndex];
//     selectedDivElem.style.borderRight = '4px solid #ccc';
//     selectedDivElem.style.boxShadow = '3px 3px 15px 0 hsla(0,0%,73%,.15)';
// }  






function closeAdvertisement() {
    var advertisementWrapper = document.getElementById('advertisement-wrapper');
    advertisementWrapper.style.display = 'none';
    document.body.classList.remove('blur'); // Remove blur effect from the rest of the webpage
}
