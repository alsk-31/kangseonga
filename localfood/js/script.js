document.addEventListener('DOMContentLoaded', function () {

window.onload = function(){
    let navList = document.querySelector(".nav > ul");

    navList.addEventListener("mouseover",()=>{
        navList.querySelectorAll(".submenu").forEach(sub=>{
            sub.style.height="155px";
        });
        document.getElementById("header").classList.add("on")
    });
    navList.addEventListener("mouseout", () => {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "0px";
        });
        document.getElementById("header").classList.remove("on");
    });
// 메뉴 버튼 클릭 시 전체 메뉴 보이기/숨기기
const menuItems = document.querySelectorAll(".navbar_menu > ul > li > a"); // 각 메뉴 아이템 선택
const toggleBtn = document.querySelector('.navbar_togleBtn');
const menu = document.querySelector('.navbar_menu');
const link = document.querySelector('.navbar_link');

// 메뉴 버튼 클릭 시 전체 메뉴 보이기/숨기기 (1024px 이하에서 적용)
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    link.classList.toggle('active');
});

// 화면 크기가 변경되었을 때, 반응형 조건에 맞게 스크립트 적용
function applyResponsiveMenu() {
    if (window.innerWidth <= 1024) {
        // 1024px 이하일 때는 클릭 시 서브메뉴 열기/닫기
        menuItems.forEach(menuItem => {
            menuItem.addEventListener("click", function(e) {
                e.preventDefault(); // 기본 링크 동작 막기

                // 클릭한 메뉴의 서브메뉴 선택
                const submenu = this.nextElementSibling;

                // 다른 모든 서브메뉴를 닫음
                document.querySelectorAll(".navbar_menu > ul > li > ul").forEach(sub => {
                    if (sub !== submenu) {
                        sub.style.display = "none";
                    }
                });
            });
        });
    } else {
        // 1024px 이상일 때는 hover로 서브메뉴 표시
        menuItems.forEach(menuItem => {
            const submenu = menuItem.nextElementSibling;
            submenu.style.display = '';  // 1024px 이상에서는 CSS로 제어하므로 display 속성 초기화
        });
    }
}

// 페이지 로드 시 적용
applyResponsiveMenu();

// 화면 크기 변경 시 적용
window.addEventListener('resize', applyResponsiveMenu);



 // 이 코드는 창이 열릴때 첫번째 슬라이더의 트랜지션을 적용하기 위한 코드입니다.
 $('.main-slider').on('init', function(event, slick) {
    $('.main-slider').find('.slick-current').removeClass('slick-active').addClass('reset-animation');
    setTimeout( function() {
        $('.main-slider').find('.slick-current').removeClass('reset-animation').addClass('slick-active');
    }, 1);
});
// 페이지 로드 시 적용
applyResponsiveMenu();

function applyResponsiveMenu() {
    const menuItems = document.querySelectorAll(".navbar_menu > ul > li > a");

    if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
        // 768px ~ 1023px 구간에서는 서브메뉴가 아예 보이지 않도록 설정
        menuItems.forEach(menuItem => {
            const submenu = menuItem.nextElementSibling;
            submenu.style.display = "none"; // 서브메뉴가 클릭되더라도 보이지 않도록 설정
        });
    } else if (window.innerWidth <= 1024) {
        // 1024px 이하에서만 클릭 시 서브메뉴 열기/닫기
        menuItems.forEach(menuItem => {
            menuItem.addEventListener("click", function(e) {
                e.preventDefault(); // 기본 링크 동작 막기

                const submenu = this.nextElementSibling;

                // 다른 서브메뉴 닫기
                document.querySelectorAll(".navbar_menu > ul > li > ul").forEach(sub => {
                    if (sub !== submenu) {
                        sub.style.display = "none";
                    }
                });

                // 현재 클릭한 서브메뉴 열기/닫기
                submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
            });
        });
    } else {
        // 1024px 이상에서는 hover로 서브메뉴 표시
        menuItems.forEach(menuItem => {
            const submenu = menuItem.nextElementSibling;
            submenu.style.display = ''; // 초기화 (1024px 이상에서는 CSS로 제어)
        });
    }
}

// 화면 크기 변경 시 적용
window.addEventListener('resize', applyResponsiveMenu);

$('.main-slider').slick({
    dots: true, // 페이지 표시 활성화
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    prevArrow: $('.prev'), // 이전 버튼
    nextArrow: $('.next'), // 다음 버튼
    cssEase:'linear'
});

// .slick-dots 클릭 시 해당 슬라이드로 이동
$('.slick-dots li button').on('click', function () {
    const index = $(this).parent().index(); // 클릭한 dot의 인덱스 가져오기
    $('.main-slider').slick('slickGoTo', index); // 해당 인덱스로 이동
});

    // 배열 정의
const cities = [
    "서울",
    "대전",
    "대구",
    "부산",
    "광주",
    "인천",
    "경기 북",
    "경기 남",
    "충북",
    "충남",
    "경북",
    "경남",
    "전북",
    "전남",
    "강원",
    "제주",
    "세종",
  ];
  
  const buttonContainer = document.getElementById("buttonContainer");

  // 배열의 크기에 따라 버튼을 생성하고 컨테이너에 추가
  cities.forEach((city) => {
    const button = document.createElement("button");
    button.textContent = city;
    button.className = "local";
    button.addEventListener("click", function () {
      // 이전에 클릭된 버튼의 배경색을 제거
      const prevClickedButton = document.querySelector(".clicked");
      if (prevClickedButton) {
        prevClickedButton.classList.remove("clicked");
      }
      // 현재 클릭된 버튼에 배경색을 추가
      this.classList.add("clicked");
    });
    buttonContainer.appendChild(button);
  });

  function filterStores() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const tableRows = document.querySelectorAll('#storeList tr');
    let count = 0;

    tableRows.forEach(row => {
        const storeName = row.textContent.toLowerCase();
        if (storeName.includes(input)) {
            row.style.display = '';
            count++;
        } else {
            row.style.display = 'none';
        }
    });

    document.getElementById('total_store').textContent = `(${count}건)`;
}

const filters = document.querySelectorAll('.local_btn ul li a');
filters.forEach(filter => {
    filter.addEventListener('click', function(e) {
        e.preventDefault();
        filters.forEach(f => f.classList.remove('active'));
        this.classList.add('active');
        // Add additional filter logic based on the filter clicked, if needed.
    });
});
}
const filters = document.querySelectorAll('.local_btn ul li a');

window.addEventListener('load', function() {
    const listbox = document.getElementById('listbox');
    const plButton = document.querySelector('.pl');

    document.querySelector('.pl').addEventListener('click', function() {
        listbox.style.display = listbox.style.display === 'none' || listbox.style.display === '' ? 'block' : 'none';
    });

    document.querySelectorAll('.list').forEach(function(button) {
        button.addEventListener('click', function() {
            plButton.textContent = this.textContent;
            listbox.style.display = 'none';
        });
    });
});
});