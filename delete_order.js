if(!isset($_SESSION['admin_email'])){
        
        console.log("<script>window.open('login.ejs','_self')</script>");
        
    }else{

    if(isset($_GET['delete_order'])){
        
        delete_id = $_GET['delete_order'];
        
        delete_order = "delete from pending_orders where order_id='delete_id'";
        
        run_delete = mysqli_query(con,delete_order);
        
        if(run_delete){
            
            console.log("<script>alert('One of your costumer order has been Deleted')</script>");
            
            console.log("<script>window.open('/index.ejs/<%= view_orders %>','_self')</script>");
            
        }
        
    }
} 
