from controllers.signin import Signin
from controllers.login import Login
from controllers.line import Line
from controllers.bill import Bill

client = {

    "signin":"/signin", "view_func_signin":Signin.as_view("app_signin"),
    "login":"/login", "view_func_login":Login.as_view("app_login"),

}

line = {

    "create_line":"/line", "view_func_create_line":Line.as_view("app_create_line"),
    "delete_line":"/line/delete/<idline>", "view_func_delete_line":Line.as_view("app_delete_line"),
    "update_line":"/line/update/<ced>/<idline>", "view_func_update_line":Line.as_view("app_update_line"),
    "get_line":"/line/<idline>", "view_func_get_line":Line.as_view("app_get_line")
    
}

bill = {
    
    "get_bill":"/bill/<ced>/<date>", "view_func_get_bill":Bill.as_view("app_get_bill"),
    "delete_bill":"/bill/delete/<ced>/<date>", "view_func_delete_bill":Bill.as_view("app_delete_bill"),

}

