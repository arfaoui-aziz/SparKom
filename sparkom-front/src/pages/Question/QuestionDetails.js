import React, { Component } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import avatar from "../../assets/img/avatar2.jpg";
import { useDispatch, connect } from "react-redux";
import Header from "./Header";
import { isLogged } from "../../helpers/auth";
import { format } from "timeago.js";
import AnswersList from "./AnswersList"
import RelatedQuestion from "./RelatedQuestion";

function QuestionDetails({ questions }) {
  const { questionId } = useParams();
  const [question, setQuestion] = React.useState("");
  const [error, setError] = React.useState("");
  const jwt = isLogged();
  const [answers, setAnswers] = React.useState([{}]);


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
    async function getAnswers() {
      setAnswers(question && question.answers);
    }
    getAnswers();
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
            <img src={`http://localhost:8888/api/user/photo/${question.questionedBy}?${new Date().getTime()}`} alt="author"/>
        </div>
        <div class="author-content">
            <div class="country"> {format(question.createdAt)}   </div>
        </div>
    </td>
    <td class="posts">
        <p>{question.body}</p>
    </td>
</tr>

    </thead>

<tbody>








</tbody>
</table>


{/*<AnswersList questionId={question._id} answers={answers && answers}/>*/ }


            </div>
            
          </div>
         <RelatedQuestion/> 

        </div>
      </div>
</div>


);
  
}


export default (QuestionDetails);
