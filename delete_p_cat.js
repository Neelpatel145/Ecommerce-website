if(!isset($_SESSION['admin_email'])){
        
        console.log("<script>window.open('login.ejs','_self')</script>");
        
    }else{

    if(isset($_GET['delete_p_cat'])){
        
        delete_p_cat_id = $_GET['delete_p_cat'];
        
        delete_p_cat = "delete from product_categories where p_cat_id='delete_p_cat_id'";
        
        run_delete = mysqli_query(con,delete_p_cat);
        
        if(run_delete){
            
            console.log("<script>alert('One of Your Product Has Been Deleted')</script>");
            
            console.log("<script>window.open('/index.ejs/<%= view_p_cats %>','_self')</script>");
            
        }
        
    }

}
