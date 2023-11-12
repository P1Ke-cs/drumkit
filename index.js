
$('.drum').on('click', function(){
    playSound(this.innerHTML);
    buttonPress(this.innerHTML);
});

$(document).on('keydown', function(){
    playSound(event.key);
    buttonPress(event.key);
});


function playSound(key){

    switch (key){
        case 'a':
            var drum = new Audio('sounds/tom-1.mp3');
            drum.play();
            break;
            
        case 's':
            var drum = new Audio('sounds/tom-2.mp3');
            drum.play();
                break;

        case 'd':
            var drum = new Audio('sounds/tom-3.mp3');
            drum.play();
            break;

        case ' ':
            var drum = new Audio('sounds/tom-4.mp3');
            drum.play();
            break;
            
        case 'j':
            var drum = new Audio('sounds/snare.mp3');
            drum.play();
            break;

        case 'k':
            var drum = new Audio('sounds/crash.mp3');
            drum.play();
            break;

        case 'l':
            var drum = new Audio('sounds/kick-bass.mp3');
            drum.play();
            break;
        
            default: console.log(btnSelect);

    }

}

function buttonPress(presskey){

    $('.' + presskey).addClass('pressed');

    setTimeout(function(){
        $('.' + presskey).removeClass('pressed');
    }, 100);
}

