from flask.views import MethodView

class Login(MethodView):

    def post(self):
        return 'Login complete', 200
        
