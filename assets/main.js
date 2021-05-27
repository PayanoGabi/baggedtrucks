window.addEventListener('load', (event) => {
  console.log('page is fully loaded');

});

var partOne = document.querySelector('.step-one')
var partTwo = document.querySelector('.signup-process-two').style.visibility = 'hidden';
var partThree = document.querySelector('.signup-process-three').style.visibility = 'hidden';


partOne.addEventListener("click", function() {
    alert("The form was submitted");
    var partTwo = document.querySelector('.signup-process-two').style.visibility = 'visible';

  });

var subscribeOption = document.getElementById('subscribe-btn');

subscribeOption.addEventListener("click", function(){
  var txt;
  if (confirm("You are subscried!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;

});

var pages  = window.mouseflowHref;

document.addEventListener('excludePage', function(event) {

    if(window.mouseflowHref == 'https://baggedtrucksforsale.com/BaggedTrucks/') {

        mouseflow.stop()

    }
    else {
      console.log("this is working");
    }

});
