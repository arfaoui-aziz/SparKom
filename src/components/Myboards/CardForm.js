import React from 'react';
import icons from "../../assets/svg-icons/sprites/icons.svg";


export default function CardForm(props) {
  const style ={ width: '200px',
                }

    return (
      
        
          
                <div class="ui-block">
                    <div class="ui-block-title">
                    
                    <p><h6 class="title">
                    <i class="far fa-credit-card"></i> User interface</h6> in<a href="#"> Test</a>  list</p>
                  
                    </div>
                    
                    <div class="ui-block-content">
    
                        
    
                        
                        <form>
                            <div class="row">
                        
                                <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="form-group label-floating">
                                
                                    <h7><i class="fas fa-align-left"/> Description</h7>
                                       <textarea class="form-control" placeholder=""></textarea>
                                    </div>
                        
                                    <div class="form-group label-floating">
                                    <h7><i class="fas fa-comments"></i> Activity</h7>
                                        <input class="form-control" placeholder="add a comment" type="email" />
                                    </div>
                                </div>
                        
                                <div class="col col-lg-6 col-md-6 col-sm-12 col-12" >
                                   
                                    <div class="form-group label-floating" style={{float:'right'}} >
                                    <h6 >Add to card</h6>
                                    <a href="#" class="btn btn-smoke btn-md btn-light-bg"style={style}> <i class="fas fa-user"></i> Members</a>
                                     <br/>
                                    <a href="#" class="btn btn-smoke btn-md btn-light-bg"style={style}> <i class="fas fa-tag"></i> Labels</a>
                                    <br/>
                                    <a href="#" class="btn btn-smoke btn-md btn-light-bg"style={style}> <i class="fas fa-clock"></i> Due date</a>
							        <br/>
                                    <a href="#" class="btn btn-smoke btn-md btn-light-bg"style={style}>  <i class="fas fa-paperclip"></i> Attachment</a>
                                    <br/>
                                    <br/>
                                     <h6>Action</h6>
                                     
                                    <a href="#" class="btn btn-smoke btn-md btn-light-bg"style={style}><i class="fas fa-arrow-alt-circle-right"></i> Move</a>
                                    
                                    </div>
                                    
                                </div>
                        
                               
                               
                                
                               
                               
                               
                        
                            </div>
                        </form>
                        

                    </div>
                </div>
  
    
           

  
    
    );
}