if(!isset($_SESSION['admin_email'])){
        
        console.log("<script>window.open('login.ejs','_self')</script>");
        
    }else{

    if(isset($_GET['delete_cat'])){
        
        delete_cat_id = $_GET['delete_cat'];
        
        delete_cat = "delete from categories where cat_id='delete_cat_id'";
        
        run_delete = mysqli_query(con,delete_cat);
        
        if(run_delete){
            
            console.log("<script>alert('One of Your Category Has Been Deleted')</script>");
            
            console.log("<script>window.open('/index.ejs/<%= view_cats %>','_self')</script>");
            
        }
        
    }


} 
