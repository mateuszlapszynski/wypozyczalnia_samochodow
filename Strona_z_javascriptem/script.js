var isCarRented = new Map
([
  ["car0", 0],
  ["car1", 0],
  ["car2", 0]
]);
function countdownTimeStart(carId)
{
	if(isCarRented.get(carId) == 0)
	{
		isCarRented.set(carId, 1);
		var carReturnDate = new Date();
		carReturnDate.setDate(carReturnDate.getDate() + 1);

		var timerInterval = setInterval(
			function() 
			{
				var nowDate = new Date().getTime();
				var timeDifference = carReturnDate - nowDate;
				
				var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
				var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
				
				document.getElementById(carId).innerHTML = "Dziękujemy! <br> Samochód będzie znów dostępny do wypożyczenia za: <br>" + 
				hours + "h " + minutes + "m " + seconds + "s ";

				if (timeDifference < 0) 
				{
					clearInterval(timerInterval);
					document.getElementById(carId).innerHTML = "Wybierz model";
					isCarRented.set(carId, 0);
				}
			},1000);
	}
    else
    {
    	alert("Samochód jest już wypożyczony.");
    }
}