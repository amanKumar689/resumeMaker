$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {


        if (this.hash !== "") {

            var hash = this.hash;

        }

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });

});


document.getElementsByClassName('vert-move')[0].addEventListener('click', () => {

    var move = document.getElementsByClassName('row')[0];

    move.children[0].setAttribute("data-aos-delay", "100");
    move.children[1].setAttribute("data-aos-delay", "200");
    move.children[2].setAttribute("data-aos-delay", "300");

});
if (window.innerWidth <= 767)

{


    var template = document.getElementsByClassName('feature')[0].children[0];

    template.children[0].setAttribute('data-aos-offset', '150');
    template.children[1].setAttribute('data-aos-offset', '0');
    template.children[2].setAttribute('data-aos-offset', '0');



}

//  ............TOGGLE_MENU_BAR.......................

const menu = document.getElementsByClassName('menu')[0];


menu.addEventListener('click', () => {
    const side_bar = document.getElementsByClassName('side_bar')[0];
    side_bar.classList.toggle('open');

})
const feature = document.getElementsByClassName('fa-circle');


console.log(document.body.scrollHeight);
const featureheight = document.getElementsByClassName('feature')[0];
const featureheight_2 = document.getElementsByClassName('contact')[0];



const elem = document.getElementsByClassName('container-fluid')[0];
const elem_2 = document.getElementsByClassName('side_bar')[0];
const check_2 = () => {
  let vh = window.innerHeight;
  // Then we set the value in the --vh custom property to the root of the document


  document.documentElement.style.setProperty('--vh', `${vh}px`);
    var w = window.innerWidth;
    if (window.innerWidth <= 767) {

      elem_2.style.width = '60px'; //height: 94vh
        
    } else {
        elem_2.style.width = '17%'; //height: 94vh
                  

    }

}
window.addEventListener('resize', check_2);
check_2();
//667
//2214
//3180





var elem_3 = document.getElementsByClassName('navstatus')[0];
var elem_4 = document.getElementsByClassName('side_bar')[0];

elem_4.style.minHeight = (window.innerHeight) + 'px';
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit

// ...................................STICK MY SIDE_BAR AT certain innerHeight.innerHeight.........................
// window.addEventListener('scroll', ()=>{

//   if(window.innerHeight + window.screenY >= )
// })

