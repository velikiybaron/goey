$(function(){

    $(".dol").hover(function(){
      var cur = $(this);
      var dest = cur.position().left;
      var top = cur.position().top;
      var t = 0.2;
      TweenMax.to( $(".select"), t,{ 
        x:dest,
        y:top,
        ease:Back.easeOut
      } );
    });
  
    var lastPos = $(".select").position().left;
  })
  