// Λίστα με τους συνδέσμους προς τα αρχεία CSS
const cssLinks = [
    "https://grcodeclub.github.io/css/header_and_footer.css",
    "https://grcodeclub.github.io/css/main.css",
    "https://grcodeclub.github.io/css/text.css",
    "https://grcodeclub.github.io/css/layout.css",
    "https://grcodeclub.github.io/css/code_bg.css",
    "https://grcodeclub.github.io/css/prism.css",
    "https://grcodeclub.github.io/css/list.css",
     "https://grcodeclub.github.io/css/table.css",
    "https://grcodeclub.github.io/css/body.css"
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
