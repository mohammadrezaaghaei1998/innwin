

document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const seeMoreButton = document.getElementById('see-more-btn');
    seeMoreButton.addEventListener('click', function () {
        const hiddenCards = document.querySelectorAll('.product-card.d-none');
        hiddenCards.forEach((card) => {
            card.classList.remove('d-none'); 
            card.style.opacity = 0; 
            setTimeout(() => {
                card.style.opacity = 1;
            }, 50);
        });
        seeMoreButton.style.display = 'none';
    });
});






document.getElementById("see-more-btn-video").addEventListener("click", function() {
    var hiddenVideos = document.querySelectorAll(".video.hidden");
    hiddenVideos.forEach(function(video) {
        video.classList.remove("hidden");
    });
    this.style.display = "none";
});









// function removeFromFavorite(button) {
//     const productRow = button.closest('.row.d-flex.justify-content-center.align-items-start');

//     if (productRow) {
//         productRow.remove();
//         alert("Product removed from favorites.");
//     } else {
//         alert("Couldn't find the product row to remove.");
//     }
// }


function removeFromFavorite(button) {
    const row = button.closest('.favorite-item');
    
    row.remove();

    const favoriteRows = document.querySelectorAll('.favorite-item'); 

    const modalBody = document.querySelector('#emptyFavoriteModal .modal-body');
    
    if (favoriteRows.length === 0) {
        modalBody.innerHTML = '<p>Your favorite list is empty!</p>';
    } else {
        modalBody.innerHTML = '<p>Item removed from your favorites.</p>';
    }

    $('#emptyFavoriteModal').modal('show');
}

function addToCart() {
    alert("Product added to cart.");
}

















































