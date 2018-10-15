'use strict';

var slideShow = $('.slide-show');

var slideCount = $('.single-slide').length;
//console.log(slideCount);

var slideWidth = 100 / slideCount;

var slideIndex = 0;

slideShow.css('width', slideCount * 100 + '%');
//zapis powyżej to 4 * 100 i dodaje % //odnosi się do wszystkich slajdów

//concatenation czyli łączenie stringa

slideShow.find('.single-slide').each(function (index, element) {
    $(this).css({
        'width': slideWidth + '%', //
        'margin-left': slideWidth * index + '%'
    })
});

$('.prev-slide').click(function () {
    slide(slideIndex - 1);
});

$('.next-slide').click(function () {
    slide(slideIndex + 1);
});

function slide(newSlideIndex) {
    //    if (newSlideIndex < 0 || newSlideIndex > slideCount - 1 // oznacza, że zaczynamy od zerowego indexu, także || blokuje przesuwanie obrazków, żeby nie zjeżdzały poniżej zera
    //    ) {
    //        return;
    //              
    //    }
    //to samo co wyżej w komentarzu z tym, że z większą liczbą możliwości

    if (newSlideIndex < 0) {
        newSlideIndex = slideCount - 1;
    }

    if (newSlideIndex > slideCount - 1) {
        newSlideIndex = 0;
    }


    var slideCaption = $('.slide-caption').eq(newSlideIndex);


    var marginLeft = newSlideIndex * (-100) + '%';

    slideCaption.hide();

    slideShow.animate({
        'margin-left': marginLeft,
    }, 800, function () {
        slideIndex = newSlideIndex; //aby zapamiętać aktualny slide
        slideCaption.fadeIn();
    })
}
