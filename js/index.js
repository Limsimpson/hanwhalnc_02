$(function () {
    // 1. 주메뉴 호버시 서브 페이드
    $("#gnb").on("mouseover focusin", function () {
        $(this).children("li").find("ul").stop().fadeIn(200);
        $(this).siblings(".bg_sub").stop().fadeIn(200);
    });
    $("#gnb").on("mouseout focusout", function () {
        $(this).children("li").find("ul").stop().fadeOut(100);
        $(this).siblings(".bg_sub").stop().fadeOut(200);
    });
    $("#gnb>li").on("mouseover focusin", function () {
        $(this).addClass("on");
    });
    $("#gnb>li").on("mouseout focusout", function () {
        $(this).removeClass("on");
    });
    $(".sub>li").on("mouseover focusin", function () {
        $(this).addClass("on");
    });
    $(".sub>li").on("mouseout focusout", function () {
        $(this).removeClass("on");
    });

//    // 2. 배너 자동으로 움직이게 하기
//    //배너 변수에 저장하기
//    var visual = $("#visual>div");
//    //버튼 변수에 저장하기
//    var button = $(".btn_banner>li");
//    //현재 보여지는 배너가 누군지 체크할 변수 만들기
//    var current = 0;
//    //setInterval 변수 : clearInterval하기 위해서는 변수로 넣어야한다.
//    var setId;
//    //몇 번째 버튼을 클릭했는지 체크하기
//    button.on({
//        "click": function () {
//            var tg = $(this);
//            //현재 선택한 li가 몇 번째 li인지 체크하기
//            var i = tg.index();
//            button.removeClass("on");
//            tg.addClass("on");
//            move(i);
//        }
//    });
//    //배너 이동시키는 함수 만들기
//    function move(i) {
//        //현재 보여지는 배너 이미지
//        var prev = visual.eq(current);
//        //오른쪽에서 나와야 될 배너 이미지
//        var next = visual.eq(i);
//        prev.fadeOut(1000);
//        next.fadeIn(1000);
//        current = i;
//    };
//    timer();
//    //자동으로 배너 실행되게 하기
//    function timer() {
//        //위의 변수에 setInterval 함수를 넣는다.
//        setId = setInterval(function () {
//            //다음배너 순서
//            var nb = current + 1;
//            if (nb >= 4) {
//                nb = 0;
//            }
//            button.eq(nb).trigger("click");
//        }, 3000);
//    };
//    //banner 영역에 마우스 오버시 setInterval정지
//    //banner 영역에 마우스 아웃시 serInterval재생
//    $("#visual").on({
//        "mouseover": function () {
//            clearInterval(setId);
//        },
//        "mouseout": function () {
//            timer();
//        }
//    });

    // 3. 비디오박스 클릭시 동영상 재생
    $(".clip>img").click(function () {
        $(".bg_popup").stop().fadeIn(500);
    });
    $(".bg_popup").click(function () {
        $(".bg_popup").stop().fadeOut(500);
    });

    // 4. 서브페이지 로컬메뉴 슬라이드 적용
    $("#local_gnb>li").on("mouseover focusin", function () {
        $(this).children("ul").stop().slideDown(300);
    });
    $("#local_gnb>li").on("mouseout focusout", function () {
        $(this).children("ul").stop().slideUp(300);
    });
    $(".local_sub>li").on("mouseover focusin", function () {
        $(this).addClass("on");
    });
    $(".local_sub>li").on("mouseout focusout", function () {
        $(this).removeClass("on");
    });

    // 5. 햄버거 메뉴 버튼 클릭 시 주 메뉴 보이게 하기
    $(".m_icon").click(function () {
        $("#m_gnb").stop().animate({
            "right": "0%"
        }, 500);
        $(".btn_close").stop().animate({
            "right": "50%"
        }, 500);
    });
    $(".btn_close").click(function () {
        $("#m_gnb").stop().animate({
            "right": "-100%"
        }, 500);
        $(".btn_close").stop().animate({
            "right": "-100%"
        }, 500);
    });

    // 6. 모바일 주메뉴 누르면 서브메뉴 나오게 하기
    $("#m_gnb>li>ul").stop().slideUp();
    $("#m_gnb>li").click(function () {
        $(this).children("ul").stop().slideToggle();
        $(this).siblings("li").children("ul").stop().slideUp();
    });
});
