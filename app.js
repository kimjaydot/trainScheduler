 
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
        trainName: name,
        destination: role,
        firstTrainName: startDate,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP

      });
    });