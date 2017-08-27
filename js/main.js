$(function(){

	// slider 1 start 
  var slider = ['../img/works/m/1.jpg',
                '../img/works/m/2.jpg',
                '../img/works/m/3.jpg',
                '../img/works/m/4.jpg',
                '../img/works/m/5.jpg',
                '../img/works/m/7.jpg',
                '../img/works/m/9.jpg',
                '../img/works/m/10.jpg',
                '../img/works/m/11.jpg',
                '../img/works/m/12.jpg',
                '../img/works/m/13.jpg',
                '../img/works/m/16.jpg',
                '../img/works/m/18.jpg',
                '../img/works/m/19.jpg',
                '../img/works/m/23.jpg',
                '../img/works/m/24.jpg',
                '../img/works/m/25.jpg',
                '../img/works/m/26.jpg',
                '../img/works/m/27.jpg',
                '../img/works/m/28.jpg']

  var activImage = 0;
  var goImageCount = activImage;
  var positionMiniSlid = 0;
  $('#imgSlid').css('background-image','url('+slider[0]+')');
  for(var i = 0; i < slider.length; i++){
    $('#miniSlid ul').append('<li class="listMini" style="background-image: url('+slider[i]+')"></li>');
  }
  
  $('#miniSlid ul li:nth-child(1)').css('opacity', '1');
  $('li.listMini').click(function(){
    var a = this.style.backgroundImage;
    for(var j = 0; j < slider.length; j++){
      if(a === "url(\""+slider[j]+"\")"){
        activImage = j;
        break;
      }
    }
    $('#imgSlid').css('background-image', a);
    $('#miniSlid ul li').css('opacity', '0.6');
    $('#miniSlid ul li:nth-child('+(activImage+1)+')').css('opacity', '1');
    if(activImage > goImageCount && positionMiniSlid != 17*(slider.length-6)){
      $('#miniSlid ul li').css('right', (positionMiniSlid+=17)+'%');
    }else if(activImage < goImageCount && positionMiniSlid === 17*(slider.length-6)){
      $('#miniSlid ul li').css('right', (positionMiniSlid-=17)+'%');
    }
    goImageCount = activImage;
  });
  
  $('#arrowLeft').click(function (){
    if(positionMiniSlid > 0){
      $('#miniSlid ul li').css('right', (positionMiniSlid-=17)+'%');
    }
  });
  
  $('#arrowRight').click(function (){
    if(positionMiniSlid < 17*(slider.length-6)){
      $('#miniSlid ul li').css('right', (positionMiniSlid+=17)+'%');
    }
  });

  //end slider 1
  //slider 2 start

var sliderP = ['../img/works/p/30.jpg',
                '../img/works/p/8.jpg',
                '../img/works/p/14.jpg',
                '../img/works/p/15.jpg',
                '../img/works/p/20.jpg',
                '../img/works/p/21.jpg',
                '../img/works/p/6.jpg']

  var activImageP = 0;
  var goImageCountP = activImage;
  var positionMiniSlidP = 0;
  $('#imgSlidP').css('background-image','url('+sliderP[0]+')');
  for(var i = 0; i < slider.length; i++){
    $('#miniSlidP ul').append('<li class="listMiniP" style="background-image: url('+sliderP[i]+')"></li>');
  }
  
  $('#miniSlidP ul li:nth-child(1)').css('opacity', '1');
  $('li.listMiniP').click(function(){
    var a = this.style.backgroundImage;
    for(var j = 0; j < sliderP.length; j++){
      if(a === "url(\""+sliderP[j]+"\")"){
        activImageP = j;
        break;
      }
    }
    $('#imgSlidP').css('background-image', a);
    $('#miniSlidP ul li').css('opacity', '0.6');
    $('#miniSlidP ul li:nth-child('+(activImageP+1)+')').css('opacity', '1');
    if(activImageP > goImageCountP && positionMiniSlidP != 17*(sliderP.length-6)){
      $('#miniSlidP ul li').css('right', (positionMiniSlidP+=17)+'%');
    }else if(activImageP < goImageCountP && positionMiniSlidP === 17*(sliderP.length-6)){
      $('#miniSlidP ul li').css('right', (positionMiniSlidP-=17)+'%');
    }
    goImageCountP = activImageP;
  });
  
  $('#arrowLeftP').click(function (){
    if(positionMiniSlidP > 0){
      $('#miniSlidP ul li').css('right', (positionMiniSlidP-=17)+'%');
    }
  });
  
  $('#arrowRightP').click(function (){
    if(positionMiniSlidP < 17*(sliderP.length-6)){
      $('#miniSlidP ul li').css('right', (positionMiniSlidP+=17)+'%');
    }
  });

  //slider 2 end

  
  
});