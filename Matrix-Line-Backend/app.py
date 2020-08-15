from flask import Flask
from routes import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Client routes
app.add_url_rule(client["signin"], view_func=client["view_func_signin"])
app.add_url_rule(client["login"], view_func=client["view_func_login"])

# Line routes
app.add_url_rule(line["create_line"], view_func=line["view_func_create_line"])
app.add_url_rule(line["delete_line"], view_func=line["view_func_delete_line"])
app.add_url_rule(line["update_line"], view_func=line["view_func_update_line"])
app.add_url_rule(line["get_line"], view_func=line["view_func_get_line"])

# Bill routes
app.add_url_rule(bill["get_bill"], view_func=bill["view_func_get_bill"])
app.add_url_rule(bill["delete_bill"], view_func=bill["view_func_delete_bill"])

#user routes
app.add_url_rule(user["create_user"], view_func=user["view_func_create_user"])
app.add_url_rule(user["delete_user"], view_func=user["view_func_delete_user"])
app.add_url_rule(user["update_user"], view_func=user["view_func_update_user"])
app.add_url_rule(user["get_user"]   , view_func=user["view_func_get_user"])
