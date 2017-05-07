 
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

       // On Click Submit Button
    $("#submitBtn").on("click", function(event) {
      event.preventDefault();
      // Grabbed values from text boxes
      trainName = $("trainName-input").val().trim();
      destination = $("destination-input").val().trim();
      firstTrainName = $("#firstTrain-input").val().trim();
      frequency = $("#frequency-input").val().trim();
      // Code for handling the push
      
      database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrainName: firstTrainName,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP

      });
    });

          // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    database.ref().on("child_added", function(childSnapshot) {
      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().trainName);
      console.log(childSnapshot.val().destination);
      console.log(childSnapshot.val().firstTrainName);
      console.log(childSnapshot.val().frequency);
      console.log(childSnapshot.val().dateAdded);
    
      // 
      $(".trainSchedule").append("<tr><td>" + childSnapshot.val().trainName + "</td><td>" + childSnapshot.val().destination  + "</td><td>" + childSnapshot.val().firstTrainName + "</td><td>" + childSnapshot.val().frequency  + "</td><td>" + childSnapshot.val().dateAdded  + "</td></tr>"
       );
  }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
    dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
      // Change the HTML to reflect
      $("#name-display").html(snapshot.val().name);
      $("#email-display").html(snapshot.val().email);
      $("#age-display").html(snapshot.val().age);
      $("#comment-display").html(snapshot.val().comment);
    });






