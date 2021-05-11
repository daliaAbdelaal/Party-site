$(document).ready(function(){
        $('.load').fadeOut(1000,function(){
                $('body').css({'overflow':'visible'})
        })
})
$(function(){

        let width=$('.slide-box').innerWidth();
        $('.slide-box').css('left',-width);
        $('.open').click(function(){
  
                $('.slide-box').animate({'left':0},500); 
                $('.open').animate({'left':width},500);
})
        $('.close').click(function(){
                $('.slide-box').animate({'left':-width},500); 
                $('.open').animate({'left':0},500);
})


})

$(function(){
        $('.sidebar a').click(function(){
                let currentLink=$(this).attr('href');
                let currentOffset=$(currentLink).offset().top;
                $('html,body').animate({scrollTop:currentOffset},1000)
        })
                
})



$(function(){
        $("#details p").first().css("display","block");
        $('#details h3').click(function(){
                $(this).next().slideToggle(500);
                $("#details p").not($(this).next()).slideUp(500);
        })
        
})



function countDown(){
        let currentDate=new Date();
        let specificDate=new Date(2022,8,6)

        let currentInMilliSec=currentDate.getTime();
        let specificInMilliSec=specificDate.getTime();
     
        let time=specificInMilliSec-currentInMilliSec;


       let s = Math.floor(time / 1000),
        m = Math.floor(s / 60),
        h = Math.floor(m / 60),
        d = Math.floor(h / 24)-30;

        s %= 60;
        m %= 60;
        h %= 24;
        
        

        h = (h < 10) ? "0" + h : h; //if(h<10){h=0+h}else{h=h}
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        
        $('.duration-item').eq(0).text(d+' D')
        $('.duration-item').eq(1).text(h+' H')
        $('.duration-item').eq(2).text(m+' M')
        $('.duration-item').eq(3).text(s+' S')

        setTimeout(countDown,1000)
}
countDown()





$(function(){
        let maxNum=100;
        $('textarea').keyup(function(){
                let length=$(this).val().length;
                let sub=maxNum-length
                // console.log(sub)
                if(sub<=0)
                {
                        $("#char").text("your available character finished"); 
                }else
                {
                        $("#char").text(sub);
                }
        })
})
