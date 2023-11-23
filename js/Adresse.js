//Einstellungen für die Adressseite
//Einstellungen für den Kopierenbutton auf der Adressseite
function copytoclipboard() {
    var zukopieren = "Oberreichenbach 16 4209 Engerwitzdorf";
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = zukopieren;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}