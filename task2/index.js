function copyText() {
    let textBox = document.getElementById("myText");
    navigator.clipboard.writeText(textBox.value)
        .then(() => {
            alert("Copied: " + textBox.value);
        })
        .catch(err => {
            console.error("Error copying text: ", err);
        });
}
