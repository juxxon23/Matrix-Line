from marshmallow import Schema, fields, validate, validates, ValidationError

# Registro Asesor
class AsesorRegistro(Schema):
    name = fields.Str(required=True, validate=validate.Length(min=3, max=50))
    lastName = fields.Str(required=True, validate=validate.Length(min=3, max=50))
    id_u = fields.Int(required=True, validate=validate.Range(min=1000000000, max=4000000000))
    pass_u  = fields.Str(required=True, validate=validate.Length(min=8, max=20))
    numberPhone = fields.Str(required=True, validate=validate.Length(min=7, max=10))

# Login Asesor
class AsesorLogin(Schema):
    document = fields.Int(required=True, validate=validate.Range(min=1000000000, max=4000000000))
    pass_u  = fields.Str(required=True, validate=validate.Length(min=8, max=20))
    
