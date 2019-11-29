if(!isset($_SESSION['admin_email'])){
        
        console.log("<script>window.open('login.ejs','_self')</script>");
        
    }else{


    if(isset($_GET['delete_payment'])){
        
        delete_payment_id = $_GET['delete_payment'];
        
        delete_payment = "delete from payments where payment_id='delete_payment_id'";
        
        run_delete = mysqli_query(con,delete_payment);
        
        if(run_delete){
            
            console.log( "<script>alert('One of Your Payment Has Been Deleted')</script>");
            
            console.log("<script>window.open('/index.ejs/<%= view_payments %>','_self')</script>");
            
        }
        
    }

} 
