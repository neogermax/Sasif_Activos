
$(document).ready(function () {
    fecha();

    $(".C_Chosen").chosen({
        width: "100%",
        placeholder: 'Select an option',
        search_contains: true
    });

    $('.Numeric').keyup(function () {
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });

    $('.Decimal').keyup(function () {
        this.value = (this.value + '').replace(/[^0-9\.]/g, '');
    });

    $('.Letter').keyup(function () {
        this.value = (this.value + '').replace(/[^a-zA-Z\s]+/g, '');
    });

    $('.Numeric_letter').keyup(function () {
        this.value = (this.value + '').replace(/[^0-9a-zA-Z]/g, '');
    });

});


//integra los mensajes de error en la pagina
function RevisarMensajes() {

    $(".SpamEG").html(ArrayMensajes[0].Mensajes_ID + ": " + ArrayMensajes[0].Descripcion);
    $(".SpamEC").html(ArrayMensajes[1].Mensajes_ID + ": " + ArrayMensajes[1].Descripcion);
    $(".SpamEFY").html(ArrayMensajes[2].Mensajes_ID + ": " + ArrayMensajes[2].Descripcion);
    $(".SpamEFM").html(ArrayMensajes[3].Mensajes_ID + ": " + ArrayMensajes[3].Descripcion);
}

//integra las Ayudas en la pagina
function RevisarAyudas() {

    $(".Spam_AN").html(ArrayAyudas[0].Ayudas_ID + ": " + ArrayAyudas[0].Descripcion);
    $(".Spam_ANL").html(ArrayAyudas[1].Ayudas_ID + ": " + ArrayAyudas[1].Descripcion);
    $(".Spam_AST").html(ArrayAyudas[2].Ayudas_ID + ": " + ArrayAyudas[2].Descripcion);
    $(".Spam_A_CC").html(ArrayAyudas[3].Ayudas_ID + ": " + ArrayAyudas[3].Descripcion);
    $(".Spam_A_NIT").html(ArrayAyudas[4].Ayudas_ID + ": " + ArrayAyudas[4].Descripcion);
    $(".Spam_ACE_mail").html(ArrayAyudas[5].Ayudas_ID + ": " + ArrayAyudas[5].Descripcion);

    $(".Spam_AT1").html(ArrayAyudas[6].Ayudas_ID + ": " + ArrayAyudas[6].Descripcion);
    $(".Spam_AT2").html(ArrayAyudas[7].Ayudas_ID + ": " + ArrayAyudas[7].Descripcion);
    $(".Spam_ACI").html(ArrayAyudas[8].Ayudas_ID + ": " + ArrayAyudas[8].Descripcion);
    $(".Spam_AT3").html(ArrayAyudas[9].Ayudas_ID + ": " + ArrayAyudas[9].Descripcion);
    $(".Spam_AF").html(ArrayAyudas[10].Ayudas_ID + ": " + ArrayAyudas[10].Descripcion);
    $(".Spam_ADec").html(ArrayAyudas[11].Ayudas_ID + ": " + ArrayAyudas[11].Descripcion);
    $(".Spam_AVal").html(ArrayAyudas[12].Ayudas_ID + ": " + ArrayAyudas[12].Descripcion);
    $(".Spam_AForF").html(ArrayAyudas[13].Ayudas_ID + ": " + ArrayAyudas[13].Descripcion);
    $(".Spam_AH").html(ArrayAyudas[14].Ayudas_ID + ": " + ArrayAyudas[14].Descripcion);
    $(".Spam_AEXIT_MOD").html(ArrayAyudas[15].Ayudas_ID + ": " + ArrayAyudas[15].Descripcion);
    $(".Spam_ALink").html(ArrayAyudas[16].Ayudas_ID + ": " + ArrayAyudas[16].Descripcion);
    $(".Spam_U").html(ArrayAyudas[17].Ayudas_ID + ": " + ArrayAyudas[17].Descripcion);
    $(".Spam_C").html(ArrayAyudas[18].Ayudas_ID + ": " + ArrayAyudas[18].Descripcion);
    $(".Spam_AT4").html(ArrayAyudas[19].Ayudas_ID + ": " + ArrayAyudas[19].Descripcion);
    $(".Spam_ACliente").html(ArrayAyudas[20].Ayudas_ID + ": " + ArrayAyudas[20].Descripcion);
    $(".Spam_AT5").html(ArrayAyudas[21].Ayudas_ID + ": " + ArrayAyudas[21].Descripcion);
    $(".Spam_ARel").html(ArrayAyudas[22].Ayudas_ID + ": " + ArrayAyudas[22].Descripcion);
    
    $(".Spam_CT1").html(ArrayAyudas[6].Descripcion);
    $(".Spam_CT2").html(ArrayAyudas[7].Descripcion);
    $(".Spam_CT4").html(ArrayAyudas[19].Descripcion);
    $(".Spam_CT5").html(ArrayAyudas[21].Descripcion);

}


//funcion para capturar la fecha
function fecha() {
    var d = new Date();

    var month = d.getMonth() + 1;
    var day = d.getDate();

    var output = d.getFullYear() + '-' +
    (('' + month).length < 2 ? '0' : '') + month + '-' +
    (('' + day).length < 2 ? '0' : '') + day;
    $("#Hours").html(output);

}

//cargar combos
function charge_CatalogList(objCatalog, nameList, selector) {

    var objList = $('[id$=' + nameList + ']');
    //recorremos para llenar el combo de
    for (itemArray in objCatalog) {
        objList[0].options[itemArray] = new Option(objCatalog[itemArray].descripcion, objCatalog[itemArray].ID);
    };

    //validamos si el combo lleva seleccione y posicionamos en el
    if (selector == 1) {
        $("#" + nameList).append("<option value='-1'>Seleccione...</option>");
        $("#" + nameList + " option[value= '-1'] ").attr("selected", true);
    }
    $("#" + nameList).trigger("liszt:updated");
    $('.C_Chosen').trigger('chosen:updated');
}


//funcion para las ventanas emergentes
function carga_eventos(str_objeto) {

    $("#" + str_objeto).dialog({
        autoOpen: false,
        dialogClass: "Dialog_Sasif",
        modal: true,
        width: 400,
        height: 400,
        overlay: {
            opacity: 0.5,
            background: "black"
        },
        show: {
            effect: 'fade',
            duration: 2000
        },
        hide: {
            effect: 'fade',
            duration: 1000
        },
        open: function (event, ui) { $(".ui-dialog-titlebar-close", ui.dialog).hide(); }
    });

    $(document).ajaxStart(function () {
        $("#" + str_objeto).dialog("open");
    }).ajaxStop(function () {
        $("#" + str_objeto).dialog("close");
    });
}

//formato de miles en tiempo real
function dinner_format(input) {
    var valida = 0;
    var num = input.value.replace(/\./g, "");
    if (!isNaN(num)) {
        num = num.toString().split("").reverse().join("").replace(/(?=\d*\.?)(\d{3})/g, "$1.");
        num = num.split("").reverse().join("").replace(/^[\.]/, "");
        input.value = num;
    }
    else {
        valida = 1;
        input.value = input.value.replace(/[^\d\.]*/g, "");
    }
    return valida;
}

//funcion para añadir formato miles a los numeros en la vista
function dinner_format_grid(str, type) {

    var output = "";

    if (str != 0) {
        var amount = new String(str);
        amount = amount.split("").reverse();

        for (var i = 0; i <= amount.length - 1; i++) {
            output = amount[i] + output;
            if ((i + 1) % 3 == 0 && (amount.length - 1) !== i) output = '.' + output;
        }

        if (type == "1")
            output = "$ " + output;
    }

    return output;
}

//funcion que calcula el digito de verificacion
function DigitoVerificacion(StrValor) {

    if (StrValor != "") {

        var Vector = [];
        var DigitoVerificado = 0;
        var Temp = 0;
        var Length_Document = StrValor.length;

        Vector[1] = 3;
        Vector[2] = 7;
        Vector[3] = 13;
        Vector[4] = 17;
        Vector[5] = 19;
        Vector[6] = 23;
        Vector[7] = 29;
        Vector[8] = 37;
        Vector[9] = 41;
        Vector[10] = 43;
        Vector[11] = 47;
        Vector[12] = 53;
        Vector[13] = 59;
        Vector[14] = 67;
        Vector[15] = 71;

        for (var contador = 0; contador < Length_Document; contador++) {
            Temp = (StrValor.substr(contador, 1));
            DigitoVerificado += (Temp * Vector[Length_Document - contador]);
        }

        Temp = DigitoVerificado % 11;

        return (Temp > 1) ? 11 - Temp : Temp;
    }
}

//validar E-Mail
function ValidarEmail(email) {
    var validate = 0;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!expr.test(email))
        validate = 1;

    return validate;
}

//VALIDAR FORMATO DE LA FECHA PARA LOS GRID
function valFecha(str) {
    var Result;

    if (str == '1900-01-01')
        Result = "";
    else
        Result = str;
    return Result;
}

//funcion de formateo para la insercion en la Base de Datos
function F_NumericBD(Index) {

    var Output = 0;

    if (Index != "") {
        Output = Index.replace(/\./g, "");
    }

    return Output;
}

//convierte numero para ingresar el decimal exacto en la BD
function Convert_Decimal(index) {

    var Output = 0;
    if (index != "") {
        Output = index.replace(".", ",");
    }
    return Output;
}

//escondemos los iconos obligatorios
function ResetError() {
    $("#ImgC_Doc").css("display", "none");
    $("#ImgMul").css("display", "none");
    $("#ImgPais").css("display", "none");
    $("#ImgID").css("display", "none");
    $("#Img1").css("display", "none");
    $("#Img2").css("display", "none");
    $("#Img3").css("display", "none");
    $("#Img5").css("display", "none");
    $("#Img9").css("display", "none");
    $("#Img10").css("display", "none");
    $("#Img11").css("display", "none");
    $("#Img12").css("display", "none");
}

//carga de documentos global
function UpLoad_Document(NameAjax, NameFile_ID) {

    //validamos si seleccionaron un archivo
    if ($("#" + NameFile_ID).val() != "") {

        //Añadimos la imagen de carga en el contenedor
        $('#ctl00_cphPrincipal_gif_charge_Container').css("display", "block");

        //capturamos los datos del input file
        var file = $("#" + NameFile_ID);
        var dataFile = $("#" + NameFile_ID)[0].files[0];

        //inicializamos el fordata para transferencia de archivos
        var data = new FormData();
        //asinamos el datafile a la variable archivo 
        data.append('archivo', dataFile);
        //data.ajaxStart(inicioEnvio);
        //transacion ajax
        $.ajax({
            url: NameAjax + "Ajax.aspx",
            type: "POST",
            contentType: false,
            data: data,
            processData: false,
            success: function (result) {

                //creamos variables
                var filename = result;
                filename = $.trim(filename)
                filename = filename.replace(/\s/g, '_');
                alert(filename);
                var objectfile = data;
                var description = "xxxxx";

                $("#" + NameFile_ID).val("");

                $('#ctl00_cphPrincipal_gif_charge_Container').css("display", "none");
     
            },
            error: function (error) {
                alert("Ocurrió un error inesperado, por favor intente de nuevo mas tarde: " + error);
                console.log(error);
                $('#ctl00_cphPrincipal_gif_charge_Container').css("display", "none");
            }
        });
    }
    else {

    }

}


function load_Document(Ruta) { 
 
}