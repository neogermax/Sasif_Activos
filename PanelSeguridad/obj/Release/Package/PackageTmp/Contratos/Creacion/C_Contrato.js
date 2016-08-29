/*--------------- region de variables globales --------------------*/
var ArrayC_Contrato = [];
var ArrayMoneda = [];
var ArrayEmpresaNit = [];
var Array_Hijo_Cliente = [];
var ArrayEstado = [];

var ID;

/*--------------- region de variables globales --------------------*/

//evento load de los Links
$(document).ready(function () {

    $("#Select_EmpresaNit").combobox();
    $("#Select_H_Cliente").combobox();
    $("#Select_Moneda").combobox();
    $("#Select_Estado").combobox();

    transacionAjax_EmpresaNit('Cliente')
    $('#Select_EmpresaNit').siblings('.ui-combobox').find('.ui-autocomplete-input').val('Seleccione...');

    transacionAjax_Estado('Estado');
    $('#Select_Estado').siblings('.ui-combobox').find('.ui-autocomplete-input').val('Seleccione...');

    transacionAjax_Moneda('Moneda');
    $('#Select_Moneda').siblings('.ui-combobox').find('.ui-autocomplete-input').val('Seleccione...');

    $("#Img7").css("display", "none");
    $("#Img6").css("display", "none");
    $("#Img5").css("display", "none");
    $("#Img3").css("display", "none");
    $("#Img2").css("display", "none");
    $("#Img1").css("display", "none");
    $("#DE").css("display", "none");
    $("#SE").css("display", "none");
    $("#WE").css("display", "none");

    //funcion para las ventanas emergentes
    $("#dialog").dialog({
        autoOpen: false
    });

    $("#dialog_eliminar").dialog({
        autoOpen: false
    });

    $('.solo-numero').keyup(function () {
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });

    $('.Numeric_letter').keyup(function () {
        this.value = (this.value + '').replace(/[^0-9a-zA-Z]/g, '');
    });

    $("#Dialog_Activos").dialog({
        autoOpen: false,
        dialogClass: "Dialog_Sasif",
        modal: true,
        width: 1100,
        height: 620,
        overlay: {
            opacity: 0.5,
            background: "black"
        }
    });

    $("#T_Activo_Grid").dataTable({
        "bJQueryUI": true, "iDisplayLength": 1000,
        "bDestroy": true
    });

    Change_Select_Nit();
    Change_Select_Estado();
    Change_Select_Moneda();

});

//salida del formulario
function btnSalir() {
    window.location = "../../Menu/menu.aspx?User=" + $("#User").html() + "&L_L=" + Link;
}

//carga el combo de clientes hijo
function Change_Select_Nit() {
    $("#Select_EmpresaNit").change(function () {
        var TD_ID = this.value;
        transacionAjax_Hijo_Cliente('Hijo_Cliente', TD_ID);
        $('#Select_H_Cliente').siblings('.ui-combobox').find('.ui-autocomplete-input').val('Seleccione...');

        var Str_Empresa = $("#Select_EmpresaNit option:selected").html();
        var SplitEmpresa = Str_Empresa.split(" - ");
        $("#Td_Empresa_ID").html(SplitEmpresa[0]);
        $("#Td_Empresa_Descrip").html(SplitEmpresa[1]);
    });
}

//carga las vistas del hijo cliente
function Change_Select_H_Cliente() {
    $("#Select_H_Cliente").change(function () {
        var Str_H_cliente = $("#Select_H_Cliente option:selected").html();
        var SplitCliente = Str_H_cliente.split(" - ");
        $("#Td_TD").html(SplitCliente[0]);
        $("#Td_D").html(dinner_format_grid(SplitCliente[1], "0"));
        $("#Td_NameClient").html(SplitCliente[2]);
    });
}

//carga las vistas del estado
function Change_Select_Estado() {
    $("#Select_Estado").change(function () {
        var Str_Estado = $("#Select_Estado option:selected").html();
        var SplitEstado = Str_Estado.split(" - ");
        $("#Td_Estado_ID").html(SplitEstado[0]);
        $("#Td_Estado_Descrip").html(SplitEstado[1]);
    });
}

//carga las vistas del estado
function Change_Select_Moneda() {
    $("#Select_Moneda").change(function () {
        var Str_Moneda = $("#Select_Moneda option:selected").html();
        var SplitMoneda = Str_Moneda.split(" - ");
        $("#Td_Moneda_ID").html(SplitMoneda[0]);
        $("#Td_Moneda_Descrip").html(SplitMoneda[1]);
    });
}


//crear link en la BD
function BtnCrear() {
    var validate;
    validate = validarCamposCrear();

    if (validate == 0) {
        transacionAjax_C_Contrato_create("crear");
    }
}

//validamos campos para la creacion del link
function validarCamposCrear() {

    var Campo_1 = $("#Select_EmpresaNit").val();
    var Campo_2 = $("#Txt_ID").val();
    var Campo_3 = $("#TxtDescripcion").val();
    var Campo_4 = $("#Select_H_Cliente").val();
    var Campo_5 = $("#Select_Estado").val();
    var Campo_6 = $("#Select_Moneda").val();

    var validar = 0;

    if (Campo_6 == "-1" || Campo_5 == "-1" || Campo_4 == "-1" || Campo_3 == "" || Campo_2 == "" || Campo_1 == "-1") {
        validar = 1;
        if (Campo_1 == "-1") {
            $("#Img1").css("display", "inline-table");
        }
        else {
            $("#Img1").css("display", "none");
        }
        if (Campo_2 == "") {
            $("#Img2").css("display", "inline-table");
        }
        else {
            $("#Img2").css("display", "none");
        }
        if (Campo_3 == "") {
            $("#Img3").css("display", "inline-table");
        }
        else {
            $("#Img3").css("display", "none");
        }
        if (Campo_4 == "-1") {
            $("#Img5").css("display", "inline-table");
        }
        else {
            $("#Img5").css("display", "none");
        }
        if (Campo_5 == "-1") {
            $("#Img6").css("display", "inline-table");
        }
        else {
            $("#Img6").css("display", "none");
        }
        if (Campo_6 == "-1") {
            $("#Img7").css("display", "inline-table");
        }
        else {
            $("#Img7").css("display", "none");
        }

    }
    else {
        $("#Img7").css("display", "none");
        $("#Img6").css("display", "none");
        $("#Img5").css("display", "none");
        $("#Img3").css("display", "none");
        $("#Img2").css("display", "none");
        $("#Img1").css("display", "none");
    }
    return validar;
}

//evento del boton salir
function x() {
    $("#dialog").dialog("close");
}

//limpiar campos
function Clear() {

    $("#Txt_ID").val("");

}

function Add_Activos(index) {
    $("#Dialog_Activos").dialog("open");
    $("#Dialog_Activos").dialog("option","title","Crear Activo");
    Table_Activos();
}

function Table_Activos() {

    $("#container_TActivos").html("");
 
}
