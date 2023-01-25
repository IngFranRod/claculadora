function calcularPrestamo() {
    var monto = parseFloat(document.querySelector('#monto').value);
    var interes = parseFloat(document.querySelector('#interes').value);
    var tiempo = parseFloat(document.querySelector('#tiempo').value);

    var interesf = (interes / 12) / 100;
    var cuota1 = (monto * (Math.pow(1 + interesf, tiempo) * interesf) / (Math.pow(1 + interesf, tiempo) - 1));
    var interesTotal = (cuota1*tiempo)-monto;

    const formatter = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD',
        minimumFractionDigits:0
    })

    if (monto == monto && interes == interes && tiempo) {

        document.getElementById('error').style.display = "none";
        document.getElementById('total').style.display = "block";
        document.getElementById("total").innerHTML = "Cuota mensual estimada: <b> DOP "+formatter.format(cuota1)+"</b> <br>" + "El interes total es de: <b> DOP "+formatter.format(interesTotal)+"</b>";

        return true;
    }

    if (monto == "" && interes == "" && tiempo == ""); {

        document.getElementById('total').style.display = "none";
        document.getElementById('error').style.display = "block";
        document.getElementById("error").innerHTML = "Favor completar todos los campos para calcular";

        return false;
    }

}