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
