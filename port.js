// JavaScript Document

//kirikae start
	$(document).ready(function(){

  $('.element1').show();
  $('.element2').hide();

  $('.button').click(function () {

    $('#wrap').toggleClass('switch');

    if($('#wrap').hasClass('switch')){

      $('.element1').hide();
      $('.element2').show();

    }else{

      $('.element1').show();
      $('.element2').hide();

    }
  });
});

var sel = 0;
  function check_reset(mod,num){
    if(sel == num){
      mod.checked = false;
      sel = 0;
    }else{
      sel = num;
    }
  }

//var nowchecked = [];
//$('input[type="radio"]:checked').each(function(){
//  nowchecked.push( $(this).attr('id') );
//});
//
//$('input[type="radio"]').click(function(){
//  var idx = $.inArray( $(this).attr('id'), nowchecked ); // nowcheckedにクリックされたボタンのidが含まれるか判定。なければ-1が返る。
//	if( idx >= 0 ) { // クリックしたボタンにチェックが入っていた場合
//		$(this).prop('checked', false); // チェックを外す
//		nowchecked.splice(idx,1); // nowcheckedからこのボタンのidを削除
//	} else { // チェックが入っていなかった場合
//	// 同じname属性のラジオボタンをnowcheckedから削除する
//    var name = $(this).attr('name');
//    $('input[name="' + name + '"]').each(function(){
//      var idx2 = $.inArray( $(this).attr('id'), nowchecked);
//      if( idx2 >= 0 ){
//        nowchecked.splice(idx2,1);
//      }
//    });
//    // チェックしたものをnowcheckedに追加
//		nowchecked.push( $(this).attr('id') );
//	}
//});
//
$(function(){
    $("#wrap").click(function(){
        if($(this).attr("class")=="check"){
        $(this).removeClass("check").addClass("checked");}else{
        $(this).removeClass("checked").addClass("check");}
        });
});


//kirikae end

//smoothScroll start
$(function(){
$('a[href^="#"]').click(function() {
var speed = 700;
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top;
$('body,html').animate({scrollTop:position}, speed, 'swing');
return false;
});
});
//smoothScroll end

