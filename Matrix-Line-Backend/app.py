from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from routes import *
from data.model import db
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:pass123@localhost:5432/Matrix_line"
CORS(app, supports_credentials=True)
db.init_app(app)
migrate = Migrate(app,db)

# Client routes
app.add_url_rule(client["signin"], view_func=client["view_func_signin"])
app.add_url_rule(client["login"], view_func=client["view_func_login"])
        
# Line routes
app.add_url_rule(line["line"], view_func=line["view_func_line"])

# Bill routes
app.add_url_rule(bill["bill"], view_func=bill["view_func_bill"])
        
#user routes
app.add_url_rule(user["user"], view_func=user["view_func_user"])

#check route
app.add_url_rule(check["check"],view_func=check["view_func_check"])

if __name__ == "__main__":
    app.run(port=5000, debug=True)


