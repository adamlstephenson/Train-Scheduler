  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAmyfBh_iUuUqp_QvyBa8IAvgXZJeCUWWI",
    authDomain: "train-scheduler-e7ae0.firebaseapp.com",
    databaseURL: "https://train-scheduler-e7ae0.firebaseio.com",
    projectId: "train-scheduler-e7ae0",
    storageBucket: "train-scheduler-e7ae0.appspot.com",
    messagingSenderId: "22589334577"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var trainName;
  var destination;
  var firstTrainTime;
  var frequency;
  var newTrain;

  $(".submit").on("click", function(event) {
    event.preventDefault();
    trainName = $("#trainname").val().trim();
    destination = $("#destination").val().trim();
    firstTrainTime = $("#traintime").val().trim();
    frequency = $("#frequency").val().trim();
    console.log(trainName)

    newTrain = {
      name: trainName,
      destination: destination,
      time: firstTrainTime,
      frequency: frequency
    }
    console.log(newTrain)

    database.ref().push(newTrain);

  })

  database.ref().on("child_added", function(snapshot) {

    console.log(snapshot.val())
    trainName = snapshot.val().name;
    destination = snapshot.val().destination;
    firstTrainTime = snapshot.val().time;
    frequency = snapshot.val().frequency;
    
    console.log(trainName)
    console.log(destination)
    console.log(firstTrainTime)
    console.log(frequency)

    $(".table>tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>")

  })


