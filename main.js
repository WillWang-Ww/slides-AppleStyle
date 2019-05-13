let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let $firstcopy = $images.eq(0).clone(true)
let $lastcopy = $images.eq($images.length - 1).clone(true)

$slides.append($firstcopy)
$slides.prepend($lastcopy)
$slides.css({transform:'translateX(-600px)'})

let current = 0

$buttons.eq(0).on('click',function(){
    if(current === 2){
        $slides.css({transform:'translateX(-2400px)'})
            .one('transitionend',function(){
                $slides.hide()
                .offset()
                $slides.css({transform:'translateX(-600px)'})
                .show()
            })
    }else{
        $slides.css({transform:'translateX(-600px)'})
    }
    current = 0
})

$buttons.eq(1).on('click',function(){
    
    $slides.css({transform:'translateX(-1200px)'})
    current = 1
})

$buttons.eq(2).on('click',function(){
    if(current === 0){
        $slides.css({transform:'translateX(0px)'})
            .one('transitionend',function(){
                $slides.hide()
                .offset()
                $slides.css({transform:'translateX(-1800px)'})
                .show()
            })
    }else{
        $slides.css({transform:'translateX(-1800px)'})
    }
    current = 2
})
