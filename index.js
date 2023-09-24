
function run() {
    let html = document.getElementById("html").value;
    let css = document.getElementById("css").value;
    let js = document.getElementById("js").value;
    let result = document.getElementById("output");
    result.contentDocument.body.innerHTML = `
    <style>${css}</style>
    <html>${html}</html>`;
    result.contentWindow.eval(js);
}
