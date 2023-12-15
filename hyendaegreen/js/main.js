document.addEventListener('DOMContentLoaded',function(){
   //전체메뉴 스크립트
    let navList = document.querySelector(".gnb > ul ")

    navList.addEventListener("mouseover",() => {
        document.getElementById("header").classList.add("on");
    });

    navList.addEventListener("mouseout",() => {
        document.getElementById("header").classList.remove("on");
    });


    
    // 메뉴아이콘 클릭시 이벤트 
    // let barBtn = document.querySelector(".all")
    // let gnb = document.querySelector(".gnb")
    
    // barBtn.addEventListener("click",() => {
    //     barBtn.classList.toggle('on')
    //     gnb.classList.toggle('on')
    // })


  
    // 이 코드는 창이 열릴때 첫번째 슬라이더의 트랜지션을 적용하기 위한 코드입니다.
    $('.main-slider').on('init', function(event, slick) {
        $('.main-slider').find('.slick-current').removeClass('slick-active').addClass('reset-animation');
        setTimeout( function() {
            $('.main-slider').find('.slick-current').removeClass('reset-animation').addClass('slick-active');
        }, 1);
    });
    
    //main .visual_area slider_txt :  slick(플러그인) 적용
    $('.main-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 3000, 
        fade: true,
        prevArrow: $('.prev'), //버튼없애기
        nextArrow: $('.next'), //버튼없애기
        cssEase:'linear'
    });
    
    //.main business : slick(플러그인) 적용
    $('.business_area .slide_area').slick({
        dots: true,
        infinite: true,
        arrows:false,
        slidesToShow: 3,
        centerMode: true,
        variableWidth:true,
        responsive:[
            {
                breakpoint:1023,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1, //한번에 넘길 슬라이드 아이템 개수
                    centerMode:false,
                    variableWidth:false,//사진마다 width의 크기가 다른가?(true or false) ▶기본값 false
                    adaptiveHeight:true
                }
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    centerMode:false,
                    variableWidth:true,
                }
            }
        ]
    });

    
});