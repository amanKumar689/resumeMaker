const express = require('express')
const app = express();
const path = require('path')
var pdf = require('express-pdf');
const fs = require('fs');
const handlebars = require('handlebars');
const port = process.env.PORT || 8000; 







app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}))

app.use(pdf);
 // or you can app.use(require('express-pdf'));


app.use('/templateid1', function(req, res) {


        
// var html = fs.readFileSync('1st.html', 'utf8');
// var options = { format:"A4" };
// pdf.create(html, options).toFile('./businesscard.pdf', function(err, res_) {
//     if (err) return console.log(err);
//      res.sendFile(__dirname + '/businesscard.pdf');
//     console.log(res_); // { filename: '/app/businesscard.pdf' }
//   });
  

    var newString = fs.readFileSync('1st.html', 'utf-8');
    var exp_index = 2;
    var skill_index = 2;
    var edu_index = 2;
    if (skill_index <= req.query.skill || exp_index <= req.query.experience || edu_index <= req.query.education)
     {

        const indexofskill = newString.indexOf('<li>{{skill1}}<br/></li>');


        var html = "";


        // .......................SKILL................
        while (skill_index <= req.query.skill ) {
                
            if(req.body[`skill${skill_index}`]!= "")
        
            {  
                
                html += `<li> {{skill${skill_index}}}<br/></li>`;
            }  
            
            skill_index++;


        }
        newString = newString.slice(0, indexofskill + 24) + html + newString.slice(indexofskill + 24);
        const indexofexperience = newString.indexOf('{{jobdescription1}}</span></h4></div>');
        html = "";
        // .....................................EXPERIENCE..........................
        while (exp_index <= req.query.experience) {

            html += `<div class="tab">
                      
                      <h4 style="margin-bottom:30px;font-family: ;position: relative;min-height: 100px;">
                      {{start${exp_index}}} &nbsp; - &nbsp; {{end${exp_index}}} <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp;{{company${exp_index}}}
                      
                      <span style="font-size: 13px;margin-left:120px;position: absolute;top:0px;  ;margin-right:10px;line-height:1.5;font-family:Book Antiqua;font-weight: lighter;">  <span style="font-weight: bold;">
                      {{jobtitle${exp_index}}}  </span><br/><br/> {{jobdescription${exp_index}}}</span></h4></div>`;
            exp_index++;
        }
        newString = newString.slice(0, indexofexperience + 37) + html + newString.slice(indexofexperience + 37);




        const indexofeducation = newString.indexOf('{{degree1}}<br/><br/></h4></div>');
        html = "";
        while (edu_index <= req.query.education) {

            html += ` <div class="tab_2">

                      
                      <h4 style="margin-bottom:40px;position: relative;">
                         {{graduationmonth${edu_index}}} - {{graduationyear${edu_index}}}
                          <br/> <br/> {{schoolname${edu_index}}}
                         
                         <span style="font-size: 13px;position: absolute;top:0px;left:250px;line-height:1.5;font-family:Book Antiqua; font-weight: lighter; "> 
                         {{degree${edu_index}}}<br/><br/></h4></div>`;
            edu_index++;
        }
        newString = newString.slice(0, indexofeducation + 32) + html + newString.slice(indexofeducation + 32);

    }

    const template = handlebars.compile(newString);
    newString = template(req.body);


    fs.writeFileSync('demo.html',newString);




        res.pdfFromHTML({
            filename: 'demo.pdf',
            html: path.resolve(__dirname,'demo.html'),
           

        });
});

app.use('/templateid2', (req, res)=>{

  var newString = fs.readFileSync('2nd.html', 'utf-8');
  var exp_index = 2;
  var skill_index = 2;
  var edu_index = 2;
  if (skill_index <= req.query.skill || exp_index <= req.query.experience || edu_index <= req.query.education) {

      const indexofskill = newString.indexOf('{{skill1}}</p>');


      var html = "";


      // .......................SKILL................
      while (skill_index <= req.query.skill) {
  
        if(req.body[`skill${skill_index}`]!= "")
        
        {  
           
          html += ` <p style="margin-bottom:20px">{{skill${skill_index}}}</p>`;
          
        }
        skill_index++;

      }
      newString = newString.slice(0, indexofskill + 14) + html + newString.slice(indexofskill + 14);
      const indexofexperience = newString.indexOf('{{jobdescription1}}</span></div>');
      html = "";
      // .....................................EXPERIENCE..........................
      while (exp_index <= req.query.experience) {

          html += `<div class="tab"> 
          <h5 style="font-size:15px ;letter-spacing: 5px;line-height:2;"> {{jobtitle${exp_index}}}</h5> <span style="margin-left:0px;font-size:14px;"> {{start${exp_index}}} - {{end${exp_index}}}</span>
          <h5 style="margin-top:5px;margin-left:0px;"> {{company${exp_index}}} </h5><br/> <span style="font-size: 13px;">
          {{jobdescription${exp_index}}}</span></div>`;
          exp_index++;
      }
      newString = newString.slice(0, indexofexperience + 32) + html + newString.slice(indexofexperience + 32);

      const indexofeducation = newString.indexOf('{{schoolname1}}</span></h5></div>');
      html = "";
      while (edu_index <= req.query.education) {

          html += `    <div class="tab_2" >                 
          <h5 style="margin-top:5px;display:inline-block"> 
               <span style="font-size: 14px;line-height:2.9">
             {{graduationmonth${edu_index}}} - {{graduationyear${edu_index}}}</span> 
              <span style="font-size: 16px;font-weight: lighter;margin-left:180px;letter-spacing: 3px;">{{degree${edu_index}}} </span>
              <br/>
               <span style="font-size:15px ;letter-spacing: 3px;display:inline-block;width:220px;"> 
                  {{schoolname${edu_index}}}</span></h5></div>`;
          edu_index++;
      }
      newString = newString.slice(0, indexofeducation + 33) + html + newString.slice(indexofeducation + 33);

    }
    const template = handlebars.compile(newString);
    newString = template(req.body);

    fs.writeFileSync('demo.html',newString);

    res.pdfFromHTML({
        filename: 'demo.pdf',
        html: path.resolve(__dirname,'demo.html'),

    });

});

app.use('/templateid3' , (req, res)=>{


  var newString = fs.readFileSync('3rd.html', 'utf-8');
  var exp_index = 2;
  var skill_index = 2;
  var edu_index = 2;
  if (skill_index <= req.query.skill || exp_index <= req.query.experience || edu_index <= req.query.education) {

      const indexofskill = newString.indexOf('<p>{{skill1}}</p>');


      var html = "";


      // .......................SKILL................
      while (skill_index <= req.query.skill) {
  
        if(req.body[`skill${skill_index}`]!= "")
        
        {  
           
          html += ` <p>{{skill${skill_index}}}</p>`;
        }
          skill_index++;

      }
      newString = newString.slice(0, indexofskill + 17) + html + newString.slice(indexofskill + 17);
      const indexofexperience = newString.indexOf('{{jobdescription1}}</p></div>');
      html = "";
      // .....................................EXPERIENCE..........................
      while (exp_index <= req.query.experience) {

          html += `<div class="tab">

          <span style="line-height:2.1"> {{jobtitle${exp_index}}}</span> <span style="float:right"> {{start${exp_index}}} - 
              {{end${exp_index}}}</span>
          <br/>  <span style="font-size: 13px;"> {{company${exp_index}}}</span>  
          <p style="margin:10px 0px 0px 0px;letter-spacing: 2px;font-family:Copperplate Gothic ;font-size:13px;color:rgb(95, 95, 95);line-height:1.3">
              {{jobdescription${exp_index}}}</p></div>`;
          exp_index++;
      }
      newString = newString.slice(0, indexofexperience + 29) + html + newString.slice(indexofexperience + 29);

      const indexofeducation = newString.indexOf('{graduationyear1}}</span></h6></div>');
      html = "";
      while (edu_index <= req.query.education) {

          html += `  <div class="tab_2" style="text-align:start;margin-left:50px">
                
          <h6 style="font-size: 15px;line-height:1.8;font-family:Book Antiqua;letter-spacing: 3px;"> {{degree${edu_index}}} <br/> 
              <span style="font-weight: lighter;font-size:12px ;"> {{schoolname${edu_index}}}</span><br/>
              <span style="font-weight: lighter;font-size:12px "> {{graduationmonth${edu_index}}} - {{graduationyear${edu_index}}}</span></h6></div>`;
          edu_index++;
      }
      newString = newString.slice(0, indexofeducation + 37) + html + newString.slice(indexofeducation + 37);

    }
    const template = handlebars.compile(newString);
    newString = template(req.body);
    fs.writeFileSync('demo.html',newString);

    res.pdfFromHTML({
        filename: 'demo.pdf',
        html: path.resolve(__dirname,'demo.html'),

    });

});



app.use('/templateid4', (req, res)=>{


  var newString = fs.readFileSync('4th.html', 'utf-8');
  var exp_index = 2;
  var skill_index = 2;
  var edu_index = 2;
  if (skill_index <= req.query.skill || exp_index <= req.query.experience || edu_index <= req.query.education) {

      const indexofskill = newString.indexOf('{{skill1}}</span><br/>');


      var html = "";


      // .......................SKILL................
      while (skill_index <= req.query.skill) {

        if(req.body[`skill${skill_index}`]!= "")
        
        {  
           
          html += `<span style="line-height:2;font-family:Lucida fax ;font-weight: bolder;letter-spacing: 4px;">
          {{skill${skill_index}}}</span><br/>`;
        }
          skill_index++;

      }
      newString = newString.slice(0, indexofskill + 22) + html + newString.slice(indexofskill + 22);
      const indexofexperience = newString.indexOf('{{jobdescription1}}</span></div>');
      html = "";
      // .....................................EXPERIENCE..........................
      while (exp_index <= req.query.experience) {

          html += `<div class="tab" style="margin-bottom:20px;position: relative;">

          <span>{{start${exp_index}}} - {{end${exp_index}}}<br/><span style="line-height: 2;"> {{company${exp_index}}}</span> </span>
          <span style="font-size: 13px;position: absolute;top:0px;margin-left:100px;">
              {{jobdescription${exp_index}}}</span></div>`;
          exp_index++;
      }
      newString = newString.slice(0, indexofexperience + 32) + html + newString.slice(indexofexperience + 32);

      const indexofeducation = newString.indexOf('{{schoolname1}}</span></div>');
      html = "";
      while (edu_index <= req.query.education) {

          html += ` <div class="tab_2" style="margin-bottom:20px">
          <p style="display: inline-block">{{graduationmonth1}} - {{graduationyear${edu_index}}} 
           <span style="line-height: 2;margin-left:180px;">{{degree${edu_index}}}</span>
       </p>
          <br/>  <span style="line-height: 2;">{{schoolname${edu_index}}}</span></div>`;
          edu_index++;
      }
      newString = newString.slice(0, indexofeducation + 28) + html + newString.slice(indexofeducation + 28);

    }
    const template = handlebars.compile(newString);
    newString = template(req.body);
    fs.writeFileSync('demo.html',newString);

    res.pdfFromHTML({
        filename: 'demo.pdf',
        html: path.resolve(__dirname,'demo.html'),

    });
});

app.use('/templateid5' , (req,res)=>{

  var newString = fs.readFileSync('5th.html', 'utf-8');
  var exp_index = 2;
  var skill_index = 2;
  var edu_index = 2;
  if (skill_index <= req.query.skill || exp_index <= req.query.experience || edu_index <= req.query.education) {

      const indexofskill = newString.indexOf('<li>{{skill1}}</li>');


      var html = "";


      // .......................SKILL................
      while (skill_index <= req.query.skill) {
 
        if(req.body[`skill${skill_index}`]!= "")
        
        {  
           
          html += ` <li>{{skill${skill_index}}}</li>`;
        }
          skill_index++;

      }
      newString = newString.slice(0, indexofskill + 19) + html + newString.slice(indexofskill + 19);
      const indexofexperience = newString.indexOf('{{jobdescription1}}</p></div>');
      html = "";                                   
      // .....................................EXPERIENCE..........................
      while (exp_index <= req.query.experience) {

          html += ` <div class="tab" >
          <h6 style="font-size:15px;letter-spacing:3px;line-height:1.6"> {{jobtitle1}}  </h6> <span style="font-size: 12px;">{{start${exp_index}}} - {{end${exp_index}}} </span> <br/> <span> {{company${exp_index}}}</span> <br/> <br/>
          <p style="font-size: 14px;">
           {{jobdescription${exp_index}}}</p></div>`;
          exp_index++;
      }
      newString = newString.slice(0, indexofexperience + 29) + html + newString.slice(indexofexperience + 29);

      const indexofeducation = newString.indexOf('<p>{{schoolname1}}</p></div>');
      html = "";
      while (edu_index <= req.query.education) {

          html += ` <div class="tab_2" style="font-size:13px;">
          <p> {{graduationmonth${edu_index}}} - {{graduationyear${edu_index}}} </p>
          <p> {{degree${edu_index}}}</p>
          <p>{{schoolname${edu_index}}}</p></div>`;
          edu_index++;
      }
      newString = newString.slice(0, indexofeducation + 28) + html + newString.slice(indexofeducation + 28);

    }
    const template = handlebars.compile(newString);
    newString = template(req.body);
    fs.writeFileSync('demo.html',newString);

    res.pdfFromHTML({
        filename: 'demo.pdf',
        html: path.resolve(__dirname,'demo.html'),

    });
});

app.use('/templateid6', (req, res)=>{


  var newString = fs.readFileSync('6th.html', 'utf-8');
  var exp_index = 2;
  var skill_index = 2;
  var edu_index = 2;
  if (skill_index <= req.query.skill || exp_index <= req.query.experience || edu_index <= req.query.education) {

      const indexofskill = newString.indexOf('<li>{{skill1}}</li>');


      var html = "";


      // .......................SKILL................
      while (skill_index <= req.query.skill) {
   
        if(req.body[`skill${skill_index}`]!= "")
        
        {  
           
          html += ` <li>{{skill${skill_index}}}</li>`;
        }
          skill_index++;

      }
      newString = newString.slice(0, indexofskill + 19) + html + newString.slice(indexofskill + 19);
      const indexofexperience = newString.indexOf('{{jobdescription1}}</span></div>');
      html = "";
      // .....................................EXPERIENCE..........................
      while (exp_index <= req.query.experience) {

          html += `  <div class="tab">
          <span style="line-height:1.5;margin-right:60px;float: left;">  {{start${exp_index}}} - {{end1}} </span>
          <p style="padding-left: 100px;">
              <span style="line-height:1.5;font-size: 14px;font-weight: bold;margin-left:20px"> 
                  {{jobtitle${exp_index}}} </span> <br/>
              <span style="font-size: 14px;line-height: 1.9;margin-left:20px;">    {{company${exp_index}}}  </span> </p></br/>
              <span style="line-height:1.5;font-size:14px;margin-left:10px;top:60px;font-family: Georgia, 'Times New Roman', Times, serif;"> 
              {{jobdescription${exp_index}}}</span></div>`;
          exp_index++;
      }
      newString = newString.slice(0, indexofexperience + 32) + html + newString.slice(indexofexperience + 32);

      const indexofeducation = newString.indexOf('{{schoolname1}}</span><br/></div>');
      html = "";
      while (edu_index <= req.query.education) {

          html += ` <div class="tab_2">
          <span style="line-height:2">  {{graduationmonth${edu_index}}} - {{graduationyear${edu_index}}} </span>
          <span style="line-height:1.5;letter-spacing:3px;float:right"> 
               {{degree${edu_index}}} </span> <br/>
          <span style="font-weight: bold;display:inline-block;max-width:200px;">{{schoolname${edu_index}}}</span><br/>
      </div>`;
          edu_index++;
      }
      newString = newString.slice(0, indexofeducation + 33) + html + newString.slice(indexofeducation + 33);

       
    }
    const template = handlebars.compile(newString);
     newString = template(req.body);


    fs.writeFileSync('demo.html',newString);

    res.pdfFromHTML({
        filename: 'demo.pdf',
        html: path.resolve(__dirname,'demo.html'),

    });
});

app.listen(port);