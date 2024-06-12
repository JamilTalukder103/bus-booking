function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId)
    const elementText = element.innerText;
    const value = parseInt(elementText)
    return value;
}
function setTextElementValueById(elementid, value) {
    const element = document.getElementById(elementid)
    element.innerText = value;
}