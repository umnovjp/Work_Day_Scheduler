var hourNumber = 0;
var AMPM;
//  var time = moment();
var date = moment().format("dddd, MMMM Do");
var hour = moment().format("HH");
$('#currentDay').text(date); //place var date to class container


    for (i = 0; i < 9; i++) {

      // var buttonId = "button".concat(i);
      // var divTag = document.createElement("div");
        var divTag = document.createElement('div');
      //  divTag.textContent = 'div ' + i;
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
      //      function createDelay() {console.log(i)};
      spanTag0.textContent =  hourNumber + AMPM;
      spanTag0.setAttribute("class", "hour")
      spanTag0.setAttribute("id", "pId")
      //document.getElementById('divId').appendChild(spanTag0);
      divTag.appendChild(spanTag0);
      var hourRecord = document.createElement("textarea");
      hourRecord.textContent = i;
      hourRecord.setAttribute("id", "hour"+i);
      console.log(hourRecord.getAttribute('id'));
      var temp = hourRecord.textContent;
      localStorage.setItem("hour"+i, temp);
      if (hour - 6 < (i + 9)) {hourRecord.setAttribute("class", "future")}
      //  console.log(hour - 6 + ' ' + (i + 9));}
      else if (hour - 6 === (i + 9)) {hourRecord.setAttribute("class", "present")}
      // console.log(hour - 6 + ' ' + (i + 9));}
      else {hourRecord.setAttribute("class", "past")}
     // pTag1.setAttribute("id", "pId")
     // document.getElementById('pId').appendChild(pTag1);
      // spanTag1.setAttribute("class", "future")
      divTag.appendChild(hourRecord);
      var saveB = document.createElement("Button");
      saveB.textContent = '🔒';
      saveB.setAttribute("class", "saveBtn");
      saveB.setAttribute("id", "button"+i);
      //document.getElementById('divId').appendChild(spanTag0);
      divTag.appendChild(saveB);      
      
    }; // end setting for loop

    // to enter new text and save
    var zeroButton = document.querySelector('#hour0');
    var firstButton = document.querySelector("#hour1");
    var secondButton = document.querySelector("#hour2");
    var thirdButton = document.querySelector("#hour3");
    var forthButton = document.querySelector("#hour4");

    zeroButton.addEventListener('click', updateEntry);
    firstButton.addEventListener("click", updateEntry);
    secondButton.addEventListener("click", updateEntry);
    thirdButton.addEventListener("click", updateEntry);
    forthButton.addEventListener("click", updateEntry);

    function updateEntry () {localStorage.setItem('hour0', zeroButton.textContent);
    localStorage.setItem('hour1', firstButton.textContent);
    localStorage.setItem('hour2', secondButton.textContent);
    var count0 = localStorage.getItem('hour0');
    var count1 = localStorage.getItem('hour1');
    var count2 = localStorage.getItem('hour2');
    console.log (count0 + ' ' + count1 + ' ' + count2)
  } 
  
  updateEntry ()// {zeroButton.textContent = localStorage.getItem} // i need to get value first then set value in local storage

    // to retrieve item start with button0
   //  document.querySelector('#button0').textContent = localStorage.getItem()

 //   setTimeout(createDelay, 5000)


