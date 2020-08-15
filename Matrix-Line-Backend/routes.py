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

    "create_line":"/line/create", "view_func_create_line":Line.as_view("app_create_line"),
    "delete_line":"/line/delete/<idline>", "view_func_delete_line":Line.as_view("app_delete_line"),
    "update_line":"/line/update/<ced>/<idline>", "view_func_update_line":Line.as_view("app_update_line"),
    "get_line":"/line/<idline>", "view_func_get_line":Line.as_view("app_get_line")
    
}

bill = {
    
    "get_bill":"/bill/<ced>/<date>", "view_func_get_bill":Bill.as_view("app_get_bill"),
    "delete_bill":"/bill/delete/<ced>/<date>", "view_func_delete_bill":Bill.as_view("app_delete_bill"),

}

user = {

    "create_user":"/user", "view_func_create_user":User.as_view("app_create_user"),
    "delete_user":"/user/delete/<iduser>", "view_func_delete_user":User.as_view("app_delete_user"),
    "update_user":"/user/update/<ced>/<iduser>", "view_func_update_user":User.as_view("app_update_user"),
    "get_user"   :"/user/<iduser>", "view_func_get_user":User.as_view("app_get_user")

}





