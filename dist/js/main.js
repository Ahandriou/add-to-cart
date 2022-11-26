$( document ).ready(function() {
    $('.add-to-cart').on('click', function (e) {
        e.preventDefault();
        var cart = $('.shopping-cart');
        var cartTotal = cart.attr('data-totalitems');
        var newCartTotal = parseInt(cartTotal) + 1;

        var imgtodrag = $(this).parents('.card').find(".image");

        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                    top: imgtodrag.offset().top,
                    left: imgtodrag.offset().left
                })
                .css({
                    'opacity': '0.8',
                    'position': 'absolute',
                    'height': '275px',
                    'width': '320px',
                    'z-index': '100'
                })
                .appendTo($('body'))
                .animate({
                    'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 130,
                    'height': 120
                }, 1000, 'easeInOutExpo');
    
            setTimeout(function () {
                cart.attr('data-totalitems', newCartTotal);
                cart.effect("shake", {
                    times: 1,
                    distance: 9
                }, 200);
            }, 1400);
    
            imgclone.animate({
                'width': 0,
                'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });

});

// ----------------------------------------------------
