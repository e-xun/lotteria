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

// con2 흐르는 버거
$(document).ready(function () {
    var listItems = $(".con2 ul li");
    var totalItems = listItems.length;

    // 항목을 반복적으로 추가
    for (var i = 0; i < totalItems; i++) {
        $(".con2 ul").append(listItems[i].cloneNode(true)); // 항목 복제
    }
});
