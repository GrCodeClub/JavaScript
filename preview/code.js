const selectElement = document.getElementById("code");
selectElement.addEventListener("change", function() {
    update_code(selectElement.value);
    selectElement1.value = "-";
});

const selectElement1 = document.getElementById("code1");
if (selectElement1) {
selectElement1.addEventListener("change", function() {
    update_code(selectElement1.value);
    selectElement.value = "-";
});
} 


const loadElement = document.getElementById("load");

function update_code(selectedValue) {
    if (selectedValue=="-") loadElement.innerHTML = '';
    else {
        loadElement.innerHTML = `<pre data-src=${selectedValue} data-download-link></pre>`;
        Prism.highlightAll();
    }
}
