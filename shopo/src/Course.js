import React, {Component} from 'react'

class Course extends Component {
  clicker(){
    var activev = !this.state.active;
    this.setState({active: activev})
    this.props.sumPrice(activev ? this.props.price : -this.props.price)
  }
  constructor(props){
    super(props);

    this.state = {
      active:false
    };
    this.clicker = this.clicker.bind(this);
  }
  render(){
    return(
      <div>
        <p className= {this.state.active ? 'active' : ''} onClick={this.clicker}>{this.props.name} {this.props.price}</p>
      </div>
    );
  }
}
export default Course;
