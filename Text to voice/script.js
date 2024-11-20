let speech = new SpeechSynthesisUtterance();

const voices_select = document.querySelector("#voices");
const button = document.querySelector(".last button");

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices_select.innerHTML = voices
        .map((voice, i) => `<option value="${i}">${voice.name}</option>`)
        .join("");
};

button.addEventListener("click", () => {
    speech.text = document.querySelector("#text").value;
    window.speechSynthesis.speak(speech);
});

voices_select.addEventListener("change", () => {
    speech.voice = voices[voices_select.value];
});