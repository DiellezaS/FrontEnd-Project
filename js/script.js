 new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 4,
        gap: 28,
        breakpoints: {
            1024: { perView: 4 },
            768: { perView: 2 },
            648: { perView: 1 }
        }
       
    }).mount();
