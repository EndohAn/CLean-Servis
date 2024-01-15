 $(document).ready(function(){
   $('.carousel_inner').slick({
    speed: 1200,
    slidesToShow: 3,    
    adaptiveHeight: true ,
    prevArrow:'<button type="button" class="slick-prev"><img src ="icons/reviews/left-arrow.svg"></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="icons/reviews/right-arrow.svg"></button>',
    responsive:[
      {
        breakpoint: 1300,
        settings: {
          arrows:false,         
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 2000
          
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows:false,
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 2000
          
      },
    },
      {
        breakpoint: 480,
        settings: {
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000
          
        }
      }      
    ]    
   
});
});


(function($) {
    $(function() {
      
      $('ul.included_tabs').on('click', 'li:not(.included_tab_active)', function() {
        $(this)
          .addClass('included_tab_active').siblings().removeClass('included_tab_active')
          .closest('div.container').find('div.included_item_content').removeClass('included_item_content_active').eq($(this).index()).addClass('included_item_content_active');
      });
      
    });
    })(jQuery);

    $('#consultation-form').validate({
      rules:{
        name:'required',
        phone:'required',
        email:{
          required:true,
          email:true
        }
      },
      messages:{
        name:'Введите своё имя',
        phone:'Введите номер телефона',
        email:{
          required:'Введите свою почту',
          email:'Неправильно введён адрес почты'

        }
      }
    });

    const acc =document.getElementsByClassName("accordion");
    let i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            
            this.classList.toggle("active");   
            
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }


    // function read() {
    //   const dots = document.querySelector("#dots");
    //   const moreText = document.querySelector("#more");
    //   const btnText = document.querySelector("#myBtn");
    
    //   if (dots.style.display === "none") {
    //     dots.style.display = "inline";
    //     btnText.innerHTML = "Читать больше";
    //     moreText.style.display = "none";
    //   } 
    //   else  {
    //     dots.style.display = "none";
    //     btnText.innerHTML = "Читать меньше";
    //     moreText.style.display = "inline";
    //   }
    
//     function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Читать больше";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Читать меньше";
//     moreText.style.display = "inline";
//   }
// }