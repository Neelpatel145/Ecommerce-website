if(!isset($_SESSION['admin_email'])){
        
        console.log("<script>window.open('login.php','_self')</script>");
        
    }else{



    if(isset($_GET['delete_coupon'])){
        
        delete_coupon_id = $_GET['delete_coupon'];
        
        delete_coupon = "delete from coupons where coupon_id='delete_coupon_id'";
        
        run_delete = mysqli_query(con,delete_coupon);
        
        if(run_delete){
            
            console.log("<script>alert('One of Your Coupons Has Been Deleted')</script>");
            
            console.log("<script>window.open('/index.php/<%= view_coupons %>','_self')</script>");
            
        }
        
    }



} 
