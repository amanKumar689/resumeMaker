const menu = document.getElementsByClassName('menu')[0];
const menu_ul = document.getElementById('menu_ul');
menu.addEventListener('click', () => {
    const side_bar = document.getElementsByClassName('side_bar_2')[0];
    side_bar.classList.toggle('open');
     menu_ul.classList.toggle('translate');
})

check();
window.addEventListener('resize',check);
function check(){

    if(window.innerWidth>=767)
    {
        menu_ul.style.opacity=0;
}
}

// const elem = document.getElementsByClassName('container-fluid')[0];
// const check_2= ()=>{
//   var w = window.innerWidth;
//   console.log("resizing");
//   if(window.innerWidth<=767)
//   {
    
//     elem.style.width = (w*1)+'px'; //height: 94vh
//   }
//   else
//   {
//     elem.style.width = (w*.83)+'px'; //height: 94vh
    
//   }
  
// }
// window.addEventListener('resize', check_2);
// check_2();