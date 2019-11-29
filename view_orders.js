if(!isset($_SESSION['admin_email'])){
        
        console.log("<script>window.open('login.ejs','_self')</script>");
        
    }else{


<div class="row"><!-- row 1 begin -->
    <div class="col-lg-12"><!-- col-lg-12 begin -->
        <ol class="breadcrumb"><!-- breadcrumb begin -->
            <li class="active"><!-- active begin -->
                
                <i class="fa fa-dashboard"></i> Dashboard / View Orders
                
            </li><!-- active finish -->
        </ol><!-- breadcrumb finish -->
    </div><!-- col-lg-12 finish -->
</div><!-- row 1 finish -->

<div class="row"><!-- row 2 begin -->
    <div class="col-lg-12"><!-- col-lg-12 begin -->
        <div class="panel panel-default"><!-- panel panel-default begin -->
            <div class="panel-heading"><!-- panel-heading begin -->
               <h3 class="panel-title"><!-- panel-title begin -->
               
                   <i class="fa fa-tags"></i>  View Orders
                
               </h3><!-- panel-title finish --> 
            </div><!-- panel-heading finish -->
            
            <div class="panel-body"><!-- panel-body begin -->
                <div class="table-responsive"><!-- table-responsive begin -->
                    <table class="table table-striped table-bordered table-hover"><!-- table table-striped table-bordered table-hover begin -->
                        
                        <thead><!-- thead begin -->
                            <tr><!-- tr begin -->
                                <th> No: </th>
                                <th> Customer Email: </th>
                                <th> Invoice No: </th>
                                <th> Product Name: </th>
                                <th> Product Qty: </th>
                                <th> Product Size: </th>
                                <th> Order Date: </th>
                                <th> Total Amount: </th>
                                <th> Status: </th>
                                <th> Delete: </th>
                            </tr><!-- tr finish -->
                        </thead><!-- thead finish -->
                        
                        <tbody><!-- tbody begin -->
                            
                                i=0;
                            
                                get_orders = "select * from pending_orders";
                                
                                run_orders = mysqli_query(con,get_orders);
          
                                while(row_order=mysqli_fetch_array(run_orders)){
                                    
                                    order_id = row_order['order_id'];
                                    
                                    c_id = row_order['customer_id'];
                                    
                                    invoice_no = row_order['invoice_no'];
                                    
                                    product_id = row_order['product_id'];
                                    
                                    qty = row_order['qty'];
                                    
                                    size = row_order['size'];
                                    
                                    order_status = row_order['order_status'];
                                    
                                    get_products = "select * from products where product_id='product_id'";
                                    
                                    run_products = mysqli_query(con,get_products);
                                    
                                    row_products = mysqli_fetch_array(run_products);
                                    
                                    product_title = row_products['product_title'];
                                    
                                    get_customer = "select * from customers where customer_id='c_id'";
                                    
                                    run_customer = mysqli_query(con,get_customer);
                                    
                                    row_customer = mysqli_fetch_array(run_customer);
                                    
                                    customer_email = row_customer['customer_email'];
                                    
                                    get_c_order = "select * from customer_orders where order_id='order_id'";
                                    
                                    run_c_order = mysqli_query(con,get_c_order);
                                    
                                    row_c_order = mysqli_fetch_array(run_c_order);
                                    
                                    order_date = row_c_order['order_date'];
                                    
                                    order_amount = row_c_order['due_amount'];
                                    
                                    i++;
                            
                            
                            <tr><!-- tr begin -->
                                <td> console.log(i); </td>
                                <td> console.log(customer_email); </td>
                                <td> console.log(invoice_no); </td>
                                <td> console.log(product_title); </td>
                                <td> console.log(qty); </td>
                                <td> console.log(size); </td>
                                <td> console.log(order_date); </td>
                                <td> console.log(order_amount); </td>
                                <td>
                                    
                                        if(order_status=='pending'){
                                            
                                            console.log(order_status='pending');
                                            
                                        }else{
                                            
                                            console.log(order_status='Complete');
                                            
                                        }
                                    
                                    
                                </td>
                                <td> 
                                     
                                     <a href="/index.ejs/<%= delete_order=<console.log(order_id); %>">
                                     
                                        <i class="fa fa-trash-o"></i> Delete
                                    
                                     </a> 
                                     
                                </td>
                            </tr><!-- tr finish -->
                            
                            } 
                            
                        </tbody><!-- tbody finish -->
                        
                    </table><!-- table table-striped table-bordered table-hover finish -->
                </div><!-- table-responsive finish -->
            </div><!-- panel-body finish -->
            
        </div><!-- panel panel-default finish -->
    </div><!-- col-lg-12 finish -->
</div><!-- row 2 finish -->

} 
