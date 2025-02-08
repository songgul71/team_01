$(function () {

  // 모달취소버튼
  $(".modal_wrap .modal_btn_list .stroke").click(function () {
    $(".modal_wrap").hide();
  });


  // 아이디 / 비밀번호찾기

  /* 체크 */
  $(".id_bar").click(function () {
    $(".id_bar div img:first-child").attr("src", "../img/common/checked.png");
  });

  /* 아이디확인 모달 */
  $(".findlogin .pwbar").click(function () {
    $(".modal_wrap.inconsistency").show();
  });

  /* 아이디확인 모달 확인버튼 */
  $(".findlogin .inconsistency .fill").click(function () {
    $(".modal_wrap.inconsistency").hide();
  });

  /* 비밀번호재설정 버튼 */
  $(".findlogin .btn_list .btn_fill").click(function () {
    $(".complete").show();
  });

  /* 비밀번호재설정 모달 확인버튼 */
  $(".findlogin .complete .fill").click(function () {
    location.href = '../login.html';
  });


  // 회원가입

  /* 모두동의 */
  $(".agree_list li:first-child").click(function () {
    $(".agree_list li > img").attr("src", "../img/common/checked.png");
    $(".btn_gray").css({ background: "var(--hyo-blue)" });
  });

  /* 약관체크 */
  $(".agree_list li:not(:nth-child(1),:nth-child(2))").click(function () {
    $(this).find("> img").attr("src", "../img/common/checked.png");
  });

  /* 인증번호받기 */
  $(".authn").hide();
  $(".member .info_list .tit+.btn_authn").click(function () {
    $(this).hide();
    $(".authn").show();
  });

  // 온보딩

  /* 스킵모달 */
  $(".btn_skip").click(function () {
    $(".onboard .skip").fadeIn();
  });

  /* 스킵모달 -> 홈으로 */
  $(".onboard .skip .fill").click(function () {
    location.href = '../main.html';
  });

  // 메인 홈

  /* 등록된기기_정렬버튼 */
  $(".card_list > ul").not(":first").hide();
  $(".main_btn_list button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $(".card_list > ul").eq(num).show().siblings().hide();
  });


  // 알림

  /* 기기리포트 탭메뉴 */
  $(".report .report_menu > ul").not(":first").hide();
  $(".report .menu_list li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $(".report_menu > ul").eq(num).show().siblings().hide();
  })

  $(function () {
    if (location.hash == "#door") {
      $(".menu_list").find("li").eq(0).addClass("active").siblings().removeClass();
      $(".report_menu").find("#report01").show().siblings().not(".line").hide();

    } else if (location.hash == "#refrigerator") {
      $(".menu_list").find("li").eq(1).addClass("active").siblings().removeClass();
      $(".report_menu").find("#report02").show().siblings().not(".line").hide();

    } else if (location.hash == "#toilet") {
      $(".menu_list").find("li").eq(2).addClass("active").siblings().removeClass();
      $(".report_menu").find("#report03").show().siblings().not(".line").hide();

    } else if (location.hash == "#siren") {
      $(".menu_list").find("li").eq(3).addClass("active").siblings().removeClass();
      $(".report_menu").find("#report04").show().siblings().not(".line").hide();
    }
  });


  // 내기기

  /* 허브박스 hub_box */
  $(".hub_box ul li:nth-child(2)").hide();
  $(".hub_box ul li:nth-child(1)").addClass("off");
  $(".hub_box ul li:nth-child(1)").click(function () {
    $(this).removeClass("off").hide().siblings().addClass("off").show();
  });

  /* 내기기모달팝업 mydevice_modal */
  $(".connect .modal_btn_list .fill").click(function () {
    $(".complete").hide();
  });

  /* 기기검색 버튼 */
  $(".connect .btn_list .btn_fill").click(function () {
    $(".sch").show();
  });

  /* 기기검색 -> 완료 */
  $(".loading").click(function () {
    $(".sch").hide();
    $(".complete").show();
  });

  /* 센서정보 셀렉트박스*/
  $(".placeinfo .sel_wrap li:not(:first-child)").hide();
  $(".placeinfo .sel_wrap").click(function () {
    $(".placeinfo .sel_wrap li:not(:first-child)").slideToggle();
    $(this).toggleClass("shadow");
  });

  /* 위치이동모달 */
  $(".placeinfo .sensor_btn_list .placemove").click(function () {
    $(".transfer").show();
  });

  /* 위치이동 */
  $(".placeinfo .transfer .fill").click(function () {
    $(".transfer").hide();
    $(".complete").show();
  });

  /* 연결해제모달 */
  $(".placeinfo .sensor_btn_list .disconnect").click(function () {
    $(".modal_disconnect").show();
  });

  /* 연결해제 */
  $(".sensor_card.discon").hide();
  $(".placeinfo .modal_disconnect .fill").click(function () {
    $(".modal_disconnect, .sensor_card.con").hide();
    $(".sensor_card.discon").show();
  });

  /* 기기연결 */
  $(".sensor_card .connection").click(function () {
    location.href = 'connect_door.html';
  });

  /* 센서추가모달 */
  $(".placeadd .sensor_list li").hide();
  $(".placeadd.edit .sensor_list li").show();
  $(".placeadd .add_box").click(function () {
    $(".placeadd .complete").hide();
    $(".sensor_add").show();
  });

  $(".modal_con li").click(function () {
    $(this).find(".icon_check").toggle();
  });

  /* 센서추가취소 */
  $(".placeadd .modal_btn_list .stroke").click(function () {
    $(".sensoradd").hide();
    $(".modal_con li .icon_check").hide();
  });

  /* 센서추가모달버튼 */
  $(".placeadd .sensor_add .modal_btn_list .fill").click(function () {
    $(".sensor_add").hide();
    $(".modal_con li .icon_check").hide();
    $(".sensor_list li").show();
  });

  /* 장소추가버튼 */
  $(".placeadd .btn_list .btn_fill").click(function () {
    $(".complete").show();
  });

  /* 장소추가완료 */
  $(".placeadd .complete .btn.fill").click(function () {
    location.href = 'placeinfo_add.html';
  });

  /* 센서삭제 */
  $(".sensor_list li").click(function () {
    $(this).hide();
  });

  /* 장소수정버튼 */
  $(".addpg .btn_list .btn_fill").click(function () {
    location.href = 'placeadd_com.html';
  });


  // 보호대상자 정보 수정_갤러리
  $(".protector_modi_container .change_cam").click(function () {
    location.href = 'US_person_gallery.html';
  })
  $(".container_gall_S .camcon_imglist").click(function () {
    location.href = 'US_person_protection_02.html';
  })

  // 방해금지모드 시간 설정 창
  $(".disturb_time_set_pop_wrap").hide();

  $(".disturb_time").click(function () {
    $(".disturb_time_set_pop_wrap").stop().show()
  })
  $(".modal_btn_list").click(function () {
    $(".disturb_time_set_pop_wrap").stop().hide()
  })

  // 센서별 알림 주기 설정 리스트
  $("ul.sub_sensor_box").hide();

  $("ol.sensor_list_box > li").click(function () {
    $("ul.sub_sensor_box").slideToggle("fast");
  });

  // 알림주기_감지센서 선택
  $("ul.lowrank_sensor > li").click(function () {
    $(this).addClass("active")
  })

  /* 센서 알림 장소 추가 */
  $(".alarem_add .complete .btn.fill").click(function () {
    location.href = 'US_alarem_03.html';
  });

  // 방해금지모드 요일 설정
  $("ul.disturb_date_box > li").click(function () {
    $(this).addClass("active")
  })

  // 공지사항_페이지 클릭 효과 
  $("ul.pagination_con li.page_num").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
  })

});