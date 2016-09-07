var ArrayDocAutorizado = [];
var ListDocument = [];

var ArrayFoto = [];

/*---------------------------------------------------------------------------------------------------------------*/
/*                                        GRID PRINCIPAL DE DOCUMENTOS                                */
/*---------------------------------------------------------------------------------------------------------------*/

//el llamado para insertar modificar o eliminar la direcciones
function DocumentosAutorizados(Option_Document) {
    $("#Dialog_Doc_Autorizados").dialog("open");
    $("#Dialog_Doc_Autorizados").dialog("option", "title", "Documentos Autorizados de: " + $("#TxtNombre").val() + " " + $("#TxtNombre_2").val() + " " + $("#Txt_Ape_1").val() + " " + $("#Txt_Ape_2").val());

    switch (Option_Document) {
        case "Read":
            $("#Txt_Nit_Doc_A").val(D_Nit);
            $("#Txt_TypeIden_Doc_A").val(D_String_TDocumento);
            $("#Txt_Ident_Doc_A").val(D_Documento);
            $("#Txt_Nit_Doc_A_2").val(D_Nit);
            $("#Txt_TypeIden_Doc_A_2").val(D_String_TDocumento);
            $("#Txt_Ident_Doc_A_2").val(D_Documento);

            transacionAjax_allDocument('R_ead_Document', D_Nit, D_TDocumento, D_Documento, Option_Document);

            break;

        case "Default":

            var Nit_Work;

            if ($("#Select_EmpresaNit").val() == "-1")
                Nit_Work = NitAlter;
            else
                Nit_Work = $("#Select_EmpresaNit").val();

            $("#Txt_Nit_Doc_A").val(Nit_Work);
            $("#Txt_TypeIden_Doc_A").val($("#Select_Documento option:selected").text());
            $("#Txt_Ident_Doc_A").val($("#Txt_Ident").val() + "-" + $("#TxtVerif").val());
            $("#Txt_Nit_Doc_A_2").val(Nit_Work);
            $("#Txt_TypeIden_Doc_A_2").val($("#Select_Documento option:selected").text());
            $("#Txt_Ident_Doc_A_2").val($("#Txt_Ident").val() + "-" + $("#TxtVerif").val());

            transacionAjax_AllDocAtorizados('R_ead_DocAutorizados', $("#Select_EmpresaNit").val(), $("#Select_Documento").val(), $("#Txt_Ident").val(), Option_Document);
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

    for (itemArray in ArrayDocAutorizado) {
        if (ArrayDocAutorizado[itemArray].TypeDoc_ID != "") {

            switch (Opc_Link) {
                case "Read":
                    if (estado == "eliminar")
                        html += "<tr><td><select id='Select_" + ArrayDocAutorizado[itemArray].DocExist_ID + "' class='Opciones' onchange=\"Select_Option_Document(this,'" + ArrayDocAutorizado[itemArray].DocExist_ID + "','" + ArrayDocAutorizado[itemArray].Formato + "','" + ArrayDocAutorizado[itemArray].Cuenta + "');\"><option value='S'>Seleccione...</option><option value='V'>Ver</option><option value='R'>Retirar</option></select></td><td><span class='cssToolTip_ver'><a target='_blank' href='" + ArrayDocAutorizado[itemArray].RutaDocumento + ArrayDocAutorizado[itemArray].DescripDocument + "." + ArrayDocAutorizado[itemArray].DescripFormato + "'><img alt='Doc' height='20px' width='20px' src='../../images/Descarga.png'/></a><span>Ver Documento</span></span></td><td>" + ArrayDocAutorizado[itemArray].DescripDocument + "</td><td>" + ArrayDocAutorizado[itemArray].DescripFormato + "</td><td>" + ArrayDocAutorizado[itemArray].UsuarioCreacion + "</td><td>" + ArrayDocAutorizado[itemArray].FechaCreacion + "</td><td>" + ArrayDocAutorizado[itemArray].UsuarioActualizacion + "</td><td>" + ArrayDocAutorizado[itemArray].FechaActualizacion + "</td></tr>";
                    else
                        html += "<tr><td><select id='Select_" + ArrayDocAutorizado[itemArray].DocExist_ID + "' class='Opciones' onchange=\"Select_Option_Document(this,'" + ArrayDocAutorizado[itemArray].DocExist_ID + "','" + ArrayDocAutorizado[itemArray].Formato + "','" + ArrayDocAutorizado[itemArray].Cuenta + "');\"><option value='S'>Seleccione...</option><option value='V'>Ver</option></select></td><td><span class='cssToolTip_ver'><a target='_blank' href='" + ArrayDocAutorizado[itemArray].RutaDocumento + ArrayDocAutorizado[itemArray].DescripDocument + "." + ArrayDocAutorizado[itemArray].DescripFormato + "'><img alt='Doc' height='20px' width='20px' src='../../images/Descarga.png'/></a><span>Ver Documento</span></span></td><td>" + ArrayDocAutorizado[itemArray].DescripDocument + "</td><td>" + ArrayDocAutorizado[itemArray].DescripFormato + "</td><td>" + ArrayDocAutorizado[itemArray].UsuarioCreacion + "</td><td>" + ArrayDocAutorizado[itemArray].FechaCreacion + "</td><td>" + ArrayDocAutorizado[itemArray].UsuarioActualizacion + "</td><td>" + ArrayDocAutorizado[itemArray].FechaActualizacion + "</td></tr>";
                    break;

                case "Default":
                    html += "<tr><td><select id='Select_" + ArrayDocAutorizado[itemArray].DocExist_ID + "' class='Opciones' onchange=\"Select_Option_Document(this,'" + ArrayDocAutorizado[itemArray].DocExist_ID + "','" + ArrayDocAutorizado[itemArray].Formato + "','" + ArrayDocAutorizado[itemArray].Cuenta + "');\"><option value='S'>Seleccione...</option><option value='V'>Ver</option><option value='R'>Retirar</option></select></td><td><span class='cssToolTip_ver'><a target='_blank' href='" + ArrayDocAutorizado[itemArray].RutaDocumento + ArrayDocAutorizado[itemArray].DescripDocument + "." + ArrayDocAutorizado[itemArray].DescripFormato + "'><img alt='Doc' height='20px' width='20px' src='../../images/Descarga.png'/></a><span>Ver Documento</span></span></td><td>" + ArrayDocAutorizado[itemArray].DescripDocument + "</td><td>" + ArrayDocAutorizado[itemArray].DescripFormato + "</td><td>" + ArrayDocAutorizado[itemArray].UsuarioCreacion + "</td><td>" + ArrayDocAutorizado[itemArray].FechaCreacion + "</td><td>" + ArrayDocAutorizado[itemArray].UsuarioActualizacion + "</td><td>" + ArrayDocAutorizado[itemArray].FechaActualizacion + "</td></tr>";
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