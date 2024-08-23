<!DOCTYPE html>
<html lang="el">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scroll to Top Button</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            height: 2000px; /* Προσθέτει ύψος για να υπάρχει scroll */
        }
        #scrollTopBtn {
            display: none; /* Αρχικά το κουμπί είναι κρυφό */
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 100;
            background-color: #f1f1f1;
            color: black;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body>

    <button id="scrollTopBtn">Πήγαινε στην κορυφή</button>

    <script>
        // Επιλέγουμε το κουμπί
        const scrollTopBtn = document.getElementById("scrollTopBtn");

        // Εμφανίζουμε το κουμπί όταν ο χρήστης κάνει scroll κάτω από 20px
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        };

        // Όταν ο χρήστης κάνει κλικ στο κουμπί, πηγαίνει στην κορυφή της σελίδας
        scrollTopBtn.onclick = function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Προσθέτει ομαλή κύλιση
            });
        };
    </script>

</body>
</html>
