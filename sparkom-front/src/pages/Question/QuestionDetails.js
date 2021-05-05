import React, { Component } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import avatar from "../../assets/img/avatar2.jpg";
import { useDispatch, connect } from "react-redux";
import Header from "./Header";
import { isLogged } from "../../helpers/auth";


function QuestionDetails({ posts }) {
  const { questionId } = useParams();
  const [question, setQuestion] = React.useState("");
  const [error, setError] = React.useState("");
  const jwt = isLogged();

  const dispatch = useDispatch();

  


  React.useEffect(() => {
    async function getQuestion() {
      axios
    .get(`http://127.0.0.1:8888/api/question/${questionId}`)
    .then((res) => {
      if (res.data.error) {
        setError(res.data.error);
      } else {
        
        setQuestion(res.data);
      }
    })
    }
    
    
      getQuestion();
    
    
  }, [questionId]);


if (!jwt) {
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-md-8 mx-auto">
            <div className="alert alert-info">
              <Link to="/login">Connectez vous pour voir les tweets</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  
return (


  <div>
     <Header />
  <p>
    
    {question.body}
    {question.type}
  </p>

  <div class="container">
        <div class="row">
          <div class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="ui-block responsive-flex">

            <div className="ui-block-title">
        <i className="icon fa fa-star c-yellow" aria-hidden="true"></i>
        <h6 >{question.title}</h6>
    </div>


    <table class="open-topic-table">
<thead>

<tr>
    <td class="author">
        <div class="author-thumb">
            <img src={avatar} alt="author"/>
        </div>
        <div class="author-content">
<a href="02-ProfilePage.html" class="h6 author-name">{/*question.questionedBy.name*/}</a>
            <div class="country">Long Island, NY</div>
        </div>
    </td>
    <td class="posts">
        <p>{question.body}</p>
    </td>
</tr>

    </thead>

<tbody>



<tr>
    <td class="author">
        <div class="author-thumb">
            <img src={avatar} alt="author"/>
        </div>
        <div class="author-content">
            <a href="02-ProfilePage.html" class="h6 author-name">Marina Valentine</a>
            <div class="country">Long Island, NY</div>
        </div>
    </td>
    <td class="posts">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>Duis aute irure dolor in reprehenderit.</p>
        <p>Thanks!</p>
    </td>
</tr>

<tr>
    <td class="topic-date" colspan="2">
        March 24th, 2016 at 8:05 pm
        <a href="#" class="reply-topic">Like</a>
        <a href="#" class="reply-topic">Dislike</a>

    </td>
</tr>



</tbody>
</table>


{/* <AddReply/>*/}
            </div>
            
          </div>
         {/*<RelatedQuestion/> */} 

        </div>
      </div>
</div>


);
  
}


export default (QuestionDetails);
