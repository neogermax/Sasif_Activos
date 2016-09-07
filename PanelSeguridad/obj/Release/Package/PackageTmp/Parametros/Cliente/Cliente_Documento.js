var ArrayDocument = [];
var ListDocument = [];

var ArrayFoto = [];

/*---------------------------------------------------------------------------------------------------------------*/
/*                                        GRID PRINCIPAL DE DOCUMENTOS                                */
/*---------------------------------------------------------------------------------------------------------------*/

//el llamado para insertar modificar o eliminar la direcciones
function Documentos(Option_Document) {
    $("#Dialog_Documentos").dialog("open");
    $("#Dialog_Documentos").dialog("option", "title", "Documentos de: " + $("#TxtNombre").val() + " " + $("#TxtNombre_2").val() + " " + $("#Txt_Ape_1").val() + " " + $("#Txt_Ape_2").val());

    switch (Option_Document) {
        case "Read":
            $("#Txt_Nit_Doc").val(D_Nit);
            $("#Txt_TypeIden_Doc").val(D_String_TDocumento);
            $("#Txt_Ident_Doc").val(D_Documento);
            $("#Txt_Nit_Doc_2").val(D_Nit);
            $("#Txt_TypeIden_Doc_2").val(D_String_TDocumento);
            $("#Txt_Ident_Doc_2").val(D_Documento);

            transacionAjax_allDocument('R_ead_Document', D_Nit, D_TDocumento, D_Documento, Option_Document);

            break;

        case "Default":

            var Nit_Work;

            if ($("#Select_EmpresaNit").val() == "-1")
                Nit_Work = NitAlter;
            else
                Nit_Work = $("#Select_EmpresaNit").val();

            $("#Txt_Nit_Doc").val(Nit_Work);
            $("#Txt_TypeIden_Doc").val($("#Select_Documento option:selected").text());
            $("#Txt_Ident_Doc").val($("#Txt_Ident").val() + "-" + $("#TxtVerif").val());
            $("#Txt_Nit_Doc_2").val(Nit_Work);
            $("#Txt_TypeIden_Doc_2").val($("#Select_Documento option:selected").text());
            $("#Txt_Ident_Doc_2").val($("#Txt_Ident").val() + "-" + $("#TxtVerif").val());

            transacionAjax_allDocument('R_ead_Document', $("#Select_EmpresaNit").val(), $("#Select_Documento").val(), $("#Txt_Ident").val(), Option_Document);
            break;
    }
}


//grid Documentos cliente
function Tabla_General_Document(Opc_Link) {
    var html = "";
    var contador = 0;

    switch (Opc_Link) {
        case "Read":
            html = "<table id='TDocument' border='1' cellpadding='1' cellspacing='1'  style='width: 100%; margin-top: 20px;'><thead><tr><th>Opciones</th><th>Ver o Descargar</th><th>Documento</th><th>Formato</th><th>Usuario Creación</th><th>Fecha Creación</th><th>Ultimo Usuario</th><th>Fecha Ultima Modificación</th></tr></thead><tbody>";
            break;

        case "Default":
            html = "<table id='TDocument' border='1' cellpadding='1' cellspacing='1'  style='width: 100%; margin-top: 20px;'><thead><tr><th>Opciones <span class='cssToolTip_ver'><img alt='Document' class='AddDocument' onclick=\"AddDocument()\" id='Crear' height='20px' width='20px' src='../../images/add.png' /><span>Agregar Nuevo Documento</span></span></th><th>Ver o Descargar</th><th>Documento</th><th>Formato</th><th>Usuario Creación</th><th>Fecha Creación</th><th>Ultimo Usuario</th><th>Fecha Ultima Modificación</th></tr></thead><tbody>";
            break;
    }

    for (itemArray in ArrayDocument) {
        if (ArrayDocument[itemArray].TypeDoc_ID != "") {

            switch (Opc_Link) {
                case "Read":
                    if (estado == "eliminar")
                        html += "<tr><td><select id='Select_" + ArrayDocument[itemArray].DocExist_ID + "' class='Opciones' onchange=\"Select_Option_Document(this,'" + ArrayDocument[itemArray].DocExist_ID + "','" + ArrayDocument[itemArray].Formato + "','" + ArrayDocument[itemArray].Cuenta + "');\"><option value='S'>Seleccione...</option><option value='V'>Ver</option><option value='R'>Retirar</option></select></td><td><span class='cssToolTip_ver'><a target='_blank' href='" + ArrayDocument[itemArray].RutaDocumento + ArrayDocument[itemArray].DescripDocument + "." + ArrayDocument[itemArray].DescripFormato + "'><img alt='Doc' height='20px' width='20px' src='../../images/Descarga.png'/></a><span>Ver Documento</span></span></td><td>" + ArrayDocument[itemArray].DescripDocument + "</td><td>" + ArrayDocument[itemArray].DescripFormato + "</td><td>" + ArrayDocument[itemArray].UsuarioCreacion + "</td><td>" + ArrayDocument[itemArray].FechaCreacion + "</td><td>" + ArrayDocument[itemArray].UsuarioActualizacion + "</td><td>" + ArrayDocument[itemArray].FechaActualizacion + "</td></tr>";
                    else
                        html += "<tr><td><select id='Select_" + ArrayDocument[itemArray].DocExist_ID + "' class='Opciones' onchange=\"Select_Option_Document(this,'" + ArrayDocument[itemArray].DocExist_ID + "','" + ArrayDocument[itemArray].Formato + "','" + ArrayDocument[itemArray].Cuenta + "');\"><option value='S'>Seleccione...</option><option value='V'>Ver</option></select></td><td><span class='cssToolTip_ver'><a target='_blank' href='" + ArrayDocument[itemArray].RutaDocumento + ArrayDocument[itemArray].DescripDocument + "." + ArrayDocument[itemArray].DescripFormato + "'><img alt='Doc' height='20px' width='20px' src='../../images/Descarga.png'/></a><span>Ver Documento</span></span></td><td>" + ArrayDocument[itemArray].DescripDocument + "</td><td>" + ArrayDocument[itemArray].DescripFormato + "</td><td>" + ArrayDocument[itemArray].UsuarioCreacion + "</td><td>" + ArrayDocument[itemArray].FechaCreacion + "</td><td>" + ArrayDocument[itemArray].UsuarioActualizacion + "</td><td>" + ArrayDocument[itemArray].FechaActualizacion + "</td></tr>";
                    break;

                case "Default":
                    html += "<tr><td><select id='Select_" + ArrayDocument[itemArray].DocExist_ID + "' class='Opciones' onchange=\"Select_Option_Document(this,'" + ArrayDocument[itemArray].DocExist_ID + "','" + ArrayDocument[itemArray].Formato + "','" + ArrayDocument[itemArray].Cuenta + "');\"><option value='S'>Seleccione...</option><option value='V'>Ver</option><option value='R'>Retirar</option></select></td><td><span class='cssToolTip_ver'><a target='_blank' href='" + ArrayDocument[itemArray].RutaDocumento + ArrayDocument[itemArray].DescripDocument + "." + ArrayDocument[itemArray].DescripFormato + "'><img alt='Doc' height='20px' width='20px' src='../../images/Descarga.png'/></a><span>Ver Documento</span></span></td><td>" + ArrayDocument[itemArray].DescripDocument + "</td><td>" + ArrayDocument[itemArray].DescripFormato + "</td><td>" + ArrayDocument[itemArray].UsuarioCreacion + "</td><td>" + ArrayDocument[itemArray].FechaCreacion + "</td><td>" + ArrayDocument[itemArray].UsuarioActualizacion + "</td><td>" + ArrayDocument[itemArray].FechaActualizacion + "</td></tr>";
                    break;
            }

        }
        contador += 1;
    }

    html += "</tbody></table>";
    $("#container_Document").html("");
    $("#container_Document").html(html);

    $(".AddDocument").click(function () {
    });

    $("#TDocument").dataTable({
        "iDisplayLength": -1,
        "aaSorting": [[1, "asc"]],
        "bJQueryUI": true, "iDisplayLength": 1000,
        "bDestroy": true
    });
}

/*---------------------------------------------------------------------------------------------------------------*/
/*                      CASOS DE LLAMADO SEGUN LA OPERACION DE DOCUMENTOS                             */
/*---------------------------------------------------------------------------------------------------------------*/
//llamado del boton agregar o eliminar Entidad Financiera
function InsertAddDocument() {

    var validate;
    validate = ValidaDocumentos();

    if (validate == 0) {
        switch ($("#BtnAddDocument").val()) {

            case "Agregar":
                var validateRepetido = Repetido();
                if (validateRepetido == 0) {
                    Add_Array_Document();
                }
                else {
                    $("#dialog").dialog("option", "title", "Atención!");
                    $("#Mensaje_alert").text("la Entidad ya fue agregada!");
                    $("#dialog").dialog("open");
                    $("#DE").css("display", "none");
                    $("#SE").css("display", "none");
                    $("#WE").css("display", "block");
                }

                break;

            case "Eliminar":
                $("#Dialog_Delete_Document").dialog("open");
                break;

            case "Salir":
                ReadView_Document();
                break;
        }
    }
}

//selecciona que tipo de operacion desea con el registro seleccionado
function Select_Option_Document(Select_control, Nit_Document, TC_Document, Cuenta_Document) {
    var Select_Value = $(Select_control).val();

    switch (Select_Value) {

        case "V": //visualizar
            ReadDocument(Nit_Document, TC_Document, Cuenta_Document);
            Disabled_Document();
            break;

        case "R": //eliminar
            DeleteDocument(Nit_Document, TC_Document, Cuenta_Document);
            Disabled_Document();
            break;
    }

}


/*---------------------------------------------------------------------------------------------------------------*/
/*                                        CREAR DE DOCUMENTOS                                                                       */
/*---------------------------------------------------------------------------------------------------------------*/

//funcion que abre la ventana para la creacion de direccion
function AddDocument() {
    ClearDocument();
    Enabled_Document();
    $("#Dialog_C_R_U_D_Document").dialog("open");
    $("#Dialog_C_R_U_D_Document").dialog("option", "title", "Nueva Entidad Financiera de: " + $("#TxtNombre").val() + " " + $("#TxtNombre_2").val() + " " + $("#Txt_Ape_1").val() + " " + $("#Txt_Ape_2").val());
    $("#BtnAddDocument").attr("value", "Agregar");
}

//agrega al array de direcciones los datos diligenciados
function Add_Array_Document() {

    var Json_Document = Convert_and_Valide_Json_Document();
    ArrayDocument.push(Json_Document);
    Tabla_General_Document('Default');

    $("#dialog").dialog("option", "title", "Exito");
    $("#Mensaje_alert").text("la Nueva Entidad Financiera fue agregada!");
    $("#dialog").dialog("open");
    $("#DE").css("display", "none");
    $("#SE").css("display", "block");
    $("#WE").css("display", "none");
    $("#Dialog_C_R_U_D_Document").dialog("close");
    ClearDocument();

}

/*---------------------------------------------------------------------------------------------------------------*/
/*                                        ELIMINAR ENTIDAD FINANCIERA                                            */
/*---------------------------------------------------------------------------------------------------------------*/

//funcion que abre la ventana para la Eliminacion de direccion
function DeleteDocument(Nit_Document, TC_Document, Cuenta_Document) {

    $("#Dialog_C_R_U_D_Document").dialog("open");
    $("#Dialog_C_R_U_D_Document").dialog("option", "title", "Retirar Entidad Financiera de: " + +$("#TxtNombre").val() + " " + $("#TxtNombre_2").val() + " " + $("#Txt_Ape_1").val() + " " + $("#Txt_Ape_2").val());
    $("#BtnAddDocument").attr("value", "Eliminar");

    Search_Document(Nit_Document, TC_Document, Cuenta_Document);
    Delete_Document(Nit_Document, TC_Document, Cuenta_Document);
}

// CONFIRMA SI SE ELIMINA EL REGISTRO
function Confirm_Document(Confirm) {
    if (Confirm == 'N') {
        RestoreDelete_Array_Document();
    }
    else {
        $("#dialog").dialog("option", "title", "Exito");
        $("#Mensaje_alert").text("la Entidad Financiera fue Retirada!");
        $("#dialog").dialog("open");
        $("#DE").css("display", "none");
        $("#SE").css("display", "block");
        $("#WE").css("display", "none");
        $("#Dialog_C_R_U_D_Document").dialog("close");
        $("#Dialog_Delete_Document").dialog("close");

        for (itemArray in ArrayDirecciones) {
            ArrayDirecciones[itemArray].Consecutivo = parseInt(itemArray) + 1;
        }

        Tabla_General_Document('Default');
        ClearDocument();

    }
}

//Restaura la eliminacion al array de direcciones los datos diligenciados
function RestoreDelete_Array_Document() {

    var Json_Document = Convert_and_Valide_Json_Document();
    ArrayDocument.push(Json_Document);

    $("#Dialog_Delete_Document").dialog("close");
    $("#Dialog_C_R_U_D_Document").dialog("close");
    Tabla_General_Document("Default");
    ClearDocument();

}

/*---------------------------------------------------------------------------------------------------------------*/
/*                                        LEER DE DOCUMENTOS                                          */
/*---------------------------------------------------------------------------------------------------------------*/

//funcion que abre la ventana para la Actualizacion de direccion
function ReadDocument(Nit_Document, TC_Document, Cuenta_Document) {

    $("#Dialog_C_R_U_D_Document").dialog("open");
    $("#Dialog_C_R_U_D_Document").dialog("option", "title", "Entidad Financiera de: " + $("#TxtNombre").val() + " " + $("#TxtNombre_2").val() + " " + $("#Txt_Ape_1").val() + " " + $("#Txt_Ape_2").val());
    $("#BtnAddDocument").attr("value", "Salir");

    Search_Document(Nit_Document, TC_Document, Cuenta_Document);
}

//CIERRA LA VENTANA EMERGENTE
function ReadView_Document() {
    $("#Dialog_C_R_U_D_Document").dialog("close");
}

/*---------------------------------------------------------------------------------------------------------------*/
/*                           FUNCIONES COMPLEMETARIAS DEL CRUD                                                                      */
/*---------------------------------------------------------------------------------------------------------------*/

//funcion que captura la direccion y la comvierte en un Json
function Convert_and_Valide_Json_Document() {

    var strTD = $("#Txt_TypeIden_Doc_2").val();
    var SplitTD = strTD.split(" - ");

    var strD = $("#Txt_Ident_Doc_2").val();
    var SplitD = strD.split("-");

    var strEntF = $("#Select_EntFinanciera option:selected").html();
    var SplitEntF = strEntF.split(" - ");

    var strTC = $("#Select_Formato option:selected").html();
    var SplitTC = strTC.split(" - ");

    var Json_Document = {
        "Nit_ID": $("#Txt_Nit_Doc_2").val(),
        "TypeDocument_ID": SplitTD[0],
        "Document_ID": SplitD[0],
        "DocExist_ID": SplitEntF[0],
        "TypeDocExist_ID": SplitEntF[1],
        "DescripEntidad": SplitEntF[2],
        "Formato": SplitTC[0],
        "DescripDocument": SplitTC[1],
        "Cuenta": $("#TxtCuenta").val().toUpperCase(),
        "UsuarioCreacion": User.toUpperCase(),
        "UsuarioActualizacion": User.toUpperCase(),
        "FechaCreacion": $("#Hours").html(),
        "FechaActualizacion": $("#Hours").html()
    }

    return Json_Document;
}

//busca los datos por el banco seleccionado
function Search_Document(Nit_Document, TC_Document, Cuenta_Document) {

    for (itemArray in ArrayDocument) {
        if (ArrayDocument[itemArray].DocExist_ID == Nit_Document && ArrayDocument[itemArray].Formato == TC_Document && ArrayDocument[itemArray].Cuenta == Cuenta_Document) {

            $("#Select_EntFinanciera").val(ArrayDocument[itemArray].DocExist_ID);
            $("#Select_Formato").val(ArrayDocument[itemArray].Formato);
            $("#TxtCuenta").val(ArrayDocument[itemArray].Cuenta);

            $('.C_Chosen').trigger('chosen:updated');
        }
    }
}

//elimina del array el dato seleccionado
function Delete_Document(Nit_Document, TC_Document, Cuenta_Document) {
    for (itemArray in ArrayDocument) {
        if (ArrayDocument[itemArray].DocExist_ID == Nit_Document && ArrayDocument[itemArray].Formato == TC_Document && ArrayDocument[itemArray].Cuenta == Cuenta_Document) {
            ArrayDocument.splice(itemArray, 1);
        }
    }
}

/*---------------------------------------------------------------------------------------------------------------*/
/*                           FUNCIONES VALIDACION  Y LIMPIEZA DE CAMPOS                                                                      */
/*---------------------------------------------------------------------------------------------------------------*/

//valida si la entidad ya fue registrada en la grilla
function Repetido() {

    var Campo_1 = $("#Select_EntFinanciera").val();
    var Campo_2 = $("#Select_Formato").val();
    var Campo_3 = $("#TxtCuenta").val();
    var validar = 0;

    for (item in ArrayDocument) {
        if (Campo_1 == ArrayDocument[item].DocExist_ID && Campo_2 == ArrayDocument[item].Formato && Campo_3 == ArrayDocument[item].Cuenta)
            validar = 1;
    }

    return validar;
}

//valida campos minimos para crear una direccion
function ValidaDocumentos() {

    var Campo_1 = $("#Select_EntFinanciera").val();
    var Campo_2 = $("#Select_Formato").val();
    var Campo_3 = $("#TxtCuenta").val();

    var validar = 0;

    if (Campo_3 == "" || Campo_2 == "-1" || Campo_1 == "-1") {
        validar = 1;
        if (Campo_1 == "-1")
            $("#Img6").css("display", "inline-table");
        else
            $("#Img6").css("display", "none");

        if (Campo_2 == "-1")
            $("#Img7").css("display", "inline-table");
        else
            $("#Img7").css("display", "none");

        if (Campo_3 == "")
            $("#Img8").css("display", "inline-table");
        else
            $("#Img8").css("display", "none");
    }
    else {
        $("#Img6").css("display", "none");
        $("#Img7").css("display", "none");
        $("#Img8").css("display", "none");
    }
    return validar;
}

//limpiar campos de Entidades finacieras
function ClearDocument() {
    $("#Select_EntFinanciera").val("-1");
    $("#Select_Formato").val("-1");
    $("#TxtCuenta").val("");

    $('.C_Chosen').trigger('chosen:updated');

}

//bloquear campos de Entidades finacieras
function Disabled_Document() {

    $("#Select_EntFinanciera").attr("disabled", "disabled");
    $("#Select_Formato").attr("disabled", "disabled");
    $("#TxtCuenta").attr("disabled", "disabled");

    $('.C_Chosen').trigger('chosen:updated')
}

//desbloquear campos de Entidades finacieras
function Enabled_Document() {

    $("#Select_EntFinanciera").removeAttr("disabled");
    $("#Select_Formato").removeAttr("disabled");
    $("#TxtCuenta").removeAttr("disabled");

    $('.C_Chosen').trigger('chosen:updated');
}


//llamado para el guardar el array de direcciones
function BtnSave_Document_Client() {
    transacionAjax_Document_create('Create_Document', D_Nit, D_TDocumento, D_Documento);
}


//arma la ruta del documento y lo muestra
function SearchDocument(Ruta, Nombre, Ext) {
    var Link_Download = Ruta + Nombre + "." + Ext;
}

//
function ViewFoto() {
    var StrSrc;

    if (ArrayFoto.length != 0) {
        StrSrc = ArrayFoto[0].RutaDocumento + ArrayFoto[0].DescripDocument + '.' + ArrayFoto[0].DescripFormato;
    }
    else {
        StrSrc = "../../images/avatar.png";
    }

    $("#Imgfoto").attr("src", StrSrc);

}