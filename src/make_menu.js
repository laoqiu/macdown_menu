document.write('<div id="category" style="padding-bottom: 1em;"></div><a id="goTop" href="javascript:;" style="position:fixed;right:3em;bottom:3em;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABwElEQVRYR+2XQVLCMBSG34s4slNmoGs9gWWhdAkHgKknUG6AN+AGcgPxBBY4gCyLLqwn0DUwg+5wxDwno8VS0iatOLCAZfPy/i9/8vICwpp/uGZ9kAIMayUPEY9XCUdAntEZFMM5lwBGtlUGgrtVis9zIVQKjtsP5t48gIltHc4Inv/DgQzCUc5xX2IdEIPj6qlNyMyVQjDoh+0X+TezCnRXPq5aF4BA+a57oztHWQW6iYY1q40I5yKeANpGx63rzlWeAVWioLgfmxYi8RmQif8FIhFAnPjcNU6Xhd6gpXLRH9cGGFVLDWB4pZMYOdTzPbetFasTJE47MbjWiZ2vTBNC6UAa8SQQsQDR4vQGgPuLjsi+Aai2IxIgSpyInhhRkxi7Xahnzs84YlPWxuMg5O8B+8RE2nkM77kQ32Xv5RlkzaWWjVDJwNT74Ht9GQThZ9FwHjytm3AoAfDFc473Kn0z/PT6iW0eyCASAXx3xN+THxQXY3EAYjwMkXgLfJv8tpxh05ZYuf9dBeBDzHi2gcS9fO/eiSphZRnKJuoA6N4ZW4CtA1sHUjkgSiz4901cVEZ3kOoZnxpAt85VcWsH+AL4ggAwIZWM8wAAAABJRU5ErkJggg==" width="32" height="32" /></a>')
$(function(){
  $("h2,h3,h4,h5,h6").each(function(i,item){
    var tag = $(item).get(0).localName;
    $(item).attr("id","m-"+i);
    $("#category").append('<a class="new'+tag+'" href="#wow'+i+'">'+$(this).text()+'</a></br>');
    $(".newh2").css("margin-left",0);
    $(".newh3").css("margin-left",20);
    $(".newh4").css("margin-left",40);
    $(".newh5").css("margin-left",60);
    $(".newh6").css("margin-left",80);
  });
  $('#goTop').on('click', function(){
    $("body").scrollTop(0);
  })
 });
