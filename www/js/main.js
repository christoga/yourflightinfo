document.addEventListener("deviceready", function () {
    Firebase.goOnline();
});

// Initialize Firebase
var config = {
	apiKey: "AIzaSyD55-o52OHGk97yNQCRfQtnmdL6G4ZgJI0",
	authDomain: "airport-d0ac6.firebaseapp.com",
	databaseURL: "https://airport-d0ac6.firebaseio.com",
	projectId: "airport-d0ac6",
	storageBucket: "airport-d0ac6.appspot.com",
	messagingSenderId: "637529405982"
};
firebase.initializeApp(config);

var rootRef = firebase.database().ref();

function submitGood() {
	var before = $("#airplane_code").val();
	var airplaneCode = before.toUpperCase();
	var passengerName = $("#passenger_name").val();
	var passengerDOB = $("#tanggal_lahir").val();

	var ref = rootRef.child('flightRate/' + airplaneCode + '/good' + '/data');
	var total = rootRef.child('flightRate/' + airplaneCode + '/totalGood');

	total.transaction(function(currentRank) {
		return currentRank + 1;
	}, function(error, commited, snapshot) {
		if(error){
			alert('Gagal mengirim data')
		} else {
			alert("Sukses mengirim data");
			console.log('sukses');

			ref.push().set({
					nama: passengerName,
					DOB: passengerDOB,
					rating: 'bagus'
				})
			}
		}
	)
}

function submitBad() {
	var before = $("#airplane_code").val();
	var airplaneCode = before.toUpperCase();
	var passengerName = $("#passenger_name").val();
	var passengerDOB = $("#tanggal_lahir").val();

	var ref = rootRef.child('flightRate/' + airplaneCode + '/bad' + '/data');
	var total = rootRef.child('flightRate/' + airplaneCode + '/totalBad');

	total.transaction(function(currentRank) {
		return currentRank + 1;
	}, function(error, commited, snapshot) {
		if(error){
			alert('Gagal mengirim data')
		} else {
			alert("Sukses mengirim data");
			console.log('sukses');

			ref.push().set({
					nama: passengerName,
					DOB: passengerDOB,
					rating: 'bagus'
				})
			}
		}
	)
}