function DaysSinceSpooktober()
{
  let date1 = new Date();
  var time = date1.getHours();
  var month = date1.getMonth();
  let day = String(date1.getDate()).padStart(2, '0');
  let year = date1.getFullYear();

  if(month > 9 && month < 12)
  {
      spooktober = '10'+'/'+'01'+'/'+year
      var date2 = new Date(spooktober);
      var time_difference = date1.getTime() - date2.getTime();
      var days_difference = Math.round(time_difference / (1000 * 60 * 60 * 24));
      document.getElementById("since_spooktober").innerHTML = "IT'S THE " + days_difference + " DAY OF SPOOKTOBER MY FRIENDS";
  }
  if(month >= 0 && month < 9)
  {
      spooktober = '10'+'/'+'01'+'/'+ (year - 1)
      var date2 = new Date(spooktober);
      var time_difference = date1.getTime() - date2.getTime();
      var days_difference = Math.round(time_difference / (1000 * 60 * 60 * 24));
      document.getElementById("since_spooktober").innerHTML = "IT'S THE " + days_difference + " DAY OF SPOOKTOBER MY FRIENDS";
  }
  if(month == 9)
  {
      var theDay = String(date1.getDate()).padStart(2, '0');
      document.getElementById("since_spooktober").innerHTML = "IT'S THE " + theDay + " DAY OF SPOOKTOBER MY FRIENDS";
  }
}
window.onload = DaysSinceSpooktober;

