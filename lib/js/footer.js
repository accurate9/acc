﻿$(function () {
    $('.back span').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
    });
})