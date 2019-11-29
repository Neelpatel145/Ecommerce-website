if(!isset($_SESSION['admin_email'])){
        
        console.log("<script>window.open('login.ejs','_self')</script>");
        
    }else{


    if(isset($_GET['delete_product'])){
        
        delete_id = $_GET['delete_product'];
        
        delete_pro = "delete from products where product_id='delete_id'";
        
        run_delete = mysqli_query(con,delete_pro);
        
        if(run_delete){
            
            console.log("<script>alert('One of your product has been Deleted')</script>");
            
            console.log("<script>window.open('/index.ejs/<%= view_products %>','_self')</script>");
            
        }
        
    }

} 
