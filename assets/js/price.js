document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', function () {
            card.classList.add('hover');
        });

        card.addEventListener('mouseout', function () {
            card.classList.remove('hover');
        });

        card.querySelector('button').addEventListener('click', function () {
            alert(`You chose the ${card.querySelector('h2').innerText} plan!`);
        });
    });
});