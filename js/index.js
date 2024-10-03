//gsap

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();
//因為超出視窗範圍 手機的寬度會超出原先尺寸
// add a media query. When it matches, the associated function will run
mm.add("(min-width: 768px)", () => {

  gsap.from(".About_text_stroke",{
    x:"100%",
    ease:Power1.easeOut,
    duration: 2,
    scrollTrigger:{
      trigger:".About_text_stroke",
        //start:"top 80%" 代表目標物上方 滾輪於從放上往下80趴的位置觸發(下方20趴) 
      start:"top 80%",
      toggleActions:"restart none none none",
      
      //markers:true
      
    }
  
  })

  return () => { // optional
    // custom cleanup code here (runs when it STOPS matching)
  };
});





gsap.from(".top_main_word",{
  yPercent:50,
  scrollTrigger:{
    trigger:".top_main_word",
    start:"top 30%",
    toggleActions:"restart none none none",
        /*
    markers:true
    */
  }
}

)

gsap.from(".content_about_word",{
  yPercent:40,
  duration: 1,
  scrollTrigger:{
    trigger:".content_about_word",
    start:"top 40%",
    toggleActions:"restart none none none",
       /*
    markers:true
    */
  }
}

)
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



//jQuery
$(document).ready(function(){


  $(".border_box").click(function(){
    $(".border_box").animate({
      height:'70%'
    },1000);
    $(".div_contact_r_icon").fadeTo( 2000 ,1);





   
});

/*
    var about_text = $(".div_about_text_stroke");
    var about_text_dis =250;

    about_text.attr(
        "style",
        "right:" + about_text_dis + "px;" 
    );
    
*/

/*
    $(about_text).animate({
        right: 250,
       
    },2000);

    $(".content_about_word").animate({
        opacity :'0',
     },2000);

    $(".content_about_word").animate({
       opacity :'1',
    },2000);
    */
  });



/*
//cursor
  $(document).on("mousemove", function (e) {
    var cursor = $(".cursor");
    cursor.attr(
      "style",
      "top:" + (e.pageY - 15) + "px; left:" + (e.pageX - 15) + "px;"
    );
  });
  */