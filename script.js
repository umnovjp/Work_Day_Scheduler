var hourNumber = 0;
var AMPM;
//  var time = moment();
var date = moment().format("dddd, MMMM Do");
var hour = moment().format("HH");


$('#currentDay').text(date); //place var date to class container

// this FOR LOOP dynamically creates 3 elements in 9 rows. elements include hour displayed as 9AM. text area with record, save button

    for (i = 0; i < 9; i++) {

        var divTag = document.createElement('div');
      divTag.setAttribute("class", "div-style")
      divTag.setAttribute("id", "divId")
      document.getElementById('bottom').appendChild(divTag);
      bottom.appendChild(divTag);
      var spanTag0 = document.createElement("span");
      if (i < 3) {hourNumber = i + 9;
        AMPM = 'AM'}
        else if (i === 3) {hourNumber = i + 9;
            AMPM = 'PM'}
        else {hourNumber = i - 3;
        AMPM = 'PM'}
      spanTag0.textContent =  hourNumber + AMPM;
      spanTag0.setAttribute("class", "hour")
      spanTag0.setAttribute("id", "pId")
      divTag.appendChild(spanTag0);
      var hourRecord = document.createElement("textarea");
      hourRecord.setAttribute("id", "hour"+i);
      console.log(hourRecord.getAttribute('id'));
      console.log(hour);
      if (hour - 1 < (i + 9)) {hourRecord.setAttribute("class", "future")}
      else if (hour - 1 === (i + 9)) {hourRecord.setAttribute("class", "present")}
      else {hourRecord.setAttribute("class", "past")}
      divTag.appendChild(hourRecord);
      var saveB = document.createElement("Button");
      saveB.textContent = '🔒';
      saveB.setAttribute("class", "saveBtn");
      saveB.setAttribute("id", "button"+i);
      divTag.appendChild(saveB);      
      
    }; // end setting FOR LOOP

    //next 18 lines are created to make sure that when I reload the page, content in local storage still displays there
  var scheduleContent0 = localStorage.getItem('hour0');
  var scheduleContent1 = localStorage.getItem('hour1');
  var scheduleContent2 = localStorage.getItem('hour2');
  var scheduleContent3 = localStorage.getItem('hour3');
  var scheduleContent4 = localStorage.getItem('hour4');
  var scheduleContent5 = localStorage.getItem('hour5');
  var scheduleContent6 = localStorage.getItem('hour6');
  var scheduleContent7 = localStorage.getItem('hour7');
  var scheduleContent8 = localStorage.getItem('hour8');
  hour0.textContent = scheduleContent0;
  hour1.textContent = scheduleContent1;
  hour2.textContent = scheduleContent2;
  hour3.textContent = scheduleContent3;
  hour4.textContent = scheduleContent4;
  hour5.textContent = scheduleContent5;
  hour6.textContent = scheduleContent6;
  hour7.textContent = scheduleContent7;
  hour8.textContent = scheduleContent8;

  //let me called this part of script RECORD DATA. when user enters data and clicks save button, content is recorded to local storage

    var zeroButton = document.querySelector('#button0');
    var firstButton = document.querySelector("#button1");
    var secondButton = document.querySelector("#button2");
    var thirdButton = document.querySelector("#button3");
   var forthButton = document.querySelector("#button4");
   var fifthButton = document.querySelector("#button5");
   var sixthButton = document.querySelector("#button6");
   var seventhButton = document.querySelector("#button7");
   var eigthButton = document.querySelector("#button8");

    zeroButton.addEventListener('click', updateEntry);
    firstButton.addEventListener("click", updateEntry);
    secondButton.addEventListener("click", updateEntry);
    thirdButton.addEventListener("click", updateEntry);
    forthButton.addEventListener("click", updateEntry);
    fifthButton.addEventListener('click', updateEntry);
    sixthButton.addEventListener('click', updateEntry);
    seventhButton.addEventListener('click', updateEntry);
    eigthButton.addEventListener('click', updateEntry);

    function updateEntry () {    var entry0 = document.getElementById('hour0').value;
    var entry1 = document.getElementById('hour1').value;
    var entry2 = document.getElementById('hour2').value;
    var entry3 = document.getElementById('hour3').value;
    var entry4 = document.getElementById('hour4').value;
    var entry5 = document.getElementById('hour5').value;
    var entry6 = document.getElementById('hour6').value;
    var entry7 = document.getElementById('hour7').value;
    var entry8 = document.getElementById('hour8').value;
     localStorage.setItem('hour0', entry0)
    localStorage.setItem('hour1', entry1);
    localStorage.setItem('hour2', entry2)
   localStorage.setItem('hour3', entry3);
   localStorage.setItem('hour4', entry4);
   localStorage.setItem('hour5', entry5);
   localStorage.setItem('hour6', entry6);
   localStorage.setItem('hour7', entry7);
   localStorage.setItem('hour8', entry8);
    console.log (entry0 + ' ' + entry1 + ' ' + entry2 );
  } 
  
  // end RECORD DATA part

    // to retrieve item start with button0
   //  document.querySelector('#button0').textContent = localStorage.getItem()

 //   setTimeout(createDelay, 5000)


