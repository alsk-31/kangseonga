document.addEventListener('DOMContentLoaded',function(){

  // Modal을 가져옵니다.
var modals = document.getElementsByClassName("modal");
// Modal을 띄우는 클래스 이름을 가져옵니다.
var btns = document.getElementsByClassName("btn");
// Modal을 닫는 close 클래스를 가져옵니다.
var spanes = document.getElementsByClassName("close");
var funcs = [];
 
// Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
function Modal(num) {
  return function() {
    // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
    btns[num].onclick =  function() {
        modals[num].style.display = "block";
        console.log(num);
    };
 
    // <span> 태그(X 버튼)를 클릭하면 Modal이 닫습니다.
    spanes[num].onclick = function() {
        modals[num].style.display = "none";
    };
  };
}
 
// 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
for(var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}
 
// 원하는 Modal 수만큼 funcs 함수를 호출합니다.
for(var j = 0; j < btns.length; j++) {
  funcs[j]();
}
 
// Modal 영역 밖을 클릭하면 Modal을 닫습니다.
window.onclick = function(event) {
  if (event.target.className == "modal") {
      event.target.style.display = "none";
  }
};


  //모달창 스와이퍼
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  
  

  //스크롤이벤트
  let btn = document.getElementById('up-too');
  let docu = document.documentElement;
  let off;
  let scrollHeight; 
  let docuHeight;

  //클래스 이름이 들어가있든 들어가있지않든 강제로 클레스이름을 삽입한다. 
  //btn.className='on';

  docuHeight = Math.max(docu.offsetHeight,docu.scrollHeight);

 // console.log(docuHeight);

  if(docuHeight!=0){
    off = docuHeight/5; //문서전체를 5등분 해준 값
 console.log(off);
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


})

