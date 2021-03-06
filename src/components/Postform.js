import React,{ Component} from 'react';

class PostForm extends Component {
  constructor(props){
    super(props);
    this.state = {};

    //this.onChange = this.onChange.bind(this);
  }
  onChange= e=>{
    this.setState({[e.target.name]: e.target.value });
  }
  render(){
    return(
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value = {this.state.title}
            />
          </div>
          <div>
            <label>body: </label><br />
            <textarea
              name="body"
              onChange={this.onChange}
              value = {this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
