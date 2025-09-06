function stickyHeader() {
    if ($(".menubar").length) {
        var HeaderPos = 100;
        if ($(window).scrollTop() > HeaderPos) {
            $(".menubar").addClass("stricky-fixed")
        } else {
            if ($(this).scrollTop() <= HeaderPos) {
                $(".menubar").removeClass("stricky-fixed");
            }
        }
    }
}
jQuery(window).on("scroll", function () {
    (function (HeaderPos) {
        stickyHeader()
    })(jQuery)
});


if ($(".navigation").length) {
    $(".navigation .navbar button").on("click", function () {
        $(".navigation .menu").slideToggle();
        $(this).toggleClass('open');
        return false;
    });
    $(".navigation .cs-submenu").children("a").append(function () {
        return '<button class="dropdown-expander"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></button>';
    });

}

if (document.documentElement.clientWidth < 1023) {
    $(".navigation .menu .dropdown-expander").on("click", function () {
        $(this).parent().parent().children(".cs-dropdown").slideToggle();
        console.log($(this).parents("li"));
        console.log($(this).parents().children(".dropdown-expander").toggleClass("rotated"));
        return false
    })
    $(document).click(function (e) {
        if (!$(e.target).closest('.navigation .navbar button').length) {
            $('.navigation .menu').stop(true).slideUp();
            $(".navigation .navbar button").removeClass('open');

        }
    });
}


var homeSlider = $("#slider");
homeSlider.owlCarousel({
    loop: true,
    margin: 0,
    navSpeed: 500,
    nav: true,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'],
    autoplay: true,
    dots: false,
    animateOut: "fadeOut",
    items: 1,
    responsiveClass: true,
    responsive: {
        0: {
            nav: false
        },
        600: {
            nav: false
        },
        1024: {},
        1100: {}
    }
});


var popularCourse = $("#popularCourse");
popularCourse.owlCarousel({
    loop: false,
    margin: 20,
    navSpeed: 500,
    nav: true,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'],
    autoplay: false,
    dots: false,
    items: 3,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1,
        },
        1024: {
            items: 3
        },
        1100: {
            items: 3
        }
    }
});


var testimonials = $("#testimonials");
testimonials.owlCarousel({
    loop: true,
    margin: 0,
    navSpeed: 500,
    nav: false,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'],
    autoplay: false,
    dots: true,
    items: 1,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1,
        },
        1024: {
            items: 1
        },
        1100: {
            items: 1
        }
    }
});


var clients = $("#clients");
clients.owlCarousel({
    loop: true,
    margin: 0,
    navSpeed: 500,
    nav: false,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'],
    autoplay: true,
    dots: false,
    items: 1,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2,
        },
        1024: {
            items: 6
        },
        1100: {
            items: 6
        }
    }
});
wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: false
});
wow.init();


$(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
        $("#web-pulse-scroll-up").fadeIn()
    } else {
        $("#web-pulse-scroll-up").fadeOut()
    }
});
$("#web-pulse-scroll-up").on("click", function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false
});
$('#thumbs img').click(function () {
    $('#largeImage').attr('src', $(this).attr('src').replace('thumb', 'large'));
    if ($(this).hasClass("active")) {
        $("#thumbs img").removeClass("active");
    } else {
        $("#thumbs img").removeClass("active");
        $(this).addClass("active");
    }
});

$(document).ready(function(){
    $('.req').hide();	
    $("form[name='popup-enq']").validate({
   // Specify validation rules
   rules: {
   vb_name: { required: true },
   vb_email:{ required:true, email:true },
   vb_phone: { required: true, digits:true},      
   vb_message:{ required:true },
   },
   
   // Specify validation error messages
   messages: {
   vb_name: { required: "Please provide name" },
   vb_email:{ email: "Please enter a valid email address" },
   vb_phone: { required: "Please provide mobile no",
   digits: "Mobile no must be numeric"},
   vb_message:{ required: "Please provide message detail" },
   },
   
   submitHandler: function(form) {
   form.submit();
   }
   });
   });
   
   productEnquiry = (name)=>{
    $('.source').val(name);
    new bootstrap.Modal($('#productEnquiry')).show();
   }
   
   subscription = ()=>{
   var subscriber_email = $('#subscriber_email').val();
   if(subscriber_email!=""){
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(subscriber_email)){
     alert('Please enter a valid email!');
     $('#subscriber_email').focus();
    }else{
     $.ajax({
       url:site_url+"/subscription.php",
       type:"post",
       data:{subscriber_email:subscriber_email},
       success:function(res){
         alert(res)
         $('#subscriber_email').val("");
       },error:function(res){
         console.log(res)
       }
     });
    }  
   }else{
     alert('Please enter your email!');
     $('#subscriber_email').focus();
   }
   }