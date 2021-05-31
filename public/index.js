const storageBar = document.querySelector('.input--storage')
const usingStorage = document.querySelector('.used-storage')
const gb_available = document.querySelector('.gb-available')

storageBar.addEventListener('input', progressRange)

function progressRange() {
  storageBar.style.setProperty("--value", storageBar.value);
  storageBar.style.setProperty("--min", storageBar.min === "" ? "0" : storageBar.min);
  storageBar.style.setProperty("--max", storageBar.max === "" ? "100" : storageBar.max);
  storageBar.style.setProperty("--value", storageBar.value);

  usingStorage.innerHTML = storageBar.value + ' GB'
  gb_available.innerHTML = 1000 - storageBar.value

}

document.addEventListener('DOMContentLoaded', progressRange)