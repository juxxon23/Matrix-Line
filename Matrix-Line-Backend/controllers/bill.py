from flask.views import MethodView
from flask import json

class Bill(MethodView):

    def get(self, ced, date):
        message = "Get bill, Cedula: {}, Fecha: {}".format(ced, date) 
        return message, 200


    def delete(self, ced, date):
        message = "Delete bill, Cedula: {}, Fecha: {}".format(ced, date)
        return message, 200  
