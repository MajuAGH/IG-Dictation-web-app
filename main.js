document.write("______________________________________________________________________");

function record()
{

  var webaudio_tooling_obj = function () {

    var audioContext = new AudioContext();

    var BUFF_SIZE = 16384;

    var audioInput = null,
        microphone_stream = null,
        gain_node = null,
        script_processor_node = null,
        script_processor_fft_node = null,
        analyserNode = null;

    if (!navigator.getUserMedia)
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia || navigator.msGetUserMedia;

    if (navigator.getUserMedia){

        navigator.getUserMedia({audio:true}, 
          function(stream) {
              start_microphone(stream);
          },
          function(e) {
            alert('Error capturing audio.');
          }
        );

    } else { alert('getUserMedia not supported in this browser.'); }


    function process_microphone_buffer(event) {

        var i, N, inp, microphone_output_buffer;

        microphone_output_buffer = event.inputBuffer.getChannelData(0); // mono

        // microphone_output_buffer  <-- dane o rozmiarze BUFF SIZE
 
    }

    function start_microphone(stream){


      microphone_stream = audioContext.createMediaStreamSource(stream);

      script_processor_node = audioContext.createScriptProcessor(BUFF_SIZE, 1, 1);


      microphone_stream.connect(script_processor_node);



    }

  }(); 


};