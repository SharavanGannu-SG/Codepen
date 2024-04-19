function run(){

    let htmlcode=document.getElementById("htmlcode").value;
    let csscode=document.getElementById("csscode").value;
    let jscode=document.getElementById("jscode").value;
    let output=document.getElementById("output");

    output.contentDocument.body.innerHTML= htmlcode + "<style>" + csscode + "</style>";
    output.contentWindow.eval(jscode);
}


function toggleEditor(textareaId) {
    var textarea = document.getElementById(textareaId);
    if (textarea.style.display === "none") {
        textarea.style.display = "block";
    } else {
        textarea.style.display = "none";
    }
}
