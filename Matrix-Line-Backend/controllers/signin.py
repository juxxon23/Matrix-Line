from flask.views import MethodView

class Signin(MethodView):
   
    def post(self):
        return 'Signin complete', 200

                          
