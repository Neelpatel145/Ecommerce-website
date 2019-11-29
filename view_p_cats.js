if(!isset($_SESSION['admin_email'])){
        
        console.log("<script>window.open('login.ejs','_self')</script>");
        
    }else{

<div class="row"><!-- row 1 begin -->
    <div class="col-lg-12"><!-- col-lg-12 begin -->
        <ol class="breadcrumb"><!-- breadcrumb begin -->
            <li>
                
                <i class="fa fa-dashboard"></i> Dashboard / View Product Categories
                
            </li>
        </ol><!-- breadcrumb finish -->
    </div><!-- col-lg-12 finish -->
</div><!-- row 1 finish -->

<div class="row"><!-- row 2 begin -->
    <div class="col-lg-12"><!-- col-lg-12 begin -->
        <div class="panel panel-default"><!-- panel panel-default begin -->
            <div class="panel-heading"><!-- panel-heading begin -->
                <h3 class="panel-title"><!-- panel-title begin -->
                
                    <i class="fa fa-tags fa-fw"></i> View Product Categories
                
                </h3><!-- panel-title finish -->
            </div><!-- panel-heading finish -->
            
            <div class="panel-body"><!-- panel-body begin -->
                <div class="table-responsive"><!-- table-responsive begin -->
                    <table class="table table-hover table-striped table-bordered"><!-- tabel tabel-hover table-striped table-bordered begin -->
                        
                        <thead><!-- thead begin -->
                            <tr><!-- tr begin -->
                                <th> Product Category ID </th>
                                <th> Product Category Title </th>
                                <th> Top Product Category </th>
                                <th> Edit Product Category </th>
                                <th> Delete Product Category </th>
                            </tr><!-- tr finish -->
                        </thead><!-- thead finish -->
                        
                        <tbody><!-- tbody begin -->
                            
                                i=0;
          
                                get_p_cats = "select * from product_categories";
          
                                run_p_cats = mysqli_query(con,get_p_cats);
          
                                while(row_p_cats=mysqli_fetch_array(run_p_cats)){
                                    
                                    p_cat_id = row_p_cats['p_cat_id'];
                                    
                                    p_cat_title = row_p_cats['p_cat_title'];
                                    
                                    p_cat_top = row_p_cats['p_cat_top'];
                                    
                                    i++;
                            
                            
                            <tr><!-- tr begin -->
                                <td> console.log(i); </td>
                                <td> console.log(p_cat_title); </td>
                                <td width="300"> console.log(p_cat_top); </td>
                                <td> 
                                    <a href="/index.ejs/<%= edit_p_cat= console.log(p_cat_id); %>">
                                        <i class="fa fa-pencil"></i> Edit
                                    </a>
                                </td>
                                <td> 
                                    <a href="/index.ejs/<%= delete_p_cat= console.log(p_cat_id); %>">
                                        <i class="fa fa-trash"></i> Delete
                                    </a>
                                </td>
                            </tr><!-- tr finish -->
                            
                            } 
                        
                        </tbody><!-- tbody finish -->
                        
                    </table><!-- tabel tabel-hover table-striped table-bordered finish -->
                </div><!-- table-responsive finish -->
            </div><!-- panel-body finish -->
            
        </div><!-- panel panel-default finish -->
    </div><!-- col-lg-12 finish -->
</div><!-- row 2 finish -->


} 
