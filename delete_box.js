if(!isset($_SESSION['admin_email'])){
        
        console.log("<script>window.open('login.php','_self')</script>");
        
    }else{

    if(isset($_GET['delete_box'])){
        
        delete_box_id = $_GET['delete_box'];
        
        delete_box = "delete from boxes_section where box_id='delete_box_id'";
        
        run_delete_box = mysqli_query(con,delete_box);
        
        if(run_delete_box){
            
            console.log("<script>alert('One of Your Box Section Has Been Deleted')</script>");
            
            console.log("<script>window.open('index.ejs?view_boxes','_self')</script>");
            
        }
        
    }




} 
