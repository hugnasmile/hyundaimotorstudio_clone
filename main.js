function openNav() {
  document.getElementById("myNav").style.height = "30%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

$("#slide-open").click(function(){  //버튼 클릭 시

    if($("#burger").hasClass('on')){ //메뉴가 X 상태일때
    
      $("#burger").removeClass('on'); //메뉴 원복
      $("#slide").removeClass('on');  //슬라이드 메뉴 원복
     
    //   $("#slide").on('scroll touchmove mousewheel', function(e){
    //     e.preventDefault();       
    //     e.stopPropagation();       
    //     return false;       
    //     })
        
    } else{
    
      $("#burger").addClass('on');  
      $("#slide").addClass('on');     
     
    }
    });
    
    var acc = document.getElementsByClassName("accordion");
    
        for (var i = 0; i < acc.length; i++) {   
              acc[i].onclick = function() {	 
                 for (var j = 0 ; j<acc.length; j++){
                     acc[j].classList.remove("active");
                     if (this!==acc[j]) {
                         acc[j].nextElementSibling.style.maxHeight = null;
                     }
                 }
    
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                    this.classList.remove("active");
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
         
              }
        }


var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
  });

  var swiper = new Swiper(".Motorstudio", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  $( 'html, body' ).stop().animate( { scrollTop : 0 } )