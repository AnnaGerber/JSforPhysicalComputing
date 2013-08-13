# JSforPhysicalComputing

Slides and example project from CampJS II

## Slides
The slides are available under the gh-pages branch and can be viewed [here](http://annagerber.github.io/JSforPhysicalComputing/)

The slides were created using [impress.js](http://bartaz.github.io/impress.js) and [Strut](https://github.com/tantaman/Strut)

## Sample Project

The sample project uses [johnny-five](https://github.com/rwldrn/johnny-five) to talk to an Arduino to get sensor readings and display them on a dashboard using [dashing-js](https://github.com/fabiocaseri/dashing-js)

### Hardware

You will need:

* An Arduino and USB cable (I recommend an [Arduino Uno compatible](http://www.banggood.com/Wholesale-UNO-Arduino-Compatible-R3-ATmega328P-ATMEGA16U2-AVR-USB-Board-p-68537.html) or [Arduino Nano compatible](http://www.banggood.com/Wholesale-Mini-USB-V3_0-ATmega328P-AU-Microcontroller-Board-Arduino-compatible-p-68535.html) board because these are easy to use with a breadboard) 
* A [breadboard](http://www.banggood.com/Wholesale-Mini-Circuit-Experiment-Solderless-Breadboard-Bread-Board-400-Tie-Points-Contact-p-52135.html)
* [Breadboard jumper wires](http://www.banggood.com/Wholesale-70-X-Mixed-Color-Solderless-Breadboard-Jump-Wires-p-28221.html)
* Some sensors e.g. this sample code uses a [DS18B20 temperature sensor module](http://www.banggood.com/DS18B20-Digital-Temperature-Sensor-Module-For-Arduino-p-76516.html), a photo resistor (light) sensor module, a [tilt switch](http://www.banggood.com/Mini-Tilt-Switch-Sensor-Module-For-Arduino-p-76407.html) and a [microphone-based sound sensor](http://www.banggood.com/Microphone-Voice-Sound-Sensor-Module-For-Arduino-p-76461.html)

(Links provided to an example supplier for informational purposes only)

Using the Arduino IDE, load the StandardFirmata sketch onto the Arduino:

 * Connect the Arduino to the computer via USB
 * Select your board type (e.g. Arduino Uno) under *Tools > Board*
 * Select the device under *Tools > Serial Port* (on a Mac this will usually be /dev/tty.usbmodem\* or /dev/tty.usbserial\*)
 * Open the sketch via the menu: *File > Examples > Firmata > StandardFirmata*
 * Hit the Upload (right facing arrow) button at the top of the sketch to send it to the board. The status message at the bottom of the sketch will indicate when it is done
* Make sure you have shut down the Arduino IDE and unplugged the Arduino before progressing to the next step

Unplug the Arduino from the computer and hook up the Arduino and sensors like so:

Run a breadboard jumper wire from +5V on the Arduino to the red power (+) rail along the side of the breadboard, and a wire from ground on the Arduino to the blue (-) ground rail on the side of the breadboard.

Connect the following using breadboard jumper cables:

* Sound sensor module pin 1 (A0) to pin A4 (analog pin 4) on the Arduino, pin 2 (G) to ground rail on the breadboard, pin 3 (+) to power rail on the breadboard
* Temperature sensor module pin 1 to ground rail, pin 2 to power rail, pin 3 (S) to pin A0 (analog pin 0) on the Arduino
* Light sensor module pin 1 (S) to A1 (analog pin 1) on the Arduino, pin 2 to power rail on breadboard, pin 3 (-) to ground rail on breadboard
* Tilt Switch pin 1 (S) to Arduino digital pin 8, pin 2 to power rail, pin 3 to ground rail

Your sensors may be slightly different - use the datasheets provided or look for labels above the pins

### Software

Set up the dashboard as follows:

    git clone https://github.com/AnnaGerber/JSforPhysicalComputing.git
    cd JSforPhysicalComputing
    npm install 
    
Add or configure the frequency or pins used for the sensors in *jobs/sensors.job.js*. Modify the layout and widgets in *dashboards/sensors.jade*.

Make sure the Arduino IDE is not running or it may interfere with the serial communication. To run the dashboard, plug in the arduino and then run

    dashing-js start

View the dashboard at http://localhost:3030/


