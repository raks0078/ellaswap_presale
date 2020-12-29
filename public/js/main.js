function main() {
  (function () {
    'use strict';
    $(document).ready(function (e) {
      $('.navbar-nav li a').click(function (event) {
        // check if window is small enough so dropdown is created
        var toggle = $('.navbar-toggle').is(':visible');
        if (toggle) {
          $('.navbar-collapse').collapse('hide');
        }
      });

      $('.vc_tta-tabs [data-vc-tabs]').click(function (e) {
        e.preventDefault();
        var url = $(this).attr('href');
        var id = url.substring(url.lastIndexOf('/') + 1);
        console.log(id);
        $('.vc_tta-tab').removeClass('vc_active');
        $('.vc_tta-panels .vc_tta-panel').removeClass('vc_active');
        $(this).parent().addClass('vc_active');
        $(id).addClass('vc_active');
      });
    });

    $(window).scroll(function () {
      var height = $(window).scrollTop();
      if(height > 10){
        $('.site-header').addClass('has-fixed');
      }else{
        $('.site-header').removeClass('has-fixed');
      }
      if (height > 100) {
        $('#back-to-top').addClass('show');
      } else {
        $('#back-to-top').removeClass('show');
      }
    });
    $(document).ready(function () {
      $('.navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle();
      });
      $('#back-to-top').click(function (event) {
        event.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
        return false;
      });
    });
  })();
}
main();
