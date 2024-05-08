// Λίστα με τους συνδέσμους προς τα αρχεία CSS
const cssLinks = [
   "https://grcodeclub.gr/website/css/header_and_footer.css",
   "https://grcodeclub.gr/website/css/main.css",
   "https://grcodeclub.gr/website/css/text.css",
   "https://grcodeclub.gr/website/css/layout.css",
   "https://grcodeclub.gr/website/css/code_bg.css",
   "https://grcodeclub.gr/website/css/card.css",
   "https://grcodeclub.gr/website/css/forms.css",
   "https://grcodeclub.gr/website/css/img.css",
   "https://grcodeclub.gr/website/css/prism.css",
   "https://grcodeclub.gr/website/css/list.css",
    "https://grcodeclub.gr/website/css/table.css",
   "https://grcodeclub.gr/website/css/body.css",
   "https://grcodeclub.gr/website/css/social.css",
   "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
];

// Αρχικοποίηση head
const head = document.head;

// Προσθήκη των αρχείων CSS στο head
cssLinks.forEach(linkUrl => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = linkUrl;

    // Προσθήκη στο head
    head.appendChild(linkElement);
});

// Δημιουργία στοιχείου για favicon
const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.type = 'image/png';
faviconLink.href = 'https://grcodeclub.github.io/file/logo/black_logo.png';

// Προσθήκη του favicon στο head
head.appendChild(faviconLink);

// Θέτουμε το title της σελίδας
document.title = 'GrCode Club';

// Δημιουργία ενός νέου στοιχείου <meta>
const metaElement = document.createElement('meta');

// Ορίζουμε την ιδιότητα 'name' ως 'viewport'
metaElement.setAttribute('name', 'viewport');

// Ορίζουμε την ιδιότητα 'content' με την τιμή που θέλουμε
// Σε αυτήν την περίπτωση, ορίζουμε initial-scale=0.8
metaElement.setAttribute('content', 'width=device-width, initial-scale=0.8');

// Προσθέτουμε το στοιχείο <meta> στο <head> του HTML εγγράφου
document.head.appendChild(metaElement);
