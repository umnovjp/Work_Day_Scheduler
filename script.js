var hourNumber = 5;
var AMPM;

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
            console.log(hourNumber);
            AMPM = 'PM'}
      spanTag0.textContent =  hourNumber + AMPM;
      spanTag0.setAttribute("class", "p-style")
      spanTag0.setAttribute("id", "pId")
      //document.getElementById('divId').appendChild(spanTag0);
      divTag.appendChild(spanTag0);
      var spanTag1 = document.createElement("span");
      spanTag1.textContent = 'tag1 ' + i;
      spanTag1.setAttribute("class", "p2-style")
     // pTag1.setAttribute("id", "pId")
     // document.getElementById('pId').appendChild(pTag1);
      divTag.appendChild(spanTag1);
      var spanTag2 = document.createElement("span");
      spanTag2.textContent = '🔒';
      spanTag2.setAttribute("class", "p3-style")
      spanTag2.setAttribute("id", "pId")
      //document.getElementById('divId').appendChild(spanTag0);
      divTag.appendChild(spanTag2);
    }; // end for loop

 
