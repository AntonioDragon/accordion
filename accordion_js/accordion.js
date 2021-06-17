var check = document.querySelector('.check-block__input');
var accordion_icon = '.triger__icon';
var accordion_active = 'active__item';

var src_open ='./icons/open.svg';
var src_close ='./icons/close.svg';

document.querySelectorAll('.item__triger').forEach(item =>
    item.addEventListener('click', ()=>{
        var parent = item.parentNode;
        
        if(check.checked){
            parent.classList.toggle(accordion_active);
            if(parent.classList.contains(accordion_active)){
                parent.querySelector(accordion_icon).src=src_open;
            }
            else{
                parent.querySelector(accordion_icon).src=src_close;
            }
        }
        else{
            if(parent.classList.contains(accordion_active)){
                parent.classList.remove(accordion_active);
                parent.querySelector(accordion_icon).src=src_close;
            }
            else{
                document.querySelectorAll('.item').forEach((child)=> child.classList.remove(accordion_active));
                document.querySelectorAll(accordion_icon).forEach((child)=> child.src=src_close);
                parent.classList.add(accordion_active);
                parent.querySelector(accordion_icon).src=src_open;
            }
        }
    })   
)
check.addEventListener('click',()=>{
    document.querySelectorAll('.item').forEach((child)=> child.classList.remove(accordion_active));
    document.querySelectorAll(accordion_icon).forEach((child)=> child.src=src_close);
})