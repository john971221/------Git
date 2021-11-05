window.addEventListener('DOMContentLoaded', function () {
    var loadfonts = document.querySelectorAll('#loading1 h2');
    var lf = [loadfonts[0],loadfonts[1],loadfonts[2],loadfonts[3]]

    setTimeout(function(){
        $(lf).eq(0).addClass('active');
    },100)
        setTimeout(function(){
        $(lf).eq(0).removeClass('active');
    },290)
    setTimeout(function(){
        $(lf).eq(1).addClass('active')
        $('#loading').css({
            background:'#fff'
        })
    },600)
        setTimeout(function(){
        $(lf).eq(1).removeClass('active');
    },800)
    setTimeout(function(){
        $(lf).eq(2).addClass('active');
                $('#loading').css({
            background:'#000'
        })
    },1100)
    setTimeout(function(){
        $(lf).eq(2).removeClass('active');
    },1300)
    setTimeout(function(){
        $(lf).eq(3).css({
            transform:'translateY(0)'
        })
    },1600)
    setTimeout(function(){
        $(lf).eq(3).css({
            transform:'translateY(-110%)'
        })
    },2300)
    setTimeout(function(){
        $('#loading').fadeOut()
        
    },2900)
    
    
})
