Imports System.Data.SqlClient
Imports System.Data.OleDb

Public Class ClienteSQLClass

#Region "CRUD"

    ''' <summary>
    ''' creala consulta para la tabla Cliente parametrizada (READ)
    ''' </summary>
    ''' <param name="vp_S_Filtro"></param>
    ''' <param name="vp_S_Opcion"></param>
    ''' <param name="vp_S_Contenido"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function Read_All(ByVal vp_S_Filtro As String, ByVal vp_S_Opcion As String, ByVal vp_S_Contenido As String)

        Dim ObjListCliente As New List(Of ClienteClass)
        Dim StrQuery As String = ""
        Dim conex As New Conector
        Dim Conexion As String = conex.typeConexion("2")

        Dim BD_Admin As String = System.Web.Configuration.WebConfigurationManager.AppSettings("BDAdmin").ToString

        Dim sql As New StringBuilder

        If vp_S_Filtro = "N" And vp_S_Opcion = "ALL" Then
            sql.Append(" SELECT CLI_Nit_ID, " & _
                              " CLI_TypeDocument_ID, " & _
                              " CLI_Document_ID, " & _
                              " CLI_Digito_Verificacion, " & _
                              " CLI_Nombre, " & _
                              " CLI_Ciudad_ID, " & _
                              " CLI_OP_Cliente, " & _
                              " CLI_OP_Avaluador, " & _
                              " CLI_OP_Transito, " & _
                              " CLI_OP_Hacienda, " & _
                              " CLI_OP_Empresa, " & _
                              " CLI_OP_Empleado, " & _
                              " CLI_OP_Asesor, " & _
                              " CLI_Other_1, " & _
                              " CLI_Other_2, " & _
                              " CLI_FechaActualizacion, " & _
                              " CLI_Usuario, " & _
                              " C.C_Descripcion, " & _
                              " TD.TD_Descripcion, " & _
                              " CLI_Pais_ID, " & _
                              " P.P_Name, " & _
                              " CLI_Nombre_2, " & _
                              " CLI_Apellido_1, " & _
                              " CLI_Apellido_2, " & _
                              " CLI_Cod_Bank, " & _
                              " CLI_DocCiudad, " & _
                              " CLI_TipoPersona, " & _
                              " CLI_Regimen, " & _
                              " D1.DDLL_Descripcion AS DescripTPersona, " & _
                              " D2.DDLL_Descripcion AS DescripRegimen " & _
                        " FROM CLIENTE CLI " & _
                        " INNER JOIN PAISES P ON P.P_Cod = CLI.CLI_Pais_ID " & _
                        " INNER JOIN CIUDADES C ON C.C_Ciudad_ID = CLI.CLI_Ciudad_ID " & _
                        " LEFT JOIN " & BD_Admin & ".dbo.TC_TIPO_DOCUMENTO TD ON TD.TD_ID_TDoc = CLI.CLI_TypeDocument_ID " & _
                        " LEFT JOIN " & BD_Admin & ".dbo.TC_DDL_TIPO D1 ON D1.DDL_ID = CLI.CLI_TipoPersona AND D1.DDL_Tabla = 'TIPO_PERSONA' " & _
                        " LEFT JOIN " & BD_Admin & ".dbo.TC_DDL_TIPO D2 ON D2.DDL_ID = CLI.CLI_Regimen AND D2.DDL_Tabla = 'REGIMEN' ")
        Else

            If vp_S_Contenido = "ALL" Then
                sql.Append(" SELECT CLI_Nit_ID, " & _
                              " CLI_TypeDocument_ID, " & _
                              " CLI_Document_ID, " & _
                              " CLI_Digito_Verificacion, " & _
                              " CLI_Nombre, " & _
                              " CLI_Ciudad_ID, " & _
                              " CLI_OP_Cliente, " & _
                              " CLI_OP_Avaluador, " & _
                              " CLI_OP_Transito, " & _
                              " CLI_OP_Hacienda, " & _
                              " CLI_OP_Empresa, " & _
                              " CLI_OP_Empleado, " & _
                              " CLI_OP_Asesor, " & _
                              " CLI_Other_1, " & _
                              " CLI_Other_2, " & _
                              " CLI_FechaActualizacion, " & _
                              " CLI_Usuario, " & _
                              " C.C_Descripcion, " & _
                              " TD.TD_Descripcion, " & _
                              " CLI_Pais_ID, " & _
                              " P.P_Name, " & _
                              " CLI_Nombre_2, " & _
                              " CLI_Apellido_1, " & _
                              " CLI_Apellido_2, " & _
                              " CLI_Cod_Bank, " & _
                              " CLI_DocCiudad, " & _
                              " CLI_TipoPersona, " & _
                              " CLI_Regimen, " & _
                              " D1.DDLL_Descripcion AS DescripTPersona, " & _
                              " D2.DDLL_Descripcion AS DescripRegimen " & _
                        " FROM CLIENTE CLI " & _
                        " INNER JOIN PAISES P ON P.P_Cod = CLI.CLI_Pais_ID " & _
                        " INNER JOIN CIUDADES C ON C.C_Ciudad_ID = CLI.CLI_Ciudad_ID " & _
                        " LEFT JOIN " & BD_Admin & ".dbo.TC_TIPO_DOCUMENTO TD ON TD.TD_ID_TDoc = CLI.CLI_TypeDocument_ID " & _
                        " LEFT JOIN " & BD_Admin & ".dbo.TC_DDL_TIPO D1 ON D1.DDL_ID = CLI.CLI_TipoPersona AND D1.DDL_Tabla = 'TIPO_PERSONA' " & _
                        " LEFT JOIN " & BD_Admin & ".dbo.TC_DDL_TIPO D2 ON D2.DDL_ID = CLI.CLI_Regimen AND D2.DDL_Tabla = 'REGIMEN' ")
            Else
                sql.Append(" SELECT CLI_Nit_ID, " & _
                              " CLI_TypeDocument_ID, " & _
                              " CLI_Document_ID, " & _
                              " CLI_Digito_Verificacion, " & _
                              " CLI_Nombre, " & _
                              " CLI_Ciudad_ID, " & _
                              " CLI_OP_Cliente, " & _
                              " CLI_OP_Avaluador, " & _
                              " CLI_OP_Transito, " & _
                              " CLI_OP_Hacienda, " & _
                              " CLI_OP_Empresa, " & _
                              " CLI_OP_Empleado, " & _
                              " CLI_OP_Asesor, " & _
                              " CLI_Other_1, " & _
                              " CLI_Other_2, " & _
                              " CLI_FechaActualizacion, " & _
                              " CLI_Usuario, " & _
                              " C.C_Descripcion, " & _
                              " TD.TD_Descripcion, " & _
                              " CLI_Pais_ID, " & _
                              " P.P_Name, " & _
                              " CLI_Nombre_2, " & _
                              " CLI_Apellido_1, " & _
                              " CLI_Apellido_2, " & _
                              " CLI_Cod_Bank, " & _
                              " CLI_DocCiudad, " & _
                              " CLI_TipoPersona, " & _
                              " CLI_Regimen, " & _
                              " D1.DDLL_Descripcion AS DescripTPersona, " & _
                              " D2.DDLL_Descripcion AS DescripRegimen " & _
                        " FROM CLIENTE CLI " & _
                        " INNER JOIN PAISES P ON P.P_Cod = CLI.CLI_Pais_ID " & _
                        " INNER JOIN CIUDADES C ON C.C_Ciudad_ID = CLI.CLI_Ciudad_ID " & _
                        " LEFT JOIN " & BD_Admin & ".dbo.TC_TIPO_DOCUMENTO TD ON TD.TD_ID_TDoc = CLI.CLI_TypeDocument_ID " & _
                        " LEFT JOIN " & BD_Admin & ".dbo.TC_DDL_TIPO D1 ON D1.DDL_ID = CLI.CLI_TipoPersona AND D1.DDL_Tabla = 'TIPO_PERSONA' " & _
                        " LEFT JOIN " & BD_Admin & ".dbo.TC_DDL_TIPO D2 ON D2.DDL_ID = CLI.CLI_Regimen AND D2.DDL_Tabla = 'REGIMEN' " & _
                        " WHERE " & vp_S_Opcion & " like '%" & vp_S_Contenido & "%'")
            End If
        End If

        StrQuery = sql.ToString

        ObjListCliente = list(StrQuery, Conexion)

        Return ObjListCliente

    End Function

    ''' <summary>
    ''' funcion que crea el query para la insercion de nuevo  Cliente (INSERT)
    ''' </summary>
    ''' <param name="vp_O_Obj"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function Insert(ByVal vp_O_Obj As ClienteClass)

        Dim conex As New Conector
        Dim Result As String
        ' definiendo los objetos
        Dim sql As New StringBuilder
        Dim StrQueryID As String = ""
        Dim StrQuery As String = ""

        sql.AppendLine("INSERT CLIENTE (" & _
            " CLI_Nit_ID, " & _
            " CLI_TypeDocument_ID, " & _
            " CLI_Document_ID, " & _
            " CLI_Digito_Verificacion, " & _
            " CLI_Nombre, " & _
            " CLI_Nombre_2, " & _
            " CLI_Apellido_1, " & _
            " CLI_Apellido_2, " & _
            " CLI_Cod_Bank, " & _
            " CLI_DocCiudad, " & _
            " CLI_Pais_ID, " & _
            " CLI_Ciudad_ID, " & _
            " CLI_OP_Cliente, " & _
            " CLI_OP_Avaluador, " & _
            " CLI_OP_Transito, " & _
            " CLI_OP_Hacienda, " & _
            " CLI_OP_Empresa, " & _
            " CLI_OP_Empleado, " & _
            " CLI_OP_Asesor, " & _
            " CLI_Other_1, " & _
            " CLI_Other_2, " & _
            " CLI_TipoPersona, " & _
            " CLI_Regimen, " & _
            " CLI_FechaActualizacion, " & _
            " CLI_Usuario " & _
             ")")
        sql.AppendLine("VALUES (")
        sql.AppendLine("'" & vp_O_Obj.Nit_ID & "',")
        sql.AppendLine("'" & vp_O_Obj.TypeDocument_ID & "',")
        sql.AppendLine("'" & vp_O_Obj.Document_ID & "',")
        sql.AppendLine("'" & vp_O_Obj.Digito_Verificacion & "',")
        sql.AppendLine("'" & vp_O_Obj.Nombre & "',")
        sql.AppendLine("'" & vp_O_Obj.Nombre_2 & "',")
        sql.AppendLine("'" & vp_O_Obj.Apellido_1 & "',")
        sql.AppendLine("'" & vp_O_Obj.Apellido_2 & "',")
        sql.AppendLine("'" & vp_O_Obj.Cod_Bank & "',")
        sql.AppendLine("'" & vp_O_Obj.DocCiudad & "',")
        sql.AppendLine("'" & vp_O_Obj.Pais_ID & "',")
        sql.AppendLine("'" & vp_O_Obj.Ciudad_ID & "',")
        sql.AppendLine("'" & vp_O_Obj.OP_Cliente & "',")
        sql.AppendLine("'" & vp_O_Obj.OP_Avaluador & "',")
        sql.AppendLine("'" & vp_O_Obj.OP_Transito & "',")
        sql.AppendLine("'" & vp_O_Obj.OP_Hacienda & "',")
        sql.AppendLine("'" & vp_O_Obj.OP_Empresa & "',")
        sql.AppendLine("'" & vp_O_Obj.OP_Empleado & "',")
        sql.AppendLine("'" & vp_O_Obj.OP_Asesor & "',")
        sql.AppendLine("'" & vp_O_Obj.Other_1 & "',")
        sql.AppendLine("'" & vp_O_Obj.Other_2 & "',")
        sql.AppendLine("'" & vp_O_Obj.TipoPersona & "',")
        sql.AppendLine("'" & vp_O_Obj.Regimen & "',")
        sql.AppendLine("'" & vp_O_Obj.FechaActualizacion & "',")
        sql.AppendLine("'" & vp_O_Obj.Usuario & "' ) ")

        StrQuery = sql.ToString

        Result = conex.StrInsert_and_Update_All(StrQuery, "2")

        Return Result

    End Function

    ''' <summary>
    ''' funcion que crea el query para la modificacion del Cliente (UPDATE)
    ''' </summary>
    ''' <param name="vp_O_Obj"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function Update(ByVal vp_O_Obj As ClienteClass)

        Dim conex As New Conector
        Dim Result As String
        ' definiendo los objetos
        Dim sql As New StringBuilder
        Dim StrQuery As String = ""
        sql.AppendLine(" UPDATE CLIENTE SET " & _
                          " CLI_Nombre ='" & vp_O_Obj.Nombre & "', " & _
                          " CLI_Nombre_2 ='" & vp_O_Obj.Nombre_2 & "', " & _
                          " CLI_Apellido_1 ='" & vp_O_Obj.Apellido_1 & "', " & _
                          " CLI_Apellido_2 ='" & vp_O_Obj.Apellido_2 & "', " & _
                          " CLI_Cod_Bank ='" & vp_O_Obj.Cod_Bank & "', " & _
                          " CLI_DocCiudad ='" & vp_O_Obj.DocCiudad & "', " & _
                          " CLI_Pais_ID ='" & vp_O_Obj.Pais_ID & "', " & _
                          " CLI_Ciudad_ID ='" & vp_O_Obj.Ciudad_ID & "', " & _
                          " CLI_OP_Cliente ='" & vp_O_Obj.OP_Cliente & "', " & _
                          " CLI_OP_Avaluador ='" & vp_O_Obj.OP_Avaluador & "', " & _
                          " CLI_OP_Transito ='" & vp_O_Obj.OP_Transito & "', " & _
                          " CLI_OP_Hacienda ='" & vp_O_Obj.OP_Hacienda & "', " & _
                          " CLI_OP_Empresa ='" & vp_O_Obj.OP_Empresa & "', " & _
                          " CLI_OP_Empleado ='" & vp_O_Obj.OP_Empleado & "', " & _
                          " CLI_OP_Asesor ='" & vp_O_Obj.OP_Asesor & "', " & _
                          " CLI_Other_1 ='" & vp_O_Obj.Other_1 & "', " & _
                          " CLI_Other_2 ='" & vp_O_Obj.Other_2 & "', " & _
                          " CLI_TipoPersona ='" & vp_O_Obj.TipoPersona & "', " & _
                          " CLI_Regimen ='" & vp_O_Obj.Regimen & "', " & _
                          " CLI_FechaActualizacion ='" & vp_O_Obj.FechaActualizacion & "', " & _
                          " CLI_Usuario ='" & vp_O_Obj.Usuario & "'" & _
                       " WHERE CLI_Nit_ID = '" & vp_O_Obj.Nit_ID & "'" & _
                       " AND CLI_TypeDocument_ID = '" & vp_O_Obj.TypeDocument_ID & "'" & _
                       " AND CLI_Document_ID = '" & vp_O_Obj.Document_ID & "'")

        StrQuery = sql.ToString

        Result = conex.StrInsert_and_Update_All(StrQuery, "2")

        Return Result

    End Function

    ''' <summary>
    ''' funcion que crea el query para la eliminacion del Cliente (DELETE)
    ''' </summary>
    ''' <param name="vp_O_Obj"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function Delete(ByVal vp_O_Obj As ClienteClass)

        Dim conex As New Conector
        Dim Result As String = ""
        ' definiendo los objetos
        Dim sql As New StringBuilder
        Dim StrQuery As String
        Dim SQL_general As New GeneralSQLClass

        Dim SQLDirecion As New DireccionesSQLClass
        Dim Objdireccion As New DireccionesClass
        Dim SQLBank As New Relaciones_FinancierasSQLClass
        Dim ObjBank As New Relaciones_FinancierasClass

        Objdireccion.Nit_ID = vp_O_Obj.Nit_ID
        ObjBank.Nit_ID = vp_O_Obj.Nit_ID

        Objdireccion.TypeDoc_ID = vp_O_Obj.TypeDocument_ID
        ObjBank.TypeDocument_ID = vp_O_Obj.TypeDocument_ID

        Objdireccion.Doc_ID = vp_O_Obj.Document_ID
        ObjBank.Document_ID = vp_O_Obj.Document_ID

        'Eliminamos las direcciones
        SQLDirecion.Delete_All(Objdireccion)

        'Eliminamos las Entidades Financieras
        SQLBank.Delete_All(ObjBank)

        sql.AppendLine(" DELETE CLIENTE " & _
                       " WHERE CLI_Nit_ID = '" & vp_O_Obj.Nit_ID & "'" & _
                       " AND CLI_TypeDocument_ID = '" & vp_O_Obj.TypeDocument_ID & "'" & _
                       " AND CLI_Document_ID = '" & vp_O_Obj.Document_ID & "'")

        StrQuery = sql.ToString
        Result = conex.StrInsert_and_Update_All(StrQuery, "2")

        Return Result

    End Function

#End Region

#Region "CONSULTAS DROP LIST"

    ''' <summary>
    ''' crea la consulta para cargar el combo
    ''' </summary>
    ''' <param name="vp_S_Table"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function ReadCharge_DropList(ByVal vp_S_Table As String)

        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim StrQuery As String = ""
        Dim conex As New Conector
        Dim Conexion As String = conex.typeConexion("1")

        Dim SQLGeneral As New GeneralSQLClass
        Dim sql As New StringBuilder

        sql.Append(" SELECT T_IndexColumna As ID, T_Traductor As descripcion FROM TC_TABLAS " & _
                   " WHERE T_Tabla = '" & vp_S_Table & "' AND T_Param = '1' ")
        StrQuery = sql.ToString

        ObjListDroplist = SQLGeneral.listdrop(StrQuery, Conexion)

        Return ObjListDroplist


    End Function

    ''' <summary>
    ''' crea la consulta para cargar el combo
    ''' </summary>
    ''' <param name="vp_S_Table"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function Charge_DropListCiudad(ByVal vp_S_Table As String)

        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim StrQuery As String = ""
        Dim conex As New Conector
        Dim Conexion As String = conex.typeConexion("2")

        Dim SQLGeneral As New GeneralSQLClass
        Dim sql As New StringBuilder

        sql.Append(" SELECT C_Ciudad_ID AS ID,CAST(C_Ciudad_ID AS NVARCHAR(15)) + ' - ' + C_Descripcion AS DESCRIPCION FROM CIUDADES ")
        StrQuery = sql.ToString

        ObjListDroplist = SQLGeneral.listdrop(StrQuery, Conexion)

        Return ObjListDroplist

    End Function

    ''' <summary>
    ''' crea la consulta para cargar el combo
    ''' </summary>
    ''' <param name="vp_S_Table"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function Charge_DropListDocumento(ByVal vp_S_Table As String)

        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim StrQuery As String = ""
        Dim conex As New Conector
        Dim Conexion As String = conex.typeConexion("1")

        Dim SQLGeneral As New GeneralSQLClass
        Dim sql As New StringBuilder

        sql.Append(" SELECT TD_ID_TDoc AS ID, CAST(TD_ID_TDoc AS NVARCHAR(15)) + ' - ' + TD_Descripcion AS Descripcion  FROM TC_TIPO_DOCUMENTO ")
        StrQuery = sql.ToString

        ObjListDroplist = SQLGeneral.listdrop(StrQuery, Conexion)

        Return ObjListDroplist

    End Function


    ''' <summary>
    ''' crea la consulta para cargar el combo
    ''' </summary>
    ''' <param name="vp_S_Table"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function Charge_DropListCliente(ByVal vp_S_Table As String)

        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim StrQuery As String = ""
        Dim conex As New Conector
        Dim Conexion As String = conex.typeConexion("2")

        Dim SQLGeneral As New GeneralSQLClass
        Dim sql As New StringBuilder

        sql.Append(" SELECT CLI_Nit_ID AS ID, CAST(CLI_Document_ID AS NVARCHAR(20)) + '_' + CAST(CLI_Digito_Verificacion AS NVARCHAR(3)) + ' - ' +  CLI_Nombre AS descripcion FROM CLIENTE WHERE CLI_OP_Empresa ='S' ")
        StrQuery = sql.ToString

        ObjListDroplist = SQLGeneral.listdrop(StrQuery, Conexion)

        Return ObjListDroplist

    End Function

    ''' <summary>
    ''' crea la consulta para cargar el combo
    ''' </summary>
    ''' <param name="vp_S_Table"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function Charge_DropListEntFinan(ByVal vp_S_Table As String)

        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim StrQuery As String = ""
        Dim conex As New Conector
        Dim Conexion As String = conex.typeConexion("2")

        Dim SQLGeneral As New GeneralSQLClass
        Dim sql As New StringBuilder

        sql.Append(" SELECT CLI_Document_ID AS ID, CAST(CLI_Document_ID AS NVARCHAR(20)) + ' - ' + CAST(CLI_TypeDocument_ID AS NVARCHAR(3)) + ' - ' +  CLI_Nombre AS descripcion FROM CLIENTE WHERE CLI_Other_2 = 'S' ")
        StrQuery = sql.ToString

        ObjListDroplist = SQLGeneral.listdrop(StrQuery, Conexion)

        Return ObjListDroplist

    End Function

    ''' <summary>
    ''' crea la consulta para cargar el combo
    ''' </summary>
    ''' <param name="vp_S_Table"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function Charge_DropListTCuenta(ByVal vp_S_Table As String)

        Dim ObjListDroplist As New List(Of Droplist_Class)
        Dim StrQuery As String = ""
        Dim conex As New Conector
        Dim Conexion As String = conex.typeConexion("2")

        Dim SQLGeneral As New GeneralSQLClass
        Dim sql As New StringBuilder

        sql.Append(" SELECT TC_ID AS ID,CAST(TC_ID AS NVARCHAR(15)) + ' - ' + TC_Descripcion AS DESCRIPCION FROM TIPOCUENTA ")
        StrQuery = sql.ToString

        ObjListDroplist = SQLGeneral.listdrop(StrQuery, Conexion)

        Return ObjListDroplist

    End Function


#End Region

#Region "OTRAS CONSULTAS"

    ''' <summary>
    ''' creala consulta para del Cliente seleccionado (READ)
    ''' </summary>
    ''' <param name="vp_S_Nit"></param>
    ''' <param name="vp_S_TypeDocument"></param>
    ''' <param name="vp_S_Document"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function Read_Client(ByVal vp_S_Nit As String, ByVal vp_S_TypeDocument As String, ByVal vp_S_Document As String)

        Dim ObjListCliente As New List(Of ClienteClass)
        Dim StrQuery As String = ""
        Dim conex As New Conector
        Dim Conexion As String = conex.typeConexion("2")

        Dim sql As New StringBuilder

        sql.Append(" SELECT CLI_Nit_ID, " & _
                    " CLI_TypeDocument_ID, " & _
                    " CLI_Document_ID, " & _
                    " CLI_Digito_Verificacion, " & _
                    " CLI_Nombre, " & _
                    " CLI_Ciudad_ID, " & _
                    " CLI_OP_Cliente, " & _
                    " CLI_OP_Avaluador, " & _
                    " CLI_OP_Transito, " & _
                    " CLI_OP_Hacienda, " & _
                    " CLI_OP_Empresa, " & _
                    " CLI_OP_Empleado, " & _
                    " CLI_OP_Asesor, " & _
                    " CLI_Other_1, " & _
                    " CLI_Other_2, " & _
                    " CLI_FechaActualizacion, " & _
                    " CLI_Usuario, " & _
                    " C.C_Descripcion, " & _
                    " TD.TD_Descripcion, " & _
                    " CLI_Pais_ID, " & _
                    " P.P_Name, " & _
                    " CLI_Nombre_2, " & _
                    " CLI_Apellido_1, " & _
                    " CLI_Apellido_2, " & _
                    " CLI_Cod_Bank, " & _
                    " CLI_DocCiudad " & _
                " FROM CLIENTE CLI " & _
                " INNER JOIN PAISES P ON P.P_Cod = CLI.CLI_Pais_ID " & _
                " INNER JOIN CIUDADES C ON C.C_Ciudad_ID = CLI.CLI_Ciudad_ID " & _
                " INNER JOIN M_SEGURIDAD.dbo.TC_TIPO_DOCUMENTO TD ON TD.TD_ID_TDoc = CLI.CLI_TypeDocument_ID " & _
                " WHERE CLI_Nit_ID = '" & vp_S_Nit & "' " & _
                " AND CLI_TypeDocument_ID = '" & vp_S_TypeDocument & "'" & _
                " AND CLI_Document_ID = '" & vp_S_Document & "'")

        StrQuery = sql.ToString

        ObjListCliente = list(StrQuery, Conexion)

        Return ObjListCliente

    End Function

    ''' <summary>
    ''' averigua si esta repetido
    ''' </summary>
    ''' <param name="vp_O_Obj"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function Consulta_Repetido(ByVal vp_O_Obj As ClienteClass)

        Dim StrQuery As String = ""
        Dim Result As String = ""
        Dim conex As New Conector

        Dim sql As New StringBuilder

        sql.AppendLine(" SELECT COUNT(1) FROM CLIENTE " & _
                       " WHERE CLI_Nit_ID = '" & vp_O_Obj.Nit_ID & "'" & _
                       " AND CLI_TypeDocument_ID = '" & vp_O_Obj.TypeDocument_ID & "'" & _
                       " AND CLI_Document_ID = '" & vp_O_Obj.Document_ID & "'")

        StrQuery = sql.ToString

        Result = conex.IDis(StrQuery, "2")

        Return Result
    End Function

#End Region

#Region "CARGAR LISTAS"

    ''' <summary>
    ''' funcion que trae el listado de Cliente para armar la tabla
    ''' </summary>
    ''' <param name="vp_S_StrQuery"></param>
    ''' <param name="vg_S_StrConexion"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function list(ByVal vp_S_StrQuery As String, ByVal vg_S_StrConexion As String)

        'inicializamos conexiones a la BD
        Dim objcmd As OleDbCommand = Nothing
        Dim objConexBD As OleDbConnection = Nothing
        objConexBD = New OleDbConnection(vg_S_StrConexion)
        Dim ReadConsulta As OleDbDataReader = Nothing

        objcmd = objConexBD.CreateCommand

        Dim ObjListCliente As New List(Of ClienteClass)

        'abrimos conexion
        objConexBD.Open()
        'cargamos consulta
        objcmd.CommandText = vp_S_StrQuery
        'ejecutamos consulta
        ReadConsulta = objcmd.ExecuteReader()

        'recorremos la consulta por la cantidad de datos en la BD
        While ReadConsulta.Read

            Dim objCliente As New ClienteClass
            'cargamos datos sobre el objeto de login
            If Not (IsDBNull(ReadConsulta.GetValue(0))) Then objCliente.Nit_ID = ReadConsulta.GetValue(0) Else objCliente.Nit_ID = ""
            objCliente.TypeDocument_ID = ReadConsulta.GetValue(1)
            objCliente.Document_ID = ReadConsulta.GetValue(2)
            objCliente.Digito_Verificacion = ReadConsulta.GetValue(3)
            objCliente.Nombre = ReadConsulta.GetValue(4)
            objCliente.Ciudad_ID = ReadConsulta.GetValue(5)
            objCliente.OP_Cliente = ReadConsulta.GetValue(6)
            objCliente.OP_Avaluador = ReadConsulta.GetValue(7)
            objCliente.OP_Transito = ReadConsulta.GetValue(8)
            objCliente.OP_Hacienda = ReadConsulta.GetValue(9)
            objCliente.OP_Empresa = ReadConsulta.GetValue(10)
            objCliente.OP_Empleado = ReadConsulta.GetValue(11)
            objCliente.OP_Asesor = ReadConsulta.GetValue(12)

            If Not (IsDBNull(ReadConsulta.GetValue(13))) Then objCliente.Other_1 = ReadConsulta.GetValue(13) Else objCliente.Other_1 = "-1"
            If Not (IsDBNull(ReadConsulta.GetValue(14))) Then objCliente.Other_2 = ReadConsulta.GetValue(14) Else objCliente.Other_2 = "-1"

            objCliente.FechaActualizacion = ReadConsulta.GetValue(15)
            objCliente.Usuario = ReadConsulta.GetValue(16)
            objCliente.DescripCiudad = ReadConsulta.GetValue(17)
            objCliente.DescripTypeDocument = ReadConsulta.GetValue(18)

            objCliente.Pais_ID = ReadConsulta.GetValue(19)
            objCliente.DescripPais = ReadConsulta.GetValue(20)

            If Not (IsDBNull(ReadConsulta.GetValue(21))) Then objCliente.Nombre_2 = ReadConsulta.GetValue(21) Else objCliente.Nombre_2 = ""
            If Not (IsDBNull(ReadConsulta.GetValue(22))) Then objCliente.Apellido_1 = ReadConsulta.GetValue(22) Else objCliente.Apellido_1 = ""
            If Not (IsDBNull(ReadConsulta.GetValue(23))) Then objCliente.Apellido_2 = ReadConsulta.GetValue(23) Else objCliente.Apellido_2 = ""
            If Not (IsDBNull(ReadConsulta.GetValue(24))) Then objCliente.Cod_Bank = ReadConsulta.GetValue(24) Else objCliente.Cod_Bank = 0
            If Not (IsDBNull(ReadConsulta.GetValue(25))) Then objCliente.DocCiudad = ReadConsulta.GetValue(25) Else objCliente.DocCiudad = 0

            If Not (IsDBNull(ReadConsulta.GetValue(26))) Then objCliente.TipoPersona = ReadConsulta.GetValue(26) Else objCliente.TipoPersona = ""
            If Not (IsDBNull(ReadConsulta.GetValue(27))) Then objCliente.Regimen = ReadConsulta.GetValue(27) Else objCliente.Regimen = ""
            If Not (IsDBNull(ReadConsulta.GetValue(28))) Then objCliente.DescripTipoPersona = ReadConsulta.GetValue(28) Else objCliente.DescripTipoPersona = ""
            If Not (IsDBNull(ReadConsulta.GetValue(29))) Then objCliente.DescripRegimen = ReadConsulta.GetValue(29) Else objCliente.DescripRegimen = ""

            'agregamos a la lista
            ObjListCliente.Add(objCliente)

        End While

        'cerramos conexiones
        ReadConsulta.Close()
        objConexBD.Close()
        'retornamos la consulta
        Return ObjListCliente

    End Function

#End Region
End Class
