document.addEventListener('DOMContentLoaded',function(){
  
    //포트폴리오 롤링컨텐츠(6) 스크립트 : swiper
   var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 24,
    autoplay: {
    delay: 5000,
    },   
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
  });



//스크롤이벤트
  let btn = document.getElementById('up-too');
  let docu = document.documentElement;
  let off; //도큐먼트가 바디를 넘어갔을떼 도큐먼트를 5등분 할 것임
  let scrollHeight; //문서가 올라갔을때 바디를 포함하지 않는 바디위의 높이값
  let docuHeight; //도큐먼트 총 높이값

  //클래스 이름이 들어가있든 들어가있지않든 강제로 클레스이름을 삽입한다. 
  //btn.className='on';

  docuHeight = Math.max(docu.offsetHeight,docu.scrollHeight);// 둘다 문서의 높이값을 설정해준다. 두가지를 쓰는 이유? > 브라우져 별 높이 값이 다를수 있어서 

 // console.log(docuHeight);//문서의 전체길이

  if(docuHeight!=0){
    off = docuHeight/5; //문서전체를 5등분 해준 값
 //console.log(off);//문서5분의 1 길이
  }

//console.log(docu.scrollTop);  //스크롤탑은 문서를 스크롤했을때, 스크롤한 값을 측정해준다. 

//스크롤탑은  문서가 수치화가 되지않는 요소들만 측정을해준다.
  window.addEventListener('scroll',function(){
      scrollHeight = docu.scrollTop;
      //실시간으로 스크롤의 값을 잡아주고있다. 
      //console.log(scrollHeight);   
      btn.className=(scrollHeight>off) ? 'on' : '';
      /*if(scrollHeight>off){
       btn.className ='on';  }*/


     // if(scrollHeight>off){
    //    btn.classList.add('on');
    // }
  })
  
  
  btn.addEventListener('click',function(e){
    e.preventDefault(); //기능을 막아주는 자바스크립트 내장 함수prevenDefualt();
    timer1();
  })

  function timer1(){
     let scroll = setInterval(function(){
      if(scrollHeight!=0){
        window.scrollBy(0,-110);

      }else{
        clearInterval(scroll);
      }
     },20)
  }

  let el = $("section");
  $(el).each(function (index) {
    $(this).on("mousewheel", function () {
      console.log(event.wheelDelta);
      let moveTop = $(window).scrollTop();
      let eleselector = $(el).eq(index);
      if (event.wheelDelta < 0) {
        if ($(eleselector).next() != undefined) {
          try {
            moveTop = $(eleselector).next().offset().top;
          } catch (e) {}
        }
      } else {
        if ($(eleselector).prev() != undefined) {
          try {
            moveTop = $(eleselector).prev().offset().top;
          } catch (e) {}
        }
      }
      $("html,body")
        .stop()
        .animate({ scrollTop: moveTop + "px" }, 800);
    });
  });



})

