document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.blog-card');
    
    cards.forEach(card => {
        const likeButton = card.querySelector('.fa-thumbs-up');
        const shareButton = card.querySelector('.fa-share');
        const commentButton = card.querySelector('.fa-comment');

        likeButton.addEventListener('click', () => {
            alert('Vous avez aimé cet article!');
        });

        shareButton.addEventListener('click', () => {
            alert('Vous pouvez partager cet article sur les réseaux sociaux.');
        });

        commentButton.addEventListener('click', () => {
            const articleUrl = card.querySelector('h3').textContent;
            const comment = prompt(`Laissez un commentaire pour l'article: "${articleUrl}"`);
            if (comment) {
                alert('Votre commentaire a été soumis!');
                // You might want to send the comment to the server here
            }
        });
    });
});
