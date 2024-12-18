$(function () {
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
});
