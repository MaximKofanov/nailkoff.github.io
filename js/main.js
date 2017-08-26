$(function(){

  var slider = ['https://pp.userapi.com/c638228/v638228010/50ce7/oDqr3E79az8.jpg',
                'https://pp.userapi.com/c638127/v638127588/48846/yzjisreCz9I.jpg',
                'https://pp.userapi.com/c638127/v638127910/52729/MZglufMUhGI.jpg',
                'https://pp.userapi.com/c638127/v638127910/5271f/5-6ayuoh_v0.jpg',
                'https://pp.userapi.com/c637430/v637430380/61c27/A0zR9kr8Bvk.jpg',
                'https://pp.userapi.com/c637430/v637430380/61c1d/v0za5KSKb6E.jpg',
                'https://pp.userapi.com/c637430/v637430380/5f7d0/I7wd_prl4U4.jpg',
                'https://pp.userapi.com/c637430/v637430380/5f7c6/IbAqvVOgZE0.jpg',
                'https://pp.userapi.com/c837135/v837135380/447fc/o79QptVwQBQ.jpg']

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
  
  
});