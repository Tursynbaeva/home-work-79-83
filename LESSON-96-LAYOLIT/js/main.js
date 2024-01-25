(function () {
    
    document.addEventListener('click', burgerInIt)

    function burgerInIt(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavlist = e.target.closest('.nav__list')

        if (!burgerIcon && !burgerNavlist) return

        document.body.classList.add('body--opened-menu')
    }
})
