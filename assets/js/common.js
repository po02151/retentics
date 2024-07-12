$(document).ready(function(){
    toggleTxtBox();
    videoPopUp();
    topBtn();
    slideBtntab();
    slideBtn();
    alertBtn();
    hamburger();
    mobileHeaderAccordion();
}); 

window.onload = function(){
    sectionBgChange();
    bottomMoveBtn();
}

function hamburger(){
    $('.header_mo .hamburger').click(function(){
        $(this).parents('.header_mo').toggleClass('active');
    
        
        if($('.header_mo').hasClass('active')) {
            $('body').addClass('active');
        } else {
            $('body').removeClass('active');
        }
    })
}

function mobileHeaderAccordion(){
    $('.header_mo .nav > ul > li > span').click(function(){
        $(this).toggleClass('active');
        $(this).nextAll('ul').slideToggle('fast');
        $(this).parent().siblings('li').children('ul').slideUp('fast')
            .parent('li').find('span').removeClass('active');
        return false;
        
    })
}

function alertBtn(){
    $('.mainSection_8 .purpleBtn, .contact .right button').click(function(){
        alert('Please enter required items.');
    })
}

function toggleTxtBox(){
    $('.pricing .toggleBox').click(function(){
        $(this).toggleClass('active');
    })
}


function slideBtn(){
    $('.pricing .slideBtnBox button').click(function(){
        $('.pricing .slideBtnBox button').removeClass('active');
        $(this).addClass('active');
        
        if($('.pricing .slideBtnBox .tabBtn_1').hasClass('active')){
			$('.pricing .slideBtnBox').removeClass('active_2');
			$('.pricing .slideBtnBox').addClass('active_1');
            $('.tabContentBox > div').removeClass('active');
            $('.tabContentBox .tabContent_1').addClass('active');
		}
		if($('.pricing .slideBtnBox .tabBtn_2').hasClass('active')){
			$('.pricing .slideBtnBox').removeClass('active_1');
			$('.pricing .slideBtnBox').addClass('active_2');
            $('.tabContentBox > div').removeClass('active');
            $('.tabContentBox .tabContent_2').addClass('active');
		}
    })
}

function slideBtntab(){
    $('.tabBtnBox button').click(function(){
        $('.tabBtnBox button').removeClass('active');
        $(this).addClass('active');
        
        if($('.tabBtnBox .tabBtn_1').hasClass('active')){
			$('.tabBtnBox > div').removeClass('active_2 active_3');
			$('.tabBtnBox > div').addClass('active_1');
            $('.tabContentBox > div').removeClass('active');
            $('.tabContentBox .tabContent_1').addClass('active');
		}
		if($('.tabBtnBox .tabBtn_2').hasClass('active')){
			$('.tabBtnBox > div').removeClass('active_1 active_3');
			$('.tabBtnBox > div').addClass('active_2');
            $('.tabContentBox > div').removeClass('active');
            $('.tabContentBox .tabContent_2').addClass('active');
		}
		if($('.tabBtnBox .tabBtn_3').hasClass('active')){
			$('.tabBtnBox > div').removeClass('active_1 active_2');
			$('.tabBtnBox > div').addClass('active_3');
            $('.tabContentBox > div').removeClass('active');
            $('.tabContentBox .tabContent_3').addClass('active');
		}
    })
}


function topBtn(){
    $(".topBtn").click(function() {
        $('html, body').stop().animate({
            scrollTop : 0
        }, 700);
        return false;
    });
}

function bottomMoveBtn(){
    var location = document.querySelector(".mainSection_8").offsetTop - 80;
    $(".freeBtn").click(function() {
        window.scrollTo({top:location, behavior:'smooth'});
    });
}

function sectionBgChange(){

    function navOn() {
        // 1. 현재 scrollTop() 값을 가져오기 위해 변수에 넣는다.
      var nowTop = $(window).scrollTop();
      
        // 2. 각 섹션의 offset().top 값을 가져온다.
      var sec1_offset = $('.mainSection_5 .box_1').offset().top - 80;
      var sec2_offset = $('.mainSection_5 .box_2').offset().top - 80;
      var sec3_offset = $('.mainSection_5 .box_3').offset().top - 80;


        // 3. class를 초기화 시킨다.
      $('.mainSection_5 .box').removeClass('active');
    
         // 4. 현재 scrollTop()의 값이 각 섹션의 범위에 있으면 class를 추가한다.
         if ( nowTop >=  sec1_offset && nowTop < sec2_offset) {
            $('.mainSection_5 .scrollBox > .box').eq(0).addClass('active');
        } else if( nowTop >=  sec2_offset && nowTop < sec3_offset ) {
            $('.mainSection_5 .scrollBox > .box').eq(1).addClass('active');
        } else if( nowTop >=  sec3_offset && nowTop ) {
            $('.mainSection_5 .scrollBox > .box').eq(2).addClass('active');
        }
  };

  // 4. scroll function을 넣어 scroll을 트리거로 이벤트를 발생시킨다.
  $(window).scroll(function() {
      navOn();
  });
}


function videoPopUp(){
    $('.mainSection_4 > .videoBox button').click(function(){
        $('.video_popUp').addClass('active');

        $('.video_popUp').click(function(){
            $('.video_popUp').removeClass('active');
        })
    })
}