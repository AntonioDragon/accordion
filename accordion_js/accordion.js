var check = document.querySelector('.check-block__input');
var accordion_icon_all = document.querySelectorAll('.trigger__icon');
var accordion_active = 'active--item';

var src_open ='icon--open';
var src_close ='icon--close';

document.querySelectorAll('.item__trigger').forEach(item =>
    item.addEventListener('click', ()=>{
        var parent = item.parentNode;
        var accordion_icon = parent.querySelector('.trigger__icon');

        if(check.checked){
            parent.classList.toggle(accordion_active);
            if(parent.classList.contains(accordion_active)){
                accordion_icon.classList.remove(src_close);
                accordion_icon.classList.add(src_open);
            }
            else{
                accordion_icon.classList.remove(src_open);
                accordion_icon.classList.add(src_close);
            }
        }
        else{
            if(parent.classList.contains(accordion_active)){
                parent.classList.remove(accordion_active);
                accordion_icon.classList.remove(src_open);
                accordion_icon.classList.add(src_close);
            }
            else{
                document.querySelectorAll('.item').forEach((child)=> child.classList.remove(accordion_active));
                accordion_icon_all.forEach((child)=> child.classList.remove(src_open));
                accordion_icon_all.forEach((child)=> child.classList.add(src_close));
                parent.classList.add(accordion_active);
                accordion_icon.classList.remove(src_close);
                accordion_icon.classList.add(src_open);
            }
        }
    })   
)
check.addEventListener('click',()=>{
    document.querySelectorAll('.item').forEach((child)=> child.classList.remove(accordion_active));
    accordion_icon_all.forEach((child)=> child.classList.remove(src_open));
    accordion_icon_all.forEach((child)=> child.classList.add(src_close));
})