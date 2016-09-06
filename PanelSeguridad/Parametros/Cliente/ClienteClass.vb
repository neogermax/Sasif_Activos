﻿Public Class ClienteClass
#Region "Campos"
    Private _Nit_ID As String
    Private _TypeDocument_ID As Integer
    Private _Document_ID As Long
    Private _Digito_Verificacion As Long
    Private _Nombre As String
    Private _Nombre_2 As String
    Private _Apellido_1 As String
    Private _Apellido_2 As String

    Private _Pais_ID As Integer
    Private _Ciudad_ID As Integer
    Private _OP_Cliente As String
    Private _OP_Avaluador As String
    Private _OP_Transito As String
    Private _OP_Hacienda As String
    Private _OP_Empresa As String
    Private _OP_Empleado As String
    Private _OP_Asesor As String
    Private _Other_1 As String
    Private _Other_2 As String
   
    Private _Cod_Bank As Long
    Private _DocCiudad As Long
    Private _TipoPersona As String
    Private _Regimen As String

    Private _DescripTypeDocument As String
    Private _DescripCiudad As String
    Private _DescripPais As String

    Private _DescripTipoPersona As String
    Private _DescripRegimen As String

    Private _AccesoSistema As String
    Private _Area_ID As Integer
    Private _Cargo_ID As Integer
    Private _TypeDocument_ID_Jefe As Integer
    Private _Document_ID_Jefe As Long
    Private _Politica_ID As Integer

    Private _UsuarioCreacion As String
    Private _FechaCreacion As String
    Private _UsuarioActualizacion As String
    Private _FechaActualizacion As String

    Private _DescripArea As String
    Private _DescripCargo As String
    Private _DescripSeguridad As String
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
    Public Property Digito_Verificacion() As Integer
        Get
            Return Me._Digito_Verificacion
        End Get
        Set(ByVal value As Integer)
            Me._Digito_Verificacion = value
        End Set
    End Property
    Public Property Nombre() As String
        Get
            Return Me._Nombre
        End Get
        Set(ByVal value As String)
            Me._Nombre = value
        End Set
    End Property
    Public Property Nombre_2() As String
        Get
            Return Me._Nombre_2
        End Get
        Set(ByVal value As String)
            Me._Nombre_2 = value
        End Set
    End Property
    Public Property Apellido_1() As String
        Get
            Return Me._Apellido_1
        End Get
        Set(ByVal value As String)
            Me._Apellido_1 = value
        End Set
    End Property
    Public Property Apellido_2() As String
        Get
            Return Me._Apellido_2
        End Get
        Set(ByVal value As String)
            Me._Apellido_2 = value
        End Set
    End Property

    Public Property Pais_ID() As Integer
        Get
            Return Me._Pais_ID
        End Get
        Set(ByVal value As Integer)
            Me._Pais_ID = value
        End Set
    End Property
    Public Property Ciudad_ID() As Integer
        Get
            Return Me._Ciudad_ID
        End Get
        Set(ByVal value As Integer)
            Me._Ciudad_ID = value
        End Set
    End Property

    Public Property OP_Cliente() As String
        Get
            Return Me._OP_Cliente
        End Get
        Set(ByVal value As String)
            Me._OP_Cliente = value
        End Set
    End Property
    Public Property OP_Avaluador() As String
        Get
            Return Me._OP_Avaluador
        End Get
        Set(ByVal value As String)
            Me._OP_Avaluador = value
        End Set
    End Property
    Public Property OP_Transito() As String
        Get
            Return Me._OP_Transito
        End Get
        Set(ByVal value As String)
            Me._OP_Transito = value
        End Set
    End Property
    Public Property OP_Hacienda() As String
        Get
            Return Me._OP_Hacienda
        End Get
        Set(ByVal value As String)
            Me._OP_Hacienda = value
        End Set
    End Property
    Public Property OP_Empresa() As String
        Get
            Return Me._OP_Empresa
        End Get
        Set(ByVal value As String)
            Me._OP_Empresa = value
        End Set
    End Property
    Public Property OP_Empleado() As String
        Get
            Return Me._OP_Empleado
        End Get
        Set(ByVal value As String)
            Me._OP_Empleado = value
        End Set
    End Property
    Public Property OP_Asesor() As String
        Get
            Return Me._OP_Asesor
        End Get
        Set(ByVal value As String)
            Me._OP_Asesor = value
        End Set
    End Property
    Public Property Other_1() As String
        Get
            Return Me._Other_1
        End Get
        Set(ByVal value As String)
            Me._Other_1 = value
        End Set
    End Property
    Public Property Other_2() As String
        Get
            Return Me._Other_2
        End Get
        Set(ByVal value As String)
            Me._Other_2 = value
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

    Public Property Cod_Bank() As Long
        Get
            Return Me._Cod_Bank
        End Get
        Set(ByVal value As Long)
            Me._Cod_Bank = value
        End Set
    End Property
    Public Property DocCiudad() As Long
        Get
            Return Me._DocCiudad
        End Get
        Set(ByVal value As Long)
            Me._DocCiudad = value
        End Set
    End Property
    Public Property TipoPersona() As String
        Get
            Return Me._TipoPersona
        End Get
        Set(ByVal value As String)
            Me._TipoPersona = value
        End Set
    End Property
    Public Property Regimen() As String
        Get
            Return Me._Regimen
        End Get
        Set(ByVal value As String)
            Me._Regimen = value
        End Set
    End Property

    Public Property DescripTypeDocument() As String
        Get
            Return Me._DescripTypeDocument
        End Get
        Set(ByVal value As String)
            Me._DescripTypeDocument = value
        End Set
    End Property
    Public Property DescripCiudad() As String
        Get
            Return Me._DescripCiudad
        End Get
        Set(ByVal value As String)
            Me._DescripCiudad = value
        End Set
    End Property
    Public Property DescripPais() As String
        Get
            Return Me._DescripPais
        End Get
        Set(ByVal value As String)
            Me._DescripPais = value
        End Set
    End Property

    Public Property DescripTipoPersona() As String
        Get
            Return Me._DescripTipoPersona
        End Get
        Set(ByVal value As String)
            Me._DescripTipoPersona = value
        End Set
    End Property
    Public Property DescripRegimen() As String
        Get
            Return Me._DescripRegimen
        End Get
        Set(ByVal value As String)
            Me._DescripRegimen = value
        End Set
    End Property

    Public Property AccesoSistema() As String
        Get
            Return Me._AccesoSistema
        End Get
        Set(ByVal value As String)
            Me._AccesoSistema = value
        End Set
    End Property
    Public Property Area_ID() As Integer
        Get
            Return Me._Area_ID
        End Get
        Set(ByVal value As Integer)
            Me._Area_ID = value
        End Set
    End Property
    Public Property Cargo_ID() As Integer
        Get
            Return Me._Cargo_ID
        End Get
        Set(ByVal value As Integer)
            Me._Cargo_ID = value
        End Set
    End Property
    Public Property TypeDocument_ID_Jefe() As Integer
        Get
            Return Me._TypeDocument_ID_Jefe
        End Get
        Set(ByVal value As Integer)
            Me._TypeDocument_ID_Jefe = value
        End Set
    End Property
    Public Property Document_ID_Jefe() As Long
        Get
            Return Me._Document_ID_Jefe
        End Get
        Set(ByVal value As Long)
            Me._Document_ID_Jefe = value
        End Set
    End Property
    Public Property Politica_ID() As Integer
        Get
            Return Me._Politica_ID
        End Get
        Set(ByVal value As Integer)
            Me._Politica_ID = value
        End Set
    End Property

    Public Property DescripArea() As String
        Get
            Return Me._DescripArea
        End Get
        Set(ByVal value As String)
            Me._DescripArea = value
        End Set
    End Property
    Public Property DescripCargo() As String
        Get
            Return Me._DescripCargo
        End Get
        Set(ByVal value As String)
            Me._DescripCargo = value
        End Set
    End Property
    Public Property DescripSeguridad() As String
        Get
            Return Me._DescripSeguridad
        End Get
        Set(ByVal value As String)
            Me._DescripSeguridad = value
        End Set
    End Property

#End Region
End Class
