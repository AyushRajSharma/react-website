import React, {Component} from 'react'

class Field extends Component{
    render(){
        return(
            <div>
            
                {this.props.elementName === 'input' ?
              <div className="form-group">
                      <input className="form-control" 
                    id={this.props.name} 
                    type={this.props.type} 
                    placeholder={this.props.placeholder}
                    required="required" 
                    data-validation-required-message={this.props.val_message} 
                    value={this.props.value}
                    onChange={e => this.props.onChange(e)}
                  />
                   <p class="help-block text-danger"></p>
                </div>
                  
            :
             <div class="form-group form-group-textarea mb-md-0">
                    <textarea className="form-control" 
                        id={this.props.name} 
                        placeholder={this.props.placeholder}
                        required="required" 
                        data-validation-required-message={this.props.val_message}
                        value={this.props.value}
                        onChange={e => this.props.onChange(e)} 
                    />
                  <p class="help-block text-danger"></p>

              </div>
                     
                    }
              
               
            </div>
        )
    }
}
export default Field;