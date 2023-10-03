document.addEventListener('DOMContentLoaded', function(){
    const menuToggle=document.querySelector('.menu-toggle');
    const navList=document.querySelector('.nav-listEd');
    menuToggle.addEventListener('click', function(){
        navList.classList.toggle('active');
    });
});
