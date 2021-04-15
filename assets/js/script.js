let toggle = false;
let toggleSearch = false;

const menu = $(".menu-btn");
const closeOverlay = $(".close-overlay");
const toggler = $(".toggler");
const overlayMenu = $(".overlay-menu");
const chatBtn = $(".chat-btn");
const chatMenu = $(".chat-menu");
const closeBtn = $(".close-btn");
const startChatBtn = $("#start-btn");
const chatInfo = $(".chat-info");
const chatScreen = $(".chat-screen");
const scrollTopBtn = $(".scroll-top-btn");
// menu.click(function () {
//   if (!toggle) {
//     toggler.addClass("open");
//     overlayMenu.addClass("open");
//     toggle = true;
//   } else {
//     toggler.removeClass("open");
//     overlayMenu.removeClass("open");
//     toggle = false;
//   }
// });

menu.click(function () {
  overlayMenu.addClass("open");
});

closeOverlay.click(function () {
  overlayMenu.removeClass("open");
});

chatBtn.click(function () {
  chatMenu.show(500);
});

closeBtn.click(function () {
  chatMenu.hide(500);
});

startChatBtn.click(function () {
  chatInfo.hide(500);
  chatScreen.show(500);
});

scrollTopBtn.click(function () {
  $("html, body").animate({ scrollTop: 0 }, 800);
  return false;
});

window.FontAwesomeConfig = {
  searchPseudoElements: true,
};

if ($(this).scrollTop() > $("header").height() - 60) {
  $(".front-page-nav").addClass("secondary-background");
} else {
  $(".front-page-nav").removeClass("secondary-background");
}

$(window).scroll(function () {
  if ($(this).scrollTop() > $("header").height() - 60) {
    $(".front-page-nav").addClass("secondary-background");
  } else {
    $(".front-page-nav").removeClass("secondary-background");
  }

  if ($(this).scrollTop() > 60) {
    $(".reverse-color-nav")
      .removeClass("opposite-colors")
      .addClass("secondary-background");
    $(".reverse-color-nav img:not(.reverse-color-nav form > button > img)").css(
      "filter",
      "brightness(100)"
    );

    $(".cart-count").attr(
      "style",
      "color: #1c68a1 !important; background-color: #fff; border: 1px solid #1c68a1;"
    );

    $(".reverse-color-nav .current-menu-item .cart-count").attr(
      "style",
      "color: #fff !important; background-color: #76E3D7;"
    );

    $(
      ".reverse-color-nav .wpml-ls-legacy-dropdown a.wpml-ls-item-toggle"
    ).removeClass("arrow-blue-img");
  } else {
    $(".reverse-color-nav")
      .addClass("opposite-colors")
      .removeClass("secondary-background");
    $(".reverse-color-nav img").css("filter", "");
    $(".reverse-color-nav .cart-count").removeAttr("style");
    $(
      ".reverse-color-nav .wpml-ls-legacy-dropdown a.wpml-ls-item-toggle"
    ).addClass("arrow-blue-img");
  }
});

if ($("nav form input.search").val() != "") {
  $("nav form input.search")
    .parent()
    .children(".delete-button")
    .removeClass("d-none")
    .addClass("d-flex");
}

$("nav form input.search").on("input", function () {
  if ($(this).val() != "") {
    $(this)
      .parent()
      .children(".delete-button")
      .removeClass("d-none")
      .addClass("d-flex");
  }
  if ($(this).val() == "") {
    $(this)
      .parent()
      .children(".delete-button")
      .addClass("d-none")
      .removeClass("d-flex");
    console.log("test");
  }
});

$("nav form .delete-button").click(function () {
  $(this).parent().children(".search").val("");
  $(this).addClass("d-none").removeClass("d-flex");
});

$(".button-for-search-area").click(function () {
  toggleSearch = !toggleSearch;
  if (toggleSearch) {
    $("nav form.custom-search-form").show(500);
    $("nav .mobile-logo").hide(500);
  } else {
    $("nav form.custom-search-form").hide(500);
    $("nav .mobile-logo").show(500);
  }
});

// count +/-

$(document).on("click", ".plus", function () {
  let count = $(this).closest(".count").find("input");
  $(count).val(parseInt($(count).val()) + 1);
});

$(document).on("click", ".minus", function () {
  let count = $(this).closest(".count").find("input");
  if ($(count).val() == 0) {
    // $(count).val(0);
    return false;
  }
  $(count).val(parseInt($(count).val()) - 1);
});

//input field focused/unfocused style

$(".contact .form-group input").focus(function () {
  $(this)
    .parent()
    .attr(
      "style",
      "border-bottom: 2px solid rgba(28, 104, 161, 1) !important;"
    );
});

$(".contact .form-group input").focusout(function () {
  if ($(this).val().length == 0) {
    $(this).parent().attr("style", "");
  }
});
