const card1 = document.querySelector('.card:first-child');
const card2 = document.querySelector('.card:last-child');
const signUp = document.querySelector('.sign');
const signIn = document.querySelector('.log');

signIn.addEventListener('click', () => {
    if (card1.classList.contains('active')) {
        card1.classList.remove('active');
        card2.classList.add('active');
    }
})

document.querySelector('.fa-bars').addEventListener('click', () => {
    if (card2.classList.contains('active')) {
        card2.classList.remove('active');
        card1.classList.add('active');
    }
})