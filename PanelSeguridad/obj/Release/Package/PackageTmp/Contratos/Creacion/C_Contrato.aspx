<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/Parametros/Sasif_menu.Master"
    CodeBehind="C_Contrato.aspx.vb" Inherits="PanelSeguridad.C_Contrato" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="../../Scripts/jquery-1.4.1.js" type="text/javascript"></script>
    <script src="../../SasifMaster.js" type="text/javascript"></script>
    <script src="../SasifMaster_Cosult.js" type="text/javascript"></script>
    <script src="C_Contrato.js" type="text/javascript"></script>
    <script src="C_ContratoTrasaccionsAjax.js" type="text/javascript"></script>
    <link href="../../css/css_login.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/Dialog/jquery-1.10.2.js" type="text/javascript"></script>
    <link href="../../css/Dialog/jquery-ui-1.10.4.custom.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/Dialog/jquery-ui-1.10.4.custom.js" type="text/javascript"></script>
    <link href="../../css/css_form.css" rel="stylesheet" type="text/css" />
    <link href="../../css/datatables/jquery.dataTables.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/jquery.dataTables.min.js" type="text/javascript"></script>
    <link href="../../css/custom/charge.css" rel="stylesheet" type="text/css" />
    <link href="../../css/css_controles.css" rel="stylesheet" type="text/css" />
    <link href="../../css/Dialog/ComboBox_Contrato.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/Chosen/ComboBox.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="main" runat="server">
    <div id="Container_title_Form">
        <table id="Tabla_Title_form">
            <tr>
                <td id="Title_form">
                </td>
                <td id="image_exit">
                    <span class="cssToolTip_Form_L">
                        <input id="BtnExit" type="button" value="X" onclick="btnSalir();" /><span class="Spam_AEXIT_MOD"></span></span>
                </td>
            </tr>
        </table>
    </div>
    <div id="Marco_Contrato">
        <div id="Marco_trabajo_Contrato">
            <div id="Container_controls">
                <table id="T_Encabezado">
                    <tr>
                        <td id="TD_ID" style="width: 120px;" class="Label_Bold">
                            Nit Empresa
                        </td>
                        <td id="TD_TID" style="width: 50px;">
                            <select id="Select_EmpresaNit">
                            </select>
                        </td>
                        <td style="width: 40px; padding-bottom: 25px;">
                            <span class="cssToolTip">
                                <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img1"
                                    src="../../images/error.png" />
                                <span>Empresa Obligatoria</span></span>
                        </td>
                        <td id="Td_Empresa_ID" style="width: 120px;">
                        </td>
                        <td id="Td_Empresa_Descrip" style="width: 150px;">
                        </td>
                        <td id="Td_Empresa" style="width: 200px;">
                        </td>
                    </tr>
                </table>
                <table id="T_Datos_P1">
                    <tr>
                        <td class="Label_Bold" style="width: 120px;">
                            Contrato
                        </td>
                        <td>
                            <input type="text" id="Txt_ID" maxlength="17" class="Numeric_letter" />
                        </td>
                        <td style="padding-bottom: 25px;">
                            <span class="cssToolTip">
                                <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img2"
                                    src="../../images/error.png" />
                                <span>Contrato Obligatorio</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td class="Label_Bold" style="width: 100px;">
                            Descripción
                        </td>
                        <td style="width: 100px;">
                            <input type="text" id="TxtDescripcion" maxlength="50" />
                        </td>
                        <td style="width: 40px; padding-bottom: 25px;">
                            <span class="cssToolTip">
                                <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img3"
                                    src="../../images/error.png" />
                                <span>Descripción Obligatorio</span></span>
                        </td>
                    </tr>
                </table>
                <table id="T_Cliente">
                    <tr>
                        <td style="width: 120px;" class="Label_Bold">
                            Cliente Principal
                        </td>
                        <td id="TD_Tdescrip" style="width: 50px;">
                            <select id="Select_H_Cliente">
                            </select>
                        </td>
                        <td style="width: 40px; padding-bottom: 25px;">
                            <span class="cssToolTip">
                                <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img5"
                                    src="../../images/error.png" />
                                <span>Cliente Obligatorio</span></span>
                        </td>
                        <td id="Td_TD" style="width: 40px;">
                        </td>
                        <td id="Td_D" style="width: 170px;">
                        </td>
                        <td id="Td_NameClient" style="width: 200px;">
                        </td>
                    </tr>
                    <tr>
                        <td class="Label_Bold">
                            Estado
                        </td>
                        <td>
                            <select id="Select_Estado">
                            </select>
                        </td>
                        <td style="padding-bottom: 25px;">
                            <span class="cssToolTip">
                                <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img6"
                                    src="../../images/error.png" />
                                <span>Estado Obligatorio</span></span>
                        </td>
                        <td id="Td_Estado_ID">
                        </td>
                        <td id="Td_Estado_Descrip">
                        </td>
                        <td id="Td_Estado">
                        </td>
                    </tr>
                    <tr>
                        <td class="Label_Bold">
                            Moneda
                        </td>
                        <td>
                            <select id="Select_Moneda">
                            </select>
                        </td>
                        <td style="padding-bottom: 25px;">
                            <span class="cssToolTip">
                                <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img7"
                                    src="../../images/error.png" />
                                <span>Moneda Obligatorio</span></span>
                        </td>
                        <td id="Td_Moneda_ID">
                        </td>
                        <td id="Td_Moneda_Descrip">
                        </td>
                        <td id="Td_Moneda">
                        </td>
                    </tr>
                </table>
                <table id="T_Datos_3">
                    <tr>
                        <td class="Label_Bold" style="width: 120px;">
                            Secuencia Cargue
                        </td>
                        <td>
                            <input type="text" id="TxtSecuenciaCargue" maxlength="7" class="solo-numero" />
                        </td>
                        <td style="width: 40px; padding-bottom: 25px;">
                        </td>
                        <td class="Label_Bold">
                        </td>
                        <td>
                        </td>
                        <td style="width: 40px; padding-bottom: 25px;">
                        </td>
                    </tr>
                </table>
                <table id="T_Valores">
                    <tr>
                        <td align="center" class="Title_Bold" colspan="8">
                            VALORES
                        </td>
                    </tr>
                    <tr>
                        <td class="Label_Bold" style="padding-left: 25px; width: 100px;">
                            Contrato
                        </td>
                        <td id="Td_Vr_Contr" style="width: 110px;">
                            0
                        </td>
                        <td class="Label_Bold" style="width: 100px;">
                            Financiado
                        </td>
                        <td id="Td_Vr_Finan" style="width: 110px;">
                            0
                        </td>
                        <td class="Label_Bold" style="width: 100px;">
                            Opcion Compra
                        </td>
                        <td id="Td_Vr_OpCompra" style="width: 110px;">
                            0
                        </td>
                    </tr>
                </table>
                <table id="T_Saldos">
                    <tr>
                        <td align="center" class="Title_Bold" colspan="8">
                            SALDOS
                        </td>
                    </tr>
                    <tr>
                        <td class="Label_Bold" style="width: 70px;">
                            Capital
                        </td>
                        <td id="Td_S_Capital" style="width: 110px;">
                            0
                        </td>
                        <td class="Label_Bold" style="width: 70px;">
                            Interes
                        </td>
                        <td id="Td_S_Interes" style="width: 110px;">
                            0
                        </td>
                        <td class="Label_Bold" style="width: 70px;">
                            Mora
                        </td>
                        <td id="Td_S_Mora" style="width: 110px;">
                            0
                        </td>
                        <td class="Label_Bold" style="width: 70px;">
                            Otros
                        </td>
                        <td id="Td_S_Otros" style="width: 110px;">
                            0
                        </td>
                    </tr>
                    <tr>
                        <td class="Label_Bold">
                            <p>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="8" style="text-align: center;">
                        </td>
                    </tr>
                </table>
                <table id="Complementos">
                    <tr>
                        <td>
                            <table id="T_Activo_Grid" border="1" cellpadding="1" cellspacing="1">
                                <thead>
                                    <tr>
                                        <th>
                                            <span class="cssToolTip_ver">
                                                <img alt="Activo" class="Add" onclick="javascript:Add_Activos();" id="Crear" height='20px'
                                                    width='20px' src='../../images/add.png' /><span>Agregar Nuevo Activo</span></span>
                                        </th>
                                        <th>
                                            Identificación Activo
                                        </th>
                                        <th>
                                            Identificación Activo
                                        </th>
                                        <th>
                                            Identificación Activo
                                        </th>
                                        <th>
                                            Producto
                                        </th>
                                        <th>
                                            Moneda
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </table>
                <div style="width: 100; text-align: center; margin-top: 25px;">
                    <input id="Btnguardar" type="button" value="Guardar" onclick="BtnCrear();" />
                </div>
            </div>
        </div>
    </div>
    <div id="dialog" title="Basic dialog">
        <table>
            <tr>
                <td>
                    <p id="Mensaje_alert">
                    </p>
                </td>
                <td>
                    <img alt="error" id="DE" src="../../images/error_2.png" />
                    <img alt="success" id="SE" src="../../images/success.png" />
                    <img alt="Warning" id="WE" src="../../images/alert.png" />
                </td>
            </tr>
            <tr>
                <td align="center">
                    <input id="BtnExitD" type="button" value="Salir" style="width: 40%;" onclick="x();" />
                </td>
            </tr>
        </table>
    </div>
    <div id="dialog_eliminar" title="Basic dialog">
        <table>
            <tr>
                <td>
                    <p id="P1">
                        Desea eliminar el siguiente registro?
                    </p>
                </td>
                <td>
                    <img alt="Warning" id="Img4" src="../../images/alert.png" />
                </td>
            </tr>
            <tr>
                <td align="center">
                    <input id="BtnElimin" type="button" value="Confirmar" onclick="BtnElimina();" />
                </td>
            </tr>
        </table>
    </div>
    <div id="Dialog_Activos">
        <div id="container_TActivos">
        </div>
    </div>
</asp:Content>
