﻿/*--------------- region de variables globales --------------------*/
var ArrayTP_Leasing = [];
var ArrayCombo = [];
var ArrayTipo = [];
var ArraySubTipo = [];

var estado;
var edit_TipoID;
var edit_SubTipoID;

/*--------------- region de variables globales --------------------*/

//evento load de los Links
$(document).ready(function () {
    transacionAjax_CargaBusqueda('cargar_droplist_busqueda');
    transacionAjax_Tipo('Tipo');
    transacionAjax_SubTipo('SubTipo');

    $("#ESelect").css("display", "none");
    $("#ImgID").css("display", "none");
    $("#Img2").css("display", "none");
    $("#Img1").css("display", "none");
    $("#DE").css("display", "none");
    $("#SE").css("display", "none");
    $("#WE").css("display", "none");


    $("#TablaDatos").css("display", "none");
    $("#TablaConsulta").css("display", "none");

    //funcion para las ventanas emergentes
    $("#dialog").dialog({
        autoOpen: false,
        dialogClass: "Dialog_Sasif",
        modal: true
    });

    $("#dialog_eliminar").dialog({
        autoOpen: false,
        dialogClass: "Dialog_Sasif",
        modal: true
    });

});

//salida del formulario
function btnSalir() {
    window.location = "../../Menu/menu.aspx?User=" + $("#User").html() + "&L_L=" + Link;
}

//habilita el panel de crear o consulta
function HabilitarPanel(opcion) {

    switch (opcion) {

        case "crear":
            $("#TablaDatos").css("display", "inline-table");
            $("#TablaConsulta").css("display", "none");
            $("#Txt_ID").removeAttr("disabled");
            $("#Btnguardar").attr("value", "Guardar");
            ResetError();
            Clear();
            estado = opcion;
            break;

        case "buscar":
            $("#TablaDatos").css("display", "none");
            $("#TablaConsulta").css("display", "inline-table");
            $("#container_TTP_Leasing").html("");
            estado = opcion;
            Clear();
            break;

        case "eliminar":
            $("#TablaDatos").css("display", "none");
            $("#TablaConsulta").css("display", "inline-table");
            $("#container_TTP_Leasing").html("");
            estado = opcion;
            Clear();
            break;

    }
}

//consulta del del crud(READ)
function BtnConsulta() {

    var filtro;
    var ValidateSelect = ValidarDroplist();
    var opcion;

    if (ValidateSelect == 1) {
        filtro = "N";
        opcion = "ALL";
        transacionAjax_TP_Leasing("consulta", filtro, opcion);
    }
    else {
        filtro = "S";
        opcion = $("#DDLColumns").val();
        transacionAjax_TP_Leasing("consulta", filtro, opcion);
    }

}

//crear link en la BD
function BtnCrear() {

    var validate;
    validate = validarCamposCrear();

    if (validate == 0) {
        if ($("#Btnguardar").val() == "Guardar") {
            transacionAjax_TP_Leasing_create("crear");
        }
        else {
            transacionAjax_TP_Leasing_create("modificar");
        }
    }
}

//elimina de la BD
function BtnElimina() {
    transacionAjax_TP_Leasing_delete("elimina");
}


//validamos campos para la creacion del link
function validarCamposCrear() {

    var Campo_1 = $("#Select_Tipo").val();
    var Campo_2 = $("#Select_SubTipo").val();
    var validar = 0;

    if (Campo_2 == "-1" || Campo_1 == "-1") {
        validar = 1;
        if (Campo_1 == "-1") {
            $("#ImgID").css("display", "inline-table");
        }
        else {
            $("#ImgID").css("display", "none");
        }
        if (Campo_2 == "-1") {
            $("#Img1").css("display", "inline-table");
        }
        else {
            $("#Img1").css("display", "none");
        }

    }
    else {
        $("#Img1").css("display", "none");
        $("#ImgID").css("display", "none");
    }
    return validar;
}

//validamos si han escogido una columna
function ValidarDroplist() {
    var flag;
    var contenido = $("#DDLColumns").val();

    if (contenido == '-1') {
        flag = 1;
    }
    else {
        flag = 0;
    }
    return flag;
}

// crea la tabla en el cliente
function Table_TP_Leasing() {

    switch (estado) {

        case "buscar":
            Tabla_consulta();
            break;

        case "eliminar":
            Tabla_eliminar();
            break;
    }

}

//grid con el boton eliminar
function Tabla_eliminar() {
    var html_TP_Leasing = "<table id='TTP_Leasing' border='1' cellpadding='1' cellspacing='1'  style='width: 100%'><thead><tr><th>Eliminar</th><th>Tipo de Producto</th><th>Sub tipo De producto</th></tr></thead><tbody>";
    for (itemArray in ArrayTP_Leasing) {
        if (ArrayTP_Leasing[itemArray].Tipo_ID != 0) {
            html_TP_Leasing += "<tr id= 'TTP_Leasing_" + ArrayTP_Leasing[itemArray].Tipo_ID + "'><td><input type ='radio' class= 'Eliminar' name='eliminar' onclick=\"Eliminar('" + ArrayTP_Leasing[itemArray].Tipo_ID + "','" + ArrayTP_Leasing[itemArray].SubTipo_ID + "')\"></input></td><td>" + ArrayTP_Leasing[itemArray].Tipo_ID + " - " + ArrayTP_Leasing[itemArray].DescripTipo + "</td><td>" + ArrayTP_Leasing[itemArray].SubTipo_ID + " - " + ArrayTP_Leasing[itemArray].DescripSubTipo + "</td></tr>";
        }
    }
    html_TP_Leasing += "</tbody></table>";
    $("#container_TTP_Leasing").html("");
    $("#container_TTP_Leasing").html(html_TP_Leasing);

    $(".Eliminar").click(function () {
    });

    $("#TTP_Leasing").dataTable({
        "bJQueryUI": true, "iDisplayLength": 1000,
        "bDestroy": true
    });
}

//muestra el registro a eliminar
function Eliminar(index_Tipo_ID, index_SubTipo_ID) {

    for (itemArray in ArrayTP_Leasing) {
        if (index_Tipo_ID == ArrayTP_Leasing[itemArray].Tipo_ID && index_SubTipo_ID == ArrayTP_Leasing[itemArray].SubTipo_ID) {
            edit_TipoID = ArrayTP_Leasing[itemArray].Tipo_ID;
            edit_SubTipoID = ArrayTP_Leasing[itemArray].SubTipo_ID;

            $("#dialog_eliminar").dialog("option", "title", "Eliminar?");
            $("#dialog_eliminar").dialog("open");
        }
    }

}


//grid sin botones para ver resultado
function Tabla_consulta() {
    var html_TP_Leasing = "<table id='TTP_Leasing' border='1' cellpadding='1' cellspacing='1'  style='width: 100%'><thead><tr><th>Tipo de Producto</th><th>Sub tipo De producto</th></tr></thead><tbody>";
    for (itemArray in ArrayTP_Leasing) {
        if (ArrayTP_Leasing[itemArray].Tipo_ID != 0) {
            html_TP_Leasing += "<tr id= 'TTP_Leasing_" + ArrayTP_Leasing[itemArray].Tipo_ID + "'><td>" + ArrayTP_Leasing[itemArray].Tipo_ID + " - " + ArrayTP_Leasing[itemArray].DescripTipo + "</td><td>" + ArrayTP_Leasing[itemArray].SubTipo_ID + " - " + ArrayTP_Leasing[itemArray].DescripSubTipo + "</td></tr>";
        }
    }
    html_TP_Leasing += "</tbody></table>";
    $("#container_TTP_Leasing").html("");
    $("#container_TTP_Leasing").html(html_TP_Leasing);

    $("#TTP_Leasing").dataTable({
        "bJQueryUI": true, "iDisplayLength": 1000,
        "bDestroy": true
    });
}

//evento del boton salir
function x() {
    $("#dialog").dialog("close");
}

//limpiar campos
function Clear() {
    $("#Select_Tipo").val("-1");
    $("#Select_SubTipo").val("-1");

    $("#TxtRead").val("");
    $("#DDLColumns").val("-1");

    $('.C_Chosen').trigger('chosen:updated');

}