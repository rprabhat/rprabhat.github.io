$(document).ready(function(){       
    $('.achievement').on('click', function(){
        $(this).toggleClass('out');
        
        if ($(this).hasClass('out')) {
            var audio = new Audio('http://centracomm.cachefly.net/majornelson/2007/Achievement-mp3-sound.mp3');
            audio.play();
        }
    });
});
