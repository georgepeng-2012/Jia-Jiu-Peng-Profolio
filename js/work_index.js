//gsap


//cursor

var cursor = document.querySelector('.cursor'),
    cursorScale =document.querySelectorAll('.cursor_scale'),
    mouseX=0,
    mouseY=0

gsap.to({},0.016,{
  repeat:-1,

  onRepeat:function(){
    gsap.set(cursor,{
      css:{
        left:mouseX,
        top:mouseY
      }
    })
  }

})


window.addEventListener("mousemove",function(e){
  mouseX=e.clientX;
  mouseY=e.clientY;
})

cursorScale.forEach(link =>{
  link.addEventListener('mouseleave',()=>{
    cursor.classList.remove('cursor_glow');
  });

  link.addEventListener('mousemove',()=>{
    cursor.classList.add('cursor_glow');
  });
});