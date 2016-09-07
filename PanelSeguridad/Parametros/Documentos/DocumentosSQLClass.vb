Imports System.Data.SqlClient
Imports System.Data.OleDb

Public Class DocumentosSQLClass

#Region "CRUD"

    ''' <summary>
    ''' creala consulta para la tabla Releciones Financieras parametrizada (READ)
    ''' </summary>
    ''' <param name="vp_S_Nit"></param>
    ''' <param name="vp_S_TypeDoc"></param>
    ''' <param name="vp_S_Doc"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function Read_All(ByVal vp_S_Nit As String, ByVal vp_S_TypeDoc As String, ByVal vp_S_Doc As String)

        Dim ObjList As New List(Of DocumentosClass)
        Dim StrQuery As String = ""
        Dim conex As New Conector
        Dim Conexion As String = conex.typeConexion("2")

        Dim BD_Documentos As String = System.Web.Configuration.WebConfigurationManager.AppSettings("BDDocument").ToString
        Dim BD_Admin As String = System.Web.Configuration.WebConfigurationManager.AppSettings("BDAdmin").ToString

        Dim sql As New StringBuilder

        sql.Append(" SELECT CD_Nit_ID," & _
                   "       CD_TypeDocument_ID, " & _
                   "       CD_Document_ID, " & _
                   "       CD_Secuencia_ID, " & _
                   "       DE_Documento_ID, " & _
                   "       DE_RutaDocumento, " & _
                   "       DE_Formato, " & _
                   "       DE_TipoContenido, " & _
                   "       DE_TipoVersion, " & _
                   "       DE_Asunto, " & _
                   "       DE_Trama, " & _
                   "       DE_Usuario_Creacion, " & _
                   "       DE_FechaCreacion, " & _
                   "       DE_Usuario_Actualizacion, " & _
                   "       DE_FechaActualizacion, " & _
                   "       D.DOC_Descripcion, " & _
                   "       D1.DDLL_Descripcion  " & _
                   " FROM DOCUMENTOS_CLIENTE DC" & _
                   " INNER JOIN " & BD_Documentos & ".dbo.DOCUMENTOS_EXISTENTES DE ON DE.DE_Secuencia_ID = DC.CD_Secuencia_ID " & _
                   " INNER JOIN " & BD_Documentos & ".dbo.DOCUMENTOS D ON D.DOC_Documentos_ID =DE.DE_Documento_ID " & _
                   " LEFT JOIN " & BD_Admin & ".dbo.TC_DDL_TIPO D1 ON D1.DDL_ID = DE.DE_Formato AND D1.DDL_Tabla = 'DOCUMENTOS' " & _
                  " WHERE CD_Nit_ID = '" & vp_S_Nit & "' " & _
                   " AND CD_TypeDocument_ID = '" & vp_S_TypeDoc & "' " & _
                   " AND CD_Document_ID = '" & vp_S_Doc & "' ")

        StrQuery = sql.ToString

        ObjList = list(StrQuery, Conexion, "R")

        Return ObjList

    End Function

#End Region

#Region "CARGAR LISTAS"

    ''' <summary>
    ''' funcion que trae el listado de Releciones Financieras para armar la tabla
    ''' </summary>
    ''' <param name="vp_S_StrQuery"></param>
    ''' <param name="vg_S_StrConexion"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function list(ByVal vp_S_StrQuery As String, ByVal vg_S_StrConexion As String, ByVal vg_S_TypeCosult As String)

        'inicializamos conexiones a la BD
        Dim objcmd As OleDbCommand = Nothing
        Dim objConexBD As OleDbConnection = Nothing
        objConexBD = New OleDbConnection(vg_S_StrConexion)
        Dim ReadConsulta As OleDbDataReader = Nothing

        objcmd = objConexBD.CreateCommand

        Dim ObjList As New List(Of DocumentosClass)

        'abrimos conexion
        objConexBD.Open()
        'cargamos consulta
        objcmd.CommandText = vp_S_StrQuery
        'ejecutamos consulta
        ReadConsulta = objcmd.ExecuteReader()

        Select Case vg_S_TypeCosult

            Case "R"
                'recorremos la consulta por la cantidad de datos en la BD
                While ReadConsulta.Read

                    Dim obj As New DocumentosClass
                    'cargamos datos sobre el objeto de login
                    obj.Nit_ID = ReadConsulta.GetValue(0)
                    obj.TypeDocument_ID = ReadConsulta.GetValue(1)
                    obj.Document_ID = ReadConsulta.GetValue(2)

                    obj.DocExist_ID = ReadConsulta.GetValue(3)
                    obj.Documento_ID = ReadConsulta.GetValue(4)
                    obj.RutaDocumento = ReadConsulta.GetValue(5)
                    obj.Formato = ReadConsulta.GetValue(6)

                    obj.TipoContenido = ReadConsulta.GetValue(7)
                    obj.TipoVersion = ReadConsulta.GetValue(8)

                    If Not (IsDBNull(ReadConsulta.GetValue(9))) Then obj.Asunto = ReadConsulta.GetValue(9) Else obj.Asunto = ""
                    If Not (IsDBNull(ReadConsulta.GetValue(10))) Then obj.Trama = ReadConsulta.GetValue(10) Else obj.Trama = ""

                    obj.UsuarioCreacion = ReadConsulta.GetValue(11)
                    obj.FechaCreacion = ReadConsulta.GetValue(12)
                    obj.UsuarioActualizacion = ReadConsulta.GetValue(13)
                    obj.FechaActualizacion = ReadConsulta.GetValue(14)

                    obj.DescripDocument = ReadConsulta.GetValue(15)
                    obj.DescripFormato = ReadConsulta.GetValue(16)

                    'agregamos a la lista
                    ObjList.Add(obj)
                End While

            Case "F"
                'recorremos la consulta por la cantidad de datos en la BD
                While ReadConsulta.Read

                    Dim obj As New DocumentosClass
                    'cargamos datos sobre el objeto de login
                  
                    obj.RutaDocumento = ReadConsulta.GetValue(0)
                    obj.Formato = ReadConsulta.GetValue(1)
                    obj.DescripDocument = ReadConsulta.GetValue(2)
                    obj.DescripFormato = ReadConsulta.GetValue(3)

                    'agregamos a la lista
                    ObjList.Add(obj)
                End While

        End Select

        'cerramos conexiones
        ReadConsulta.Close()
        objConexBD.Close()
        'retornamos la consulta
        Return ObjList

    End Function

#End Region

#Region "OTRAS CONSULTAS"

    ''' <summary>
    ''' creala consulta para la tabla documentos para averiguar si tiene foto
    ''' </summary>
    ''' <param name="vp_S_Nit"></param>
    ''' <param name="vp_S_TypeDoc"></param>
    ''' <param name="vp_S_Doc"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function ExistFoto(ByVal vp_S_Nit As String, ByVal vp_S_TypeDoc As String, ByVal vp_S_Doc As String)

        Dim ObjList As New List(Of DocumentosClass)
        Dim StrQuery As String = ""
        Dim conex As New Conector
        Dim Conexion As String = conex.typeConexion("2")

        Dim BD_Documentos As String = System.Web.Configuration.WebConfigurationManager.AppSettings("BDDocument").ToString
        Dim BD_Admin As String = System.Web.Configuration.WebConfigurationManager.AppSettings("BDAdmin").ToString

        Dim sql As New StringBuilder

        sql.Append(" SELECT DE_RutaDocumento," & _
                   "       DE_Formato, " & _
                   "       D.DOC_Descripcion, " & _
                   "       D1.DDLL_Descripcion  " & _
                   " FROM DOCUMENTOS_CLIENTE DC" & _
                   " INNER JOIN " & BD_Documentos & ".dbo.DOCUMENTOS_EXISTENTES DE ON DE.DE_Secuencia_ID = DC.CD_Secuencia_ID " & _
                   " INNER JOIN " & BD_Documentos & ".dbo.DOCUMENTOS D ON D.DOC_Documentos_ID =DE.DE_Documento_ID " & _
                   " LEFT JOIN " & BD_Admin & ".dbo.TC_DDL_TIPO D1 ON D1.DDL_ID = DE.DE_Formato AND D1.DDL_Tabla = 'DOCUMENTOS' " & _
                  " WHERE CD_Nit_ID = '" & vp_S_Nit & "' " & _
                   " AND CD_TypeDocument_ID = '" & vp_S_TypeDoc & "' " & _
                   " AND CD_Document_ID = '" & vp_S_Doc & "' AND DE_IndicativoFoto = 'S' ")

        StrQuery = sql.ToString

        ObjList = list(StrQuery, Conexion, "F")

        Return ObjList

    End Function


#End Region

End Class
