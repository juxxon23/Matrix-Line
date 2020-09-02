from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Asesor(db.Model):
    __tablename__ = 'Asesor'

    id_asesor = db.Column(db.Integer, primary_key=True, index=True)
    nombre_a = db.Column(db.String(50), nullable=False)
    apellido_a = db.Column(db.String(50), nullable=False)
    documento_a = db.Column(db.String(20), nullable=False, unique=True)
    password_a = db.Column(db.String(128), nullable=False)
    telefono_a = db.Column(db.String(20))


    def __init__(self, nombre_a, apellido_a, documento_a, password_a, telefono_a):
        self.nombre_a = nombre_a
        self.apellido_a = apellido_a
        self.documento_a = documento_a
        self.password_a = password_a
        self.telefono_a = telefono_a


class Usuario(db.Model):
    __tablename__ = 'Usuario'

    nombre_u = db.Column(db.String(50), nullable=False)
    apellido_u = db.Column(db.String(50), nullable=False)
    documento_u = db.Column(db.String(20), nullable=False, primary_key=True)
    telefono_u = db.Column(db.String(20))
    fecha_nacimiento = db.Column(db.String(20), nullable=False)
    linea_c = db.relationship('Linea', backref='documento', lazy='dynamic', foreign_keys='Linea.documento_usuario')


    def __init__(self, nombre_u, apellido_u, documento_u, telefono_u, fecha_nacimiento):
        self.nombre_u = nombre_u
        self.apellido_u = apellido_u
        self.documento_u = documento_u
        self.telefono_u = telefono_u
        self.fecha_nacimiento = fecha_nacimiento

class Equipo(db.Model):
    __tablename__ = 'Equipo'

    serial_equipo = db.Column(db.Integer, primary_key=True)
    marca = db.Column(db.String(50))
    descripcion = db.Column(db.String(50))
    estado_legal = db.Column(db.Boolean, default=1, nullable=False)
    linea_co = db.relationship('Linea', backref='serial', lazy='dynamic', foreign_keys='Linea.serial_e')


    def __init__(self, serial_equipo, marca, descripcion, estado_legal):
        self.serial_equipo = serial_equipo 
        self.marca = marca
        self.descripcion = descripcion
        self.estado_legal = estado_legal

class Linea(db.Model):
    __tablename__ = 'Linea'

    numero_linea = db.Column(db.String(30), primary_key=True, nullable=False)
    estado_linea = db.Column(db.Boolean, default=1)
    documento_usuario = db.Column(db.String(20), db.ForeignKey('Usuario.documento_u'))
    serial_e = db.Column(db.Integer, db.ForeignKey('Equipo.serial_equipo'))
    factura = db.relationship('Factura', backref='numero', lazy='dynamic', foreign_keys='Factura.numero_l')

    def __init__(self, numero_linea, estado_linea, documento_usuario, serial_e):
        self.numero_linea = numero_linea
        self.estado_linea = estado_linea
        self.documento_usuario = documento_usuario
        self.serial_e = serial_e

class Factura(db.Model):
    __tablename__ = 'Factura'

    id_factura = db.Column(db.Integer, primary_key=True, nullable=False)
    numero_l = db.Column(db.String(30), db.ForeignKey('Linea.numero_linea'))
    fecha_emision = db.Column(db.DateTime, nullable=False)
    valor = db.Column(db.Float())


    def __init__(self, numero_l, fecha_emision, valor):
        self.numero_l = numero_l
        self.fecha_emision = fecha_emision
        self.valor = valor
 
