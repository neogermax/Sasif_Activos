﻿/*--------------- region de variables globales --------------------*/
var ArrayActivo = [];
var ArrayCombo = [];
var estado;
var editID;
/*--------------- region de variables globales --------------------*/

//evento load de los Links
$(document).ready(function () {
    transacionAjax_CargaBusqueda('cargar_droplist_busqueda');
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
            $("#container_TSActivo").html("");
            estado = opcion;
            Clear();
            break;

        case "modificar":
            $("#TablaDatos").css("display", "none");
            $("#TablaConsulta").css("display", "inline-table");
            $("#container_TSActivo").html("");
            estado = opcion;
            ResetError();
            Clear();
            break;

        case "eliminar":
            $("#TablaDatos").css("display", "none");
            $("#TablaConsulta").css("display", "inline-table");
            $("#container_TSActivo").html("");
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
        transacionAjax_Activo("consulta", filtro, opcion);
    }
    else {
        filtro = "S";
        opcion = $("#DDLColumns").val();
        transacionAjax_Activo("consulta", filtro, opcion);
    }

}

//crear link en la BD
function BtnCrear() {

    var validate;
    validate = validarCamposCrear();

    if (validate == 0) {
        if ($("#Btnguardar").val() == "Guardar") {
            transacionAjax_Activo_create("crear");
        }
        else {
            transacionAjax_Activo_create("modificar");
        }
    }
}

//elimina de la BD
function BtnElimina() {
    transacionAjax_Activo_delete("elimina");
}


//validamos campos para la creacion del link
function validarCamposCrear() {

    var Campo_1 = $("#Txt_ID").val();
    var Campo_2 = $("#TxtDescripcion").val();
    var validar = 0;

    if (Campo_2 == "" || Campo_1 == "") {
        validar = 1;
        if (Campo_1 == "") {
            $("#ImgID").css("display", "inline-table");
        }
        else {
            $("#ImgID").css("display", "none");
        }
        if (Campo_2 == "") {
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
function Table_Activo() {

    switch (estado) {

        case "buscar":
            Tabla_consulta();
            break;

        case "modificar":
            Tabla_modificar();
            break;

        case "eliminar":
            Tabla_eliminar();
            break;
    }

}

//grid con el boton eliminar
function Tabla_eliminar() {
    var html_Activo = "<table id='TActivo' border='1' cellpadding='1' cellspacing='1'  style='width: 100%'><thead><tr><th>Eliminar</th><th>Codigo</th><th>Descripción</th></tr></thead><tbody>";
    for (itemArray in ArrayActivo) {
        if (ArrayActivo[itemArray].STActivo_ID != 0) {
            html_Activo += "<tr id= 'TActivo_" + ArrayActivo[itemArray].STActivo_ID + "'><td><input type ='radio' class= 'Eliminar' name='eliminar' onclick=\"Eliminar('" + ArrayActivo[itemArray].STActivo_ID + "')\"></input></td><td>" + ArrayActivo[itemArray].STActivo_ID + "</td><td>" + ArrayActivo[itemArray].Descripcion + "</td></tr>";
        }
    }
    html_Activo += "</tbody></table>";
    $("#container_TSActivo").html("");
    $("#container_TSActivo").html(html_Activo);

    $(".Eliminar").click(function () {
    });

    $("#TActivo").dataTable({
        "bJQueryUI": true, "iDisplayLength": 1000,
        "bDestroy": true
    });
}

//muestra el registro a eliminar
function Eliminar(index_Activo) {

    for (itemArray in ArrayActivo) {
        if (index_Activo == ArrayActivo[itemArray].STActivo_ID) {
            editID = ArrayActivo[itemArray].STActivo_ID;
            $("#dialog_eliminar").dialog("option", "title", "Eliminar?");
            $("#dialog_eliminar").dialog("open");
        }
    }

}

//grid con el boton editar
function Tabla_modificar() {
    var html_Activo = "<table id='TActivo' border='1' cellpadding='1' cellspacing='1'  style='width: 100%'><thead><tr><th>Editar</th><th>Codigo</th><th>Descripción</th></tr></thead><tbody>";
    for (itemArray in ArrayActivo) {
        if (ArrayActivo[itemArray].STActivo_ID != 0) {
            html_Activo += "<tr id= 'TActivo_" + ArrayActivo[itemArray].STActivo_ID + "'><td><input type ='radio' class= 'Editar' name='editar' onclick=\"Editar('" + ArrayActivo[itemArray].STActivo_ID + "')\"></input></td><td>" + ArrayActivo[itemArray].STActivo_ID + "</td><td>" + ArrayActivo[itemArray].Descripcion + "</td></tr>";
        }
    }
    html_Activo += "</tbody></table>";
    $("#container_TSActivo").html("");
    $("#container_TSActivo").html(html_Activo);

    $(".Editar").click(function () {
    });

    $("#TActivo").dataTable({
        "bJQueryUI": true, "iDisplayLength": 1000,
        "bDestroy": true
    });
}

// muestra el registro a editar
function Editar(index_Activo) {

    $("#TablaDatos").css("display", "inline-table");
    $("#TablaConsulta").css("display", "none");

    for (itemArray in ArrayActivo) {
        if (index_Activo == ArrayActivo[itemArray].STActivo_ID) {
            $("#Txt_ID").val(ArrayActivo[itemArray].STActivo_ID);
            $("#Txt_ID").attr("disabled", "disabled");
            $("#TxtDescripcion").val(ArrayActivo[itemArray].Descripcion);
            editID = ArrayActivo[itemArray].STActivo_ID;
            $("#Btnguardar").attr("value", "Actualizar");
        }
    }
}

//grid sin botones para ver resultado
function Tabla_consulta() {
    var html_Activo = "<table id='TActivo' border='1' cellpadding='1' cellspacing='1'  style='width: 100%'><thead><tr><th>Codigo</th><th>Descripción</th></tr></thead><tbody>";
    for (itemArray in ArrayActivo) {
        if (ArrayActivo[itemArray].STActivo_ID != 0) {
            html_Activo += "<tr id= 'TActivo_" + ArrayActivo[itemArray].STActivo_ID + "'><td>" + ArrayActivo[itemArray].STActivo_ID + "</td><td>" + ArrayActivo[itemArray].Descripcion + "</td></tr>";
        }
    }
    html_Activo += "</tbody></table>";
    $("#container_TSActivo").html("");
    $("#container_TSActivo").html(html_Activo);

    $("#TActivo").dataTable({
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
    $("#Txt_ID").val("");
    $("#TxtDescripcion").val("");
    $("#TxtRead").val("");
    $("#DDLColumns").val("-1");
}