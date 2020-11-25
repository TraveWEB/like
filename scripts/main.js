$(document).ready(function(){
  $('.header-menu-button').click(function(event) {
    $('.header-menu-button, .header-span, .header_menu, .header-a, body, .header_menu-close').addClass('active');
  });
  $('.header_menu-close').click(function(event) {
    $('.header-menu-button, .header-span, .header_menu, .header-a, body, .header_menu-close').removeClass('active');
  });
});