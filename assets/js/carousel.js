const carouselButtons = document.querySelectorAll('[data-carousel-button]');

carouselButtons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]');
        const tabs = button.closest('[data-carousel]').querySelector('[data-tabs]');
        const text = button.closest('[data-carousel]').querySelector('[data-information]');

        // Link button to slide

        const activeSlide = slides.querySelector('[data-active');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;

        // Link button to tab

        const activeTab = tabs.querySelector('[data-active');
        let newTab = [...tabs.children].indexOf(activeTab) + offset;
        if (newTab < 0) newTab = tabs.children.length - 1;
        if (newTab >= tabs.children.length) newTab = 0;

        tabs.children[newTab].dataset.active = true;
        delete activeTab.dataset.active;

        // Link button to text

        const activeText = text.querySelector('[data-active');
        let newText = [...text.children].indexOf(activeText) + offset;
        if (newText < 0) newText = text.children.length - 1;
        if (newText >= text.children.length) newText = 0;

        text.children[newText].dataset.active = true;
        delete activeText.dataset.active;
    });
});


