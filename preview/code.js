const selectElement = document.getElementById("code");
selectElement.addEventListener("change", function() {
    update_code(selectElement.value);
});

const loadElement = document.getElementById("load");

function update_code(selectedValue) {
    if (selectedValue=="-") loadElement.innerHTML = '';
    else {
        loadElement.innerHTML = `<pre data-src=${selectedValue}></pre>`;
        Prism.highlightAll();
    }
}

const selectElement1 = document.getElementById("code2");
selectElement1.addEventListener("change", function() {
    update_code1(selectElement1.value);
});

const loadElement1 = document.getElementById("load2");

function update_code1(selectedValue) {
    if (selectedValue=="-") loadElement1.innerHTML = '';
    else {
        loadElement1.innerHTML = `<pre data-src=${selectedValue}></pre>`;
        Prism.highlightAll();
    }
}


const selectElement2 = document.getElementById("code3");
if (selectElement2) {
    selectElement2.addEventListener("change", function() {
    update_code2(selectElement2.value);
});
} 

const loadElement2 = document.getElementById("load3");
function update_code2(selectedValue) {
    if (selectedValue=="-") loadElement2.innerHTML = '';
    else {
        loadElement2.innerHTML = `<pre data-src=${selectedValue} data-download-link></pre>`;
        Prism.highlightAll();
    }
}
