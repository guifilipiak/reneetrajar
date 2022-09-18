var bannerIndex = 0;
var bannerMax = 0;

$(document).ready(function () {
  bannerMax = $(".carousel li").length - 1;

  $(".carousel-slider input").click(function () {
    bannerIndex = this.value;
    slide(bannerIndex);
  });

  $(".carousel-arrow-left").click(function () {
    var index = bannerIndex - 1;
    if (index < 0) bannerIndex = bannerMax;
    else bannerIndex = index;

    slide(bannerIndex);
  });

  $(".carousel-arrow-right").click(function () {
    var index = bannerIndex + 1;
    if (index > bannerMax) bannerIndex = 0;
    else bannerIndex = index;

    slide(bannerIndex);
  });
});

function slide(index) {
  $(".carousel li").removeClass("active");
  var slider = $(".carousel li")[index];
  var input = $(".carousel-slider input")[index];
  $(input).prop("checked", true);

  $(slider).addClass("active");
}
