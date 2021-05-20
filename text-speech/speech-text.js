const btn=document.getElementById("btn1")
const h1=document.getElementsByTagName('h1')
const synth=window.speechSynthesis;

var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

recognition.interimResults=true;

recognition.onspeechend=(e)=>{
    recognition.stop();
    console.log("done")
    
}
recognition.onerror=(e)=>{
    console.log("error=",e.error);
}
recognition.onresult=(e)=>{
    // console.log(e.results)
    var current=e.resultIndex;
    var transcript=e.results[current][0].transcript;
    if (e.results[0].isFinal) {
        h1[0].innerText=transcript
        let voices=[];
        const toSpeak=new SpeechSynthesisUtterance(transcript)
        voices=synth.getVoices();
        toSpeak.voice=voices[1];
        toSpeak.onend=e=>{
            console.log("doen...")
        }
        toSpeak.onerror=e=>{
            console.log("Error")
        }
        synth.speak(toSpeak);
    }
    console.log("content=",transcript)
}

btn.addEventListener('click',()=>{
    console.log("clicked")
    recognition.start();
})

