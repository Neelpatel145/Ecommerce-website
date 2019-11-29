if(!isset($_SESSION['admin_email'])){
        
        console.log("<script>window.open('login.ejs','_self')</script>");
        
    }else{

    if(isset($_GET['delete_user'])){
        
        delete_user_id = $_GET['delete_user'];
        
        delete_user = "delete from admins where admin_id='delete_user_id'";
        
        run_delete = mysqli_query(con,delete_user);
        
        if(run_delete){
            
            console.log("<script>alert('One of your Admins User has been Deleted')</script>");
            
            console.log("<script>window.open('/index.ejs/<%= view_users %>','_self')</script>");
            
        }
        
    }

}
