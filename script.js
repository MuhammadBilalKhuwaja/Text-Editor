window.onload = function() {
    var editor = document.getElementById("editor-area");

    // Save the text to local storage
    editor.onkeyup = function() {
        localStorage.setItem("textEditorContent", editor.innerHTML);
    };

    // Load the saved text from local storage
    if (localStorage.getItem("textEditorContent")) {
        editor.innerHTML = localStorage.getItem("textEditorContent");
    }
};

function boldText() {
    document.execCommand("bold", false, null);
}

function italicizeText() {
    document.execCommand("italic", false, null);
}

function underlineText() {
    document.execCommand("underline", false, null);
}

function changeTextAlignment(align) {
    document.getElementById("editor-area").style.textAlign = align;
}

function changeTextColor(color) {
    document.execCommand("foreColor", false, color);
}

function changeTextSize(size) {
    document.execCommand("fontSize", false, size);
}
