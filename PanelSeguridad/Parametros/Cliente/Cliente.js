/*--------------- region de variables globales --------------------*/
var ArrayCliente = [];
var ArrayCombo = [];
var ArrayPaises = [];
var ArrayPais = [];
var ArrayCiudades = [];
var ArrayImpuesto_Gasto = [];
var ArrayEmpresaNit = [];
var ArrayEntfinanciera = [];
var ArrayTcuenta = [];
var ArrayCli_Relacion = [];
var ArrayRegimen = [];


var estado;
var editNit_ID;
var editType_Document_ID;
var editDocument_ID;
var NitAlter = "";
var ValidatorCampos;

/*--------------- region de variables globales --------------------*/

//evento load de los Links
$(document).ready(function () {
    transacionAjax_CargaBusqueda('cargar_droplist_busqueda');
    transacionAjax_EmpresaNit('Cliente')
    transacionAjax_EntFinan('Bank');
    transacionAjax_Pais('Pais');
    transacionAjax_Documento('Documento');
    transacionAjax_TCuenta('TCuenta');

    Verifica();

    $("#ESelect").css("display", "none");
    $("#ImgMul").css("display", "none");
    $("#ImgPais").css("display", "none");
    $("#ImgC_Doc").css("display", "none");
    $("#ImgCiudad").css("display", "none");
    $("#ImgPais_D").css("display", "none");
    $("#Relacion").css("display", "none");

    $("#Img1").css("display", "none");
    $("#Img2").css("display", "none");
    $("#Img3").css("display", "none");
    $("#Img5").css("display", "none");
    $("#Img6").css("display", "none");
    $("#Img7").css("display", "none");
    $("#Img8").css("display", "none");
    $("#Img9").css("display", "none");
    $("#Img10").css("display", "none");
    $("#Img11").css("display", "none");
    $("#Img12").css("display", "none");
    $("#Img13").css("display", "none");
    $("#Img14").css("display", "none");
    $("#Img15").css("display", "none");
    $("#Img16").css("display", "none");

    $("#DE").css("display", "none");
    $("#SE").css("display", "none");
    $("#WE").css("display", "none");

    $("#TablaDatos_D").css("display", "none");
    $("#Relacion").css("display", "none");
    $("#Controls").css("display", "none");
    $("#Complementos").css("display", "none");
    $("#TablaConsulta").css("display", "none");
    $("#Anexos").css("display", "none");
    $("#TR_Nit").css("display", "none");


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

    $("#Dialog_Visualiza").dialog({
        autoOpen: false,
        dialogClass: "Dialog_Sasif",
        modal: true,
        width: 600,
        height: 630,
        overlay: {
            opacity: 0.5,
            background: "black"
        }
    });

    $("#Dialog_Direcciones").dialog({
        autoOpen: false,
        dialogClass: "Dialog_Sasif",
        modal: true,
        width: 1000,
        height: 520,
        overlay: {
            opacity: 0.5,
            background: "black"
        }
    });

    $("#Dialog_EntidadFinanciera").dialog({
        autoOpen: false,
        dialogClass: "Dialog_Sasif",
        modal: true,
        width: 1000,
        height: 520,
        overlay: {
            opacity: 0.5,
            background: "black"
        }
    });

    $("#Dialog_Documentos").dialog({
        autoOpen: false,
        dialogClass: "Dialog_Sasif",
        modal: true,
        width: 1000,
        height: 520,
        overlay: {
            opacity: 0.5,
            background: "black"
        }
    });


    $("#Dialog_C_R_U_D").dialog({
        autoOpen: false,
        dialogClass: "Dialog_Sasif",
        modal: true,
        width: 850,
        height: 550,
        overlay: {
            opacity: 0.5,
            background: "black"
        }
    });

    $("#Dialog_C_R_U_D_Bank").dialog({
        autoOpen: false,
        dialogClass: "Dialog_Sasif",
        modal: true,
        width: 750,
        height: 400,
        overlay: {
            opacity: 0.5,
            background: "black"
        }
    });

    $("#Dialog_Delete_Adress").dialog({
        autoOpen: false,
        dialogClass: "Dialog_Sasif",
        modal: true,
        width: 300,
        height: 250,
        overlay: {
            opacity: 0.5,
            background: "black"
        }
    });

    $("#Dialog_Delete_Bank").dialog({
        autoOpen: false,
        dialogClass: "Dialog_Sasif",
        modal: true,
        width: 300,
        height: 250,
        overlay: {
            opacity: 0.5,
            background: "black"
        }
    });


    $("#Dialog_Format_Adress").dialog({
        autoOpen: false,
        dialogClass: "Dialog_Sasif",
        modal: true,
        width: 1000,
        height: 250,
        overlay: {
            opacity: 0.5,
            background: "black"
        }
    });

    $("#Dialog_Relation").dialog({
        autoOpen: false,
        dialogClass: "Dialog_Sasif",
        modal: true,
        width: 600,
        height: 150,
        overlay: {
            opacity: 0.5,
            background: "black"
        }
    });


    $(function () {
        $("#Acordeon_Dat").accordion({
            heightStyle: "content"
        });
    });

    Format_Adress();
    Change_Select_pais();
    Change_Select_TPersona();
    ValideAnexos();
    Change_Select_TDoc();

});

//carga el combo de paises
function Change_Select_pais() {
    $("#Select_Pais").change(function () {
        var Str_pais = $("#Select_Pais option:selected").html();
        var SplitPais = Str_pais.split(" - ");

        $('#Select_Ciudad').empty();
        transacionAjax_Ciudad('Ciudad', SplitPais[0]);

    });

    $("#Select_Pais_D").change(function () {
        var Str_pais = $("#Select_Pais_D option:selected").html();
        var SplitPais = Str_pais.split(" - ");

        $('#Select_Ciudad_D').empty();
        transacionAjax_Ciudad_D('Ciudad', SplitPais[0]);

    });
}


//carga el combo de regimen
function Change_Select_TPersona() {
    $("#Select_TPersona").change(function () {
        $('#Select_Regimen').empty();
        var Json_Regimen;
        var index = $(this).val();

        if (index == 1) {
            ArrayRegimen = [];
            Json_Regimen = { "ID": "1", "descripcion": "Régimen Común" };
            ArrayRegimen.push(Json_Regimen);
            Json_Regimen = { "ID": "2", "descripcion": "Régimen Simplificado" };
            ArrayRegimen.push(Json_Regimen);
        }
        else {
            ArrayRegimen = [];
            Json_Regimen = { "ID": "3", "descripcion": "Gran Contribuyente/Auto Retenedor" };
            ArrayRegimen.push(Json_Regimen);
            Json_Regimen = { "ID": "1", "descripcion": "Régimen Común" };
            ArrayRegimen.push(Json_Regimen);
            Json_Regimen = { "ID": "4", "descripcion": "Régimen Especial" };
            ArrayRegimen.push(Json_Regimen);
        }
        charge_CatalogList(ArrayRegimen, "Select_Regimen", 1);

    });
}


//revisa el tipo de documento
function Change_Select_TDoc() {
    $("#Select_Documento").change(function () {
        var index = $(this).val();


        if (index != 2) {

            ResetError();
            $("#TR_Nit").css("display", "none");
            $(".Desvanecer").css("display", "inline-block");
            $(".TR_1").css("width", "150%");
            ValidatorCampos = 1;
        }
        else {

            ResetError();
            $("#TR_Nit").css("display", "inline-block");
            $(".Desvanecer").css("display", "none");
            ValidatorCampos = 2;
        }
    });
}

//muestra las relacion del cliente
function BtnRelacion() {
    $("#Dialog_Relation").dialog("open");

}

//salida del formulario
function btnSalir() {
    window.location = "../../Menu/menu.aspx?User=" + $("#User").html() + "&L_L=" + Link;
}

//habilita el panel de crear o consulta
function HabilitarPanel(opcion) {

    switch (opcion) {

        case "crear":
            ResetError();
            $("#TablaDatos_D").css("display", "inline-table");
            // $("#Relacion").css("display", "inline-table");
            $("#Controls").css("display", "inline-table");
            $("#TablaConsulta").css("display", "none");
            $("#Complementos").css("display", "none");
            $("#Anexos").css("display", "none");

            $("#Select_EmpresaNit").removeAttr("disabled");
            $("#Select_Documento").removeAttr("disabled");

            $("#Txt_Nit").removeAttr("disabled");
            $("#Txt_Ident").removeAttr("disabled");
            $("#Btnguardar").attr("value", "Guardar");
            Enabled_Client();
            Clear();
            estado = opcion;
            break;

        case "buscar":
            $("#TablaDatos_D").css("display", "none");
            $("#Relacion").css("display", "none");
            $("#Controls").css("display", "none");
            $("#Complementos").css("display", "none");
            $("#Anexos").css("display", "none");

            $("#TablaConsulta").css("display", "inline-table");
            $("#container_TCliente").html("");
            estado = opcion;
            Clear();
            break;

        case "modificar":
            ResetError();
            $("#TablaDatos_D").css("display", "none");
            $("#Relacion").css("display", "none");
            $("#Controls").css("display", "none");
            $("#Complementos").css("display", "none");
            $("#Anexos").css("display", "none");

            $("#TablaConsulta").css("display", "inline-table");
            $("#container_TCliente").html("");
            estado = opcion;
            Clear();
            Enabled_Client();
            break;

        case "eliminar":
            $("#TablaDatos_D").css("display", "none");
            $("#Relacion").css("display", "none");
            $("#Controls").css("display", "none");
            $("#Complementos").css("display", "none");
            $("#Anexos").css("display", "none");

            $("#TablaConsulta").css("display", "inline-table");
            $("#container_TCliente").html("");
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
        transacionAjax_Cliente("consulta", filtro, opcion);
    }
    else {
        filtro = "S";
        opcion = $("#DDLColumns").val();
        transacionAjax_Cliente("consulta", filtro, opcion);
    }

}

//crear link en la BD
function BtnCrear() {

    var validate;
    validate = validarCamposCrear();

    if (validate == 0) {
        if ($("#Btnguardar").val() == "Guardar") {
            transacionAjax_Cliente_create("crear");
        }
        else {
            transacionAjax_Cliente_create("modificar");
        }
    }
}

//elimina de la BD
function BtnElimina() {
    transacionAjax_Cliente_delete("elimina");
}


//validamos campos para la creacion del link
function validarCamposCrear() {

    var validar = 0;

    switch (ValidatorCampos) {
        case 1:
            validar = valida_1();
            break;

        case 2:
            validar = valida_2();
            break;

        case 3:
            validar = valida_3();
            break;

        default:
            validar = valida_1();
            break;

    }

    return validar;
}

//validacion general
function valida_1() {

    var Campo_1 = $("#Select_EmpresaNit").val();
    var Campo_2 = $("#Select_Pais").val();
    var Campo_3 = $("#Select_Ciudad").val();
    var Campo_4 = $("#Select_Documento").val();
    var Campo_5 = $("#Txt_Ident").val();
    var Campo_6 = $("#TxtNombre").val();
    var Campo_7 = $("#Select_Ciudad_Doc").val();
    var Campo_8 = $("#Select_TPersona").val();
    var Campo_9 = $("#Select_Regimen").val();

    var validar = 0;

    if (Campo_9 == "-1" || Campo_8 == "-1" || Campo_7 == "-1" || Campo_6 == "" || Campo_5 == "" || Campo_4 == "-1" || Campo_3 == "-1" || Campo_2 == "-1" || Campo_1 == "-1") {
        validar = 1;
        if (Campo_1 == "-1")
            $("#ImgMul").css("display", "inline-table");
        else
            $("#ImgMul").css("display", "none");

        if (Campo_2 == "-1")
            $("#ImgPais").css("display", "inline-table");
        else
            $("#ImgPais").css("display", "none");

        if (Campo_3 == "-1")
            $("#Img1").css("display", "inline-table");
        else
            $("#Img1").css("display", "none");

        if (Campo_4 == "-1")
            $("#Img2").css("display", "inline-table");
        else
            $("#Img2").css("display", "none");

        if (Campo_5 == "")
            $("#Img3").css("display", "inline-table");
        else
            $("#Img3").css("display", "none");

        if (Campo_6 == "")
            $("#Img5").css("display", "inline-table");
        else
            $("#Img5").css("display", "none");

        if (Campo_7 == "-1")
            $("#ImgC_Doc").css("display", "inline-table");
        else
            $("#ImgC_Doc").css("display", "none");

        if (Campo_8 == "-1")
            $("#Img9").css("display", "inline-table");
        else
            $("#Img9").css("display", "none");

        if (Campo_9 == "-1")
            $("#Img10").css("display", "inline-table");
        else
            $("#Img10").css("display", "none");
    }
    else {
        $("#ImgC_Doc").css("display", "none");
        $("#ImgMul").css("display", "none");
        $("#ImgPais").css("display", "none");
        $("#Img1").css("display", "none");
        $("#Img2").css("display", "none");
        $("#Img3").css("display", "none");
        $("#Img5").css("display", "none");
        $("#Img9").css("display", "none");
        $("#Img10").css("display", "none");
    }

    return validar;

}


//validacion general
function valida_2() {

    var Campo_1 = $("#Select_EmpresaNit").val();
    var Campo_2 = $("#Select_Pais").val();
    var Campo_3 = $("#Select_Ciudad").val();
    var Campo_4 = $("#Select_Documento").val();
    var Campo_5 = $("#Txt_Ident").val();
    var Campo_6 = $("#TxtNombreNit").val();
    var Campo_8 = $("#Select_TPersona").val();
    var Campo_9 = $("#Select_Regimen").val();

    var validar = 0;

    if (Campo_9 == "-1" || Campo_8 == "-1" || Campo_6 == "" || Campo_5 == "" || Campo_4 == "-1" || Campo_3 == "-1" || Campo_2 == "-1" || Campo_1 == "-1") {
        validar = 1;
        if (Campo_1 == "-1")
            $("#ImgMul").css("display", "inline-table");
        else
            $("#ImgMul").css("display", "none");

        if (Campo_2 == "-1")
            $("#ImgPais").css("display", "inline-table");
        else
            $("#ImgPais").css("display", "none");

        if (Campo_3 == "-1")
            $("#Img1").css("display", "inline-table");
        else
            $("#Img1").css("display", "none");

        if (Campo_4 == "-1")
            $("#Img2").css("display", "inline-table");
        else
            $("#Img2").css("display", "none");

        if (Campo_5 == "")
            $("#Img3").css("display", "inline-table");
        else
            $("#Img3").css("display", "none");

        if (Campo_6 == "")
            $("#Img11").css("display", "inline-table");
        else
            $("#Img11").css("display", "none");

        if (Campo_8 == "-1")
            $("#Img9").css("display", "inline-table");
        else
            $("#Img9").css("display", "none");

        if (Campo_9 == "-1")
            $("#Img10").css("display", "inline-table");
        else
            $("#Img10").css("display", "none");
    }
    else {
        $("#ImgC_Doc").css("display", "none");
        $("#ImgMul").css("display", "none");
        $("#ImgPais").css("display", "none");
        $("#Img1").css("display", "none");
        $("#Img2").css("display", "none");
        $("#Img3").css("display", "none");
        $("#Img11").css("display", "none");
        $("#Img9").css("display", "none");
        $("#Img10").css("display", "none");
    }

    return validar;
}

//validacion general
function valida_3() {

    var Campo_1 = $("#Select_EmpresaNit").val();
    var Campo_2 = $("#Select_Pais").val();
    var Campo_3 = $("#Select_Ciudad").val();
    var Campo_4 = $("#Select_Documento").val();
    var Campo_5 = $("#Txt_Ident").val();
    var Campo_6 = $("#TxtNombreNit").val();
    var Campo_8 = $("#Select_TPersona").val();
    var Campo_9 = $("#Select_Regimen").val();
    var Campo_7 = $("#Txt_CodBank").val();

    var validar = 0;

    if (Campo_7 == "" || Campo_9 == "-1" || Campo_8 == "-1" || Campo_6 == "" || Campo_5 == "" || Campo_4 == "-1" || Campo_3 == "-1" || Campo_2 == "-1" || Campo_1 == "-1") {
        validar = 1;
        if (Campo_1 == "-1")
            $("#ImgMul").css("display", "inline-table");
        else
            $("#ImgMul").css("display", "none");

        if (Campo_2 == "-1")
            $("#ImgPais").css("display", "inline-table");
        else
            $("#ImgPais").css("display", "none");

        if (Campo_3 == "-1")
            $("#Img1").css("display", "inline-table");
        else
            $("#Img1").css("display", "none");

        if (Campo_4 == "-1")
            $("#Img2").css("display", "inline-table");
        else
            $("#Img2").css("display", "none");

        if (Campo_5 == "")
            $("#Img3").css("display", "inline-table");
        else
            $("#Img3").css("display", "none");

        if (Campo_6 == "")
            $("#Img11").css("display", "inline-table");
        else
            $("#Img11").css("display", "none");

        if (Campo_7 == "")
            $("#Img12").css("display", "inline-table");
        else
            $("#Img12").css("display", "none");

        if (Campo_8 == "-1")
            $("#Img9").css("display", "inline-table");
        else
            $("#Img9").css("display", "none");

        if (Campo_9 == "-1")
            $("#Img10").css("display", "inline-table");
        else
            $("#Img10").css("display", "none");
    }
    else {
        $("#ImgC_Doc").css("display", "none");
        $("#ImgMul").css("display", "none");
        $("#ImgPais").css("display", "none");
        $("#Img1").css("display", "none");
        $("#Img2").css("display", "none");
        $("#Img3").css("display", "none");
        $("#Img11").css("display", "none");
        $("#Img9").css("display", "none");
        $("#Img10").css("display", "none");
        $("#Img12").css("display", "none");
    }

    return validar;
}

//escondemos los iconos obligatorios
function ResetError() {
    $("#ImgC_Doc").css("display", "none");
    $("#ImgMul").css("display", "none");
    $("#ImgPais").css("display", "none");
    $("#Img1").css("display", "none");
    $("#Img2").css("display", "none");
    $("#Img3").css("display", "none");
    $("#Img11").css("display", "none");
    $("#Img9").css("display", "none");
    $("#Img10").css("display", "none");
    $("#Img5").css("display", "none");
    $("#Img12").css("display", "none");
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
function Table_Cliente() {

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
    var html_Cliente = "<table id='TCliente' border='1' cellpadding='1' cellspacing='1'  style='width: 100%'><thead><tr><th colspan='11' class='Grid_Head' >Datos Generales</th><th colspan='11' class='Grid_Head' >Relacion</th></tr><tr><th>Ver</th><th>Eliminar</th><th>Nit Empresa</th><th>Tipo de Documento</th><th>N° Documento</th><th>Digito De Verificación</th><th>Nombre Empresa</th><th>Tipo Persona</th><th>Regimen</th><th>Pais</th><th>Ciudad</th><th>Cliente</th><th>Avaluador</th><th>Organismo de Transito</th><th>Hacienda</th><th>Nit Multi-Empresa</th><th>Empleado</th><th>Asesor</th><th>Proveedor</th><th>Ent. Bancaria</th></tr></thead><tbody>";
    for (itemArray in ArrayCliente) {
        if (ArrayCliente[itemArray].Cliente_ID != 0) {

            var StrCiudad = ArrayCliente[itemArray].DescripCiudad
            var ArraySplit = StrCiudad.split("_");

            html_Cliente += "<tr><td><input type ='radio' class= 'Ver' name='ver' onclick=\"Ver('" + ArrayCliente[itemArray].Nit_ID + "','" + ArrayCliente[itemArray].TypeDocument_ID + "','" + ArrayCliente[itemArray].Document_ID + "')\"></input></td><td><input type ='radio' class= 'Eliminar' name='eliminar' onclick=\"Eliminar('" + ArrayCliente[itemArray].Nit_ID + "','" + ArrayCliente[itemArray].TypeDocument_ID + "','" + ArrayCliente[itemArray].Document_ID + "')\"></input></td><td>" + ArrayCliente[itemArray].Nit_ID + "</td><td>" + ArrayCliente[itemArray].DescripTypeDocument + "</td><td>" + ArrayCliente[itemArray].Document_ID + "</td><td>" + ArrayCliente[itemArray].Digito_Verificacion + "</td><td>" + ArrayCliente[itemArray].Nombre + " " + ArrayCliente[itemArray].Nombre_2 + " " + ArrayCliente[itemArray].Apellido_1 + " " + ArrayCliente[itemArray].Apellido_2 + "</td><td>" + ArrayCliente[itemArray].DescripTipoPersona + "</td><td>" + ArrayCliente[itemArray].DescripRegimen + "</td><td>" + ArrayCliente[itemArray].DescripPais + "</td><td>" + ArrayCliente[itemArray].DescripCiudad + "</td><td>" + ArrayCliente[itemArray].OP_Cliente + "</td><td>" + ArrayCliente[itemArray].OP_Avaluador + "</td><td>" + ArrayCliente[itemArray].OP_Transito + "</td><td>" + ArrayCliente[itemArray].OP_Hacienda + "</td><td>" + ArrayCliente[itemArray].OP_Empresa + "</td><td>" + ArrayCliente[itemArray].OP_Empleado + "</td><td>" + ArrayCliente[itemArray].OP_Asesor + "</td><td>" + ArrayCliente[itemArray].Other_1 + "</td><td>" + ArrayCliente[itemArray].Other_2 + "</td></tr>";
        }
    }
    html_Cliente += "</tbody></table>";
    $("#container_TCliente").html("");
    $("#container_TCliente").html(html_Cliente);

    $(".Eliminar").click(function () {
    });

    $(".Ver").click(function () {
    });

    $("#TCliente").dataTable({
        "bJQueryUI": true, "iDisplayLength": 1000,
        "bDestroy": true
    });
}

//muestra el registro a eliminar
function Eliminar(index_Nit, index_TDocumento, index_Documento) {

    D_Nit = index_Nit;
    D_TDocumento = index_TDocumento;
    D_Documento = index_Documento;

    for (itemArray in ArrayCliente) {
        if (index_Nit == ArrayCliente[itemArray].Nit_ID && index_TDocumento == ArrayCliente[itemArray].TypeDocument_ID && index_Documento == ArrayCliente[itemArray].Document_ID) {

            editNit_ID = ArrayCliente[itemArray].Nit_ID;
            editType_Document_ID = ArrayCliente[itemArray].TypeDocument_ID;
            editDocument_ID = ArrayCliente[itemArray].Document_ID;

            D_String_Contacto = ArrayCliente[itemArray].Nombre;

            $("#dialog_eliminar").dialog("option", "title", "Eliminar?");
            $("#dialog_eliminar").dialog("open");
        }
    }

}

//grid con el boton editar
function Tabla_modificar() {
    var html_Cliente = "<table id='TCliente' border='1' cellpadding='1' cellspacing='1'  style='width: 100%'><thead><tr><th colspan='11' class='Grid_Head' >Datos Generales</th><th colspan='11' class='Grid_Head' >Relacion</th></tr><tr><th>Ver</th><th>Editar</th><th>Nit Empresa</th><th>Tipo de Documento</th><th>N° Documento</th><th>Digito De Verificación</th><th>Nombre Empresa</th><th>Tipo Persona</th><th>Regimen</th><th>Pais</th><th>Ciudad</th><th>Cliente</th><th>Avaluador</th><th>Organismo de Transito</th><th>Hacienda</th><th>Nit Multi-Empresa</th><th>Empleado</th><th>Asesor</th><th>Proveedor</th><th>Ent. Bancaria</th></tr></thead><tbody>";
    for (itemArray in ArrayCliente) {
        if (ArrayCliente[itemArray].Document_ID != 0) {

            var StrCiudad = ArrayCliente[itemArray].DescripCiudad
            var ArraySplit = StrCiudad.split("_");

            html_Cliente += "<tr><td><input type ='radio' class= 'Ver' name='ver' onclick=\"Ver('" + ArrayCliente[itemArray].Nit_ID + "','" + ArrayCliente[itemArray].TypeDocument_ID + "','" + ArrayCliente[itemArray].Document_ID + "')\"></input></td><td><input type ='radio' class= 'Editar' name='editar' onclick=\"Editar('" + ArrayCliente[itemArray].Nit_ID + "','" + ArrayCliente[itemArray].TypeDocument_ID + "','" + ArrayCliente[itemArray].Document_ID + "')\"></input></td><td>" + ArrayCliente[itemArray].Nit_ID + "</td><td>" + ArrayCliente[itemArray].DescripTypeDocument + "</td><td>" + ArrayCliente[itemArray].Document_ID + "</td><td>" + ArrayCliente[itemArray].Digito_Verificacion + "</td><td>" + ArrayCliente[itemArray].Nombre + " " + ArrayCliente[itemArray].Nombre_2 + " " + ArrayCliente[itemArray].Apellido_1 + " " + ArrayCliente[itemArray].Apellido_2 + "</td><td>" + ArrayCliente[itemArray].DescripTipoPersona + "</td><td>" + ArrayCliente[itemArray].DescripRegimen + "</td><td>" + ArrayCliente[itemArray].DescripPais + "</td><td>" + ArrayCliente[itemArray].DescripCiudad + "</td><td>" + ArrayCliente[itemArray].OP_Cliente + "</td><td>" + ArrayCliente[itemArray].OP_Avaluador + "</td><td>" + ArrayCliente[itemArray].OP_Transito + "</td><td>" + ArrayCliente[itemArray].OP_Hacienda + "</td><td>" + ArrayCliente[itemArray].OP_Empresa + "</td><td>" + ArrayCliente[itemArray].OP_Empleado + "</td><td>" + ArrayCliente[itemArray].OP_Asesor + "</td><td>" + ArrayCliente[itemArray].Other_1 + "</td><td>" + ArrayCliente[itemArray].Other_2 + "</td></tr>";
        }
    }
    html_Cliente += "</tbody></table>";
    $("#container_TCliente").html("");
    $("#container_TCliente").html(html_Cliente);

    $(".Editar").click(function () {
    });

    $(".Ver").click(function () {
    });

    $("#TCliente").dataTable({
        "bJQueryUI": true, "iDisplayLength": 1000,
        "bDestroy": true
    });
}

var StrCiudad;
var StrDocCiudad;
var StrRegimen;

// muestra el registro a editar
function Editar(index_Nit, index_TDocumento, index_Documento) {

    D_Nit = index_Nit;
    D_TDocumento = index_TDocumento;
    D_Documento = index_Documento;

    $("#TablaDatos_D").css("display", "inline-table");
    //$("#Relacion").css("display", "inline-table");
    $("#Controls").css("display", "inline-table");

    $("#TablaConsulta").css("display", "none");

    for (itemArray in ArrayCliente) {
        if (index_Nit == ArrayCliente[itemArray].Nit_ID && index_TDocumento == ArrayCliente[itemArray].TypeDocument_ID && index_Documento == ArrayCliente[itemArray].Document_ID) {

            editNit_ID = ArrayCliente[itemArray].Nit_ID;
            editType_Document_ID = ArrayCliente[itemArray].TypeDocument_ID;
            editDocument_ID = ArrayCliente[itemArray].Document_ID;

            D_String_Contacto = ArrayCliente[itemArray].Nombre;

            $("#Select_EmpresaNit").val(ArrayCliente[itemArray].Nit_ID);
            $("#Select_Documento").val(ArrayCliente[itemArray].TypeDocument_ID);
            $("#Select_Pais").val(ArrayCliente[itemArray].Pais_ID);
            StrCiudad = ArrayCliente[itemArray].Ciudad_ID;
            StrDocCiudad = ArrayCliente[itemArray].DocCiudad;
            StrRegimen = ArrayCliente[itemArray].Regimen;

            $("#Select_TPersona").val(ArrayCliente[itemArray].TipoPersona);

            setTimeout("$('#Select_Pais').trigger('change');", 200);
            setTimeout("$('#Select_TPersona').trigger('change');", 200);


            $("#Txt_Ident").val(ArrayCliente[itemArray].Document_ID);
            $("#TxtVerif").val(ArrayCliente[itemArray].Digito_Verificacion);

            if (ArrayCliente[itemArray].TypeDocument_ID == "2") {
                $("#TxtNombreNit").val(ArrayCliente[itemArray].Nombre);
                $("#TR_Nit").css("display", "inline-block");
                $(".Desvanecer").css("display", "none");
                ValidatorCampos = 2;
            }
            else {
                $("#TxtNombre").val(ArrayCliente[itemArray].Nombre);
                $(".Desvanecer").css("display", "inline-block");
                $(".TR_1").css("width", "150%");
                $("#TR_Nit").css("display", "none");
                ValidatorCampos = 1;
            }

            $("#TxtNombre_2").val(ArrayCliente[itemArray].Nombre_2);
            $("#Txt_Ape_1").val(ArrayCliente[itemArray].Apellido_1);
            $("#Txt_Ape_2").val(ArrayCliente[itemArray].Apellido_2);
            $("#Txt_CodBank").val(ArrayCliente[itemArray].Cod_Bank);


            if (ArrayCliente[itemArray].OP_Cliente == "S")
                $("#Check_Cliente").prop("checked", true);
            else
                $("#Check_Cliente").prop("checked", false);

            if (ArrayCliente[itemArray].OP_Avaluador == "S")
                $("#Check_Avaluador").prop("checked", true);
            else
                $("#Check_Avaluador").prop("checked", false);

            if (ArrayCliente[itemArray].OP_Transito == "S")
                $("#Check_Transito").prop("checked", true);
            else
                $("#Check_Transito").prop("checked", false);

            if (ArrayCliente[itemArray].OP_Hacienda == "S")
                $("#Check_Hacienda").prop("checked", true);
            else
                $("#Check_Hacienda").prop("checked", false);

            if (ArrayCliente[itemArray].OP_Empresa == "S")
                $("#Check_MultiEmpresa").prop("checked", true);
            else
                $("#Check_MultiEmpresa").prop("checked", false);

            if (ArrayCliente[itemArray].OP_Empleado == "S")
                $("#Check_Empleado").prop("checked", true);
            else
                $("#Check_Empleado").prop("checked", false);

            if (ArrayCliente[itemArray].OP_Asesor == "S")
                $("#Check_Asesor").prop("checked", true);
            else
                $("#Check_Asesor").prop("checked", false);

            if (ArrayCliente[itemArray].Other_1 == "S")
                $("#Check_Proveedor").prop("checked", true);
            else
                $("#Check_Proveedor").prop("checked", false);

            if (ArrayCliente[itemArray].Other_2 == "S") {
                $("#Check_EntBancaria").prop("checked", true);
                $("#Anexos").css("display", "inline-table");
            }
            else {
                $("#Check_EntBancaria").prop("checked", false);
                $("#Anexos").css("display", "none");
            }

            $("#Btnguardar").attr("value", "Actualizar");

            $("#Select_EmpresaNit").attr("disabled", "disabled");
            $("#Select_Documento").attr("disabled", "disabled");

            $("#Txt_Nit").attr("disabled", "disabled");
            $("#Txt_Ident").attr("disabled", "disabled");
            $("#Complementos").css("display", "inline-table");

            setTimeout("ChargeCiudad(StrCiudad);", 300);

            if (StrDocCiudad != 0)
                setTimeout("ChargeDocCiudad(StrDocCiudad);", 300);

            if (StrRegimen != "")
                setTimeout("ChargeRegimen(StrRegimen);", 300);

            $('.C_Chosen').trigger('chosen:updated');

        }
    }
}

//funcion de carga de lacuidad para edicion
function ChargeCiudad(index) {
    $('#Select_Ciudad').val(index);
    $('.C_Chosen').trigger('chosen:updated');
}

//funcion de carga de la ciudad del documento para edicion
function ChargeDocCiudad(index) {
    $('#Select_Ciudad_Doc').val(index);
    $('.C_Chosen').trigger('chosen:updated');
}

//funcion de carga de el regimen para edicion
function ChargeRegimen(index) {
    $('#Select_Regimen').val(index);
    $('.C_Chosen').trigger('chosen:updated');
}

//grid sin botones para ver resultado
function Tabla_consulta() {
    var html_Cliente = "<table id='TCliente' border='1' cellpadding='1' cellspacing='1'  style='width: 100%'><thead><tr><th colspan='11' class='Grid_Head' >Datos Generales</th><th colspan='11' class='Grid_Head' >Relacion</th></tr><tr><th>Ver</th><th>Nit Empresa</th><th>Tipo de Documento</th><th>N° Documento</th><th>Digito De Verificación</th><th>Nombre Empresa</th><th>Tipo Persona</th><th>Regimen</th><th>Pais</th><th>Ciudad</th><th>Cliente</th><th>Avaluador</th><th>Organismo de Transito</th><th>Hacienda</th><th>Nit Multi-Empresa</th><th>Empleado</th><th>Asesor</th><th>Proveedor</th><th>Ent. Bancaria</th></tr></thead><tbody>";
    for (itemArray in ArrayCliente) {
        if (ArrayCliente[itemArray].Cliente_ID != 0) {

            var StrCiudad = ArrayCliente[itemArray].DescripCiudad
            var ArraySplit = StrCiudad.split("_");

            html_Cliente += "<tr><td><input type ='radio' class= 'Ver' name='ver' onclick=\"Ver('" + ArrayCliente[itemArray].Nit_ID + "','" + ArrayCliente[itemArray].TypeDocument_ID + "','" + ArrayCliente[itemArray].Document_ID + "')\"></input></td><td>" + ArrayCliente[itemArray].Nit_ID + "</td><td>" + ArrayCliente[itemArray].DescripTypeDocument + "</td><td>" + ArrayCliente[itemArray].Document_ID + "</td><td>" + ArrayCliente[itemArray].Digito_Verificacion + "</td><td>" + ArrayCliente[itemArray].Nombre + " " + ArrayCliente[itemArray].Nombre_2 + " " + ArrayCliente[itemArray].Apellido_1 + " " + ArrayCliente[itemArray].Apellido_2 + "</td><td>" + ArrayCliente[itemArray].DescripTipoPersona + "</td><td>" + ArrayCliente[itemArray].DescripRegimen + "</td><td>" + ArrayCliente[itemArray].DescripPais + "</td><td>" + ArrayCliente[itemArray].DescripCiudad + "</td><td>" + ArrayCliente[itemArray].OP_Cliente + "</td><td>" + ArrayCliente[itemArray].OP_Avaluador + "</td><td>" + ArrayCliente[itemArray].OP_Transito + "</td><td>" + ArrayCliente[itemArray].OP_Hacienda + "</td><td>" + ArrayCliente[itemArray].OP_Empresa + "</td><td>" + ArrayCliente[itemArray].OP_Empleado + "</td><td>" + ArrayCliente[itemArray].OP_Asesor + "</td><td>" + ArrayCliente[itemArray].Other_1 + "</td><td>" + ArrayCliente[itemArray].Other_2 + "</td></tr>";
        }
    }
    html_Cliente += "</tbody></table>";
    $("#container_TCliente").html("");
    $("#container_TCliente").html(html_Cliente);

    $(".Ver").click(function () {
    });

    $("#TCliente").dataTable({
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
    $("#Select_Documento").val("-1");
    $("#Select_Ciudad").val("-1");
    $("#Select_EmpresaNit").val("-1");
    $("#Select_Ciudad_Doc").val("-1");

    $("#Txt_Ident").val("");
    $("#TxtVerif").val("");
    $("#TxtNombre").val("");
    $("#TxtNombreNit").val("");

    $("#TxtNombre_2").val("");
    $("#Txt_Ape_1").val("");
    $("#Txt_Ape_2").val("");
    $("#Txt_CodBank").val("");

    $("#TxtRead").val("");
    $("#DDLColumns").val("-1");


    $("#Check_Cliente").prop("checked", false);
    $("#Check_Avaluador").prop("checked", false);
    $("#Check_Transito").prop("checked", false);
    $("#Check_Hacienda").prop("checked", false);
    $("#Check_MultiEmpresa").prop("checked", false);
    $("#Check_Empleado").prop("checked", false);
    $("#Check_Asesor").prop("checked", false);
    $("#Check_Proveedor").prop("checked", false);
    $("#Check_EntBancaria").prop("checked", false);

    $("#Select_TPersona").val("-1");
    $("#Select_Regimen").val("-1");

    $('.C_Chosen').trigger('chosen:updated');

}

// muestra el registro a ver
function Ver(index_Nit, index_TDocumento, index_Documento) {

    D_Nit = index_Nit;
    D_TDocumento = index_TDocumento;
    D_Documento = index_Documento;

    for (itemArray in ArrayCliente) {
        if (index_Nit == ArrayCliente[itemArray].Nit_ID && index_TDocumento == ArrayCliente[itemArray].TypeDocument_ID && index_Documento == ArrayCliente[itemArray].Document_ID) {

            var StrCiudad = ArrayCliente[itemArray].DescripCiudad
            var ArraySplit = StrCiudad.split("_");

            D_String_Contacto = ArrayCliente[itemArray].Nombre;
            D_String_TDocumento = ArrayCliente[itemArray].DescripTypeDocument;

            $("#V_Nombre").html(ArrayCliente[itemArray].Nombre);
            $("#V_TDocumento").html(ArrayCliente[itemArray].DescripTypeDocument);
            $("#V_Documento").html(ArrayCliente[itemArray].Document_ID);
            $("#V_Nit").html(ArrayCliente[itemArray].Nit_ID);
            $("#V_Digito").html(ArrayCliente[itemArray].Digito_Verificacion);
            $("#V_Municipio").html(ArrayCliente[itemArray].DescripCiudad);

            $("#V_TPersona").html(ArrayCliente[itemArray].DescripTipoPersona);
            $("#V_Regimen").html(ArrayCliente[itemArray].DescripRegimen);

            $("#V_Op_Cliente").html(ArrayCliente[itemArray].OP_Cliente);
            $("#V_Op_Avaluador").html(ArrayCliente[itemArray].OP_Avaluador);
            $("#V_Op_Transito").html(ArrayCliente[itemArray].OP_Transito);
            $("#V_Op_Hacienda").html(ArrayCliente[itemArray].OP_Hacienda);
            $("#V_Op_Empresa").html(ArrayCliente[itemArray].OP_Empresa);
            $("#V_Op_Empleado").html(ArrayCliente[itemArray].OP_Empleado);
            $("#V_Op_Asesor").html(ArrayCliente[itemArray].OP_Asesor);
            $("#V_Op_Otro_1").html(ArrayCliente[itemArray].Other_1);
            $("#V_Banco").html(ArrayCliente[itemArray].Other_2);

            $("#Dialog_Visualiza").dialog("option", "title", "Cliente: " + ArrayCliente[itemArray].Nombre);
        }
    }
    $("#Dialog_Visualiza").dialog("open");
}

//verifica el numero de verificacion DIAN
function Verifica() {
    $("#Txt_Ident").blur(function () {

        var DigitoVerificado = DigitoVerificacion($("#Txt_Ident").val());
        $("#TxtVerif").val(DigitoVerificado);

    });
}

//revisa si tiene informacion adicional
function ValideAnexos() {

    $('#Check_Cliente').change(function () {
    });

    $('#Check_Avaluador').change(function () {
    });

    $('#Check_Transito').change(function () {
    });

    $('#Check_Hacienda').change(function () {
    });

    $('#Check_MultiEmpresa').change(function () {
    });

    $('#Check_Empleado').change(function () {
    });

    $('#Check_Asesor').change(function () {
    });

    $('#Check_Proveedor').click(function () {
    });

    $('#Check_EntBancaria').click(function () {
        if ($(this).is(':checked')) {
            $("#Anexos").css("display", "inline-table");
            ValidatorCampos = 3;
        }
        else {
            $("#Anexos").css("display", "none");
        }
    });

}



//bloquea controles cliente
function Disabled_Client() {

    $("#Select_Documento").attr("disabled", "disabled");
    $("#Select_Pais").attr("disabled", "disabled");
    $("#Select_Ciudad").attr("disabled", "disabled");
    $("#Select_EmpresaNit").attr("disabled", "disabled");
    $("#Select_Ciudad_Doc").attr("disabled", "disabled");
    $("#Txt_Ident").attr("disabled", "disabled");
    $("#TxtVerif").attr("disabled", "disabled");
    $("#TxtNombre").attr("disabled", "disabled");
    $("#TxtNombreNit").attr("disabled", "disabled");
    $("#TxtNombre_2").attr("disabled", "disabled");
    $("#Txt_Ape_1").attr("disabled", "disabled");
    $("#Txt_Ape_2").attr("disabled", "disabled");

    $("#Select_TPersona").attr("disabled", "disabled");
    $("#Select_Regimen").attr("disabled", "disabled");

    $('.C_Chosen').trigger('chosen:updated');

}

//Des-bloquea controles cliente
function Enabled_Client() {

    $("#Select_Documento").removeAttr("disabled");
    $("#Select_Pais").removeAttr("disabled");
    $("#Select_Ciudad").removeAttr("disabled");
    $("#Select_EmpresaNit").removeAttr("disabled");
    $("#Select_Ciudad_Doc").removeAttr("disabled");
    $("#Txt_Ident").removeAttr("disabled");
    $("#TxtVerif").removeAttr("disabled");
    $("#TxtNombre").removeAttr("disabled");
    $("#TxtNombreNit").removeAttr("disabled");
    $("#TxtNombre_2").removeAttr("disabled");
    $("#Txt_Ape_1").removeAttr("disabled");
    $("#Txt_Ape_2").removeAttr("disabled");

    $("#Select_TPersona").removeAttr("disabled");
    $("#Select_Regimen").removeAttr("disabled");

    $('.C_Chosen').trigger('chosen:updated');

}