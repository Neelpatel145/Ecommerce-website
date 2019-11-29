<script>window.open(/login.ejs/)</script>

<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header"> Dashboard </h1>
        
        <ol class="breadcrumb">
            <li class="active">
            
                <i class="fa fa-dashboard"></i> Dashboard
            
            </li>
        </ol>
        
    </div>
</div>

<div class="row">
   
    <div class="col-lg-3 col-md-6">
        <div class="panel panel-primary">
            
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                       
                        <i class="fa fa-tasks fa-5x"></i>
                        
                    </div>
                    
                    <div class="col-xs-9 text-right">
                        <div class="huge"> 
                                console.log(count_products); 
                       </div>
                           
                        <div> Products </div>
                        
                    </div>
                    
                </div>
            </div>
            
            <a href="/index/<%= view_products %>">
                <div class="panel-footer">
                   
                    <span class="pull-left">
                        View Details 
                    </span>
                    
                    <span class="pull-right">
                        <i class="fa fa-arrow-circle-right"></i> 
                    </span>
                    
                    <div class="clearfix"></div>
                    
                </div>
            </a>
            
        </div>
    </div>
   
    <div class="col-lg-3 col-md-6">
        <div class="panel panel-green">
            
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                       
                        <i class="fa fa-users fa-5x"></i>
                        
                    </div>
                    
                    <div class="col-xs-9 text-right">
                        <div class="huge">
                                console.log(count_customers); 
                       </div>
                           
                        <div> Customers </div>
                        
                    </div>
                    
                </div>
            </div>
            
            <a href="/index/<%= view_customers %>">
                <div class="panel-footer">
                   
                    <span class="pull-left">
                        View Details 
                    </span>
                    
                    <span class="pull-right">
                        <i class="fa fa-arrow-circle-right"></i> 
                    </span>
                    
                    <div class="clearfix"></div>
                    
                </div>
            </a>
            
        </div>
    </div>
   
    <div class="col-lg-3 col-md-6">
        <div class="panel panel-orange">
            
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                       
                        <i class="fa fa-tags fa-5x"></i>
                        
                    </div>
                    
                    <div class="col-xs-9 text-right">
                        <div class="huge"> 
                                console.log(count_p_categories);
                       </div>
                           
                        <div> Product Categories </div>
                        
                    </div>
                    
                </div>
            </div>
            
            <a href="/index/<%= view_p_cats %>">
                <div class="panel-footer">
                   
                    <span class="pull-left">
                        View Details 
                    </span>
                    
                    <span class="pull-right">
                        <i class="fa fa-arrow-circle-right"></i> 
                    </span>
                    
                    <div class="clearfix"></div>
                    
                </div>
            </a>
            
        </div>
    </div>
   
    <div class="col-lg-3 col-md-6">
        <div class="panel panel-red">
            
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                       
                        <i class="fa fa-shopping-cart fa-5x"></i>
                        
                    </div>
                    
                    <div class="col-xs-9 text-right">
                        <div class="huge"> 
                                console.log(count_pending_orders); 
                        </div>
                           
                        <div> Orders </div>
                        
                    </div>
                    
                </div>
            </div>
            
            <a href="/index/<%= view_orders %>">
                <div class="panel-footer">
                   
                    <span class="pull-left">
                        View Details 
                    </span>
                    
                    <span class="pull-right">
                        <i class="fa fa-arrow-circle-right"></i> 
                    </span>
                    
                    <div class="clearfix"></div>
                    
                </div>
            </a>
            
        </div>
    </div>
    
</div>

<div class="row">
    <div class="col-lg-8">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">
                    
                    <i class="fa fa-money fa-fw"></i> New Orders
                    
                </h3>
            </div>
            
            <div class="panel-body">
                <div class="table-responsive">
                    <table class="table table-hover table-striped table-bordered">
                        
                        <thead>
                          
                            <tr>
                           
                                <th> Order no: </th>
                                <th> Customer Email: </th>
                                <th> Invoice No: </th>
                                <th> Product ID: </th>
                                <th> Product Qty: </th>
                                <th> Product Size: </th>
                                <th> Status: </th>
                            
                            </tr>
                            
                        </thead>
                        
                            
                           
                            <tr><!-- tr begin -->
                               
                                <td> console.log(order_id); </td>
                                <td> console.log(invoice_no); </td>
                                <td> console.log(product_id); </td>
                                <td> console.log(qty); </td>
                                <td> console.log(size); </td>
                                <td>
                                    
                                    if(order_status=='pending'){
                                            
                                            console.log(order_status='pending');
                                            
                                        }else{
                                            
                                            console.log(order_status='Complete');
                                            
                                        }
                               </td>
                                
                            </tr>
                            
                            }
                            
                        </tbody>
                        
                    </table>
                </div>
                
                <div class="text-right">
                    
                    <a href="/index/<%= view_orders %>">
                        
                        View All Orders <i class="fa fa-arrow-circle-right"></i>
                        
                    </a>
                    
                </div>
                
            </div>
            
        </div>
    </div>
    
    <div class="col-md-4">
        <div class="panel">
            <div class="panel-body">
                <div class="mb-md thumb-info">

                    <img src="admin_images/console.log(admin_image); " alt="console.log(admin_image); " class="rounded img-responsive">
                    
                    <div class="thumb-info-title">
                       
                        <span class="thumb-info-inner"> console.log(admin_name); </span>
                        <span class="thumb-info-type"> console.log(admin_job); </span>
                        
                    </div>

                </div>
                
                <div class="mb-md">
                    <div class="widget-content-expanded">
                        <i class="fa fa-user"></i> <span> Email: </span> console.log(admin_email); <br/>
                        <i class="fa fa-flag"></i> <span> Country: </span> console.log(admin_country); <br/>
                        <i class="fa fa-envelope"></i> <span> Contact: </span> console.log(admin_contact); <br/>
                    </div>

                    <hr class="dotted short">
                    
                    <h5 class="text-muted"> About Me </h5>
                    
                    <p>
                        
                        console.log(admin_about); 
                        
                    </p>
                    
                </div>
                
            </div>
        </div>
    </div>
    
</div>

} 
