console.log("this is text-to- speech")
const btn=document.getElementById("btn2")
const text=document.getElementsByTagName("h1")
const synth=window.speechSynthesis;

let voices=[];

btn.addEventListener('click',()=>{
    const toSpeak=new SpeechSynthesisUtterance(text[0].innerText)
    voices=synth.getVoices();
    toSpeak.voice=voices[1];
    toSpeak.onend=e=>{
        console.log("doen...")
    }
    toSpeak.onerror=e=>{
        console.log("Error")
    }
    synth.speak(toSpeak);
})