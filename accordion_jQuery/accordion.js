var check_selector = $('.check-block__input');
var item_selector = $('.item');

var icon_class = '.trigger__icon';
var content_class = '.item__content';
var active_class = 'active--item';
var openIcon_class = 'icon--open';
var closeIcon_class = 'icon--close';

$(document).ready( () => {
    $('.active--item .item__content').slideToggle(200);
    $('.active--item .trigger__icon').removeClass(closeIcon_class).addClass(openIcon_class);

    $('.item__trigger').on('click', function(){
        var trigger = $(this);
        var item = trigger.closest('.item');
        var content = item.find('.item__content');
        var triggerIcon = trigger.find('.trigger__icon');

        if(check_selector.prop("checked")){
            if(item.hasClass(active_class)){
                content.slideToggle(200);
                item.removeClass(active_class);
                triggerIcon.removeClass(openIcon_class).addClass(closeIcon_class);
            }else{
                content.slideToggle(200);
                item.addClass(active_class);
                triggerIcon.removeClass(closeIcon_class).addClass(openIcon_class);
            }
        }
        else{
            if(item.hasClass(active_class)){
                content.slideUp(200);
                item.removeClass(active_class);
                triggerIcon.removeClass(openIcon_class).addClass(closeIcon_class);
            }
            else{
                $(content_class).not(content).slideUp(200);
                $(icon_class).not(triggerIcon).removeClass(openIcon_class).addClass(closeIcon_class);
                item_selector.removeClass(active_class);
                content.slideDown(200).parent().addClass(active_class);
                triggerIcon.removeClass(closeIcon_class).addClass(openIcon_class);
            }    
        }
    });
    check_selector.change( () => { 
        $('.'+active_class).find(content_class).slideToggle(200);
        $('.'+active_class).find(icon_class).removeClass(openIcon_class).addClass(closeIcon_class);
        item_selector.removeClass(active_class);
    });
})