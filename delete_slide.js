if(!isset($_SESSION['admin_email'])){
        
        console.log("<script>window.open('login.ejs','_self')</script>");
        
    }else{



    if(isset($_GET['delete_slide'])){
        
        delete_slide_id = $_GET['delete_slide'];
        
        delete_slide = "delete from slider where slide_id='delete_slide_id'";
        
        run_delete = mysqli_query(con,delete_slide);
        
        if(run_delete){
            
            console.log("<script>alert('One of Your Slide Has Been Deleted')</script>");
            
            console.log("<script>window.open('/index.ejs/<%= view_slides %>','_self')</script>");
            
        }
        
    }

} 
