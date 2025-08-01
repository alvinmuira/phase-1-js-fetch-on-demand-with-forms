const init = () => {
  inputForm = document.querySelector(`form`);
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID");
    console.log(input.value);

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
        const tittle = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");
        tittle.textContent = data.title;
        summary.textContent = data.summary;
    })
})
}

document.addEventListener('DOMContentLoaded', init);