$(function () {

  /* swiper */
  const ob = new Swiper('.ob', {
    speed: 1000,
    pagination: { el: ".swiper-pagination", type: "bullets", clickable: true, },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Swiper 슬라이드가 변경될 때마다 실행되는 콜백 함수
  ob.on('slideChange', function () {
    // 현재 슬라이드가 마지막 슬라이드인지 확인
    if (ob.isEnd) {
      document.querySelector('.swiper-button-next').textContent = '홈으로';  // "다음" -> "홈으로"로 변경
    } else {
      document.querySelector('.swiper-button-next').textContent = '다음';  // 다시 "다음"으로 변경
    }
  });

  // Swiper 다음 버튼에 이벤트 추가 (클릭 시 마지막 슬라이드라면 main.html로 이동)
  document.querySelector('.swiper-button-next').addEventListener('click', function () {
    if (ob.isEnd) {
      // 마지막 슬라이드에서 "홈으로" 버튼 클릭 시 main.html로 이동
      $(".swiper-button-next").click(function () { window.location.href = "../main.html"; });
    }
  });

});