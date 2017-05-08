     
   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD9stvNwuJylhixbZ6mPDlhz-VSAyjCJ3A",
    authDomain: "soultrainexpress-10240.firebaseapp.com",
    databaseURL: "https://soultrainexpress-10240.firebaseio.com/",
    projectId: "soultrainexpress-10240",
    storageBucket: "soultrainexpress-10240.appspot.com",
    messagingSenderId: "227813157597"
  };

  firebase.initializeApp(config);

   var database = firebase.database();
    // Initial Values
    var trainName = "";
    var destination = "";
    var firstTrainName = "";
    var frequency = "";
    var firstTimeConverted = "";
    var currentTime = "";
    var diffTime = "";
    var tRemainder = "";
    var tMinutesTillTrain = "";
    var nextTrain = "";

    //Moment JS Variables

  
    // var firstTime = "";
    // // First Time (pushed back 1 year to make sure it comes before current time)
    // var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    // console.log(firstTimeConverted);
    // // Current Time
    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    // // Difference between the times
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // console.log("DIFFERENCE IN TIME: " + diffTime);
    // // Time apart (remainder)
    // var tRemainder = diffTime % frequency;
    // console.log(tRemainder);
    // // Minute Until Train
    // var tMinutesTillTrain = frequency - tRemainder;
    // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
    // // Next Train
    // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


       // On Click Submit Button
    $("#submit-button").on("click", function(event) {
      event.preventDefault();
      // Grabbed values from text boxes
      trainName = $("#trainName-input").val().trim();
      destination = $("#destination-input").val().trim();
      firstTrainName = $("#firstTrain-input").val().trim();
      frequency = $("#frequency-input").val().trim();
      // firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
      // currentTime = moment();
      // diffTime = moment().diff(moment(firstTimeConverted), "minutes");
      // tRemainder = diffTime % frequency;
      // tMinutesTillTrain = frequency - tRemainder;
      // nextTrain = moment().add(tMinutesTillTrain, "minutes");

      // Push information
      
      database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrainName: firstTrainName,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP

      });
    });

      // Firebase watcher + initial loader 
    database.ref().on("child_added", function(childSnapshot) {
      // Logs snapshot
      console.log(childSnapshot.val().trainName);
      console.log(childSnapshot.val().destination);
      console.log(childSnapshot.val().firstTrainName);
      console.log(childSnapshot.val().frequency);
      console.log(childSnapshot.val().dateAdded);
    
      // Making Changes to Table
      $(".trainSchedule").append("<tr><td>" + childSnapshot.val().trainName + "</td><td>" + childSnapshot.val().destination  + "</td><td>" + childSnapshot.val().firstTrainName + "</td><td>" + childSnapshot.val().frequency  + "</td><td>" + childSnapshot.val().dateAdded  + "</td></tr>"
       );
  }); 