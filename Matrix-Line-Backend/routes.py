from controllers.signin import Signin
from controllers.login import Login
from controllers.line import Line
from controllers.bill import Bill
from controllers.user import User
from controllers.check import Check
from controllers.consultUser import ConsultUser
from controllers.change import Change

client = {
    "signin":"/signin", "view_func_signin":Signin.as_view("app_signin"),
    "login":"/login", "view_func_login":Login.as_view("app_login"),
}

line = {
    "line":"/line", "view_func_line":Line.as_view("app_line"), 
}

bill = {
    "bill":"/bill", "view_func_bill":Bill.as_view("app_bill"),
}

consultUser = {
    "consultUser":"/consultUser", "view_func_consultUser":ConsultUser.as_view("app_consultUser"),
}

user = {
    "user":"/user", "view_func_user":User.as_view("app_user"),
}

check = {
        "check":"/check", "view_func_check":Check.as_view("app_check"),
}

change = {
        "change":"/change", "view_func_change":Change.as_view("app_change"),
}

