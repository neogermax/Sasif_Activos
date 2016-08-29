/*-------------------- carga ---------------------------*/
//hacemos la transaccion al code behind por medio de Ajax para cargar el droplist
function transacionAjax_CargaBusqueda(State) {
    $.ajax({
        url: "ClienteAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "tabla": 'Cliente'
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            if (result == "") {
                ArrayCombo = [];
            }
            else {
                ArrayCombo = JSON.parse(result);
                charge_CatalogList(ArrayCombo, "DDLColumns", 1);
            }
        },
        error: function () {

        }
    });
}

/*-------------------- carga ---------------------------*/
//hacemos la transaccion al code behind por medio de Ajax para cargar el droplist
function transacionAjax_EmpresaNit(State) {
    $.ajax({
        url: "ClienteAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "tabla": 'CLIENTE'
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            if (result == "") {
                ArrayEmpresaNit = [];
            }
            else {
                ArrayEmpresaNit = JSON.parse(result);
                charge_CatalogList(ArrayEmpresaNit, "Select_EmpresaNit", 1);
            }
        },
        error: function () {

        }
    });
}

/*-------------------- carga ---------------------------*/
//hacemos la transaccion al code behind por medio de Ajax para cargar el droplist
function transacionAjax_EntFinan(State) {
    $.ajax({
        url: "ClienteAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "tabla": 'CLIENTE'
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            if (result == "") {
                ArrayEntfinanciera = [];
            }
            else {
                ArrayEntfinanciera = JSON.parse(result);
                charge_CatalogList(ArrayEntfinanciera, "Select_EntFinanciera", 1);
            }
        },
        error: function () {

        }
    });
}

/*-------------------- carga ---------------------------*/
//hacemos la transaccion al code behind por medio de Ajax para cargar el droplist
function transacionAjax_TCuenta(State) {
    $.ajax({
        url: "ClienteAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "tabla": 'CLIENTE'
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            if (result == "") {
                ArrayTcuenta = [];
            }
            else {
                ArrayTcuenta = JSON.parse(result);
                charge_CatalogList(ArrayTcuenta, "Select_TipoCuenta", 1);
            }
        },
        error: function () {

        }
    });
} 

/*-------------------- carga ---------------------------*/
//hacemos la transaccion al code behind por medio de Ajax para cargar el droplist
function transacionAjax_Pais(State) {
    $.ajax({
        url: "ClienteAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "tabla": 'CIUDADES'
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            if (result == "") {
                ArrayPais = [];
            }
            else {
                ArrayPais = JSON.parse(result);
                charge_CatalogList(ArrayPais, "Select_Pais", 1);
                charge_CatalogList(ArrayPais, "Select_Pais_D", 1);
            }

        },
        error: function () {

        }
    });
}

/*-------------------- carga ---------------------------*/
//hacemos la transaccion al code behind por medio de Ajax para cargar el droplist
function transacionAjax_Ciudad(State, Index) {
    $.ajax({
        url: "ClienteAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "Index": Index,
            "tabla": 'CIUDADES'
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            if (result == "") {
                ArrayCiudades = [];
            }
            else {
                ArrayCiudades = JSON.parse(result);
                charge_CatalogList(ArrayCiudades, "Select_Ciudad", 1);
                charge_CatalogList(ArrayCiudades, "Select_Ciudad_Doc", 1);
            }
        },
        error: function () {

        }
    });
}

/*-------------------- carga ---------------------------*/
//hacemos la transaccion al code behind por medio de Ajax para cargar el droplist
function transacionAjax_Ciudad_D(State, Index) {
    $.ajax({
        url: "ClienteAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "Index": Index,
            "tabla": 'CIUDADES'
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            if (result == "") {
                ArrayCiudades_D = [];
            }
            else {
                ArrayCiudades_D = JSON.parse(result);
                charge_CatalogList(ArrayCiudades_D, "Select_Ciudad_D", 1);
            }
        },
        error: function () {

        }
    });
}


/*-------------------- carga ---------------------------*/
//hacemos la transaccion al code behind por medio de Ajax para cargar el droplist
function transacionAjax_Documento(State) {
    $.ajax({
        url: "ClienteAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "tabla": 'IMPUESTO_GASTO'
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            if (result == "") {
                ArrayImpuesto_Gasto = [];
            }
            else {
                ArrayImpuesto_Gasto = JSON.parse(result);
                charge_CatalogList(ArrayImpuesto_Gasto, "Select_Documento", 1);
            }
        },
        error: function () {

        }
    });
}
/*------------------------------ consulta ---------------------------*/
//hacemos la transaccion al code behind por medio de Ajax
function transacionAjax_Cliente(State, filtro, opcion) {
    var contenido;

    if ($("#TxtRead").val() == "") {
        contenido = "ALL";
    }
    else {
        contenido = $("#TxtRead").val();
    }


    $.ajax({
        url: "ClienteAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "filtro": filtro,
            "opcion": opcion,
            "contenido": contenido
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            if (result == "") {
                ArrayCliente = [];
            }
            else {
                ArrayCliente = JSON.parse(result);
                Table_Cliente();
            }
        },
        error: function () {

        }
    });
}

/*------------------------------ crear ---------------------------*/
//hacemos la transaccion al code behind por medio de Ajax
function transacionAjax_Cliente_create(State) {

    var ID_N;
    var ID_TD;
    var ID_D;
    var capture_Nit;
    var CodBank = 0;

    if ($("#Txt_CodBank").val() != "")
        CodBank = $("#Txt_CodBank").val();

    if (State == "modificar") {
        ID_N = editNit_ID;
        ID_TD = editType_Document_ID;
        ID_D = editDocument_ID;
    }
    else {
        $("#Complementos").css("display", "inline-table");
        var StrID = $("#Select_EmpresaNit").val();
        var SplitID = StrID.split("_");

        ID_N = SplitID[0];
        ID_TD = $("#Select_Documento").val();
        ID_D = $("#Txt_Ident").val();
    }


    $.ajax({
        url: "ClienteAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "Nit_ID": ID_N,
            "TypeDocument_ID": ID_TD,
            "Document_ID": ID_D,
            "Digito_Verificacion": $("#TxtVerif").val(),
            "Nombre": $("#TxtNombre").val(),
            "Nombre_2": $("#TxtNombre_2").val(),
            "Ape_1": $("#Txt_Ape_1").val(),
            "Ape_2": $("#Txt_Ape_2").val(),
            "Pais_ID": $("#Select_Pais").val(),
            "Ciudad_ID": $("#Select_Ciudad").val(),
            "OP_Cliente": $("#Select_Cliente").val(),
            "OP_Avaluador": $("#Select_Avaluador").val(),
            "OP_Transito": $("#Select_Transito").val(),
            "OP_Hacienda": $("#Select_Hacienda").val(),
            "OP_Empresa": $("#Select_MultiEmp").val(),
            "OP_Empleado": $("#Select_Empleado").val(),
            "OP_Asesor": $("#Select_Asesor").val(),
            "Other_1": $("#Select_Other_1").val(),
            "Other_2": $("#Select_Banco").val(),
            "CodBank": CodBank,
            "CiuDoc": $("#Select_Ciudad_Doc").val(),
            "user": User.toUpperCase()
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            switch (result) {

                case "Error":
                    $("#dialog").dialog("option", "title", "Disculpenos :(");
                    $("#Mensaje_alert").text("No se realizo el ingreso del Cliente!");
                    $("#dialog").dialog("open");
                    $("#DE").css("display", "block");
                    $("#SE").css("display", "none");
                    $("#WE").css("display", "none");
                    break;

                case "Existe":
                    $("#dialog").dialog("option", "title", "Ya Existe");
                    $("#Mensaje_alert").text("El codigo ingresado ya existe en la base de datos!");
                    $("#dialog").dialog("open");
                    $("#DE").css("display", "None");
                    $("#SE").css("display", "none");
                    $("#WE").css("display", "block");
                    break;

                case "Exito":
                    if (estado == "modificar") {
                        $("#dialog").dialog("option", "title", "Exito");
                        $("#Mensaje_alert").text("El Cliente fue modificado exitosamente! ");
                        $("#dialog").dialog("open");
                        $("#DE").css("display", "none");
                        $("#SE").css("display", "block");
                        $("#WE").css("display", "none");

                        NitAlter = $("#Select_EmpresaNit").val();
                        ArrayEmpresaNit = [];
                        transacionAjax_EmpresaNit('Cliente');
                    }
                    else {
                        $("#dialog").dialog("option", "title", "Exito");
                        $("#Mensaje_alert").text("El Cliente fue creado exitosamente! ");
                        $("#dialog").dialog("open");
                        $("#DE").css("display", "none");
                        $("#SE").css("display", "block");
                        $("#WE").css("display", "none");

                        NitAlter = $("#Select_EmpresaNit").val();
                        ArrayEmpresaNit = [];
                        transacionAjax_EmpresaNit('Cliente');
                        Disabled_Client();
                    }
                    break;
            }

        },
        error: function () {

        }
    });
}

/*------------------------------ eliminar ---------------------------*/
//hacemos la transaccion al code behind por medio de Ajax
function transacionAjax_Cliente_delete(State) {

    $.ajax({
        url: "ClienteAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "Nit_ID": editNit_ID,
            "TypeDocument_ID": editType_Document_ID,
            "Document_ID": editDocument_ID,
            "user": User.toUpperCase()
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            switch (result) {

                case "Error":
                    $("#dialog").dialog("option", "title", "Disculpenos :(");
                    $("#Mensaje_alert").text("No se elimino el Cliente!");
                    $("#dialog").dialog("open");
                    $("#DE").css("display", "block");
                    $("#SE").css("display", "none");
                    $("#WE").css("display", "none");
                    $("#dialog_eliminar").dialog("close");
                    break;

                case "Exist_O":
                    $("#dialog").dialog("option", "title", "Integridad referencial");
                    $("#Mensaje_alert").text("No se elimino el Cliente, para eliminarlo debe eliminar primero el registro en la tabla Empleado");
                    $("#dialog").dialog("open");
                    $("#DE").css("display", "none");
                    $("#SE").css("display", "none");
                    $("#WE").css("display", "block");
                    $("#dialog_eliminar").dialog("close");
                    break;

                case "Exito":
                    $("#dialog_eliminar").dialog("close");
                    $("#dialog").dialog("option", "title", "Exito");
                    $("#Mensaje_alert").text("El Cliente fue eliminado exitosamente! ");
                    $("#dialog").dialog("open");
                    $("#DE").css("display", "none");
                    $("#SE").css("display", "block");
                    $("#WE").css("display", "none");
                    $("#dialog_eliminar").dialog("close");
                    Clear();
                    break;
            }

        },
        error: function () {

        }
    });

}


/*---------------------------------------------------------------------------------------------------------------*/
/*                                        AJAX DE DIRECCIONES                                                                       */
/*---------------------------------------------------------------------------------------------------------------*/

/*------------------------------ CONSULTA ---------------------------*/
//trae todas las direcciones ancladas al cliente escojido
//hacemos la transaccion al code behind por medio de Ajax
function transacionAjax_allAdress(State, Nit, TypeDoc, Doc, Opc_Link) {

    ArrayDirecciones = [];

    $.ajax({
        url: "ClienteAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "Nit": Nit,
            "TypeDoc": TypeDoc,
            "Doc": Doc
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            if (result == "") {
                ArrayDirecciones = [];
            }
            else {
                ArrayDirecciones = JSON.parse(result);
                Tabla_General(Opc_Link);
            }
        },
        error: function () {

        }
    });
}

/*------------------------------ crear direcciones---------------------------*/
//hacemos la transaccion al code behind por medio de Ajax
function transacionAjax_Adress_create(State, Nit, TypeDoc, Doc) {

    ListDirecciones = JSON.stringify(ArrayDirecciones);

    $.ajax({
        url: "ClienteAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "Nit": Nit,
            "TypeDoc": TypeDoc,
            "Doc": Doc,
            "ListDirecciones": ListDirecciones,
            "user": User.toUpperCase()
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            switch (result) {

                case "ERROR":
                    $("#dialog").dialog("option", "title", "Disculpenos :(");
                    $("#Mensaje_alert").text("No se realizo el ingreso de las direcciones!");
                    $("#dialog").dialog("open");
                    $("#DE").css("display", "block");
                    $("#SE").css("display", "none");
                    $("#WE").css("display", "none");
                    break;

                case "CREO":

                    $("#dialog").dialog("option", "title", "Exito");
                    $("#Mensaje_alert").text("las direcciones fueron agregadas exitosamente! ");
                    $("#dialog").dialog("open");
                    $("#DE").css("display", "none");
                    $("#SE").css("display", "block");
                    $("#WE").css("display", "none");
                    $("#Dialog_Direcciones").dialog("close");
                    break;
            }

        },
        error: function () {

        }
    });
}

/*---------------------------------------------------------------------------------------------------------------*/
/*                                        AJAX DE ENTIDADES FINANCIERAS                                          */
/*---------------------------------------------------------------------------------------------------------------*/

/*------------------------------ CONSULTA ---------------------------*/
//trae todas las entidades financieras ancladas al cliente escojido
//hacemos la transaccion al code behind por medio de Ajax
function transacionAjax_allBank(State, Nit, TypeDoc, Doc, Opc_Link) {

    ArrayBancos = [];

    $.ajax({
        url: "ClienteAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "Nit": Nit,
            "TypeDoc": TypeDoc,
            "Doc": Doc
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            if (result == "") {
                ArrayBancos = [];
            }
            else {
                ArrayBancos = JSON.parse(result);
                Tabla_General_Bank(Opc_Link);
            }
        },
        error: function () {

        }
    });
}

/*------------------------------ crear direcciones---------------------------*/
//hacemos la transaccion al code behind por medio de Ajax
function transacionAjax_Bank_create(State, Nit, TypeDoc, Doc) {

    ListBancos = JSON.stringify(ArrayBancos);

    $.ajax({
        url: "ClienteAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "Nit": Nit,
            "TypeDoc": TypeDoc,
            "Doc": Doc,
            "ListBancos": ListBancos,
            "user": User.toUpperCase()
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            switch (result) {

                case "ERROR":
                    $("#dialog").dialog("option", "title", "Disculpenos :(");
                    $("#Mensaje_alert").text("No se realizo el ingreso de las Entidades financieras!");
                    $("#dialog").dialog("open");
                    $("#DE").css("display", "block");
                    $("#SE").css("display", "none");
                    $("#WE").css("display", "none");
                    break;

                case "CREO":

                    $("#dialog").dialog("option", "title", "Exito");
                    $("#Mensaje_alert").text("las Entidades Finacieras fueron agregadas exitosamente! ");
                    $("#dialog").dialog("open");
                    $("#DE").css("display", "none");
                    $("#SE").css("display", "block");
                    $("#WE").css("display", "none");
                    $("#Dialog_Direcciones").dialog("close");
                    break;
            }

        },
        error: function () {

        }
    });
}
