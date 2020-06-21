function doitlol() {
    var y = $(this).scrollTop();
    $('.containerBoxes').addClass('animationforboxes');
    y = y * -1 / 5 + 'px';
    $('.mainimage').css('transform', 'translateY(' + y + ')');
};

$(document).ready(function() {
     doitlol();
    $(window).scroll(function() {
        doitlol()
    });
});

function navControl() {
    document.getElementById('navBar').classList.toggle('navBarToggle')
};

function openStore(w) {
    $('.buy-page, .buy' + w).css('display', 'block');
};

function closeStore() {
    $('.buy-page, .buy-pages').css('display', 'none');
};

function circleAnimation(y) {
    let x = 440 - (440 * y) / 100;
    $('circle:nth-child(2)').css('stroke-dashoffset', x, 'stroke', 'rgb(255, 102, 102);')
};
$(document).ready(function () {
    function changePercent(){
        let p = $('#percentage').val();
        let h = 440 - (440 * p) / 100;
        $('.test-circle circle:nth-child(2)').css('stroke-dashoffset', h);
        $('.percent').html(p + '%');
        x = setTimeout(function(){changePercent()}, 50);
    }   
    changePercent();
});