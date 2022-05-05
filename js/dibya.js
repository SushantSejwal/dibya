function dibya_navigation() {
    // hamburger and navigation
    const hamburger = document.querySelector('.dibya-ham-burger-menu');
    const hamburger_lines = document.querySelectorAll('.dibya-ham-burger-menu-line');
    const hamburger_close = document.querySelector('.dibya-ham-burger-menu-text-close');
    const hamburger_menu = document.querySelector('.dibya-ham-burger-menu-text-menu');

    // navigation
    const dib_nav_anchor = document.querySelectorAll('.dibya-nav-link');
    const dibya_nav = document.querySelector('.dibya-nav');

    hamburger.addEventListener('click', () => {

        dibya_nav.classList.toggle('active');
        dib_nav_anchor.forEach((link) => {
            link.classList.toggle('active');
        });

        hamburger_lines.forEach((line) => {
            line.classList.toggle('active');
            if (line.classList.contains('active')) {
                hamburger_close.classList.add('active');
                hamburger_menu.classList.remove('active');
            } else {
                hamburger_close.classList.remove('active');
                hamburger_menu.classList.add('active');
            }
            if (line.classList.contains('active')) {
                dib_nav_anchor.forEach((link) => {
                    link.addEventListener('click', () => {
                        dib_nav_anchor.forEach((link) => {
                            link.classList.remove('active');
                        });
                        dibya_nav.classList.remove('active');
                        line.classList.remove('active');
                        hamburger_close.classList.remove('active');
                        hamburger_menu.classList.add('active');
                    });
                });
            }
        });

    });

    // logo
    let logo_wrapper = document.querySelector('.dibya-logo-wrapper');
    let logo_anchor = document.querySelector('.dibya-logo-anchor');
    let hamburger_wrapper = document.querySelector('.dibya-ham-burger-menu-wrapper');

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;

        if (scrollY < 24 * 3) {
            logo_wrapper.style.backdropFilter = `none`;
            logo_wrapper.style.transition = `backdrop-filter 0.3s ease-in-out`;
        } else {
            logo_wrapper.style.backdropFilter = `saturate(180%) blur(20px)`;
            // logo_wrapper.style.background = `rgba(0, 0, 0, 0.3)`;
            logo_wrapper.style.transition = `backdrop-filter 0.3s ease-in-out`;
            
        }

        if (scrollY < 24 * 10) {
            let amount = Math.floor(scrollY / 10);
            logo_wrapper.style.height = `calc(80px - ${amount}px)`;
            hamburger_wrapper.style.height = `calc(80px - ${amount}px)`;
            let logo_anchor_width = ((scrollY / 5) / 10);
            logo_anchor.style.width = `calc(30px - ${logo_anchor_width}px`;
        } else {
            logo_wrapper.style.height = `56px`;
            hamburger_wrapper.style.height = `56px`;
            logo_anchor.style.width = '25px';
        }

    });
}

dibya_navigation()