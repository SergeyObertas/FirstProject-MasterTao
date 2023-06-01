$(document).ready(function() {
    $('.first-screen-slider').slick({
        dots: true,
        speed: 1000,
        appendArrows: ".container-arrows",
        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,

                }
            },

        ]

    });


    Fancybox.bind('[data-fancybox="gallery"]', {

    });
});



function checkboxContainerPadding() {
    const checkButton1 = document.querySelector('.check-button');
    const checkButton2 = document.querySelectorAll('.check-button');
    console.log(checkButton1);
    console.log(checkButton2);


    checkButton2.forEach(item => {
        item.closest('[class*=col]').classList.add('padding-top');
    })

}

if (document.querySelector(".calculation-form")) {
    checkboxContainerPadding()
} else {
    null
}