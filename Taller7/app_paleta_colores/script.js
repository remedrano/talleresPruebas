var numeroColores = 5;
var totalGrados = 360;
var pasoValor = 72;

function randomPalette(hue, saturacion, value) {

    var oColores = [];

    var gradoActual = hue;
    var contador = 0;
    do {
        var pasarValor = gradoActual / totalGrados;
        var rgbValue = hsvToRgb(pasarValor, saturacion, value);
        oColores.push(rgbValue);

        gradoActual += pasoValor;
        if (gradoActual > (totalGrados - 1)) {
            gradoActual -= totalGrados;
        }
        contador++;
    } while (contador < numeroColores);

    return oColores;
}



function generateRules(colors) {
    var rgbColors = [];
    for (var i = 0; i < numeroColores; i++) {
        color = rgbToHex(colors[i]);
        rgbColors.push(color);
        $("#color" + (i + 1)).css('background', color);
    }

    var outputRules = ".website-background{ color: " + rgbColors[0] + ";}\n\n";
    outputRules += ".element-text{ color: " + rgbColors[1] + ";}\n\n";
    outputRules += ".element-border{ border-color: " + rgbColors[2] + ";}\n\n";
    outputRules += ".element-background{ background-color: " + rgbColors[3] + ";}\n\n";
    outputRules += ".header{ color: " + rgbColors[4] + ";}\n\n";
    $("#css-rules").val(outputRules);
}

function rgbToHex(color) {
    var r = color[0];
    var g = color[1];
    var b = color[2];
    return "#" + unitRGBToHex(Math.round(r)) + unitRGBToHex(Math.round(g)) + unitRGBToHex(Math.round(b))
};

function refrescarPaleta(random) {
    var initialValue = 0;
    if (random) {
        initialValue = Math.round(Math.random() * totalGrados);
        $("#value-color").val(initialValue);
	if( $("#value-saturacion").val() == "")
		$("#value-saturacion").val( 100 );
	if( $("#value-value").val() == "")
		$("#value-value").val(100);
    } else {
        initialValue = $("#value-color").val();
    }
    var saturacion = $("#value-saturacion").val() / 100;
    var value = $("#value-value").val()  / 100;
    var rgbPallete = randomPalette(initialValue, saturacion, value);
    generateRules(rgbPallete);
}


function limpiarPaleta() {
 
    $("#value-color").val(0);
    $("#value-saturacion").val(100);
    $("#value-value").val(100);

    var coloresBlanco = [
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255]
    ]
    generateRules(coloresBlanco);
}

function unitRGBToHex(color) {
    var hex = Number(color).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}
