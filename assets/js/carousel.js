const carouselButtons = document.querySelectorAll('[data-carousel-button]');

carouselButtons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]');
<<<<<<< HEAD
        const tabs = button.closest('[data-carousel]').querySelector('[data-tabs]');
=======
>>>>>>> upstream/main

        // Link button to slide

        const activeSlide = slides.querySelector('[data-active');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;

        // Link button to tab
<<<<<<< HEAD

        const activeTab = tabs.querySelector('[data-active');
        let newTab = [...tabs.children].indexOf(activeTab) + offset;
        if (newTab < 0) newTab = tabs.children.length - 1;
        if (newTab >= tabs.children.length) newTab = 0;

        tabs.children[newTab].dataset.active = true;
        delete activeTab.dataset.active;
=======
>>>>>>> upstream/main
    });
});

