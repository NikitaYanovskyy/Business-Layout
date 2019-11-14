$(document).ready(()=>{
/////////////////////Navigation Dropdown
$('.main-list-1 li:nth-of-type(1)').mouseover(()=>{
    /////////////////Delete all submenues of main list
    $.each($('.main-list-1 ul'),function(){
        $(this).css({
            'z-index': '-1',
        })
    })
    $.each($('.main-list-1 ul li ul'),function(){
        $(this).css({
            'z-index': '-1',
        })
    })
    $('.pages-dropdown').css({
        'z-index': '-1',
    })


    $('.home-dropdown').css({
        'opacity': '1',
        'top': '75px',
        'z-index': 1
    })
})

$('.main-list-1 li:nth-of-type(1)').mouseout(()=>{
    $('.home-dropdown').css({
        'opacity': '0',
        'top': '86px',
        'z-index': -1
    })
})

$('.main-list-1 li:nth-of-type(2)').mouseover(()=>{
        /////////////////Delete all submenues of main list
        $.each($('.main-list-1 ul'),function(){
            $(this).css({
                'z-index': '-1',
            })
        })
        $.each($('.main-list-1 ul li ul'),function(){
            $(this).css({
                'z-index': '-1',
            })
        })
        $('.pages-dropdown').css({
            'z-index': '-1',
        })


    $('.pages-dropdown').css({
        'opacity': '1',
        'top': '75px',
        'z-index': 1,
    })
})
$('.main-list-1 li:nth-of-type(2)').mouseout(()=>{
    $('.pages-dropdown').css({
        'opacity': '0',
        'top': '86px',
        'z-index': -1,
    })
})

$('.main-list-1 li:nth-of-type(3)').mouseover(()=>{
    /////////////////Delete all submenues of main list
    $.each($('.main-list-1 ul'),function(){
        $(this).css({
            'z-index': '-1',
        })
    })
    $.each($('.main-list-1 ul li ul'),function(){
        $(this).css({
            'z-index': '-1',
        })
    })
    $('.pages-dropdown').css({
        'z-index': '-1',
    })


$('.works-dropdown').css({
    'opacity': '1',
    'top': '75px',
    'z-index': 1,
})
})
$('.main-list-1 li:nth-of-type(3)').mouseout(()=>{
$('.works-dropdown').css({
    'opacity': '0',
    'top': '86px',
    'z-index': -1,
})
})




$('.main-list-1 li:nth-of-type(4)').mouseover(()=>{
    /////////////////Delete all submenues of main list
    $.each($('.main-list-1 ul'),function(){
        $(this).css({
            'z-index': '-1',
        })
    })
    $.each($('.main-list-1 ul li ul'),function(){
        $(this).css({
            'z-index': '-1',
        })
    })
    $('.pages-dropdown').css({
        'z-index': '-1',
    })


$('.blog-dropdown').css({
    'opacity': '1',
    'top': '75px',
    'z-index': 1,
})
})
$('.main-list-1 li:nth-of-type(4)').mouseout(()=>{
$('.blog-dropdown').css({
    'opacity': '0',
    'top': '86px',
    'z-index': -1,
})
})


$('.main-list-1 li:nth-of-type(5)').mouseover(()=>{
    /////////////////Delete all submenues of main list
    $.each($('.main-list-1 ul'),function(){
        $(this).css({
            'z-index': '-1',
        })
    })
    $.each($('.main-list-1 ul li ul'),function(){
        $(this).css({
            'z-index': '-1',
        })
    })
    $('.pages-dropdown').css({
        'z-index': '-1',
    })


$('.shop-dropdown').css({
    'opacity': '1',
    'top': '75px',
    'z-index': 1,
})
})
$('.main-list-1 li:nth-of-type(5)').mouseout(()=>{
$('.shop-dropdown').css({
    'opacity': '0',
    'top': '86px',
    'z-index': -1,
})
})






////////////////////////Home dropdown children mouseover
$('.home-dropdown li:nth-of-type(1)').mouseover(()=>{
    $.each($('.child-dropdown'),function(){
        $(this).css({
            'z-index': '-1',
            'display': 'none'
        })
    })
    $('.home-dropdown li:nth-of-type(1) .child-dropdown').css({
        'z-index': '1',
        'display': 'block'
    })
})
$('.home-dropdown li:nth-of-type(2)').mouseover(()=>{
    $.each($('.child-dropdown'),function(){
        $(this).css({
            'z-index': '-1',
            'display': 'none'
        })
    })
    $('.home-dropdown li:nth-of-type(2) .child-dropdown').css({
        'z-index': '1',
        'display': 'block'
    })
})

$('.home-dropdown li:nth-of-type(3)').mouseover(()=>{
    $.each($('.child-dropdown'),function(){
        $(this).css({
            'z-index': '-1',
            'display': 'none'
        })
    })
    $('.home-dropdown li:nth-of-type(3) .child-dropdown').css({
        'z-index': '1',
        'display': 'block'
    })
})


////////////////////////Home dropdown mouseout (child on child)
$('.home-dropdown li:nth-of-type(1)').mouseout(()=>{
    $('.home-dropdown li:nth-of-type(1) .child-dropdown').css({
        'display': 'none',
        'z-index': '-1'
    })
})
$('.home-dropdown li:nth-of-type(2)').mouseout(()=>{
    $('.home-dropdown li:nth-of-type(2) .child-dropdown').css({
        'display': 'none',
        'z-index': '-1'
    })
})
$('.home-dropdown li:nth-of-type(3)').mouseout(()=>{
    $('.home-dropdown li:nth-of-type(3) .child-dropdown').css({
        'display': 'none',
        'z-index': '-1'
    })
})




//////////////////////////////////////////Works-dropdown mouseover


$('.works-dropdown li:nth-of-type(1)').mouseover(()=>{
    $.each($('.child-dropdown'),function(){
        $(this).css({
            'z-index': '-1',
            'display': 'none'
        })
    })
    $('.works-dropdown li:nth-of-type(1) .child-dropdown').css({
        'z-index': '1',
        'display': 'block'
    })
})
$('.works-dropdown li:nth-of-type(2)').mouseover(()=>{
    $.each($('.child-dropdown'),function(){
        $(this).css({
            'z-index': '-1',
            'display': 'none'
        })
    })
    $('.works-dropdown li:nth-of-type(2) .child-dropdown').css({
        'z-index': '1',
        'display': 'block'
    })
})
$('.works-dropdown li:nth-of-type(3)').mouseover(()=>{
    $.each($('.child-dropdown'),function(){
        $(this).css({
            'z-index': '-1',
            'display': 'none'
        })
    })
    $('.works-dropdown li:nth-of-type(3) .child-dropdown').css({
        'z-index': '1',
        'display': 'block'
    })
})
/////////////////////////////////////////////////Works dropdown mouseout (child on child)
$('.works-dropdown li:nth-of-type(1)').mouseout(()=>{
    $('.works-dropdown li:nth-of-type(1) .child-dropdown').css({
        'display': 'none',
        'z-index': '-1'
    })
})
$('.works-dropdown li:nth-of-type(2)').mouseout(()=>{
    $('.works-dropdown li:nth-of-type(2) .child-dropdown').css({
        'display': 'none',
        'z-index': '-1'
    })
})
$('.works-dropdown li:nth-of-type(3)').mouseout(()=>{
    $('.works-dropdown li:nth-of-type(3) .child-dropdown').css({
        'display': 'none',
        'z-index': '-1'
    })
})


//////////////////////////////////////////Blog-dropdown mouseover


$('.blog-dropdown li:nth-of-type(1)').mouseover(()=>{
    $.each($('.child-dropdown'),function(){
        $(this).css({
            'z-index': '-1',
            'display': 'none'
        })
    })
    $('.blog-dropdown li:nth-of-type(1) .child-dropdown').css({
        'z-index': '1',
        'display': 'block'
    })
})
$('.blog-dropdown li:nth-of-type(2)').mouseover(()=>{
    $.each($('.child-dropdown'),function(){
        $(this).css({
            'z-index': '-1',
            'display': 'none'
        })
    })
    $('.blog-dropdown li:nth-of-type(2) .child-dropdown').css({
        'z-index': '1',
        'display': 'block'
    })
})
$('.blog-dropdown li:nth-of-type(3)').mouseover(()=>{
    $.each($('.child-dropdown'),function(){
        $(this).css({
            'z-index': '-1',
            'display': 'none'
        })
    })
    $('.blog-dropdown li:nth-of-type(3) .child-dropdown').css({
        'z-index': '1',
        'display': 'block'
    })
})
$('.blog-dropdown li:nth-of-type(4)').mouseover(()=>{
    $.each($('.child-dropdown'),function(){
        $(this).css({
            'z-index': '-1',
            'display': 'none'
        })
    })
    $('.blog-dropdown li:nth-of-type(4) .child-dropdown').css({
        'z-index': '1',
        'display': 'block'
    })
})
/////////////////////////////////////////////////Blog dropdown mouseout (child on child)
$('.blog-dropdown li:nth-of-type(1)').mouseout(()=>{
    $('.blog-dropdown li:nth-of-type(1) .child-dropdown').css({
        'display': 'none',
        'z-index': '-1'
    })
})
$('.blog-dropdown li:nth-of-type(2)').mouseout(()=>{
    $('.blog-dropdown li:nth-of-type(2) .child-dropdown').css({
        'display': 'none',
        'z-index': '-1'
    })
})
$('.blog-dropdown li:nth-of-type(3)').mouseout(()=>{
    $('.blog-dropdown li:nth-of-type(3) .child-dropdown').css({
        'display': 'none',
        'z-index': '-1'
    })
})
$('.blog-dropdown li:nth-of-type(4)').mouseout(()=>{
    $('.blog-dropdown li:nth-of-type(4) .child-dropdown').css({
        'display': 'none',
        'z-index': '-1'
    })
})


})

