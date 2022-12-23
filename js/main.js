$(function () {
  $(".toggle-category").click(function () {
    $(".toggle-category").toggleClass("open");
  });
  $(".toggle-price").click(function () {
    $(".toggle-price").toggleClass("open");
  });
  $(".toggle-subcategory").click(function () {
    $(".toggle-subcategory").toggleClass("open");
  });
  $(".toggle-othercategory").click(function () {
    $(".toggle-othercategory").toggleClass("open");
  });
  $(".toggle-faq").click(function () {
    $(".toggle-faq").toggleClass("open");
  });
  $(".toggle-faq2").click(function () {
    $(".toggle-faq2").toggleClass("open");
  });
  $(".toggle-faq3").click(function () {
    $(".toggle-faq3").toggleClass("open");
  });
  $(".toggle-faq4").click(function () {
    $(".toggle-faq4").toggleClass("open");
  });
  $(".toggle-faq5").click(function () {
    $(".toggle-faq5").toggleClass("open");
  });
  $(".read-more").click(function () {
    $(this).prev().toggle();
    $(this).siblings(".dots").toggle();
    if ($(this).text() == "Read More") {
      $(this).text("Read Less");
    } else {
      $(this).text("Read More");
    }
  });
});
