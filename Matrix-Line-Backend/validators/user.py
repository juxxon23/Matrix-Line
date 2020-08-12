from marshmallow import Schema, fields, validate, validates, ValidationError

class UserSchema(Schema):

    pass_eq = ""
    user_sign = fields.String(required=True, data_key='user_sign')
    email_sign = fields.Email(required=True, data_key='email_sign')
    pass_sign = fields.String(required=True, validate=validate.Length(min=8, max=20), data_key='pass_sign')
    pass_sign_conf = fields.Str(required=True, validate=validate.Length(min=8, max=20), data_key='pass_sign_conf')
    

    @validates('pass_sign')
    def eq1(self, pass_sign):
        self.pass_eq = pass_sign


    @validates('pass_sign_conf')
    def eq2(self, pass_sign_conf):
        if self.pass_eq != pass_sign_conf:
            raise ValidationError('the passwords doesn\'t match')
