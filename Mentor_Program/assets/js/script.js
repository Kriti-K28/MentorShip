/**
* Template Name: Arsha - v3.0.3
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
    "use strict";
  
    // Preloader
    $(window).on('load', function() {
      if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function() {
          $(this).remove();
        });
      }
    });
  
    // Smooth scroll for the navigation menu and links with .scrollto classes
    var scrolltoOffset = $('#header').outerHeight() - 2;
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          e.preventDefault();
  
          var scrollto = target.offset().top - scrolltoOffset;
          if ($(this).attr("href") == '#header') {
            scrollto = 0;
          }
  
          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');
  
          if ($(this).parents('.nav-menu, .mobile-nav').length) {
            $('.nav-menu .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
  
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
          return false;
        }
      }
    });
  
    // Activate smooth scroll on page load with hash links
    $(document).ready(function() {
      if (window.location.hash) {
        var initial_nav = window.location.hash;
        if ($(initial_nav).length) {
          var scrollto = $(initial_nav).offset().top - scrolltoOffset;
          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');
        }
      }
    });
   
   
  
    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }
  
    // Back to top button
    // $(window).scroll(function() {
    //   if ($(this).scrollTop() > 100) {
    //     $('.back-to-top').fadeIn('slow');
    //   } else {
    //     $('.back-to-top').fadeOut('slow');
    //   }
    // });
  
    // $('.back-to-top').click(function() {
    //   $('html, body').animate({
    //     scrollTop: 0
    //   }, 1500, 'easeInOutExpo');
    //   return false;
    // });
  
    // Skills section
    $('.skills-content').waypoint(function() {
      $('.progress .progress-bar').each(function() {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
      });
    }, {
      offset: '80%'
    });
    // Init AOS
    function aos_init() {
      AOS.init({
        duration: 1000,
        once: true
      });
    }
    $(window).on('load', function() {
      aos_init();
    });
  
  })(jQuery);



// =============================================
// To embed youtube video 
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      // height: '350',
      // width: '400',
      videoId: 'Ooa2peVxmII',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }

  // ==============================
  // For show btn==================
  $('#go').on('click',function(){
    $('#two').show('slow');
});
$('#hide').on('click',function(){
  $('#two').hide('slow');
});


// ========================================
// For register page 
    $(document).ready(function(){

      $("#prog").change(function(){
   // change fn on dept id
       var selected_prog = $(this).children(":selected").text(); // Get the selected option value
  
       switch(selected_prog){
         case "Web Development":
           $("#register-form").attr('action','../resourcepage/web.html');
         // dynamically changing action attribute of form to cse.html
         break;
  
         case "App Development":
           $("#register-form").attr('action','../resourcepage/app.html');
           // dynamically changing action attribute of form to ECE.html
           break;
  
          case "UI/UX Design":
        $("#register-form").attr('action','../resourcepage/ml.html');
   // dynamically changing action attribute of form to ME.html
       break;
  
       case "Machine Learning":
       $("#register-form").attr('action','../resourcepage/ml.html');
   // dynamically changing action attribute of form to CE.html
       break;
       default:
       $("#register-form").attr('action','#');
   // Default action
       }
       });
   });

