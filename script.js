function speak() {
  // Create a SpeechSynthesisUtterance
  console.log()
  const utterance = new SpeechSynthesisUtterance(document.getElementById('a').value);

  // Select a voice
  const voices = speechSynthesis.getVoices();
  console.log(voices)
  utterance.voice = voices[11]; // Choose a specific voice

  // Speak the text
  speechSynthesis.speak(utterance);
}