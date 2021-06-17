var check = $('.check-block__input');
var accordion_triger = $('.item__triger');
var accordion_icon = $('.triger__icon');
var accordion_content = $('.item__content');

var accordion_active = 'active__item';

var src_open ='./icons/open.svg';
var src_close ='./icons/close.svg';

$(document).ready( () => {
    $('.active__item').children(accordion_triger).next(accordion_content).slideToggle(200);
    $('.active__item').children(accordion_triger).children(accordion_icon).attr("src", src_open);
    
    $(accordion_triger).on('click', function(){
        if(check.prop("checked")){
            parent = $(this).parent();
            if(parent.hasClass(accordion_active)){
                parent.removeClass(accordion_active).children(accordion_triger).next(accordion_content).slideToggle(200);
                parent.children(accordion_triger).children(accordion_icon).attr("src", src_close);
            }
            else{
                parent.addClass(accordion_active).children(accordion_triger).next(accordion_content).slideToggle(200);
                parent.children(accordion_triger).children(accordion_icon).attr('src', src_open);
            }
        }
        else{
            accordion_content.not( $(this).next() ).slideUp(200);
            accordion_content.not( $(this).next() ).prev().children(accordion_icon).attr('src', src_close);
            $('.accordion-box__item').removeClass(accordion_active);
            $(this).next().slideDown(200).parent().addClass(accordion_active);
            $(this).children(accordion_icon).attr('src', src_open);
        }   
    })

    check.change( () => { 
        $('.active__item').children(accordion_triger).next(accordion_content).slideToggle(200);
        $('.active__item').children(accordion_triger).children(accordion_icon).attr("src", src_close);
        accordion_triger.parent().removeClass(accordion_active);
    });
    
})
