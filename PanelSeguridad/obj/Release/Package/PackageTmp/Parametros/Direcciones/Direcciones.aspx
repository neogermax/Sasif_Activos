﻿<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/Parametros/Sasif_menu.Master"
    CodeBehind="Direcciones.aspx.vb" Inherits="PanelSeguridad.Direcciones" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="../../Scripts/jquery-1.4.1.js" type="text/javascript"></script>
    <script src="../../SasifMaster.js" type="text/javascript"></script>
    <script src="../SasifMaster_Cosult.js" type="text/javascript"></script>
    <script src="Direcciones.js" type="text/javascript"></script>
    <script src="DireccionesTrasaccionsAjax.js" type="text/javascript"></script>
    <link href="../../css/css_login.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/Dialog/jquery-1.10.2.js" type="text/javascript"></script>
    <link href="../../css/Dialog/jquery-ui-1.10.4.custom.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/Dialog/jquery-ui-1.10.4.custom.js" type="text/javascript"></script>
    <link href="../../css/css_form.css" rel="stylesheet" type="text/css" />
    <link href="../../css/datatables/jquery.dataTables.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/jquery.dataTables.min.js" type="text/javascript"></script>
    <link href="../../css/custom/charge.css" rel="stylesheet" type="text/css" />
    <link href="../../css/css_controles.css" rel="stylesheet" type="text/css" />
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
    <div id="Marco_link">
        <div id="Marco_btn_Form">
            <input id="BtnShearh" type="button" value="Consulta" onclick="HabilitarPanel('buscar');" />
            <input id="BtnCreate" type="button" value="Crear" onclick="HabilitarPanel('crear');" />
            <input id="BtnUpdate" type="button" value="Actualizar" onclick="HabilitarPanel('modificar');" />
            <input id="BtnDelete" type="button" value="Eliminar" onclick="HabilitarPanel('eliminar');" />
        </div>
        <div id="Marco_trabajo_Form">
            <div id="Container_controls">
                <table id="TablaConsulta">
                    <tr>
                        <td id="TD1">
                            <select id="DDLColumns">
                            </select>
                        </td>
                        <td id="TD2">
                            <input id="TxtRead" type="text" />
                            <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="ESelect"
                                src="../../images/error.png" />
                        </td>
                        <td colspan="4" align="center" id="TD3">
                            <input id="BtnRead" type="button" value="Buscar" onclick="BtnConsulta();" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            &nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <div id="container_TCliente">
                            </div>
                        </td>
                    </tr>
                </table>
                <table id="TablaDatos">
                    <tr>
                        <td id="TD_ID" style="width: 150px;" class="Label_Bold">
                            Nit Empresa
                        </td>
                        <td id="TD_TID" style="width: 150px;">
                            <span class="cssToolTip_Form">
                                <input type="text" id="Txt_Nit" maxlength="12" class="solo-numero" />
                                <span>El Nit se puede dejar en blanco</span></span>
                        </td>
                        <td id="TD_descrip" style="width: 150px;" class="Label_Bold">
                            Tipo identificación
                        </td>
                        <td id="TD_Tdescrip" style="width: 150px;">
                            <select id="Select_Documento">
                            </select>
                            <span class="cssToolTip">
                                <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img1"
                                    src="../../images/error.png" />
                                <span>Documento Obligatorio</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td class="Label_Bold">
                            Identificación
                        </td>
                        <td>
                            <span class="cssToolTip_Form">
                                <input type="text" id="Txt_Ident" maxlength="12" class="solo-numero" />
                                <span>Diligenciar el documento sin numero de verificación, sin guion ni comas.</span></span>
                            <span class="cssToolTip">
                                <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img2"
                                    src="../../images/error.png" />
                                <span>Identificación Obligatorio</span></span>
                        </td>
                        <td class="Label_Bold">
                            Consecutivo
                        </td>
                        <td>
                            <span class="cssToolTip_Form">
                                <input type="text" id="TxtConsecutivo" maxlength="12" class="solo-numero" />
                                <span>Diligenciar el documento sin numero de verificación, sin guion ni comas.</span></span>
                            <span class="cssToolTip">
                                <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img3"
                                    src="../../images/error.png" />
                                <span>Identificación Obligatorio</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td class="Label_Bold">
                            Nombre de contacto
                        </td>
                        <td>
                            <input type="text" id="TxtNombre" maxlength="50" />
                            <span class="cssToolTip">
                                <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img5"
                                    src="../../images/error.png" />
                                <span>Nombre de contacto Obligatorio</span></span>
                        </td>
                        <td>
                            Pagina Web
                        </td>
                        <td>
                            <input type="text" id="TxtWeb" maxlength="70" />
                            <span class="cssToolTip">
                                <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img6"
                                    src="../../images/error.png" />
                                <span>Consecutivo Obligatorio</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Dirección
                        </td>
                        <td>
                            <input type="text" id="TxtDireccion" maxlength="50" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Telefono 1
                        </td>
                        <td>
                            <input type="text" id="TxtTel1" maxlength="18" class="solo-numero" />
                        </td>
                        <td>
                            Telefono 2
                        </td>
                        <td>
                            <input type="text" id="TxtTel2" maxlength="18" class="solo-numero" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Telefono 3
                        </td>
                        <td>
                            <input type="text" id="TxtTel3" maxlength="18" class="solo-numero" />
                        </td>
                        <td>
                            Telefono 4
                        </td>
                        <td>
                            <input type="text" id="TxtTel4" maxlength="18" class="solo-numero" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Correo 1
                        </td>
                        <td>
                            <input type="text" id="TxtCorreo_1" maxlength="50" />
                        </td>
                        <td>
                            Correo 2
                        </td>
                        <td>
                            <input type="text" id="TxtCorreo_2" maxlength="50" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4" align="center">
                            &nbsp;
                        </td>
                    </tr>
                </table>
                <table id="Controls">
                    <tr>
                        <td colspan="4" align="center" id="TD_Button">
                            <input id="Btnguardar" type="button" value="Guardar" onclick="BtnCrear();" />
                        </td>
                    </tr>
                </table>
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
                    <p>
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
    <div id="Dialog_Visualiza">
        <table id="D_Impuestos" style="width: 100%; padding-left: 20px;">
            <tr>
                <td class="Label_Bold" style="width: 130px;">
                    Nit
                </td>
                <td id="V_Nit" style="width: 160px;">
                </td>
            </tr>
            <tr>
                <td class="Label_Bold">
                    Tipo de Documento
                </td>
                <td id="V_TDocumento">
                </td>
            </tr>
            <tr>
                <td class="Label_Bold">
                    N° Documento
                </td>
                <td id="V_Documento">
                </td>
                <td class="Label_Bold" style="width: 60px;">
                    Digito
                </td>
                <td id="V_Digito">
                </td>
            </tr>
            <tr>
                <td class="Label_Bold">
                    Empresa
                </td>
                <td id="V_Nombre" colspan="3">
                </td>
            </tr>
            <tr>
                <td class="Label_Bold">
                    Ciudad
                </td>
                <td id="V_Municipio">
                </td>
            </tr>
        </table>
        <div id="Acordeon_Dat">
            <h3>
                Relación
            </h3>
            <div>
                <table style="width: 100%; padding-left: 60px;">
                    <tr>
                        <td class="Label_Bold" style="width: 180px;">
                            Cliente
                        </td>
                        <td id="V_Op_Cliente" style="width: 90px;">
                        </td>
                        <td class="Label_Bold" style="width: 100px;">
                            Avaluador
                        </td>
                        <td id="V_Op_Avaluador">
                        </td>
                    </tr>
                    <tr>
                        <td class="Label_Bold">
                            Organismo de Transito
                        </td>
                        <td id="V_Op_Transito">
                        </td>
                        <td class="Label_Bold">
                            Hacienda
                        </td>
                        <td id="V_Op_Hacienda">
                        </td>
                    </tr>
                    <tr>
                        <td class="Label_Bold">
                            Nit Multi-Empresa
                        </td>
                        <td id="V_Op_Empresa">
                        </td>
                        <td class="Label_Bold">
                            Empleado
                        </td>
                        <td id="V_Op_Empleado">
                        </td>
                    </tr>
                    <tr>
                        <td class="Label_Bold">
                            Asesor
                        </td>
                        <td id="V_Op_Asesor">
                        </td>
                        <td class="Label_Bold">
                            Otro
                        </td>
                        <td id="V_Op_Otro_1">
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</asp:Content>
