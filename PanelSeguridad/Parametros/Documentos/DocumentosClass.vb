Public Class DocumentosClass

#Region "Campos"
    Private _Nit_ID As String
    Private _TypeDocument_ID As Integer
    Private _Document_ID As Long

    Private _DocExist_ID As Integer
    Private _Documento_ID As String
    Private _RutaDocumento As String
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
End Class
