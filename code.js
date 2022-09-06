function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', (event) => {
    const numberOfCats = document.getElementById("sleepingCats");
    numberOfCats.innerText = 200;
    setInterval(()=>{
        let count = new Number(numberOfCats.innerText);
        numberOfCats.innerText = count + randomIntFromInterval(-10, 10);
    }, 500)
  });