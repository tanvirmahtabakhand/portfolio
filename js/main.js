// for circle progress
$(function(){

    $('.circlechart').circlechart();
  
  });

  // COUNTING-UP
  $(".num").counterUp({delay:10,time:1000});

//   // mix-it-up
//   $(document).ready(function () {

// //     //mixitup(PROJECT-SECTION)
//     var mixer = mixitup('.container-box')



// });




//scroll-top
$(document).ready(function(){

    $(window).scroll(function(){
      if($(this).scrollTop() > 180){
        $('#topBtn').fadeIn();
      }
       else{
        $('#topBtn').fadeOut();
      }
    });
  
    $("#topBtn").click(function(){
      $('html ,body').animate({scrollTop : 0},800);
    });
  });
  

//for testimonial page

// $('.owl-carousel').owlCarousel({
//   loop:true,
//   margin:20,
//   responsiveClass:true,
//   responsive:{
//       0:{
//           items:1,
//           nav:false
//       },
//       600:{
//           items:1,
//           nav:false
//       },
//       1000:{
//           items:2,
//           nav:false,
//           loop:false
//       }
//   }
// })

// for active menu

$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior
  
        var target = $(this).attr("href"); // Set the target as variable
  
        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 200, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });
  
        return false;
    });
  });

  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
  
    // Show/hide menu on scroll
    if (scrollDistance >= 20) {
    		$('.header').fadeIn("fast");
    } else {
    		$('.header').fadeOut("fast");
    }
  
    // Assign active class to nav links while scolling
    // $('.header').each(function(i) {
    //     if ($(this).position().top <= scrollDistance) {
    //         $('.menu a.active').removeClass('active');
    //         $('.menu a').eq(i).addClass('active');
    //     }
    // });
  }).scroll();









  // for filtering
  filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }
  
  
  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

// magnific pop-up

$('.portfolio-box').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
      enabled: true
          }
  // other options
});



  
  