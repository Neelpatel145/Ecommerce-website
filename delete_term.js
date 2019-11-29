if(!isset($_SESSION['admin_email'])){
        
        console.log("<script>window.open('login.ejs','_self')</script>");
        
    }else{

    if(isset($_GET['delete_term'])){
        
        delete_term_id = $_GET['delete_term'];
        
        delete_term = "delete from terms where term_id='delete_term_id'";
        
        run_delete_term = mysqli_query(con,delete_term);
        
        if(run_delete_term){
            
            console.log("<script>alert('One of Your term Section Has Been Deleted')</script>");
            
            console.log("<script>window.open('/index.ejs/<%= view_terms %>','_self')</script>");
            
        }
        
    }

} 
