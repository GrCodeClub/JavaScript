document.addEventListener('DOMContentLoaded', function() {
    // Βρείτε το κουμπί με την κλάση `showCardButton`
    const button = document.querySelector('.showCardButton');
    // Βρείτε το στοιχείο `card-content` που θα αλλάξει το `max-height`
    const cardContent = document.querySelector('.card-content');

    // Προσθέστε έναν χειριστή κλικ στο κουμπί
    button.addEventListener('click', function() {
        // Ελέγξτε αν το `max-height` είναι 0 ή κρυμμένο
        if (cardContent.style.maxHeight === '0px' || cardContent.style.maxHeight === '') {
            // Εμφανίστε το περιεχόμενο του `card-content`
            // Ορίστε το `max-height` ώστε να ταιριάζει στο ύψος του περιεχομένου
            cardContent.style.maxHeight = cardContent.scrollHeight + 'px';
        } else {
            // Απόκρυψη του περιεχομένου του `card-content`
            // Ορίστε το `max-height` σε 0 για να το αποκρύψετε
            cardContent.style.maxHeight = '0';
        }
    });
});
