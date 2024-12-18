$(document).ready(function () {
    // 히든메뉴바
    $(".icon").on("click", function () {
        $(".nav").slideToggle();
    });

    // 메뉴밑줄
    $("header ul li").on("mouseenter", function () {
        $(this).children("div").stop().animate({
            width: "100%",
        });
    });
    $("header ul li").on("mouseleave", function () {
        $(this).children("div").stop().animate({
            width: "0",
        });
    });

    // 애니메이션 초기화 함수
    function resetAnimation(element) {
        $(element).css({
            opacity: 0,
            transform: "translateY(50px)",
        });
    }

    // 공통 스크롤 애니메이션 함수
    function scrollAnimation() {
        const windowHeight = $(window).height();
        const scrollTop = $(window).scrollTop();

        // con1: 텍스트와 이미지 각각 나타남
        $(".con1 ul li").each(function (index) {
            const elemTop = $(this).offset().top;
            if (scrollTop + windowHeight > elemTop + 50) {
                $(this).css({
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: `opacity 0.6s ease, transform 0.6s ease ${
                        index * 0.2
                    }s`,
                });
            } else {
                resetAnimation(this); // 초기화
            }
        });

        // con2: 텍스트와 이미지, 각 이미지 순서대로 나타남
        $(".con2 .con2txt, .con2 ul li").each(function (index) {
            const elemTop = $(this).offset().top;
            if (scrollTop + windowHeight > elemTop + 50) {
                $(this).css({
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: `opacity 0.6s ease, transform 0.6s ease ${
                        index * 0.3
                    }s`,
                });
            } else {
                resetAnimation(this); // 초기화
            }
        });

        // con4: 각 항목이 순서대로 나타남
        $(".con4 .con4box1, .con4 .identity, .con4 .con4box1 ul li").each(
            function (index) {
                const elemTop = $(this).offset().top;
                if (scrollTop + windowHeight > elemTop + 50) {
                    $(this).css({
                        opacity: 1,
                        transform: "translateY(0)",
                        transition: `opacity 0.6s ease, transform 0.6s ease ${
                            index * 0.3
                        }s`,
                    });
                } else {
                    resetAnimation(this); // 초기화
                }
            }
        );
    }

    // 스크롤 이벤트에 scrollAnimation 함수 연결
    $(window).on("scroll", scrollAnimation);

    // 초기 스크롤 상태 감지
    scrollAnimation();
});
