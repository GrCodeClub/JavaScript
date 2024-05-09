document.addEventListener('DOMContentLoaded', function() {
    // Βρείτε όλα τα κουμπιά με την κλάση `showCardButton`
    const buttons = document.querySelectorAll('.showCardButton');

    // Προσθέστε έναν χειριστή κλικ σε κάθε κουμπί
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Βρείτε το κοντινό `card-content` στοιχείο του κουμπιού
            const cardContent = button.nextElementSibling;

            // Ελέγξτε την τρέχουσα τιμή του `max-height` στο `card-content`
            if (cardContent.style.maxHeight === '0px' || cardContent.style.maxHeight === '') {
                // Εμφανίστε το περιεχόμενο του `card-content` ορίζοντας το `max-height` στο ύψος του περιεχομένου
                cardContent.style.maxHeight = cardContent.scrollHeight + 'px';
            } else {
                // Απόκρυψη του περιεχομένου του `card-content` ορίζοντας το `max-height` σε `0`
                cardContent.style.maxHeight = '0';
            }
        });
    });
});
