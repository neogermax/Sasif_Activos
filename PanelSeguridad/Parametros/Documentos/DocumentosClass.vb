Imports System
Imports System.IO
Imports System.Text
Imports Newtonsoft.Json
Imports System.Data
Imports System.Data.SqlClient
Imports System.Web.Script.Serialization



Public Class DocumentosClass

#Region "Campos"
    Private _Nit_ID As String
    Private _TypeDocument_ID As Integer
    Private _Document_ID As Long

    Private _DocExist_ID As Integer
    Private _Documento_ID As String

    Private _RutaDocumento As String
    Private _RutaDocumentoDestino As String
    Private _RutaRelativaDocumento As String
    
    Private _Formato As Integer
    Private _TipoContenido As String
    Private _TipoVersion As String
    Private _Asunto As String
    Private _Trama As String

    Private _UsuarioCreacion As String
    Private _FechaCreacion As String
    Private _UsuarioActualizacion As String
    Private _FechaActualizacion As String

    Private _DescripDocument As String
    Private _DescripFormato As String
#End Region

#Region "Propiedades"
    Public Property Nit_ID() As String
        Get
            Return Me._Nit_ID
        End Get
        Set(ByVal value As String)
            Me._Nit_ID = value
        End Set
    End Property
    Public Property TypeDocument_ID() As Integer
        Get
            Return Me._TypeDocument_ID
        End Get
        Set(ByVal value As Integer)
            Me._TypeDocument_ID = value
        End Set
    End Property
    Public Property Document_ID() As Long
        Get
            Return Me._Document_ID
        End Get
        Set(ByVal value As Long)
            Me._Document_ID = value
        End Set
    End Property

    Public Property DocExist_ID() As Integer
        Get
            Return Me._DocExist_ID
        End Get
        Set(ByVal value As Integer)
            Me._DocExist_ID = value
        End Set
    End Property
    Public Property Documento_ID() As String
        Get
            Return Me._Documento_ID
        End Get
        Set(ByVal value As String)
            Me._Documento_ID = value
        End Set
    End Property

    Public Property RutaDocumento() As String
        Get
            Return Me._RutaDocumento
        End Get
        Set(ByVal value As String)
            Me._RutaDocumento = value
        End Set
    End Property
    Public Property RutaDocumentoDestino() As String
        Get
            Return Me._RutaDocumentoDestino
        End Get
        Set(ByVal value As String)
            Me._RutaDocumentoDestino = value
        End Set
    End Property
    Public Property RutaRelativaDocumento() As String
        Get
            Return Me._RutaRelativaDocumento
        End Get
        Set(ByVal value As String)
            Me._RutaRelativaDocumento = value
        End Set
    End Property

    Public Property Formato() As Integer
        Get
            Return Me._Formato
        End Get
        Set(ByVal value As Integer)
            Me._Formato = value
        End Set
    End Property
    Public Property TipoContenido() As String
        Get
            Return Me._TipoContenido
        End Get
        Set(ByVal value As String)
            Me._TipoContenido = value
        End Set
    End Property
    Public Property TipoVersion() As String
        Get
            Return Me._TipoVersion
        End Get
        Set(ByVal value As String)
            Me._TipoVersion = value
        End Set
    End Property
    Public Property Asunto() As String
        Get
            Return Me._Asunto
        End Get
        Set(ByVal value As String)
            Me._Asunto = value
        End Set
    End Property
    Public Property Trama() As String
        Get
            Return Me._Trama
        End Get
        Set(ByVal value As String)
            Me._Trama = value
        End Set
    End Property

    Public Property UsuarioCreacion() As String
        Get
            Return Me._UsuarioCreacion
        End Get
        Set(ByVal value As String)
            Me._UsuarioCreacion = value
        End Set
    End Property
    Public Property FechaCreacion() As String
        Get
            Return Me._FechaCreacion
        End Get
        Set(ByVal value As String)
            Me._FechaCreacion = value
        End Set
    End Property
    Public Property UsuarioActualizacion() As String
        Get
            Return Me._UsuarioActualizacion
        End Get
        Set(ByVal value As String)
            Me._UsuarioActualizacion = value
        End Set
    End Property
    Public Property FechaActualizacion() As String
        Get
            Return Me._FechaActualizacion
        End Get
        Set(ByVal value As String)
            Me._FechaActualizacion = value
        End Set
    End Property

    Public Property DescripDocument() As String
        Get
            Return Me._DescripDocument
        End Get
        Set(ByVal value As String)
            Me._DescripDocument = value
        End Set
    End Property
    Public Property DescripFormato() As String
        Get
            Return Me._DescripFormato
        End Get
        Set(ByVal value As String)
            Me._DescripFormato = value
        End Set
    End Property
#End Region

#Region "Campos_Carga"
    Private _id As Integer
    Private _namefile As String
#End Region

#Region "Propiedades_Carga"
    Public Property id() As Integer
        Get
            Return Me._id
        End Get
        Set(ByVal value As Integer)
            Me._id = value
        End Set
    End Property
    Public Property namefile() As String
        Get
            Return Me._namefile
        End Get
        Set(ByVal value As String)
            Me._namefile = value
        End Set
    End Property
#End Region

#Region "FUNCIONES"
    ''' <summary>
    ''' subir documentos al servidor
    ''' </summary>
    ''' <param name="vp_H_files"></param>
    ''' <param name="vp_S_Ruta"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function UpLoad_Document(ByVal vp_H_files As HttpFileCollection, ByVal vp_S_Ruta As String)

        Dim strFileName() As String
        Dim fileName As String = String.Empty
        Dim DocumentsTmpList As New List(Of DocumentosClass)
        Dim Up_Document As Integer = 0

        'Se recorre la lista de archivos cargados al servidor
        For i As Integer = 0 To vp_H_files.Count - 1

            Dim file As HttpPostedFile = vp_H_files(i)

            If file.ContentLength > 0 Then

                strFileName = file.FileName.Split("\".ToCharArray)

                ' dar nombre al anexo
                fileName = strFileName(strFileName.Length - 1)

                ' determinanado la ruta destino
                Dim sFullPath As String = vp_S_Ruta & fileName

                'Subiendo el archivo al server
                file.SaveAs(sFullPath)

                'Se instancia un objeto de tipo documento y se pobla con la info. reuqerida.
                Dim objDocument As New DocumentosClass()
                objDocument.namefile = fileName

                'Se agrega el objeto de tipo documento a la lista de documentos
                DocumentsTmpList.Add(objDocument)

            End If

        Next

        Return fileName

    End Function

    ''' <summary>
    ''' copiar documentos a la ruta fisica del aplicativo para la ruta relativa
    ''' </summary>
    ''' <param name="vp_S_RutaOrigen"></param>
    ''' <param name="vp_S_RutaDestino"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function Copy_Document_Folder_View(ByVal vp_S_RutaOrigen As String, ByVal vp_S_RutaDestino As String, ByVal vp_S_archivo As String)

        Dim Valida_Copia As Integer
        Dim FileToCopy As String = vp_S_RutaOrigen & vp_S_archivo
        Dim NewCopy As String = vp_S_RutaDestino & vp_S_archivo

        Try
       
            ' confirmamos de que el destino existe.
            If File.Exists(vp_S_RutaDestino) Then
                File.Delete(vp_S_RutaDestino)
            End If

            If System.IO.File.Exists(FileToCopy) = True Then
                System.IO.File.Copy(FileToCopy, NewCopy)
                Valida_Copia = 0
            End If

        Catch e As Exception
            Valida_Copia = 1
        End Try

        Return Valida_Copia

    End Function

    ''' <summary>
    ''' Borrar documentos a la ruta fisica del aplicativo de la ruta relativa
    ''' </summary>
     ''' <param name="vp_S_RutaDestino"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function Delete_Document_Folder_View(ByVal vp_S_RutaDestino As String, ByVal vp_S_archivo As String)

        Dim Valida_Borrado As Integer
        Dim FileToErase As String = vp_S_RutaDestino & vp_S_archivo

        Try
           
            If System.IO.File.Exists(FileToErase) = True Then
                System.IO.File.Delete(FileToErase)
                Valida_Borrado = 0
            End If

                   Catch e As Exception
            Valida_Borrado = 1
        End Try

        Return Valida_Borrado

    End Function

    ''' <summary>
    ''' crea objetoslista de documentos para eliminar de la ruta relativa 
    ''' </summary>
    ''' <param name="vp_S_ListDocumentos"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function InsertList_Documentos(ByVal vp_S_ListDocumentos As String)

        Dim NewList = JsonConvert.DeserializeObject(Of List(Of DocumentosClass))(vp_S_ListDocumentos)
        Dim List As New List(Of DocumentosClass)

        For Each Item As DocumentosClass In NewList

            Dim Obj As New DocumentosClass

            Obj.RutaDocumentoDestino = Item.RutaDocumentoDestino
            Obj.DescripDocument = Item.DescripDocument
            Obj.DescripFormato = Item.DescripFormato

            List.Add(Obj)
        Next

        Return List

    End Function

#End Region

End Class
