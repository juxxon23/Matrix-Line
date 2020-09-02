from controllers.signin import Signin
from controllers.login import Login
from controllers.line import Line
from controllers.bill import Bill
from controllers.user import User

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

user = {

    "user":"/user", "view_func_user":User.as_view("app_user"),

}





