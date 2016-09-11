/*-------------------- carga ---------------------------*/
//hacemos la transaccion al code behind por medio de Ajax para cargar el droplist
function transacionAjax_CargaBusqueda(State) {
    $.ajax({
        url: "GrpDocumentosAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "tabla": 'GrpDocumentos'
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
        url: "GrpDocumentosAjax.aspx",
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
function transacionAjax_GrpDocumentosDepend(State, Index) {
    
    $.ajax({
        url: "GrpDocumentosAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "Index": Index,
            "tabla": 'GrpDocumentos'
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            if (result == "") {
                ArrayGrpDocumentosDep = [];
            }
            else {
                ArrayGrpDocumentosDep = JSON.parse(result);
                charge_CatalogList(ArrayGrpDocumentosDep, "Select_GrpDocumentosDepent", 1);
            }
        },
        error: function () {

        }
    });
}


/*-------------------- carga ---------------------------*/
//hacemos la transaccion al code behind por medio de Ajax para cargar el droplist
function transacionAjax_Seguridad(State) {
    $.ajax({
        url: "GrpDocumentosAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "tabla": 'SEGURIDAD'
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            if (result == "") {
                ArraySeguridad = [];
            }
            else {
                ArraySeguridad = JSON.parse(result);
                charge_CatalogList(ArraySeguridad, "Select_Politica", 1);
            }
        },
        error: function () {

        }
    });
}

/*------------------------------ consulta ---------------------------*/
//hacemos la transaccion al code behind por medio de Ajax
function transacionAjax_GrpDocumentos(State, filtro, opcion) {
    var contenido;

    if ($("#TxtRead").val() == "") {
        contenido = "ALL";
    }
    else {
        contenido = $("#TxtRead").val();
    }


    $.ajax({
        url: "GrpDocumentosAjax.aspx",
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
                ArrayGrpDocumentos = [];
            }
            else {
                ArrayGrpDocumentos = JSON.parse(result);
                Table_GrpDocumentos();
            }
        },
        error: function () {

        }
    });
}

/*------------------------------ crear ---------------------------*/
//hacemos la transaccion al code behind por medio de Ajax
function transacionAjax_GrpDocumentos_create(State) {

    var ID;
    var Nit_ID;
    var GrpDocumentosDepen = 0;
    var Politica = 0;

    if ($("#Select_GrpDocumentosDepent").val() != "-1")
        GrpDocumentosDepen = $("#Select_GrpDocumentosDepent").val();

    if ($("#Select_Politica").val() != "-1")
        Politica = $("#Select_Politica").val();

    if (State == "modificar") {
        Nit_ID = editNit_ID;
        ID = editID;
    }
    else {
        Nit_ID = $("#Select_EmpresaNit").val();
        ID = $("#Txt_ID").val();
    }

    $.ajax({
        url: "GrpDocumentosAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "Nit_ID": Nit_ID,
            "ID": ID,
            "descripcion": $("#TxtDescription").val(),
            "GrpDocumentosDependencia": GrpDocumentosDepen,
            "Politica": Politica,
            "user": User.toUpperCase()
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            switch (result) {

                case "Error":
                    $("#dialog").dialog("option", "title", "Disculpenos :(");
                    $("#Mensaje_alert").text("No se realizo el ingreso del GrpDocumentos!");
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
                        $("#Mensaje_alert").text("El GrpDocumentos fue modificado exitosamente! ");
                        $("#dialog").dialog("open");
                        $("#DE").css("display", "none");
                        $("#SE").css("display", "block");
                        $("#WE").css("display", "none");
                        Clear();
                    }
                    else {
                        $("#dialog").dialog("option", "title", "Exito");
                        $("#Mensaje_alert").text("El GrpDocumentos fue creado exitosamente! ");
                        $("#dialog").dialog("open");
                        $("#DE").css("display", "none");
                        $("#SE").css("display", "block");
                        $("#WE").css("display", "none");
                        transacionAjax_GrpDocumentosDepend('GrpDocumentos_Dep', index_ID);
                        Clear();
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
function transacionAjax_GrpDocumentos_delete(State) {

    $.ajax({
        url: "GrpDocumentosAjax.aspx",
        type: "POST",
        //crear json
        data: { "action": State,
            "Nit_ID": editNit_ID,
            "ID": editID,
            "user": User
        },
        //Transaccion Ajax en proceso
        success: function (result) {
            switch (result) {

                case "Error":
                    $("#dialog").dialog("option", "title", "Disculpenos :(");
                    $("#Mensaje_alert").text("No se elimino el GrpDocumentos!");
                    $("#dialog").dialog("open");
                    $("#DE").css("display", "block");
                    $("#SE").css("display", "none");
                    $("#WE").css("display", "none");
                    $("#dialog_eliminar").dialog("close");
                    break;

                case "Exist_O":
                    $("#dialog").dialog("option", "title", "Integridad referencial");
                    $("#Mensaje_alert").text("No se elimino el GrpDocumentos, para eliminarlo debe eliminar primero el registro en la tabla Empleado");
                    $("#dialog").dialog("open");
                    $("#DE").css("display", "none");
                    $("#SE").css("display", "none");
                    $("#WE").css("display", "block");
                    $("#dialog_eliminar").dialog("close");
                    break;

                case "Exito":
                    $("#dialog_eliminar").dialog("close");
                    $("#dialog").dialog("option", "title", "Exito");
                    $("#Mensaje_alert").text("El GrpDocumentos fue eliminado exitosamente! ");
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