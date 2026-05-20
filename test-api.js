function formatDate(utcTimeStr) {
  if (!utcTimeStr) return "No Time";
  let datePart = utcTimeStr.split('T')[0];
  let timePart = utcTimeStr.split('T')[1].substring(0, 5);
  
  let [year, monthNum, dayNum] = datePart.split('-');
  let dateObj = new Date(year, monthNum - 1, dayNum);
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
  // To avoid removing leading zeros from dayNum:
  return `${parseInt(dayNum)} ${months[parseInt(monthNum)-1]} ${year} ${days[dateObj.getDay()]} ${timePart}`;
}

console.log(formatDate('2026-05-19T18:51:00.000-04:00'));
