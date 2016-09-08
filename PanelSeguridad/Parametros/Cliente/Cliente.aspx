﻿<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/Parametros/Sasif_menu.Master"
    CodeBehind="Cliente.aspx.vb" Inherits="PanelSeguridad.Cliente" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="../../Scripts/jquery-1.4.1.js" type="text/javascript"></script>
    <script src="../../SasifMaster.js" type="text/javascript"></script>
    <script src="../SasifMaster_Cosult.js" type="text/javascript"></script>
    <script src="Cliente.js" type="text/javascript"></script>
    <script src="ClienteTrasaccionsAjax.js" type="text/javascript"></script>
    <script src="Cliente_Validacion.js" type="text/javascript"></script>
    <script src="Cliente_Direccion.js" type="text/javascript"></script>
    <script src="Cliente_EntFinan.js" type="text/javascript"></script>
    <script src="Cliente_Documento.js" type="text/javascript"></script>
    <script src="Cliente_DocAutorizado.js" type="text/javascript"></script>
    <link href="../../css/css_login.css" rel="stylesheet" type="text/css" />
    <link href="../../css/css_form.css" rel="stylesheet" type="text/css" />
    <link href="../../css/datatables/jquery.dataTables.css" rel="stylesheet" type="text/css" />
    <link href="../../css/custom/charge.css" rel="stylesheet" type="text/css" />
    <link href="../../css/css_controles.css" rel="stylesheet" type="text/css" />
    <link href="../../css/Chosen/chosen.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/jquery.min.js" type="text/javascript"></script>
    <script src="../../Scripts/Chosen/chosen.jquery.js" type="text/javascript"></script>
    <link href="../../css/Dialog/jquery-ui-1.10.4.custom.css" rel="stylesheet" type="text/css" />
    <script src="../../Scripts/Dialog/jquery-ui-1.10.4.custom.js" type="text/javascript"></script>
    <script src="../../Scripts/jquery.dataTables.min.js" type="text/javascript"></script>
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
            <div id="Admin_Anexos">
                <span id="T_option" class="T_options Label_Bold">Información Persona</span><a href="javascript:Complemento();">
                    <img alt="error" title="" style="height: 32px; width: 32px; position: absolute; padding-left: 10px;
                        padding-top: 15px; z-index: 30;" id="Imglogo" src="../../images/logo.png" />
                </a>
                <div id="Container_Complementos">
                    <div class="Option_Cliente" onclick="javascript:BlockAnexos('Direcciones');">
                        <div class="C_Image">
                            <a href="javascript:Direcciones('Default');">
                                <img alt="Direc" id="Direccion" src="../../images/adress_book.png" height="35px"
                                    width="35px" style="margin-top: 7px;" /></a>
                        </div>
                        <div class="Spam_CT1 C_Text Label_Bold">
                        </div>
                    </div>
                    <div class="Option_Cliente" onclick="javascript:BlockAnexos('Banco');">
                        <div class="C_Image">
                            <a href="javascript:Bancos('Default');">
                                <img alt="Bank" id="Bancos" src="../../images/bank.png" height="40px" width="40px" style="margin-top: 3px;"  /></a>
                        </div>
                        <div class="Spam_CT2 C_Text Label_Bold">
                        </div>
                    </div>
                    <div class="Option_Cliente" onclick="javascript:BlockAnexos('Documento');">
                        <div class="C_Image">
                            <a href="javascript:Documentos('Default');">
                                <img alt="Bank" id="Documentos" src="../../images/documentos.png" height="35px" width="35px"
                                    style="margin-top: 7px;" /></a>
                        </div>
                        <div class="Spam_CT4 C_Text Label_Bold">
                        </div>
                    </div>
                </div>
            </div>
            <div id="Foto_Persona">
                <img alt="foto" title="" style="height: 120px; width: 100px; position: absolute;"
                    id="Imgfoto" src="../../images/avatar.png" />
            </div>
            <div id="Container_controls">
                <table id="TablaConsulta">
                    <tr>
                        <td>
                            <select id="DDLColumns">
                            </select>
                        </td>
                        <td>
                            <span class="cssToolTip_Form">
                                <input id="TxtRead" type="text" />
                                <span class="Spam_AST"></span></span>
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
                <div id="TablaDatos_D">
                    <table id="Tabla_1" style="width: 700px; text-align: left;">
                        <tr>
                            <td style="width: 120px;" class="Label_Bold">
                                Multi - Empresa
                            </td>
                            <td>
                                <select id="Select_EmpresaNit" class="C_Chosen">
                                </select>
                            </td>
                            <td style="padding-bottom: 25px; width: 180px;">
                                <span class="cssToolTip">
                                    <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="ImgMul"
                                        src="../../images/error.png" />
                                    <span class="SpamEG"></span></span>
                            </td>
                        </tr>
                    </table>
                    <table id="Tabla_2" style="width: 700px; text-align: left;">
                        <tr>
                            <td style="width: 120px;" class="Label_Bold">
                                Tipo identificación
                            </td>
                            <td>
                                <select id="Select_Documento" class="C_Chosen">
                                </select>
                            </td>
                            <td style="padding-bottom: 25px; width: 350px;">
                                <span class="cssToolTip">
                                    <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img2"
                                        src="../../images/error.png" />
                                    <span class="SpamEG"></span></span>
                            </td>
                        </tr>
                    </table>
                    <table id="Tabla_3" style="width: 700px; text-align: left;">
                        <tr>
                            <td class="Label_Bold" style="width: 120px;">
                                Pais
                            </td>
                            <td>
                                <select id="Select_Pais" class="C_Chosen">
                                </select>
                            </td>
                            <td style="padding-bottom: 25px;">
                                <span class="cssToolTip_L">
                                    <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="ImgPais"
                                        src="../../images/error.png" />
                                    <span class="SpamEG"></span></span>
                            </td>
                        </tr>
                        <tr>
                            <td class="Label_Bold">
                                Ciudad
                            </td>
                            <td>
                                <select id="Select_Ciudad" class="C_Chosen">
                                </select>
                            </td>
                            <td style="padding-bottom: 25px;">
                                <span class="cssToolTip_L">
                                    <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img1"
                                        src="../../images/error.png" />
                                    <span class="SpamEG"></span></span>
                            </td>
                        </tr>
                    </table>
                    <table id="Tabla_4" style="width: 700px; text-align: left;">
                        <tr>
                            <td style="width: 120px;" class="Label_Bold">
                                Identificación
                            </td>
                            <td style="width: 110px;">
                                <span class="cssToolTip_Form">
                                    <input type="text" id="Txt_Ident" maxlength="12" style="width: 110px;" class="Numeric" />
                                    <span class="Spam_A_NIT"></span></span>
                            </td>
                            <td style="padding-bottom: 25px; width: 40px;">
                                <span class="cssToolTip">
                                    <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img3"
                                        src="../../images/error.png" />
                                    <span class="SpamEG"></span></span>
                            </td>
                            <td class="Label_Bold" style="width: 50px;">
                                Digito
                            </td>
                            <td>
                                <span class="cssToolTip_Form">
                                    <input type="text" id="TxtVerif" style="width: 20px;" maxlength="2" class="Numeric"
                                        readonly="readonly" />
                                    <span class="Spam_A_CC"></span></span>
                            </td>
                            <td class="Label_Bold Desvanecer" style="width: 40px;">
                                de
                            </td>
                            <td class="Desvanecer" style="width: 200px;">
                                <select id="Select_Ciudad_Doc" class="C_Chosen">
                                </select>
                            </td>
                            <td style="padding-bottom: 25px; width: 40px;">
                                <span class="cssToolTip_L">
                                    <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="ImgC_Doc"
                                        src="../../images/error.png" />
                                    <span class="SpamEG"></span></span>
                            </td>
                        </tr>
                    </table>
                    <table id="Tabla_6" style="width: 700px; text-align: left;">
                        <tr>
                            <td style="width: 120px;" class="Label_Bold">
                                Tipo Persona
                            </td>
                            <td align="center">
                                <select id="Select_TPersona" class="C_Chosen">
                                    <option value="-1">Seleccione...</option>
                                    <option value="1">Persona Natural</option>
                                    <option value="2">Persona Juridica</option>
                                </select>
                            </td>
                            <td style="padding-bottom: 25px; width: 400px;">
                                <span class="cssToolTip">
                                    <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img9"
                                        src="../../images/error.png" />
                                    <span class="SpamEG"></span></span>
                            </td>
                        </tr>
                    </table>
                    <table id="Tabla_7" style="width: 700px; text-align: left;">
                        <tr>
                            <td style="width: 120px;" class="Label_Bold">
                                Regimen
                            </td>
                            <td align="center">
                                <select id="Select_Regimen" class="C_Chosen">
                                </select>
                            </td>
                            <td style="padding-bottom: 25px; width: 300px;">
                                <span class="cssToolTip">
                                    <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img10"
                                        src="../../images/error.png" />
                                    <span class="SpamEG"></span></span>
                            </td>
                        </tr>
                    </table>
                    <table id="Table_5" style="width: 700px; text-align: left;">
                        <tr id="TR_Nit">
                            <td id="TD4" class="Label_Bold " style="width: 120px;">
                                Nombre
                            </td>
                            <td class="TD_2" style="width: 150px;">
                                <span class="cssToolTip_Form">
                                    <input type="text" id="TxtNombreNit" maxlength="50" style="width: 350px;" />
                                    <span class="Spam_AST"></span></span>
                            </td>
                            <td style="width: 35px; padding-bottom: 25px;">
                                <span class="cssToolTip">
                                    <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img11"
                                        src="../../images/error.png" />
                                    <span class="SpamEG"></span></span>
                            </td>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td style="padding-bottom: 25px;">
                            </td>
                        </tr>
                        <tr class="Desvanecer TR_1">
                            <td id="TD_Nombre" class="Label_Bold TD_1" style="width: 120px;">
                                Primer Nombre
                            </td>
                            <td class="TD_2" style="width: 150px;">
                                <span class="cssToolTip_Form">
                                    <input type="text" id="TxtNombre" maxlength="50" style="width: 150px;" />
                                    <span class="Spam_AST"></span></span>
                            </td>
                            <td style="width: 35px; padding-bottom: 25px;">
                                <span class="cssToolTip">
                                    <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img5"
                                        src="../../images/error.png" />
                                    <span class="SpamEG"></span></span>
                            </td>
                            <td class="Label_Bold " style="width: 120px;">
                                Segundo Nombre
                            </td>
                            <td>
                                <span class="cssToolTip_Form_L">
                                    <input type="text" id="TxtNombre_2" maxlength="50" style="width: 150px;" />
                                    <span class="Spam_AST"></span></span>
                            </td>
                            <td style="padding-bottom: 25px;">
                            </td>
                        </tr>
                        <tr class="Desvanecer TR_1">
                            <td class="Label_Bold" style="width: 120px;">
                                Primer Apellido
                            </td>
                            <td class="T120px">
                                <span class="cssToolTip_Form">
                                    <input type="text" id="Txt_Ape_1" maxlength="50" style="width: 150px;" />
                                    <span class="Spam_AST"></span></span>
                            </td>
                            <td style="width: 35px; padding-bottom: 25px;">
                            </td>
                            <td class="Label_Bold T120px" style="width: 120px;">
                                Segundo Apellido
                            </td>
                            <td class="T120px">
                                <span class="cssToolTip_Form_L">
                                    <input type="text" id="Txt_Ape_2" maxlength="50" style="width: 150px;" />
                                    <span class="Spam_AST"></span></span>
                            </td>
                            <td style="padding-bottom: 25px;">
                            </td>
                        </tr>
                    </table>
                    <table id="Tabla_8" style="width: 700px; text-align: left;">
                        <tr>
                            <td style="width: 120px;" class="Label_Bold">
                                Tipo de Relación
                            </td>
                            <td style="width: 195px;">
                                <span class="cssToolTip_Form_L"><a href="javascript:BtnRelacion();">
                                    <img alt="error" title="" style="padding-left: 1em; height: 50px; width: 50px;" id="Imgrelations"
                                        src="../../images/relations.png" /></a> <span class="Spam_ARel"></span></span>
                            </td>
                            <td style="width: 120px;" class="Label_Bold">
                                Acceso al Sistema
                            </td>
                            <td>
                                <select id="Select_Acceso" class="C_Chosen">
                                    <option value="N">No</option>
                                    <option value="S">Si</option>
                                </select>
                            </td>
                            <td style="width: 120px;">
                            </td>
                        </tr>
                    </table>
                </div>
                <table id="Anexos">
                    <tr>
                        <td>
                            <table id="Tabla_TC" style="width: 100%">
                                <tr>
                                    <td align="center" class="Title_Bold" colspan="8">
                                        INFORMACIÓN ADICIONAL
                                    </td>
                                </tr>
                            </table>
                            <table id="C_Banco" style="width: 100%">
                                <tr>
                                    <td class="Label_Bold " style="width: 100px;">
                                        Codigo Banco
                                    </td>
                                    <td>
                                        <span class="cssToolTip_Form">
                                            <input type="text" id="Txt_CodBank" style="width: 80px;" maxlength="3" class="Numeric" />
                                            <span class="Spam_AN"></span></span>
                                    </td>
                                    <td style="padding-bottom: 25px; width: 700px;">
                                        <span class="cssToolTip">
                                            <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img12"
                                                src="../../images/error.png" />
                                            <span class="SpamEG"></span></span>
                                    </td>
                                </tr>
                            </table>
                            <table id="C_Empleado" style="width: 100%">
                                <tr>
                                    <td class="Label_Bold " style="width: 100px;">
                                        Área
                                    </td>
                                    <td>
                                        <select id="Select_Area" class="C_Chosen">
                                        </select>
                                    </td>
                                    <td style="padding-bottom: 25px; width: 200px;">
                                        <span class="cssToolTip">
                                            <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img22"
                                                src="../../images/error.png" />
                                            <span class="SpamEG"></span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="Label_Bold " style="width: 100px;">
                                        Cargo
                                    </td>
                                    <td>
                                        <select id="Select_Cargo" class="C_Chosen">
                                        </select>
                                    </td>
                                    <td style="padding-bottom: 25px; width: 200px;">
                                        <span class="cssToolTip">
                                            <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img23"
                                                src="../../images/error.png" />
                                            <span class="SpamEG"></span></span>
                                    </td>
                                </tr>
                                <tr class="Empleado">
                                    <td class="Label_Bold " style="width: 100px;">
                                        jefe Inmediato
                                    </td>
                                    <td>
                                        <select id="Select_Jefe" class="C_Chosen">
                                        </select>
                                    </td>
                                    <td style="padding-bottom: 25px; width: 200px;">
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 150px;" class="Label_Bold">
                                        Politica de Seguridad
                                    </td>
                                    <td>
                                        <select id="Select_Politica" class="C_Chosen">
                                        </select>
                                    </td>
                                    <td style="padding-bottom: 25px; width: 200px;">
                                    </td>
                                </tr>
                            </table>
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
        <table style="width: 100%; text-align: center;">
            <tr>
                <td class="Label_Bold">
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
                <td colspan="2" align="center">
                    <input id="BtnExitD" type="button" value="Salir" style="width: 40%;" onclick="x();" />
                </td>
            </tr>
        </table>
    </div>
    <div id="dialog_eliminar" title="Basic dialog">
        <table style="width: 100%; text-align: center;">
            <tr>
                <td>
                    <p class="Label_Bold" id="P1">
                        Desea eliminar el siguiente registro?
                    </p>
                </td>
                <td>
                    <img alt="Warning" id="Img4" src="../../images/alert.png" />
                </td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input id="BtnElimin" type="button" value="Confirmar" onclick="BtnElimina();" />
                </td>
            </tr>
        </table>
    </div>
    <div id="Dialog_Relation" title="Relaciones de la Persona">
        <table style="width: 100%; text-align: center; margin-top: 20px;">
            <tr>
                <td class="Label_Bold">
                    Cliente
                </td>
                <td>
                    <input type="checkbox" id="Check_Cliente" value="CL">
                </td>
                <td class="Label_Bold">
                    Avaluador
                </td>
                <td>
                    <input type="checkbox" id="Check_Avaluador" value="AV">
                </td>
                <td class="Label_Bold">
                    Org. transito
                </td>
                <td>
                    <input type="checkbox" id="Check_Transito" value="TR">
                </td>
                <td class="Label_Bold">
                    Hacienda
                </td>
                <td>
                    <input type="checkbox" id="Check_Hacienda" value="HA">
                </td>
                <td class="Label_Bold">
                    Multi-Empresa
                </td>
                <td>
                    <input type="checkbox" id="Check_MultiEmpresa" value="ME">
                </td>
            </tr>
            <tr>
                <td class="Label_Bold">
                    Empleado
                </td>
                <td>
                    <input type="checkbox" id="Check_Empleado" value="EM">
                </td>
                <td class="Label_Bold">
                    Asesor
                </td>
                <td>
                    <input type="checkbox" id="Check_Asesor" value="AS">
                </td>
                <td class="Label_Bold">
                    Proveedor
                </td>
                <td>
                    <input type="checkbox" id="Check_Proveedor" value="PR">
                </td>
                <td class="Label_Bold">
                    Ent. Bancaria
                </td>
                <td>
                    <input type="checkbox" id="Check_EntBancaria" value="EB">
                </td>
            </tr>
        </table>
    </div>
    <div id="Dialog_Delete_Adress" title="Retirar Dirección?">
        <table style="width: 100%; text-align: center;">
            <tr>
                <td>
                    <p class="Label_Bold">
                        Desea Retirar el siguiente registro?
                    </p>
                </td>
                <td>
                    <img alt="Warning" id="Img17" src="../../images/alert.png" />
                </td>
            </tr>
            <tr>
                <td align="center">
                    <input id="BtnYes" type="button" value="Si" onclick="Confirm_Adress('Y');" />
                </td>
                <td align="center">
                    <input id="BtnNot" type="button" value="No" onclick="Confirm_Adress('N');" />
                </td>
            </tr>
        </table>
    </div>
    <div id="Dialog_Delete_Bank" title="Retirar Entidad Financiera?">
        <table style="width: 100%; text-align: center;">
            <tr>
                <td>
                    <p class="Label_Bold">
                        Desea Retirar el siguiente registro?
                    </p>
                </td>
                <td>
                    <img alt="Warning" id="ImgDB" src="../../images/alert.png" />
                </td>
            </tr>
            <tr>
                <td align="center">
                    <input id="BtnEntFinan_Y" type="button" value="Si" onclick="Confirm_Bank('Y');" />
                </td>
                <td align="center">
                    <input id="BtnEntFinan_N" type="button" value="No" onclick="Confirm_Bank('N');" />
                </td>
            </tr>
        </table>
    </div>
    <div id="Dialog_Direcciones">
        <div id="Controls_direcciones" style="width: 100%; text-align: center; font: 12px/20px Verdana,sans-serif;">
            <table style="width: 100%">
                <tr>
                    <td class="Label_Bold">
                        Nit Empresa
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="Txt_Nit_V" maxlength="20" readonly="readonly" style="width: 100px;" />
                            <span class="Spam_ACI"></span></span>
                    </td>
                    <td class="Label_Bold">
                        Tipo identificación
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="Txt_TypeIden_V" maxlength="20" readonly="readonly" />
                            <span class="Spam_ACI"></span></span>
                    </td>
                    <td class="Label_Bold">
                        Identificación
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="Txt_Ident_V" maxlength="20" readonly="readonly" style="width: 100px;" />
                            <span class="Spam_ACI"></span></span>
                    </td>
                </tr>
            </table>
        </div>
        <div id="container_direccion">
        </div>
        <div id="Div_Control_Save" style="width: 100%; text-align: center; margin-top: 25px;
            font: 12px/20px Verdana,sans-serif;">
            <input id="BtnSave_Adress" type="button" value="Guardar" onclick="BtnSave_Adress_Client()" />
        </div>
    </div>
    <div id="Dialog_EntidadFinanciera">
        <div id="Div2" style="width: 100%; text-align: center; font: 12px/20px Verdana,sans-serif;">
            <table style="width: 100%">
                <tr>
                    <td class="Label_Bold">
                        Nit Empresa
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="Txt_Nit_B" maxlength="20" readonly="readonly" style="width: 100px;" />
                            <span class="Spam_ACI"></span></span>
                    </td>
                    <td class="Label_Bold">
                        Tipo identificación
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="Txt_TypeIden_B" maxlength="20" readonly="readonly" />
                            <span class="Spam_ACI"></span></span>
                    </td>
                    <td class="Label_Bold">
                        Identificación
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="Txt_Ident_B" maxlength="20" readonly="readonly" style="width: 100px;" />
                            <span class="Spam_ACI"></span></span>
                    </td>
                </tr>
            </table>
        </div>
        <div id="container_Bank">
        </div>
        <div id="Div4" style="width: 100%; text-align: center; margin-top: 25px; font: 12px/20px Verdana,sans-serif;">
            <input id="BtnSave_Bank" type="button" value="Guardar" onclick="BtnSave_Bank_Client()" />
        </div>
    </div>
    <div id="Dialog_C_R_U_D">
        <table style="width: 100%; text-align: center; font: 12px/20px Verdana,sans-serif;">
            <tr>
                <td class="Label_Bold">
                    Nit Empresa
                </td>
                <td>
                    <span class="cssToolTip_Form">
                        <input type="text" id="Txt_Nit_V_2" maxlength="20" readonly="readonly" style="width: 100px;" />
                        <span class="Spam_ACI"></span></span>
                </td>
                <td class="Label_Bold">
                    Tipo identificación
                </td>
                <td>
                    <span class="cssToolTip_Form">
                        <input type="text" id="Txt_TypeIden_V_2" maxlength="20" readonly="readonly" />
                        <span class="Spam_ACI"></span></span>
                </td>
                <td class="Label_Bold">
                    Identificación
                </td>
                <td>
                    <span class="cssToolTip_Form_L">
                        <input type="text" id="Txt_Ident_V_2" maxlength="20" readonly="readonly" style="width: 100px;" />
                        <span class="Spam_ACI"></span></span>
                </td>
            </tr>
        </table>
        <div id="Datos_Direc_D">
            <table id="Tabla_Info_Dic">
                <tr>
                    <td class="Label_Bold" style="width: 100px;">
                        Consecutivo
                    </td>
                    <td colspan="2">
                        <span class="cssToolTip_Form">
                            <input type="text" id="TxtConsecutivo" maxlength="3" readonly="readonly" style="width: 30px;" />
                            <span class="Spam_A_CC"></span></span>
                    </td>
                    <td class="Label_Bold" style="width: 200px;">
                        Nombre de contacto
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="TxtContact" maxlength="50" style="width: 200px;" />
                            <span class="Spam_AST"></span></span>
                    </td>
                    <td style="width: 30px; padding-bottom: 25px;">
                        <span class="cssToolTip_L   ">
                            <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img13"
                                src="../../images/error.png" />
                            <span class="SpamEG"></span></span>
                    </td>
                </tr>
            </table>
            <table id="Tabla_Ubic">
                <tr>
                    <td class="Label_Bold" style="width: 100px;">
                        Pais
                    </td>
                    <td>
                        <select id="Select_Pais_D" class="C_Chosen">
                        </select>
                    </td>
                    <td style="padding-bottom: 25px;">
                        <span class="cssToolTip_L">
                            <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="ImgPais_D"
                                src="../../images/error.png" />
                            <span class="SpamEG"></span></span>
                    </td>
                </tr>
                <tr>
                    <td class="Label_Bold">
                        Ciudad
                    </td>
                    <td>
                        <select id="Select_Ciudad_D" class="C_Chosen">
                        </select>
                    </td>
                    <td style="padding-bottom: 25px;">
                        <span class="cssToolTip_L">
                            <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="ImgCiudad"
                                src="../../images/error.png" />
                            <span class="SpamEG"></span></span>
                    </td>
                </tr>
            </table>
            <table id="Tabla_Direccion">
                <tr>
                    <td class="Label_Bold" style="width: 100px;">
                        Dirección
                    </td>
                    <td>
                        <input type="text" id="TxtDireccion" style="width: 200px;" maxlength="50" readonly="readonly" />
                    </td>
                    <td style="width: 40px; padding-bottom: 25px;">
                        <span class="cssToolTip">
                            <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img14"
                                src="../../images/error.png" />
                            <span class="SpamEG"></span></span>
                    </td>
                    <td class="Label_Bold" style="width: 100px;">
                        Pagina Web
                    </td>
                    <td colspan="2">
                        <span class="cssToolTip_Form">
                            <input type="text" id="TxtWeb" maxlength="70" style="width: 200px;" />
                            <span class="Spam_AST"></span></span>
                    </td>
                </tr>
            </table>
            <table id="Tabla_Correo">
                <tr>
                    <td class="Label_Bold" style="width: 100px;">
                        Correo 1
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="TxtCorreo_1" maxlength="50" />
                            <span class="Spam_ACE_mail"></span></span>
                    </td>
                    <td style="width: 30px; padding-bottom: 25px;">
                        <span class="cssToolTip">
                            <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img15"
                                src="../../images/error.png" />
                            <span class="SpamEC"></span></span>
                    </td>
                    <td class="Label_Bold">
                        Correo 2
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="TxtCorreo_2" maxlength="50" />
                            <span class="Spam_ACE_mail"></span></span>
                    </td>
                    <td style="width: 30px; padding-bottom: 25px;">
                        <span class="cssToolTip_L">
                            <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img16"
                                src="../../images/error.png" />
                            <span class="SpamEC"></span></span>
                    </td>
                </tr>
            </table>
            <table id="Tabla_Telefono">
                <tr align="center">
                    <td class="Label_Bold" style="width: 120px;">
                    </td>
                    <td class="Label_Bold">
                        Ind.
                    </td>
                    <td class="Label_Bold">
                        Tel. ó Cel
                    </td>
                    <td class="Label_Bold">
                        Ext.
                    </td>
                    <td class="Label_Bold" style="width: 120px;">
                    </td>
                    <td class="Label_Bold">
                        Ind.
                    </td>
                    <td class="Label_Bold">
                        Tel. ó Cel
                    </td>
                    <td class="Label_Bold">
                        Ext.
                    </td>
                </tr>
                <tr>
                    <td class="Label_Bold" style="width: 120px;">
                        Telefono 1
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="TxtInd1" maxlength="5" class="Numeric" style="width: 50px;" />
                            <span class="Spam_AN"></span></span>
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="TxtTel1" maxlength="10" class="Numeric" style="width: 100px;" />
                            <span class="Spam_AN"></span></span>
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="TxtExt1" maxlength="5" class="Numeric" style="width: 50px;" />
                            <span class="Spam_AN"></span></span>
                    </td>
                    <td class="Label_Bold" style="width: 120px;">
                        Telefono 2
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="TxtInd2" maxlength="5" class="Numeric" style="width: 50px;" />
                            <span class="Spam_AN"></span></span>
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="TxtTel2" maxlength="10" class="Numeric" style="width: 100px;" />
                            <span class="Spam_AN"></span></span>
                    </td>
                    <td>
                        <span class="cssToolTip_Form_L">
                            <input type="text" id="TxtExt2" maxlength="5" class="Numeric" style="width: 50px;" />
                            <span class="Spam_AN"></span></span>
                    </td>
                </tr>
                <tr>
                    <td class="Label_Bold">
                        Telefono 3
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="TxtInd3" maxlength="5" class="Numeric" style="width: 50px;" />
                            <span class="Spam_AN"></span></span>
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="TxtTel3" maxlength="10" class="Numeric" style="width: 100px;" />
                            <span class="Spam_AN"></span></span>
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="TxtExt3" maxlength="5" class="Numeric" style="width: 50px;" />
                            <span class="Spam_AN"></span></span>
                    </td>
                    <td class="Label_Bold">
                        Telefono 4
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="TxtInd4" maxlength="5" class="Numeric" style="width: 50px;" />
                            <span class="Spam_AN"></span></span>
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="TxtTel4" maxlength="10" class="Numeric" style="width: 100px;" />
                            <span class="Spam_AN"></span></span>
                    </td>
                    <td>
                        <span class="cssToolTip_Form_L">
                            <input type="text" id="TxtExt4" maxlength="5" class="Numeric" style="width: 50px;" />
                            <span class="Spam_AN"></span></span>
                    </td>
                </tr>
            </table>
        </div>
        <div style="width: 100%; text-align: center; margin-top: 20px;">
            <input id="BtnAdd" type="button" value="Agregar" onclick="BtnAdd()" />
        </div>
    </div>
    <div id="Dialog_Format_Adress">
        <table style="width: 100%; text-align: center; font: 12px/20px Verdana,sans-serif;">
            <tr>
                <td>
                    <select id="Select_Type_Adress" class="Select_medium">
                        <option value="">Nomenclatura</option>
                        <option value="Cl">Calle</option>
                        <option value="Cra">Carrera</option>
                        <option value="Cir">Circular</option>
                        <option value="Dia">Diagonal</option>
                        <option value="Tra">Transversal</option>
                        <option value="Av">Avenida</option>
                        <option value="Kl">Kilometro</option>
                    </select>
                </td>
                <td>
                    <input type="text" id="Txt_N1" maxlength="4" class="Numeric" style="width: 40px" />
                </td>
                <td>
                    <input type="text" id="Txt_Special" maxlength="200" class="" style="width: 400px" />
                    <select id="Select_Letter_1" class="Select_tiny">
                        <option value="">Letra</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                        <option value="H">H</option>
                        <option value="I">I</option>
                        <option value="J">J</option>
                        <option value="K">K</option>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="N">N</option>
                        <option value="O">O</option>
                        <option value="P">P</option>
                        <option value="Q">Q</option>
                        <option value="R">R</option>
                        <option value="S">D</option>
                        <option value="T">T</option>
                        <option value="U">U</option>
                        <option value="V">V</option>
                        <option value="W">W</option>
                        <option value="X">X</option>
                        <option value="Y">Y</option>
                        <option value="Z">Z</option>
                    </select>
                </td>
                <td>
                    <input type="text" id="Txt_N2" maxlength="4" class="Numeric" style="width: 40px" />
                </td>
                <td>
                    <select id="Select_Letter_2" class="Select_tiny">
                        <option value="">Letra</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                        <option value="H">H</option>
                        <option value="I">I</option>
                        <option value="J">J</option>
                        <option value="K">K</option>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="N">N</option>
                        <option value="O">O</option>
                        <option value="P">P</option>
                        <option value="Q">Q</option>
                        <option value="R">R</option>
                        <option value="S">D</option>
                        <option value="T">T</option>
                        <option value="U">U</option>
                        <option value="V">V</option>
                        <option value="W">W</option>
                        <option value="X">X</option>
                        <option value="Y">Y</option>
                        <option value="Z">Z</option>
                    </select>
                </td>
                <td>
                    <input type="text" id="Txt_N3" maxlength="4" class="Numeric" style="width: 40px" />
                </td>
                <td>
                    <select id="Select_Orientacion" class="Select_medium">
                        <option value="">Orientacion</option>
                        <option value="Norte">Norte</option>
                        <option value="Sur">Sur</option>
                        <option value="Oeste">Oeste</option>
                        <option value="Este">Este</option>
                    </select>
                </td>
                <td>
                    <select id="Select_Type_Cons" class="Select_medium">
                        <option value="">Vivienda</option>
                        <option value="Apto">Apartamento</option>
                        <option value="Casa">Casa</option>
                        <option value="Lote">Lote</option>
                        <option value="Local">Local</option>
                        <option value="Bodega">Bodega</option>
                        <option value="Stan">Stand</option>
                    </select>
                </td>
                <td>
                    <input type="text" id="Txt_N4" maxlength="4" class="Numeric" style="width: 40px" />
                </td>
                <td>
                    <select id="Select_Type_Cons2" class="Select_medium">
                        <option value="">Tipo</option>
                        <option value="Bloque">Bloque</option>
                        <option value="Interior">Interior</option>
                        <option value="Piso">Piso</option>
                        <option value="Manzana">Manzana</option>
                        <option value="Torre">Torre</option>
                    </select>
                </td>
                <td>
                    <input type="text" id="Txt_N5" maxlength="4" class="Numeric" style="width: 40px" />
                </td>
                <td>
                    <input type="text" id="Txt_Texto" maxlength="120" class="Letter" style="width: 200px" />
                </td>
            </tr>
            <tr>
                <td colspan="10">
                    <p>
                    </p>
                </td>
            </tr>
            <tr>
                <td colspan="13">
                    <input type="text" id="Txt_End_Adress" maxlength="4" readonly="readonly" style="width: 500px;
                        text-align: center;" />
                </td>
            </tr>
            <tr>
                <td colspan="8">
                    <p>
                    </p>
                </td>
            </tr>
            <tr>
                <td colspan="13" style="text-align: center;">
                    <input id="BtnStrAdress" type="button" value="Aceptar" onclick="Add_Adress();" />
                </td>
            </tr>
        </table>
    </div>
    <div id="Dialog_C_R_U_D_Bank">
        <table style="width: 100%; text-align: center; font: 12px/20px Verdana,sans-serif;">
            <tr>
                <td class="Label_Bold">
                    Nit Empresa
                </td>
                <td>
                    <span class="cssToolTip_Form">
                        <input type="text" id="Txt_Nit_B_2" maxlength="20" readonly="readonly" style="width: 100px;" />
                        <span class="Spam_ACI"></span></span>
                </td>
                <td class="Label_Bold">
                    Tipo identificación
                </td>
                <td>
                    <span class="cssToolTip_Form">
                        <input type="text" id="Txt_TypeIden_B_2" maxlength="20" readonly="readonly" />
                        <span class="Spam_ACI"></span></span>
                </td>
                <td class="Label_Bold">
                    Identificación
                </td>
                <td>
                    <span class="cssToolTip_Form_L">
                        <input type="text" id="Txt_Ident_B_2" maxlength="20" readonly="readonly" style="width: 100px;" />
                        <span class="Spam_ACI"></span></span>
                </td>
            </tr>
        </table>
        <div id="Datos_Bank_D">
            <table id="Tabla_1_Bank" style="width: 500px;">
                <tr>
                    <td class="Label_Bold" style="width: 100px;">
                        Ent. Financiera
                    </td>
                    <td>
                        <select id="Select_EntFinanciera" class="C_Chosen">
                        </select>
                    </td>
                    <td style="padding-bottom: 25px;">
                        <span class="cssToolTip_L">
                            <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img6"
                                src="../../images/error.png" />
                            <span class="SpamEG"></span></span>
                    </td>
                </tr>
            </table>
            <table id="Tabla_2_Bank" style="width: 500px;">
                <tr>
                    <td class="Label_Bold" style="width: 100px;">
                        Tipo de Cuenta
                    </td>
                    <td>
                        <select id="Select_TipoCuenta" class="C_Chosen">
                        </select>
                    </td>
                    <td style="padding-bottom: 25px; width: 150px">
                        <span class="cssToolTip_L">
                            <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img7"
                                src="../../images/error.png" />
                            <span class="SpamEG"></span></span>
                    </td>
                </tr>
            </table>
            <table id="Tabla_3_Bank">
                <tr>
                    <td class="Label_Bold" style="width: 100px;">
                        N° Cuenta
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="TxtCuenta" style="width: 200px;" maxlength="20" class="Numeric_letter" />
                            <span class="Spam_ANL"></span></span>
                    </td>
                    <td style="width: 40px; padding-bottom: 25px;">
                        <span class="cssToolTip">
                            <img alt="error" title="" style="padding-left: 1em; height: 21px; width: 21px;" id="Img8"
                                src="../../images/error.png" />
                            <span class="SpamEG"></span></span>
                    </td>
                </tr>
            </table>
        </div>
        <div style="width: 100%; text-align: center; margin-top: 20px;">
            <input id="BtnAddBank" type="button" value="Agregar" onclick="InsertAddBank()" />
        </div>
    </div>
    <div id="Dialog_Documentos">
        <div id="Div3" style="width: 100%; text-align: center; font: 12px/20px Verdana,sans-serif;">
            <table style="width: 100%">
                <tr>
                    <td class="Label_Bold">
                        Nit Empresa
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="Txt_Nit_Doc" maxlength="20" readonly="readonly" style="width: 100px;" />
                            <span class="Spam_ACI"></span></span>
                    </td>
                    <td class="Label_Bold">
                        Tipo identificación
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="Txt_TypeIden_Doc" maxlength="20" readonly="readonly" />
                            <span class="Spam_ACI"></span></span>
                    </td>
                    <td class="Label_Bold">
                        Identificación
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="Txt_Ident_Doc" maxlength="20" readonly="readonly" style="width: 100px;" />
                            <span class="Spam_ACI"></span></span>
                    </td>
                </tr>
            </table>
        </div>
        <div id="container_Document">
        </div>
        <div id="Div6" style="width: 100%; text-align: center; margin-top: 25px; font: 12px/20px Verdana,sans-serif;">
            <input id="BtnSave_Document" type="button" value="Guardar" onclick="BtnSave_Document_Client()" />
        </div>
    </div>
    <div id="Dialog_Doc_Autorizados">
        <div id="Div1" style="width: 100%; text-align: center; font: 12px/20px Verdana,sans-serif;">
            <table style="width: 100%">
                <tr>
                    <td class="Label_Bold">
                        Nit Empresa
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="Txt_Nit_Doc_A" maxlength="20" readonly="readonly" style="width: 100px;" />
                            <span class="Spam_ACI"></span></span>
                    </td>
                    <td class="Label_Bold">
                        Tipo identificación
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="Txt_TypeIden_Doc_A" maxlength="20" readonly="readonly" />
                            <span class="Spam_ACI"></span></span>
                    </td>
                    <td class="Label_Bold">
                        Identificación
                    </td>
                    <td>
                        <span class="cssToolTip_Form">
                            <input type="text" id="Txt_Ident_Doc_A" maxlength="20" readonly="readonly" style="width: 100px;" />
                            <span class="Spam_ACI"></span></span>
                    </td>
                </tr>
            </table>
        </div>
        <div id="container_DocAuto">
        </div>
        <div id="Div7" style="width: 100%; text-align: center; margin-top: 25px; font: 12px/20px Verdana,sans-serif;">
            <input id="BtnSave_Document_A" type="button" value="Guardar" onclick="BtnSave_Document_A_Client()" />
        </div>
    </div>
</asp:Content>
