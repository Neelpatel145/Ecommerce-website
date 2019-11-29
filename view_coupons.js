if(!isset($_SESSION['admin_email'])){
        
        console.log("<script>window.open('login.ejs','_self')</script>");
        
    }else{

<div class="row"><!-- row 1 begin -->
    <div class="col-lg-12"><!-- col-lg-12 begin -->
        <ol class="breadcrumb"><!-- breadcrumb begin -->
            <li class="active"><!-- active begin -->
                
                <i class="fa fa-dashboard"></i> Dashboard / View Coupons
                
            </li><!-- active finish -->
        </ol><!-- breadcrumb finish -->
    </div><!-- col-lg-12 finish -->
</div><!-- row 1 finish -->

<div class="row"><!-- row 2 begin -->
    <div class="col-lg-12"><!-- col-lg-12 begin -->
        <div class="panel panel-default"><!-- panel panel-default begin -->
            <div class="panel-heading"><!-- panel-heading begin -->
               <h3 class="panel-title"><!-- panel-title begin -->
               
                   <i class="fa fa-tags"></i>  View Coupons
                
               </h3><!-- panel-title finish --> 
            </div><!-- panel-heading finish -->
            
            <div class="panel-body"><!-- panel-body begin -->
                <div class="table-responsive"><!-- table-responsive begin -->
                    <table class="table table-striped table-bordered table-hover"><!-- table table-striped table-bordered table-hover begin -->
                        
                        <thead><!-- thead begin -->
                            <tr><!-- tr begin -->
                                <th> Coupon ID: </th>
                                <th> Coupon Name: </th>
                                <th> Product Name: </th>
                                <th> Coupon Price: </th>
                                <th> Code: </th>
                                <th> Limit: </th>
                                <th> Used: </th>
                                <th> Edit: </th>
                                <th> Delete: </th>
                            </tr><!-- tr finish -->
                        </thead><!-- thead finish -->
                        
                        <tbody><!-- tbody begin -->

                        i=0;
                        get_coupons = "select * from coupons";
                        run_coupons = mysqli_query(con,get_coupons);

                        while(row_coupons=mysqli_fetch_array(run_coupons)){

                            coupon_id = row_coupons['coupon_id'];
                            coupon_pro_id = row_coupons['product_id'];
                            coupon_title = row_coupons['coupon_title'];
                            coupon_price = row_coupons['coupon_price'];
                            coupon_code = row_coupons['coupon_code'];
                            coupon_limit = row_coupons['coupon_limit'];
                            coupon_used = row_coupons['coupon_used'];

                            get_products = "select * from products where product_id='coupon_pro_id'";

                            run_products = mysqli_query(con,get_products);
                            row_products = mysqli_fetch_array(run_products);

                            product_title = row_products['product_title'];

                            i++;

                        <tr>
                        
                            <td>console.log(i); </td>
                            <td>console.log(coupon_title); </td>
                            <td>console.log(product_title); </td>
                            <td>$ console.log(coupon_price); </td>
                            <td>console.log(coupon_code); </td>
                            <td>console.log(coupon_limit); </td>
                            <td>console.log(coupon_used); </td>
                            <td>
                            
                                <a href="/index.ejs/<%= edit_coupon=console.log(coupon_id); %>">
                                
                                    <i class="fa fa-pencil"></i> Edit
                                
                                </a>
                            
                            </td>
                            <td>
                            
                                <a href="/index.ejs/<%= delete_coupon=console.log(coupon_id); %>"> 
                                
                                    <i class="fa fa-trash"></i> Delete
                                
                                </a>
                            
                            </td>
                        
                        </tr>

                        } 
                            
                        </tbody><!-- tbody finish -->
                        
                    </table><!-- table table-striped table-bordered table-hover finish -->
                </div><!-- table-responsive finish -->
            </div><!-- panel-body finish -->
            
        </div><!-- panel panel-default finish -->
    </div><!-- col-lg-12 finish -->
</div><!-- row 2 finish -->

} 
