import React from 'react';
// import Main from './Main';
import { connect } from 'react-redux';

class Post extends React.Component {
  
  render() {
    console.log(this.props, "props in post Component")
    const { posts } = this.props;
    console.log(posts);
    return (
      <React.Fragment>
        {
          Object.keys(posts).length ? 
          <>
            <div style={{background:'#111'}}>
              <h2>{posts.title}</h2>
              <img src={posts.author.image} alt="" />
              <h2>{posts.author.username}</h2>
              <h2>{posts.createdAt}</h2>
            </div>
            <p className="">{posts.body}</p>
          </>
          :""
        }
      	<div>
      		<h2></h2>
      		<p></p>
      		<h2></h2>
      	</div>
      	<section>
      		<p>
      			<a href="#">Sign in</a>
      			or
      			<a href="#">Sign up</a>
      			to add comments on this article.
      		</p>

      		<ul>
      			<p></p>
      			<div>
      				<small></small>
      				<p></p>
      			</div>
      		</ul>
      	</section>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state){
  // console.log(state, "state in post Component");
	return { posts: state.post }
}

export default connect(mapStateToProps)(Post);