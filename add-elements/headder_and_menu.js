const htmlContent = `
<div class="Header"> <!--Αρχή Επικεφαλίδας-->
        <div class="layout" id="header_menu">
            <div><img src="https://grcodeclub.github.io/file/logo_and_graphic/logo.png" class="logo"/></div>
            <div><h1 class="header_text"><a href="https://grcodeclub.github.io/"><span class="header_text">GrCode Club</span></a></h1></div>
        </div>
    </div> <!--Τέλος Επικεφαλίδας--
    
<section class="show_desktop"> <!--Αρχή Εμφάνιση Υπολογιστή-->
    <div class="Menu"> <!--Αρχή Menu-->
        <div id="sidebarMenu" style="overflow: auto;">
            <ul class="sidebarMenuInner"></ul>
        </div>
    </div> <!--Τέλος Menu-->
</section> <!--Τέλος Εμφάνιση Υπολογιστή-->

<section class="show_mobile"> <!--Αρχή εμφάνιση σε κινητά-->
    <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
    <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner diagonal part-1"></div>
        <div class="spinner horizontal"></div>
        <div class="spinner diagonal part-2"></div>
    </label>
    <div id="sidebarMenu">
        <ul class="sidebarMenuInner"></ul>
    </div>
</section> <!--Τέλος εμφάνιση σε κινητά-->
`;

// Εύρεση του στόχου με το id 'add_headder'
const addHeadderDiv = document.getElementById('add_headder');

// Προσθήκη του HTML περιεχομένου στο div με το id 'add_headder'
if (addHeadderDiv) {
    addHeadderDiv.innerHTML = htmlContent;
}
