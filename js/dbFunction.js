// Function to retrieve data from the forms start
var addEvent = function() {
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
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            firebase.database().ref('events/' + user.uid + 'event/').set({
                eventName: event_name,
                description: description,
                date: date,
                time: time,
                privacyType: privacy,
                schedule: schedule
            });
        }
        else {
                alert("User Not Found");
        }
    });
}
// Function to pass data to the database end

function getEvents() {
    alert("dsasd");
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            firebase.database().ref('events/' + user.uid).once('value', function(snapshot) {
                console.log(snapshot.val());
            });
        }
    });
}
