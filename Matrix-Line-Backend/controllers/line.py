from flask.views import MethodView
from flask import json

class Line(MethodView):

    def get(self, idline):
        return 'get line' + idline, 200
    

    def post(self):
        return 'create line', 200
    

    def put(self, ced, idline):
        message = "Update line, Cedula: {}, Linea: {}".format(ced, idline)
        return message, 200


    def delete(self, idline):
        return 'delete line' + idline, 200  
