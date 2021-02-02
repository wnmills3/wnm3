$(document).ready(function() {
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span)').addClass('fa-play');
        } else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span)').addClass('fa-pause');
        }
    });
    $('#login-link').click(function() {
        if ($('#loginModal').hasClass('show') == false) {
            $('#loginModal').modal('show');
        } else if ($('#loginModal').hasClass('show')) {
            $('#loginModal').modal('hide');
        }
    })
    $('#loginModalClose').click(function() {
        if ($('#loginModal').hasClass('show')) {
            $('#loginModal').modal('hide');
        }
    })
    $('#loginCancel').click(function() {
        if ($('#loginModal').hasClass('show')) {
            $('#loginModal').modal('hide');
        }
    })
    $('#reserveTable-link').click(function() {
        if ($('#resModal').hasClass('show') == false) {
            $('#resModal').modal('show');
        } else if ($('#resModal').hasClass('show')) {
            $('#resModal').modal('hide');
        }
    })
    $('#resModalClose').click(function() {
        if ($('#resModal').hasClass('show')) {
            $('#resModal').modal('hide');
        }
    })
    $('#reserveCancel').click(function() {
        if ($('#resModal').hasClass('show')) {
            $('#resModal').modal('hide');
        }
    })
});
