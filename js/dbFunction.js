// Function to retrieve data from the forms start
var config = {
    apiKey: "AIzaSyBElcSBIqe2koIyB6pD9aAFglAq82Fu90c",
    authDomain: "hackaholics-memorymate.firebaseapp.com",
    databaseURL: "https://hackaholics-memorymate.firebaseio.com",
    projectId: "hackaholics-memorymate",
    storageBucket: "hackaholics-memorymate.appspot.com",
    messagingSenderId: "618931079152"
  };
  var app = firebase.initializeApp(config);
  var db = firebase.firestore(app);

function addEvent() {
    var event_name = document.getElementById("event_name");
    var description = document.getElementById("description");
    var date = document.getElementById("date");
    var time = document.getElementById("time");
    var privacy = document.getElementsByName("privacy");
    var schedule = document.getElementsByName("schedule");

    for (var i = 0, length = schedule.length; i < length; i++)
    {
        if (schedule[i].checked)
        {
            // store the checked value in a variable
            var selected_schedule = schedule[i].value;

            // one radio can be logically checked here
            break;
        }
    }
    for (var i = 0, length = privacy.length; i < length; i++)
    {
        if (privacy[i].checked)
        {
            // store the checked value in a variable
            var privacy_policy = privacy[i].value;

            // one radio can be logically checked here
            break;
        }
    }
    addEventToDatabase(event_name.value, description.value, date.value, time.value, selected_schedule, privacy_policy);
}
// Function to retrieve data from the forms end

// Function to pass data to the database start
function addEventToDatabase(event_name, description, date, time, privacy, schedule) {
    db.collection("events").add({
    name: event_name,
    description: description,
    date: date,
    time: time,
    privacy: privacy,
    schedule: schedule
  })
  .then(function(docRef){
    console.log("Success");
    window.location.replace("./app.html");
  })
  .catch(function(err){
    console.error("Failed!");
  });
}
// Function to pass data to the database end

function getEventList(){
    // db.collection("events").get().then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // });
    var temp = 1;
    db.collection("events").where("date", "==", "23-03-2019")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            var current_name = 'name'+temp
            var current_description = 'desc'+temp
            var current_time = 'time'+temp
            temp+=1;

            document.getElementById(current_name).innerHTML = doc.data().name;
            document.getElementById(current_description).innerHTML = doc.data().description;
            document.getElementById(current_time).innerHTML = doc.data().time;

        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

}