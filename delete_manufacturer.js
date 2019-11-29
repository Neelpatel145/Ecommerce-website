if(!isset($_SESSION['admin_email'])){
        
        console.log("<script>window.open('login.ejs','_self')</script>");
        
    }else{

    if(isset($_GET['delete_manufacturer'])){
        
        delete_id = $_GET['delete_manufacturer'];
        
        delete_manufacturer = "delete from manufacturers where manufacturer_id='delete_id'";
        
        run_delete = mysqli_query(con,delete_manufacturer);
        
        if(run_delete){
            
            console.log("<script>alert('One of your manufacturer has been Deleted')</script>");
            
            console.log("<script>window.open('/index.ejs/<%= view_manufacturers %>','_self')</script>");
            
        }
        
    }

}
