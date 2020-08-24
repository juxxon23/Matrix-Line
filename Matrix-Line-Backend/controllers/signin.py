from flask import jsonify, request
from flask.views import MethodView
#from data.model import Asesor
#from helpers.data_manager import DataManager
from data.psyco_manager import PsycoManager 

#data_m = DataManager()
data_m = PsycoManager()

class Signin(MethodView):

    def post(self):
        try:
            asesor_signin = request.get_json()
            state = data_m.add(
                        asesor_signin['name'],
                        asesor_signin['lastName'],
                        asesor_signin['id'],
                        asesor_signin['pass'],
                        asesor_signin['numberPhone'])
            """new_asesor = Asesor(
                    nombre_a = asesor_signin['name'],
                    apellido_a = asesor_signin['lastName'],
                    documento_a = asesor_signin['id'],
                    password_a = asesor_signin['pass'],
                    telefono_a = asesor_signin['numberPhone'])
            state = data_m.add(new_asesor)
            """
            test = data_m.getAll() 
            return jsonify({'state':state})
        except:
            return jsonify({'state':state})
  
