﻿Public Class TipoActivoClass
#Region "campos"
    Private _Activo_ID As Integer
    Private _Descripcion As String
    Private _FechaActualizacion As String
    Private _Usuario As String
#End Region

#Region "proiedades"
    Public Property Activo_ID() As Integer
        Get
            Return Me._Activo_ID
        End Get
        Set(ByVal value As Integer)
            Me._Activo_ID = value
        End Set
    End Property
    Public Property Descripcion() As String
        Get
            Return Me._Descripcion
        End Get
        Set(ByVal value As String)
            Me._Descripcion = value
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
    Public Property Usuario() As String
        Get
            Return Me._Usuario
        End Get
        Set(ByVal value As String)
            Me._Usuario = value
        End Set
    End Property
#End Region

End Class
