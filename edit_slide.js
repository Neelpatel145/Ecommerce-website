<script>
	window.open(/login/);
</script>
        
    }else{

<div class="row">
    <div class="col-lg-12">
        <ol class="breadcrumb">
            <li>
                
                <i class="fa fa-dashboard"></i> Dashboard / Edit Slide
                
            </li>
        </ol>
    </div>
</div>

<div class="row">
    <div class="col-lg-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">
                
                    <i class="fa fa-money fa-fw"></i> Edit Slide
                
                </h3>
            </div>
            
            <div class="panel-body">
                <form action="" class="form-horizontal" method="post" enctype="multipart/form-data">
                    <div class="form-group">
                    
                        <label for="" class="control-label col-md-3">
                        
                            Slide Name 
                        
                        </label>
                        
                        <div class="col-md-6">
                        
                            <input name="slide_name" type="text" class="form-control" value="slide_name">
                        
                        </div>
                    
                    </div>
                    <div class="form-group">
                    
                        <label for="" class="control-label col-md-3">
                        
                            Slide Url 
                        
                        </label>
                        
                        <div class="col-md-6">
                        
                            <input name="slide_url" type="text" class="form-control" value="slide_url">
                        
                        </div>
                    
                    </div>
                    <div class="form-group">
                    
                        <label for="" class="control-label col-md-3"> 
                        
                            Slide Image
                        
                        </label>
                        
                        <div class="col-md-6">
                        
                            <input type="file" name="slide_image" class="form-control">
                            
                            <br/>
                            
                            <img src="/slides_images/<%= slide_image %>" class="img-responsive">
                        
                        </div>
                    
                    </div>
                    <div class="form-group">
                    
                        <label for="" class="control-label col-md-3"></label>
                        
                        <div class="col-md-6"><!-- col-md-6 begin -->
                        
                            <input type="submit" name="update" value="Update Now" class="btn btn-primary form-control">
                        
                        </div>
                    
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
        
        if(run_update_slide){
            
            <script>alert('Your Slide has been updated Successfully')</script>"); 
        
            <script>
		    window.open(/index/<%= view_slides %>);
            </script>
          
        
    }

} 
