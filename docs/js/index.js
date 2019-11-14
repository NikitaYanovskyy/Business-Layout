$(document).ready(()=>{
////////Side Menu
$('.side-open').click(()=>{
    $('.side-navigation').css({
        'opacity': '1',
        'right': '0'
    })
})
$('.side-close').click(()=>{
    $('.side-navigation').css({
        'opacity': '0',
        'right': '-300px'
    })
})
//////////////////////////////////////Mobile Menu
//////////////////////////////Btn Animation
var checkClick = false;
$('.mobile-burger-wrapper').click(()=>{
        if(checkClick == false){
            $('.mobile-main-popup').css({
                'max-height': '5000px'
            })
            //////Button Animation
            $('.mobile-burger').addClass('burger-toggle-move');
            $('.mobile-burger').addClass('burger-toggle-rotate');
            
            checkClick = true;  
        }else
        if(checkClick == true){
            $('.mobile-main-popup').css({
                'max-height': '0'
            })
            //////Button Animation
            $('.mobile-burger').removeClass('burger-toggle-rotate');
            $('.mobile-burger').removeClass('burger-toggle-move');
            checkClick = false;
        }
})

//////////////////////////////Main PopUp Arrow Animation
////////////////////////////False arrays
var mainClickCheck = [];
for (let i = 0; i < 5; i++) {
    mainClickCheck.push(false);
}
var subClickCheck = [];
for (let i = 0; i < 10; i++) {
    subClickCheck.push(false);
}
////////////////////////////Main menu manipulations

/*///////////////// Close all other main menu li tries....
$.each($('.click-close'),function(){
    $(this).click(()=>{
    $('.mobile-close-all').css({
        'max-height': '0'
    })
    $('.main-list img').css({
        'transform': 'rotate(90deg)'
    })
})
})
*/
$.each($('.main-li .mobile-li-wrapper'),function(i){
    $(this).click(()=>{
        if(mainClickCheck[i] == false){
            $(this).find('.main-arrow').css({
                'transform': 'rotate(-90deg)'
            })
            $(this).parent().find('.mobile-sub-menu').css({
                'max-height': '5000px'
            })
            mainClickCheck[i] = true;
        }else if(mainClickCheck[i] == true){
            $(this).parent().find('.mobile-sub-menu').css({
                'max-height': '0'
            })
            $(this).find('.main-arrow').css({
                'transform': 'rotate(90deg)'
            })
            mainClickCheck[i] = false;
        }else{
            $(this).find('.main-arrow').css({
                'transform': 'rotate(-90deg)'
            })
            $(this).parent().find('.mobile-sub-menu').css({
                'max-height': '5000px'
            })
            mainClickCheck[i] = true;
        }
    })
})

$.each($('.sub-li .mobile-li-wrapper'),function(i){
    $(this).click(()=>{
        if(subClickCheck[i] == false){
            $(this).find('.sub-arrow').css({
                'transform': 'rotate(-90deg)'
            })
            $(this).parent().find('.mobile-sub-sub-menu').css({
                'max-height': '5000px'
            })
            subClickCheck[i] = true;
        }else{
            $(this).parent().find('.mobile-sub-sub-menu').css({
                'max-height': '0'
            })
            $(this).find('.sub-arrow').css({
                'transform': 'rotate(90deg)'
            })
            subClickCheck[i] = false;
        }
    })
})
///////////////////////////////////////////////////Pages pop-up
$('.pages').click(()=>{
    if(mainClickCheck[1] == false){
        $('.mobile-pages-pop-up').css({
            'max-height':'5000px'
        })
        mainClickCheck[1] = true;
    }else{
        $('.mobile-pages-pop-up').css({
            'max-height':'0'
        })
        mainClickCheck[1] = false;
    } 
})

})