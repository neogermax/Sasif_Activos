﻿Imports Newtonsoft.Json
Imports System.Data
Imports System.Data.SqlClient
Imports System.Web.Script.Serialization
Imports System.IO


Public Class ClienteAjax
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        Dim Doc As New DocumentosClass
        If Request.Files.Count() > 0 Then
            Dim Document As String = Doc.UpLoad_Document(Request.Files, "F:\DESARROLLO\CLIENTES SASIF\Desarrollos propios\DOCUMENTOS_PRESENTACION\")

            If Document <> "" Then
                Response.Write(Document)
            End If

            Exit Sub
        End If

        If Request.Form("action") <> Nothing Then
            'aterrizamos las opciones del proceso
            Dim vl_S_option_login As String = Request.Form("action")

            Select Case vl_S_option_login

                Case "Cliente"
                    CargarCliente()

                Case "Bank"
                    CargarEntFinan()

                Case "TCuenta"
                    CargarTCuenta()

                Case "Area"
                    CargarArea()

                Case "Cargo"
                    CargarCargo()

                Case "Jefe"
                    CargarJefe()

                Case "GrpDocumentos"
                    CargarGrpDocumentos()

                Case "Seguridad"
                    CargarSeguridad()

                Case "Pais"
                    CargarPaises()

                Case "Ciudad"
                    CargarCiudad()

                Case "Documento"
                    CargarDocumento()

                Case "cargar_droplist_busqueda"
                    CargarDroplist()

                Case "crear"
                    Insert()

                Case "consulta"
                    Consulta()

                Case "modificar"
                    Update()

                Case "elimina"
                    Delete()

                Case "R_ead_Adress"
                    R_ead_Adress()

                Case "Create_Adress"
                    C_reate_Adress()

                Case "R_ead_Bank"
                    R_ead_Bank()

                Case "Create_Bank"
                    C_reate_Bank()

                Case "R_ead_Document"
                    R_ead_Document()

                Case "Foto"
                    Verifica_Foto()

            End Select
        End If

    End Sub

#Region "CRUD_CLIENTE"

    ''' <summary>
    ''' traemos todos los datos para tabla Cliente (READ)
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub Consulta()

        Dim SQL As New ClienteSQLClass
        Dim ObjListCliente As New List(Of ClienteClass)


        Dim vl_S_filtro As String = Request.Form("filtro")
        Dim vl_S_opcion As String = Request.Form("opcion")
        Dim vl_S_contenido As String = Request.Form("contenido")

        ObjListCliente = SQL.Read_All(vl_S_filtro, vl_S_opcion, vl_S_contenido)

        If ObjListCliente Is Nothing Then

            Dim objCliente As New ClienteClass
            ObjListCliente = New List(Of ClienteClass)

            objCliente.Nit_ID = ""
            objCliente.FechaActualizacion = ""
            objCliente.UsuarioCreacion = ""

            ObjListCliente.Add(objCliente)
        End If

        Response.Write(JsonConvert.SerializeObject(ObjListCliente.ToArray()))

    End Sub

    ''' <summary>
    ''' funcion que inserta en la tabla Cliente (INSERT)
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub Insert()

        Dim objCliente As New ClienteClass
        Dim SQL As New ClienteSQLClass
        Dim ObjListCliente As New List(Of ClienteClass)

        Dim result As String
        Dim vl_s_IDxiste As String

        objCliente.Nit_ID = Request.Form("Nit_ID")
        objCliente.TypeDocument_ID = Request.Form("TypeDocument_ID")
        objCliente.Document_ID = Request.Form("Document_ID")

        'validamos si la llave existe
        vl_s_IDxiste = SQL.Consulta_Repetido(objCliente)

        If vl_s_IDxiste = 0 Then

            objCliente.Digito_Verificacion = Request.Form("Digito_Verificacion")
            objCliente.Nombre = Request.Form("Nombre")
            objCliente.Ciudad_ID = Request.Form("Ciudad_ID")
            objCliente.Pais_ID = Request.Form("Pais_ID")

            objCliente.OP_Cliente = Request.Form("OP_Cliente")
            objCliente.OP_Avaluador = Request.Form("OP_Avaluador")
            objCliente.OP_Transito = Request.Form("OP_Transito")
            objCliente.OP_Hacienda = Request.Form("OP_Hacienda")
            objCliente.OP_Empresa = Request.Form("OP_Empresa")
            objCliente.OP_Empleado = Request.Form("OP_Empleado")
            objCliente.OP_Asesor = Request.Form("OP_Asesor")
            objCliente.Other_1 = Request.Form("Other_1")
            objCliente.Other_2 = Request.Form("Other_2")

            objCliente.Nombre_2 = Request.Form("Nombre_2")
            objCliente.Apellido_1 = Request.Form("Ape_1")
            objCliente.Apellido_2 = Request.Form("Ape_2")
            objCliente.Cod_Bank = Request.Form("CodBank")
            objCliente.DocCiudad = Request.Form("CiuDoc")

            objCliente.TipoPersona = Request.Form("TipoPersona")
            objCliente.Regimen = Request.Form("Regimen")

            objCliente.AccesoSistema = Request.Form("Acceso")
            objCliente.Area_ID = Request.Form("Area")
            objCliente.Cargo_ID = Request.Form("Cargo")
            objCliente.TypeDocument_ID_Jefe = Request.Form("TDocJefe")
            objCliente.Document_ID_Jefe = Request.Form("DocJefe")
            objCliente.Politica_ID = Request.Form("Politica")

            objCliente.GrpDocumentos = Request.Form("GrpDocumento")

            objCliente.UsuarioCreacion = Request.Form("user")
            objCliente.FechaCreacion = Date.Now
            objCliente.UsuarioActualizacion = Request.Form("user")
            objCliente.FechaActualizacion = Date.Now

            ObjListCliente.Add(objCliente)

            result = SQL.Insert(objCliente)

            Response.Write(result)
        Else
            result = "Existe"
            Response.Write(result)
        End If

    End Sub

    ''' <summary>
    ''' funcion que actualiza en la tabla Cliente (UPDATE)
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub Update()

        Dim objCliente As New ClienteClass
        Dim SQL_Cliente As New ClienteSQLClass
        Dim ObjListCliente As New List(Of ClienteClass)

        Dim result As String

        objCliente.Nit_ID = Request.Form("Nit_ID")
        objCliente.TypeDocument_ID = Request.Form("TypeDocument_ID")
        objCliente.Document_ID = Request.Form("Document_ID")

        objCliente.Digito_Verificacion = Request.Form("Digito_Verificacion")
        objCliente.Nombre = Request.Form("Nombre")
        objCliente.Ciudad_ID = Request.Form("Ciudad_ID")
        objCliente.Pais_ID = Request.Form("Pais_ID")

        objCliente.OP_Cliente = Request.Form("OP_Cliente")
        objCliente.OP_Avaluador = Request.Form("OP_Avaluador")
        objCliente.OP_Transito = Request.Form("OP_Transito")
        objCliente.OP_Hacienda = Request.Form("OP_Hacienda")
        objCliente.OP_Empresa = Request.Form("OP_Empresa")
        objCliente.OP_Empleado = Request.Form("OP_Empleado")
        objCliente.OP_Asesor = Request.Form("OP_Asesor")
        objCliente.Other_1 = Request.Form("Other_1")
        objCliente.Other_2 = Request.Form("Other_2")

        objCliente.Nombre_2 = Request.Form("Nombre_2")
        objCliente.Apellido_1 = Request.Form("Ape_1")
        objCliente.Apellido_2 = Request.Form("Ape_2")
        objCliente.Cod_Bank = Request.Form("CodBank")
        objCliente.DocCiudad = Request.Form("CiuDoc")

        objCliente.TipoPersona = Request.Form("TipoPersona")
        objCliente.Regimen = Request.Form("Regimen")

        objCliente.AccesoSistema = Request.Form("Acceso")
        objCliente.Area_ID = Request.Form("Area")
        objCliente.Cargo_ID = Request.Form("Cargo")
        objCliente.TypeDocument_ID_Jefe = Request.Form("TDocJefe")
        objCliente.Document_ID_Jefe = Request.Form("DocJefe")
        objCliente.Politica_ID = Request.Form("Politica")

        objCliente.GrpDocumentos = Request.Form("GrpDocumento")

        objCliente.UsuarioActualizacion = Request.Form("user")
        objCliente.FechaActualizacion = Date.Now

        ObjListCliente.Add(objCliente)

        result = SQL_Cliente.Update(objCliente)

        Response.Write(result)

    End Sub

    ''' <summary>
    ''' funcion que elimina en la tabla Cliente (DELETE)
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub Delete()

        Dim objCliente As New ClienteClass
        Dim SQL_Cliente As New ClienteSQLClass
        Dim ObjListCliente As New List(Of ClienteClass)

        Dim result As String

        objCliente.Nit_ID = Request.Form("Nit_ID")
        objCliente.TypeDocument_ID = Request.Form("TypeDocument_ID")
        objCliente.Document_ID = Request.Form("Document_ID")
        ObjListCliente.Add(objCliente)

        result = SQL_Cliente.Delete(objCliente)
        Response.Write(result)

    End Sub

#End Region

#Region "CRUD_DIRECCIONES"

    ''' <summary>
    ''' traemos todos los datos para tabla DIRECCIONES DEL CLIENTE SELECCIONADO (READ)
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub R_ead_Adress()

        Dim SQL As New DireccionesSQLClass
        Dim ObjList As New List(Of DireccionesClass)

        Dim vl_S_Nit As String = Request.Form("Nit")
        Dim vl_S_TypeDoc As String = Request.Form("TypeDoc")
        Dim vl_S_Doc As String = Request.Form("Doc")

        ObjList = SQL.Read_All(vl_S_Nit, vl_S_TypeDoc, vl_S_Doc)

        If ObjList Is Nothing Then

            Dim obj As New DireccionesClass
            ObjList = New List(Of DireccionesClass)

            obj.Nit_ID = ""
            obj.FechaActualizacion = ""
            obj.Usuario = ""

            ObjList.Add(obj)
        End If

        Response.Write(JsonConvert.SerializeObject(ObjList.ToArray()))

    End Sub

    ''' <summary>
    ''' funcion que inserta en la tabla Direcciones desde cliente (INSERT)
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub C_reate_Adress()

        Dim SQL As New DireccionesSQLClass
        Dim ObjListAdress As New List(Of DireccionesClass)
        Dim result As String = ""

        Dim obj As New DireccionesClass

        obj.Nit_ID = Request.Form("Nit")
        obj.TypeDoc_ID = Request.Form("TypeDoc")
        obj.Doc_ID = Request.Form("Doc")

        SQL.Delete_All(obj)

        'convertimos el list json en un objeto direcciones
        ObjListAdress = InsertList_Adress()

        'validamos si el objeto esta lleno
        If ObjListAdress.Count > 0 Then

            For Each objAdress As DireccionesClass In ObjListAdress
                result = SQL.Insert(objAdress)
            Next

            If result = "Exito" Then
                result = "CREO"
            Else
                result = "ERROR"
            End If
           
        End If

        Response.Write(result)

    End Sub

#End Region

#Region "CRUD BANCOS"

    ''' <summary>
    ''' traemos todos los datos para tabla Entidades Financieras DEL CLIENTE SELECCIONADO (READ)
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub R_ead_Bank()

        Dim SQL As New Relaciones_FinancierasSQLClass
        Dim ObjList As New List(Of Relaciones_FinancierasClass)

        Dim vl_S_Nit As String = Request.Form("Nit")
        Dim vl_S_TypeDoc As String = Request.Form("TypeDoc")
        Dim vl_S_Doc As String = Request.Form("Doc")

        ObjList = SQL.Read_All(vl_S_Nit, vl_S_TypeDoc, vl_S_Doc)

        If ObjList Is Nothing Then

            Dim obj As New Relaciones_FinancierasClass
            ObjList = New List(Of Relaciones_FinancierasClass)

            obj.Nit_ID = ""
            obj.FechaActualizacion = ""

            ObjList.Add(obj)
        End If

        Response.Write(JsonConvert.SerializeObject(ObjList.ToArray()))

    End Sub

    ''' <summary>
    ''' funcion que inserta en la tabla Direcciones desde cliente (INSERT)
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub C_reate_Bank()

        Dim SQL As New Relaciones_FinancierasSQLClass
        Dim ObjList As New List(Of Relaciones_FinancierasClass)
        Dim result As String = ""

        Dim obj As New Relaciones_FinancierasClass

        obj.Nit_ID = Request.Form("Nit")
        obj.TypeDocument_ID = Request.Form("TypeDoc")
        obj.Document_ID = Request.Form("Doc")

        SQL.Delete_All(obj)

        'convertimos el list json en un objeto direcciones
        ObjList = InsertList_Bank()

        'validamos si el objeto esta lleno
        If ObjList.Count > 0 Then

            For Each objBank As Relaciones_FinancierasClass In ObjList
                result = SQL.Insert(objBank)
            Next

            If result = "Exito" Then
                result = "CREO"
            Else
                result = "ERROR"
            End If

        End If

        Response.Write(result)

    End Sub

#End Region

#Region "DOCUMENTOS"

    ''' <summary>
    ''' traemos todos los datos para tabla Entidades Financieras DEL CLIENTE SELECCIONADO (READ)
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub R_ead_Document()

        Dim SQL As New DocumentosSQLClass
        Dim ObjList As New List(Of DocumentosClass)

        Dim vl_S_Nit As String = Request.Form("Nit")
        Dim vl_S_TypeDoc As String = Request.Form("TypeDoc")
        Dim vl_S_Doc As String = Request.Form("Doc")

        ObjList = SQL.Read_All(vl_S_Nit, vl_S_TypeDoc, vl_S_Doc)

        If ObjList Is Nothing Then

            Dim obj As New DocumentosClass
            ObjList = New List(Of DocumentosClass)

            obj.Nit_ID = ""
            obj.FechaActualizacion = ""

            ObjList.Add(obj)
        End If

        Response.Write(JsonConvert.SerializeObject(ObjList.ToArray()))

    End Sub

    ''' <summary>
    ''' traemos todos los datos para tabla Entidades Financieras DEL CLIENTE SELECCIONADO (READ)
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub Verifica_Foto()

        Dim SQL As New DocumentosSQLClass
        Dim ObjList As New List(Of DocumentosClass)

        Dim vl_S_Nit As String = Request.Form("Nit")
        Dim vl_S_TypeDoc As String = Request.Form("TypeDoc")
        Dim vl_S_Doc As String = Request.Form("Doc")

        ObjList = SQL.ExistFoto(vl_S_Nit, vl_S_TypeDoc, vl_S_Doc)

        If ObjList Is Nothing Then

            Dim obj As New DocumentosClass
            ObjList = New List(Of DocumentosClass)

            obj.Nit_ID = ""
            obj.FechaActualizacion = ""

            ObjList.Add(obj)
        End If

        Response.Write(JsonConvert.SerializeObject(ObjList.ToArray()))

    End Sub


#End Region

#Region "DROP LIST"

    ''' <summary>
    ''' funcion que carga el objeto DDL consulta
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub CargarCliente()

        Dim SQL As New ClienteSQLClass
        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim vl_S_Tabla As String = Request.Form("tabla")

        ObjListDroplist = SQL.Charge_DropListCliente(vl_S_Tabla)
        Response.Write(JsonConvert.SerializeObject(ObjListDroplist.ToArray()))

    End Sub


    ''' <summary>
    ''' funcion que carga el objeto DDL consulta
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub CargarEntFinan()

        Dim SQL As New ClienteSQLClass
        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim vl_S_Tabla As String = Request.Form("tabla")

        ObjListDroplist = SQL.Charge_DropListEntFinan(vl_S_Tabla)
        Response.Write(JsonConvert.SerializeObject(ObjListDroplist.ToArray()))

    End Sub

    ''' <summary>
    ''' funcion que carga el objeto DDL consulta
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub CargarTCuenta()

        Dim SQL As New ClienteSQLClass
        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim vl_S_Tabla As String = Request.Form("tabla")

        ObjListDroplist = SQL.Charge_DropListTCuenta(vl_S_Tabla)
        Response.Write(JsonConvert.SerializeObject(ObjListDroplist.ToArray()))

    End Sub

    ''' <summary>
    ''' funcion que carga el objeto DDL consulta
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub CargarDroplist()

        Dim SQL As New ClienteSQLClass
        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim vl_S_Tabla As String = Request.Form("tabla")

        ObjListDroplist = SQL.ReadCharge_DropList(vl_S_Tabla)
        Response.Write(JsonConvert.SerializeObject(ObjListDroplist.ToArray()))

    End Sub

    ''' <summary>
    ''' funcion que carga el objeto DDL consulta
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub CargarPaises()

        Dim SQL As New CiudadesSQLClass
        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim vl_S_Tabla As String = Request.Form("tabla")

        ObjListDroplist = SQL.Charge_DropListPais(vl_S_Tabla)
        Response.Write(JsonConvert.SerializeObject(ObjListDroplist.ToArray()))

    End Sub

    ''' <summary>
    ''' funcion que carga el objeto DDL consulta
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub CargarCiudad()

        Dim SQL As New Inf_ImpuestoSQLClass
        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim vl_S_Index As String = Request.Form("Index")

        ObjListDroplist = SQL.Charge_DropListCiudad(vl_S_Index)
        Response.Write(JsonConvert.SerializeObject(ObjListDroplist.ToArray()))

    End Sub

    ''' <summary>
    ''' funcion que carga el objeto DDL consulta
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub CargarDocumento()

        Dim SQL As New ClienteSQLClass
        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim vl_S_Tabla As String = Request.Form("tabla")

        ObjListDroplist = SQL.Charge_DropListDocumento(vl_S_Tabla)
        Response.Write(JsonConvert.SerializeObject(ObjListDroplist.ToArray()))

    End Sub

    ''' <summary>
    ''' funcion que carga el objeto DDL consulta
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub CargarArea()

        Dim SQL As New AreaSQLClass
        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim vl_S_Index As String = Request.Form("Index")

        ObjListDroplist = SQL.Charge_DropListAreaDepend(vl_S_Index)
        Response.Write(JsonConvert.SerializeObject(ObjListDroplist.ToArray()))

    End Sub

    ''' <summary>
    ''' funcion que carga el objeto DDL consulta
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub CargarCargo()

        Dim SQL As New CargoSQLClass
        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim vl_S_Index As String = Request.Form("Index")

        ObjListDroplist = SQL.Charge_DropListCargoDepend(vl_S_Index)
        Response.Write(JsonConvert.SerializeObject(ObjListDroplist.ToArray()))

    End Sub

    ''' <summary>
    ''' funcion que carga el objeto DDL consulta
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub CargarJefe()

        Dim SQL As New ClienteSQLClass
        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim vl_S_Index As String = Request.Form("Index")

        ObjListDroplist = SQL.Charge_DropListJefe(vl_S_Index)
        Response.Write(JsonConvert.SerializeObject(ObjListDroplist.ToArray()))

    End Sub

    ''' <summary>
    ''' funcion que carga el objeto DDL consulta
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub CargarGrpDocumentos()

        Dim SQL As New ClienteSQLClass
        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim vl_S_Index As String = Request.Form("Index")

        ObjListDroplist = SQL.Charge_DropListGrpDocumentos(vl_S_Index)
        Response.Write(JsonConvert.SerializeObject(ObjListDroplist.ToArray()))

    End Sub

    ''' <summary>
    ''' funcion que carga el objeto DDL consulta
    ''' </summary>
    ''' <remarks></remarks>
    Protected Sub CargarSeguridad()

        Dim SQL As New CargoSQLClass
        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim vl_S_Tabla As String = Request.Form("tabla")

        ObjListDroplist = SQL.Charge_DropListSeguridad(vl_S_Tabla)
        Response.Write(JsonConvert.SerializeObject(ObjListDroplist.ToArray()))

    End Sub

#End Region

#Region "OTRAS FUNCIONES"

    ''' <summary>
    ''' creamos el objeto lista para la insercion en la BD
    ''' </summary>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function InsertList_Adress()

        Dim vl_S_ListAdress As String = Request.Form("ListDirecciones")
        Dim NewListAdress = JsonConvert.DeserializeObject(Of List(Of DireccionesClass))(vl_S_ListAdress)
        Dim ListAdress As New List(Of DireccionesClass)

        For Each Item As DireccionesClass In NewListAdress

            Dim Obj As New DireccionesClass

            Obj.Consecutivo = Item.Consecutivo
            Obj.Contacto = Item.Contacto
            Obj.Correo_1 = Item.Correo_1
            Obj.Correo_2 = Item.Correo_2
            Obj.Direccion = Item.Direccion
            Obj.Doc_ID = Item.Doc_ID
            Obj.Nit_ID = Item.Nit_ID
            Obj.PaginaWeb = Item.PaginaWeb
            Obj.TypeDoc_ID = Item.TypeDoc_ID

            Obj.Pais_ID = Item.Pais_ID
            Obj.Ciudad_ID = Item.Ciudad_ID

            If Convert.ToString(Item.Telefono_1) = "" Then
                Obj.Telefono_1 = 0
            Else
                Obj.Telefono_1 = Item.Telefono_1
            End If

            If Convert.ToString(Item.Telefono_2) = "" Then
                Obj.Telefono_2 = 0
            Else
                Obj.Telefono_2 = Item.Telefono_2
            End If

            If Convert.ToString(Item.Telefono_3) = "" Then
                Obj.Telefono_3 = 0
            Else
                Obj.Telefono_3 = Item.Telefono_3
            End If

            If Convert.ToString(Item.Telefono_4) = "" Then
                Obj.Telefono_4 = 0
            Else
                Obj.Telefono_4 = Item.Telefono_4
            End If

            If Item.FechaActualizacion = "" Then
                Obj.FechaActualizacion = Date.Now
            Else
                Obj.FechaActualizacion = Item.FechaActualizacion
            End If

            If Item.Usuario = "" Then
                Obj.Usuario = Request.Form("user")
            Else
                Obj.Usuario = Item.Usuario
            End If

            ListAdress.Add(Obj)

        Next

        Return ListAdress

    End Function

    ''' <summary>
    ''' creamos el objeto lista para la insercion en la BD
    ''' </summary>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function InsertList_Bank()

        Dim vl_S_List As String = Request.Form("ListBancos")
        Dim NewList = JsonConvert.DeserializeObject(Of List(Of Relaciones_FinancierasClass))(vl_S_List)
        Dim List As New List(Of Relaciones_FinancierasClass)

        For Each Item As Relaciones_FinancierasClass In NewList

            Dim Obj As New Relaciones_FinancierasClass

            Obj.Nit_ID = Item.Nit_ID
            Obj.TypeDocument_ID = Item.TypeDocument_ID
            Obj.Document_ID = Item.Document_ID

            Obj.TypeDocument_ID_EF = Item.TypeDocument_ID_EF
            Obj.Document_ID_EF = Item.Document_ID_EF
            Obj.TipoCuenta = Item.TipoCuenta
            Obj.Cuenta = Item.Cuenta

            Obj.UsuarioCreacion = Item.UsuarioCreacion
            Obj.FechaCreacion = Item.FechaCreacion

            Obj.UsuarioActualizacion = Item.UsuarioActualizacion
            Obj.FechaActualizacion = Item.FechaActualizacion

            List.Add(Obj)

        Next

        Return List

    End Function

#End Region


End Class