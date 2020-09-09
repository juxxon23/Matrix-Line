from marshmallow import Schema, fields, validate, validates, ValidationError

# Registro usuario
class RegistroUsuario(Schema):
    name = fields.String(required=True, validate=validate.Length(min=3, max=50))
    lastName = fields.String(required=True, validate=validate.Length(min=3, max=50))
    id_u = fields.Int(required=True, validate=validate.Range(min=1000000000, max=4000000000))
    numberPhone = fields.String(required=True, validate=validate.Length(min=7, max=10))
    date = fields.Date(required=True)
