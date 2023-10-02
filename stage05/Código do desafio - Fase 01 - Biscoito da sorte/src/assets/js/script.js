document.addEventListener("DOMContentLoaded", () => {
  const fortuneCookie = document.querySelector("#fortune-cookie");
    const screenOne = document.querySelector(".screen-1");
    const screenTwo = document.querySelector(".screen-2");
    const newCookie = document.querySelector("#new-cookie");
    const fortuneMessage = document.querySelector("#message");
    const fortunePhrases = [
        "Os problemas são oportunidades para se mostrar o que sabe.",
        "Se alguém está tão cansado que não possa te dar um sorriso deixa-lhe o teu.",
        "A pessoa que não acredita em si mesmo não acredita em mais nada.",
        "Decidir o que não fazer é tão importante quanto decidir o que fazer.",
        "Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.",
        "É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo.",
        "O êxito é ir de frustração a frustração sem perder a animação.",
        "Nada acontece a menos que sonhemos antes.",
        "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.",
        "Nossa maior fraqueza está em desistir."
    ]
    let countClick = 0;
    let quantitityOfClick = randomNumber();
  
  fortuneCookie.addEventListener("click", e => {
      if(countClick === quantitityOfClick) {
          togleScreen();
          const phraseIndex = randomNumber(9,0);
          fortuneMessage.innerHTML = `${fortunePhrases[phraseIndex]}`
        }
        console.log(countClick);
        countClick++;
  });

 newCookie.addEventListener("click", e => {
    togleScreen()
    countClick = 0;
    quantitityOfClick = randomNumber();
 })

  function togleScreen() {
    screenOne.classList.toggle('hide');
    screenTwo.classList.toggle('hide');
  }

  function randomNumber(max=10, min =0) {
    return Math.floor(Math.random()*(max-min)+min);
  }
});
