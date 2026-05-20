function getCurrentTargetTime(utcTimeStr) {
  let offsetMs = 0;
  if (utcTimeStr.endsWith('Z')) {
    offsetMs = 0;
  } else {
    const offsetStr = utcTimeStr.slice(-6); // e.g., "+01:00" or "-04:00"
    const sign = offsetStr[0] === '+' ? 1 : -1;
    const hours = parseInt(offsetStr.substring(1, 3), 10);
    const mins = parseInt(offsetStr.substring(4, 6), 10);
    offsetMs = sign * (hours * 60 + mins) * 60 * 1000;
  }
  
  // Get current UTC time
  const now = new Date();
  const nowUtc = now.getTime() + now.getTimezoneOffset() * 60000;
  
  // Calculate target local time
  const targetDate = new Date(nowUtc + offsetMs);
  
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
  const zero_p = (val) => val < 10 ? "0" + val : val;
  
  return `${targetDate.getUTCDate()} ${months[targetDate.getUTCMonth()]} ${targetDate.getUTCFullYear()} ${days[targetDate.getUTCDay()]} ${zero_p(targetDate.getUTCHours())}:${zero_p(targetDate.getUTCMinutes())}`;
}

console.log("NY:", getCurrentTargetTime("2026-05-19T18:51:00.000-04:00"));
console.log("London:", getCurrentTargetTime("2026-05-20T00:20:00.000+01:00"));
