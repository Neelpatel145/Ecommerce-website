<script>
        window.open(/login/);
</script>
        
    }else{
            
<div class="row">
    <div class="col-lg-12">
        <ol class="breadcrumb">
            <li>
                
                <i class="fa fa-dashboard"></i> Dashboard / Edit Category
                
            </li>
        </ol>
    </div>
</div>

<div class="row">
    <div class="col-lg-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">
                
                    <i class="fa fa-pencil fa-fw"></i> Edit Category
                
                </h3>
            </div>
            
            <div class="panel-body">
                <form action="" class="form-horizontal" method="post" enctype="multipart/form-data">
                    <div class="form-group">
                    
                        <label for="" class="control-label col-md-3">
                        
                            Category Title 
                        
                        </label>
                        
                        <div class="col-md-6">
                        
                            <input value="cat_title" name="cat_title" type="text" class="form-control">
                        
                        </div>
                    
                    </div>
                    
                    <div class="form-group">
                    
                        <label for="" class="control-label col-md-3">
                        
                            Choose As Top Manufacturer
                        
                        </label>
                        
                        <div class="col-md-6">
                        
                        <input name="cat_top" type="radio" value="yes">
                        <label>Yes</label>
                    
                        <input name="cat_top" type="radio" value="no">
                        <label>No</label>
                        
                        </div>
                    
                    </div>
                    
                    <div class="form-group">
                    
                        <label for="" class="control-label col-md-3">
                        
                        Category Image
                        
                        </label>
                        
                        <div class="col-md-6">
                        
                            <input type="file" name="cat_image" class="form-control">
                          
                          <br>
                          
                          <img width="70" height="70" src="/other_images/cat_image" alt="cat_image">
                        
                        </div>
                    
                    </div>
                    
                    <div class="form-group">
                    
                        <label for="" class="control-label col-md-3">
                        
                        </label>
                        
                        <div class="col-md-6">
                        
                            <input value="Update Category" name="update" type="submit" class="form-control btn btn-primary">
                        
                        </div>
                    
                    </div>
                </form>
            </div>
            
        </div>
    </div>
</div>
                
                if(run_cat){
                    
                    <script>alert('Your Category Has Been Updated')</script>
                    
                    <script>
                            window.open(/index/<%= view_cats %>);
                    </script>
                    
                }

              }else{
                
                if(run_cat){
                    
                    <script>alert('Your Category Has Been Updated')</script>
                    
                    <script>
                            window.open(/index/<%= view_cats %>);
                    </script>
                    
                }

              }
              
          }

} 
