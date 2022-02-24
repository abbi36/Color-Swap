function main() {
  const myBox = document.getElementById('my-box');
  myBox.addEventListener('click', event => {
    if (myBox.style.backgroundColor == 'red') {
      myBox.style.backgroundColor = 'black';
    } else {
      myBox.style.backgroundColor = 'red';
    }
});
}

