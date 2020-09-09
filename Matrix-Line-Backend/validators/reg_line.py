from marshmallow import Schema, fields, validate, validates, ValidationError

# Registro de linea telefonica
class LineaRegistro(Schema):
    document = fields.Str(required=True, validate=validate.Length(min=3, max=50))
    numberLine = fields.Str(required=True, validate=validate.Length(min=3, max=50))
    namePhone = fields.Int(required=True)
    legalState  = fields.Bool(required=True)
    brand = fields.Str(required=True, validate=validate.Length(min=1, max=50))
    description = fields.Str(required=False, validate=validate.Length(max=50))

