
var index = 0;
var form = document.getElementsByClassName('form');
var formid = document.getElementById('form');
$(".next").on("click", () => {

    if (index <= 3) {


        //    console.log(form[index].children[2]); 
        form[index].style.display = "none";
        form[++index].style.display = "block";
        window.scrollTo(0, 0);

    } 
});

$('form').on('submit', ()=>{
 
    let params = new URLSearchParams(location.search);

    formid.action = `/templateid${params.get('id')}?skill=${num}&education=${swipe_val}&experience=${swipe_val_2}`;
    return true;

})
$('.backbtn').on('click', () => {
    console.log(index);
    form[index].style.display = "none";
    form[--index].style.display = "block";
    window.scrollTo(0, 0);


});


const add = document.getElementById('add');
var num = 2;
var POS = num;
add.addEventListener('click', () => {

    var html = ` <div class="input" id="${++num}">
  <p>${num}.</p>
  <input type="text" name="skill${num}">
</div>
<div class="input" id="${++num}">
<p>${num}.</p>
  <input type="text" name="skill${num}">
</div>
`;
    $(`${html}`).insertAfter(`#${POS}`);
    POS = num;



})


// ...............MENU TOGGLE.......................

const menu = document.getElementsByClassName('menu')[0];

menu.addEventListener('click', () => {
    const side_bar = document.getElementsByClassName('side_bar_2')[0];
    side_bar.classList.toggle('open');

    menu_ul.classList.toggle('translate');
})

check();
window.addEventListener('resize', check);

function check() {

    if (window.innerWidth >= 767) {
        menu_ul.style.opacity = 0;
    }
}


const elem_2 = document.getElementsByClassName('container-fluid')[0];
const elem = document.getElementsByClassName('detail')[0];

const check_2 = () => {
    var h = window.innerHeight;
    elem.style.minHeight = (h * 1) + 'px';
    var w = window.innerWidth;


}
window.addEventListener('resize', check_2);
check_2();



// .................ACCORDION FORM PROJECT Education...........................


const add2 = document.getElementById('add2');
var swipe_val = 1;

add2.addEventListener('click', () => {
    var add2_elem = document.getElementById(`collapseone${swipe_val}`);

    const html_2 = ` <div class="card-header eduheader" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link accordionedubtn" type="button" data-toggle="collapse" data-target="#collapseone${swipe_val+1}" aria-expanded="true" aria-controls="collapseone${swipe_val+1}" style="color:white">
             Here Qualification Name
          </button>
           <i class="far fa-trash-alt my-3 delete" style="color:white;float:right;cursor: pointer;" ></i>
                            </h5>
                        </div>

                        <div id="collapseone${swipe_val+1}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample1">

                            <div class="education_area" id="education">

                                <div class="swipe_up" id=swipe_up${swipe_val+1}>
                                    <div class="input">
                                        <input type="text" name="schoolname${swipe_val+1}"></div>
                                        <div class="input">
                                        <input type="text" name="degree${swipe_val+1}" class="degree"></div>

                                    <div class="input">
                                        <p style="color:white;font-family:Lucida Fax ;">Graduation date</p>
                                        <select name="graduationmonth${swipe_val+1}"> 
           <option value="JAN">JAN</option>
           <option value="FEB">FEB</option>
           <option value="MAR">MAR</option>
           <option value="APR">APR</option>
           <option value="APR">MAY</option>
           <option value="APR">JUN</option>
           <option value="APR">JUL</option>
           <option value="APR">AUG</option>
           <option value="APR">SEP</option>
           <option value="APR">OCT</option>
           <option value="APR">NOV</option>
           <option value="APR">DEC</option>
       </select>
                <select name="graduationyear${swipe_val+1}" class="yearselect"> 
           <option value="2021">2021</option>
           <option value="2020">2020</option>
           <option value="2019">2019</option>
           <option value="2018">2018</option>
       </select>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    $(`${html_2}`).insertAfter(add2_elem);

    add2_elem = document.getElementById(`collapseone${swipe_val}`);
    add2_elem.classList.remove('show');
    swipe_val++;

})


// ................. ACCORDION FORM PROJECT  Experience...........................

const add3 = document.getElementById('add3');
var swipe_val_2 = 1;

add3.addEventListener('click', () => {
    var add2_elem_2 = document.getElementById(`collapsetwo${swipe_val_2}`);

    const html_2 = `   <div class="card-header expheader" id="heading One">
<h5 class="mb-0">
    <button class="btn btn-link accordionexpbtn" type="button" data-toggle="collapse" data-target="#collapsetwo${swipe_val_2+1}" aria-expanded="true" aria-controls="collapsetwo${swipe_val_2+1}" style="color:white" >
Here Qualification Name
</button>
 <i class="far fa-trash-alt my-3 delete" style="color:white;float:right;cursor: pointer;" id="delete1"></i>
</h5>
</div>

<div id="collapsetwo${swipe_val_2+1}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample2">


<div class="experience_area" id="experience">
<div class="swipe_up_2" id="swipe_up_2(${swipe_val_2+1})">
<div class="input">
<input type="text" name="jobtitle${swipe_val_2+1}" class="jobtitle"></div>
<div class="input">
<input type="text" name="company${swipe_val_2+1}"></div>
<div class="input">
<input type="text" name="jobdescription${swipe_val_2+1}"></div>

<div class="input">
<p style="color:white;font-family:Lucida Fax ;">Working year</p>
<input type="month" id="start" name="start${swipe_val_2 +1}"  value="1999-11">
<input type="month" id="end" name="end${swipe_val_2 +1}"  value="1999-11">

</div>
</div>

</div>
</div> `;
    $(`${html_2}`).insertAfter(add2_elem_2);
    add2_elem_2.classList.remove('show');
    swipe_val_2++;

})





// ...........................EDUCATION................................

var edu_index = 0;
var card_index = 0;
var eduheader ="";
r_flct();

function r_flct() {
    
    var degree = document.getElementsByClassName(`degree`);
    var accordionedubtn = document.getElementsByClassName('accordionedubtn');
     eduheader = document.getElementsByClassName('eduheader');
    
    Array.from(degree).forEach( (element ,index)=> {
        

        if(index==card_index)
        {

            element.addEventListener('input', () => {
              
             accordionedubtn[index].innerText = element.value;
             if( accordionedubtn[index].innerText=="")
             {
                 accordionedubtn[index].innerText = "Degree Here";

             }
                        
                        })
        }
  

    });
    card_index++;
}
add2.addEventListener('click', () => {
     
    if(edu_index==0)
    {

        eduheader[edu_index].style.display = "block";
    }
    edu_index++;
    r_flct();
 
    $('.delete').unbind('click').click( (e)=>{
    
        console.log(e.target);
        
        e.target.parentNode.parentNode.nextElementSibling.remove();
           e.target.parentNode.parentNode.remove();
           swipe_val--;
           card_index--;
    })
   
})

    // ...............................Experience ADD AREA................


var exp_index = 0;
var card_index_2 = 0;
var expheader ="";
r_flct_2();

function r_flct_2() {
    
    var jobtitle = document.getElementsByClassName(`jobtitle`);
    var accordionexpbtn = document.getElementsByClassName('accordionexpbtn');
    expheader = document.getElementsByClassName('expheader');
    
    Array.from(jobtitle).forEach( (element ,index)=> {
        

        if(index==card_index_2)
        {

          
            element.addEventListener('input', () => {
              
                accordionexpbtn[index].innerText = element.value;
             if( accordionexpbtn[index].innerText=="")
             {
                accordionexpbtn[index].innerText = "Degree Here";

             }
                        
                        })
        }
  

    });
    card_index_2++;
}
add3.addEventListener('click', () => {
     
    if(exp_index==0)
    {

        expheader[exp_index].style.display = "block";
    }
    exp_index++;
    r_flct_2();

   
    $('.delete').unbind('click').click( (e)=>{
    
        console.log(e.target);
        
        e.target.parentNode.parentNode.nextElementSibling.remove();
           e.target.parentNode.parentNode.remove();
           swipe_val_2--;
           card_index_2--;
    });
})


// ................YEAR SELECTION................................

const year = new Date().getFullYear();
   var value= 2001; 
   var html="";
   var year_index=0;
   year_ADJ();
   
add2.addEventListener('click', year_ADJ);


function year_ADJ() {
    
    const yearselect= document.getElementsByClassName('yearselect');
    
    Array.from(yearselect).map( (element,index)=>{
     
         console.log(index);
         console.log(year_index);
        if(index==year_index)
        {
    
        while(value<=year)
        {
          html += `<option value=${value} >${value}</option>`;
     
         value++;
       }
      
         element.innerHTML= html;
              
        year_index++;
    }


});

}
// })

  



