function clickme(){
   const texts = document.querySelector(".texts");

   window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

   const recognition = new SpeechRecognition();
   recognition.interimResults = true;
   recognition.lang="ar";

   let p = document.createElement("p");

   recognition.addEventListener("result", (e) => {

      texts.appendChild(p);
      const text = Array.from(e.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
      p.innerText = text;

    });
    recognition.addEventListener("end", () => {
      recognition.start();
      recognition.lang="ar";
   });
   recognition.start();
   recognition.lang="ar";
}
