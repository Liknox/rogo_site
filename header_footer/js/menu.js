const main = document.querySelector('main'),
    burgerBtn = document.querySelector('.burger-btn'),
    menuMobile = document.querySelector('.menu')


burgerBtn.addEventListener('click', function(){
    main.classList.toggle('active-menu__main')
    main.style.transition = '0.4s'
    document.body.classList.toggle("stop-scrolling");
    if(main.classList.contains('active-menu__main')){
        setTimeout(function(){
            menuMobile.style.opacity = '1'
        }, 200)
    }else{
        menuMobile.style.opacity = '0'
    }

    if(menuMobile.classList.contains('display-none')){
        menuMobile.classList.remove('display-none')
        menuMobile.style.display = 'flex'
    }else{
        menuMobile.classList.add('display-none')
        menuMobile.style.display = 'none'
    }
})