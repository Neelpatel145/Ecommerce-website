<script>
        window.open(/login/);
</script>
        
    }else{
            
<div class="row">
    <div class="col-lg-12">
        <ol class="breadcrumb">
            <li>
                
                <i class="fa fa-dashboard"></i> Dashboard / Update Manufacturer
                
            </li>
        </ol>
    </div>
</div>

<div class="row">
    <div class="col-lg-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">
                
                    <i class="fa fa-money fa-fw"></i> Update Manufacturer
                
                </h3>
            </div>
            
            <div class="panel-body">
                <form action="" class="form-horizontal" method="post" enctype="multipart/form-data">
                    <div class="form-group">
                    
                        <label for="" class="control-label col-md-3">
                        
                        Manufacturer Name 
                        
                        </label>
                        
                        <div class="col-md-6">
                        
                            <input name="manufacturer_name" type="text" class="form-control" value="m_title">
                        
                        </div>
                    
                    </div>
                    <div class="form-group">
                    
                        <label for="" class="control-label col-md-3"> 
                        
                            Choose As Top Manufacturer
                        
                        </label>
                        
                        <div class="col-md-6">
                        
                            <input name="manufacturer_top" type="radio" value="yes">
                            <label>Yes</label>
                        
                            <input name="manufacturer_top" type="radio" value="no">
                            <label>No</label>
                        
                        </div>
                    
                    </div>
                    <div class="form-group">
                    
                        <label for="" class="control-label col-md-3"> 
                        
                        Manufacturer Image
                        
                        </label>
                        
                        <div class="col-md-6">
                        
                            <input type="file" name="manufacturer_image" class="form-control">
                          
                          <br>
                          
                          <img width="70" height="70" src="/other_images/<%= m_image %>" alt="m_image">
                        
                        </div>
                    
                    </div>
                    <div class="form-group">
                    
                        <label for="" class="control-label col-md-3"></label>
                        
                        <div class="col-md-6">
                        
                            <input type="submit" name="update" value="Update Manufacturer" class="btn btn-primary form-control">
                        
                        </div>
                    
                    </div>
                </form>
            </div>
            
        </div>
    </div>
</div>

            if(run_manufacturer){
            
                <script>alert('Your manufacturer has been updated')</script>
                
                <script>
                        window.open(/index/<%= view_manufacturers %>);
                </script>

            }

        }else{

            if(run_manufacturer){
            
                <script>alert('Your manufacturer has been updated')</script>
                
                <script>
                        window.open(/index/<%= view_manufacturers %>);
                </script>

            }

        }
        
