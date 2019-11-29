<script>
        window.open(/login/);
</script>
        
    }else{

<div class="row">
    <div class="col-lg-12">
        <ol class="breadcrumb">
            <li>
                
                <i class="fa fa-dashboard"></i> Dashboard / Edit Box
                
            </li>
        </ol>
    </div>
</div>

<div class="row">
    <div class="col-lg-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">
                
                    <i class="fa fa-pencil fa-fw"></i> Edit Box
                
                </h3>
            </div>
            
            <div class="panel-body">
                <form action="" class="form-horizontal" method="post">
                    <div class="form-group">
                    
                        <label for="" class="control-label col-md-3">
                        
                            Box Title 
                        
                        </label>
                        
                        <div class="col-md-6">
                        
                            <input value=" console.log(box_title);" name="box_title" type="text" class="form-control">
                        
                        </div>
                    
                    </div>
                    <div class="form-group">
                    
                        <label for="" class="control-label col-md-3"> 
                        
                            Box Description 
                        
                        </label>
                        
                        <div class="col-md-6">
                        
                            <textarea type='text' name="box_desc" class="form-control">console.log(box_desc); </textarea>
                        
                        </div>
                    
                    </div>
                    <div class="form-group">
                    
                        <label for="" class="control-label col-md-3">
                        
                             
                        
                        </label>
                        
                        <div class="col-md-6">
                        
                            <input value="Update Box" name="update_box" type="submit" class="form-control btn btn-primary">
                        
                        </div>
                    
                    </div>
                </form>
            </div>
            
        </div>
    </div>
</div>
              
              if(run_box){
                  
                  <script>alert('Your Box Has Been Updated')</script>
                  
                  <script>
                          window.open(/index/<%= view_boxes %>);
                  </script>
                  
              }
              
          }



} 
