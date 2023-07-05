function displayTime() {
    var element = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    // Προσθέστε μηδενικά μπροστά αν οι ώρες, οι λεπτά ή τα δευτερόλεπτα είναι μονοψήφια
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    
    // Συνδυάζουμε τα στοιχεία ώρας, λεπτών και δευτερολέπτων
    var currentTimeString = hours + ":" + minutes + ":" + seconds;
    
    // Αντικαθιστούμε το περιεχόμενο του element με την τρέχουσα ώρα
    element.innerHTML = currentTimeString;
  }
  
  // Καλούμε τη συνάρτηση displayTime κάθε δευτερόλεπτο
  setInterval(displayTime, 1000);