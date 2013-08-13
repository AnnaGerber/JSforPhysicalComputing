var five = require("johnny-five");

var last_temp = 0;

five.Board().on("ready", function(){
  // read sensors every 3 seconds
  var sound = new five.Sensor({
    pin: "A4", 
    freq: 3000
  });
  var temp = new five.Sensor({
    pin:"A0", 
    freq:3000
  });
  var photoresistor = new five.Sensor({
    pin: "A1",
    freq: 3000
  });

  var tiltSwitch = new five.Button("8");

  sound.on("read", function (err, value) {
    // send raw sensor value
    send_event('sound',{value:value});
  });
  temp.on("read", function(err, value){
    // convert into degrees C and keep track of last reading
    var cel = (100 * (value / 1000) - 50).toFixed(2);
    send_event('temp',{last:last_temp, current:cel});
    last_temp = cel;
  });
  photoresistor.on("read", function( err, value ) {
    // raw reading is between 0 - 1024 where 1024 = darkness
    // invert and turn into a percentage for display
    var lpercent = ( ((1024-value) /1024.0) * 100);
    send_event('light',{value:lpercent.toFixed(1)});
  });

  tiltSwitch.on( "up", function() {
    send_event('tilt',{text:"level"});
  });
  tiltSwitch.on( "down", function() {
	  send_event('tilt',{text:"tilted"});
  });

});
