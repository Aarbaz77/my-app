async function test() {
  const url = 'https://weather.cc.api.here.com/weather/1.0/report.json?product=observation&latitude=51.5074&longitude=-0.1278&oneobservation=true&apiKey=LuqEFhUeb0eJS4AIFog7n9ABfxiGQ1OpoXokklkmq0U';
  const res = await fetch(url);
  const data = await res.json();
  const obs = data.observations.location[0].observation[0];
  console.log("utcTime: ", obs.utcTime);
  console.log("timezone: ", data.observations.location[0].timezone);
  
  const d = new Date(obs.utcTime);
  console.log("JS Date: ", d.toISOString());
  console.log("JS Local String: ", d.toLocaleString('en-US', { timeZone: 'Europe/London' }));
}

test();
