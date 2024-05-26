const NAV = document.querySelector('nav');

$(document).ready(function() {
    var NavFill = function() {
        var ScrollY = $(window).scrollTop();

        if (ScrollY > 0) {
            // wysun
            $('#nav-background').removeClass('back-stretch-animation')
            $('#nav-background').addClass('stretch-animation');
        }
        else {
            // schowaj
            $('#nav-background').removeClass('stretch-animation');
            $('#nav-background').addClass('back-stretch-animation')
        }
    };

    NavFill();

    $(window).scroll(function() {
        NavFill();
    });
});

setInterval(function () {
    var burl = 'https://api.binance.com/api/v3/ticker/price?symbol='
    var symbol = 'BTCUSDT'
    var url = burl + symbol
    var ourRequest = new XMLHttpRequest()

    ourRequest.open('GET', url, true)
    ourRequest.onload = function() {
    var str = ourRequest.responseText
    var strobj = JSON.parse(str)
    document.getElementById('bitcoin-price').innerHTML = parseInt(strobj.price) + ' USD!';

    }
    ourRequest.send()
}, 1000);