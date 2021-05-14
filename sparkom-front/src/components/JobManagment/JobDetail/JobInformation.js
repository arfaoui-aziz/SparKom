import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import companylogo from "../../../assets/img/companypost.png";
import {
  setErrors,
  selectSelectedJob,
  fetchJobById,
  deleteJob,
} from "../../../store/slices/jobs";
import { useDispatch, useSelector } from "react-redux";
import { queryApi } from "../../../utils/queryApi";

import { useHistory, useParams } from "react-router";

function JobInformation() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const job = useSelector(selectSelectedJob);
  useEffect(() => {
    dispatch(fetchJobById);
  }, [dispatch, id]);

  const deleteJobEvent = async () => {
    const [err] = await queryApi("job/deleteJob/" + job._id, {}, "DELETE");
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      dispatch(deleteJob(job._id));
      history.push("/findjob");
    }
  };

  return (
    <div>
      <article className="hentry blog-post single-post single-post-v3">
        <ul className="filter-icons">
          <li>
            <a href="#top" className="post-category bg-primary">
              Dalii
            </a>
          </li>
          <li>
            <a href="#top" className="post-category bg-primary">
              Dalii
            </a>
          </li>
          <li>
            <a href="#top" className="post-category bg-primary">
              Dalii
            </a>
          </li>
        </ul>
        <h1 className="post-title">{job.title}</h1>
        <h6>Fundación Mosaico Down A.C. Ciudad de México, Mexico</h6>
        <div className="author-date">
          <div className="author-thumb">
            <img alt="author" src={companylogo} className="avatar" />
          </div>
          by
          <a className="h6 post__author-name fn" href="#top">
            JACK SCORPIO
          </a>
          <div className="post__date">
            <time className="published" dateTime="2017-03-24T18:18">
              - 12 hours ago
            </time>
          </div>
        </div>

        <div className="post-content-wrap">
          <div className="post-content">
            <h5>About Dali</h5>
            <p>
              Duis en aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              hitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <h3>Role</h3>
            <h6>Description</h6>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt:
            </p>
            <h6>Working hours</h6>
            <p>Monday to Friday, 09:00am - 5:00pm</p>

            <h6>Responsibilities</h6>
            <ol>
              <li>
                Study and understand the Agenda of the project (the subjects and
                objectives for each week/session).
              </li>
              <li>
                Study and understand the Agenda of the project (the subjects and
                objectives for each week/session).
              </li>
              <li>
                Study and understand the Agenda of the project (the subjects and
                objectives for each week/session).
              </li>
              <li>
                Study and understand the Agenda of the project (the subjects and
                objectives for each week/session).
              </li>
            </ol>
          </div>
          <button onClick={deleteJobEvent}>Delete</button>
          <Container>
            <Row>
              <Col sm={4}>
                <ul className="listdetails">
                  <li> Type de poste</li>
                  <li> CDI</li>
                </ul>
              </Col>
              <Col sm={4}>
                <ul className="listdetails">
                  <li> Expérience</li>
                  <li>2 Years</li>
                </ul>
              </Col>
              <Col sm={4}>
                <ul className="listdetails">
                  <li>Étude</li>
                  <li> Bac</li>
                </ul>
              </Col>
              <Col sm={4}>
                <ul className="listdetails">
                  <li> Salaire</li>
                  <li> 900 – DT / Month</li>
                </ul>
              </Col>
              <Col sm={4}>
                <ul className="listdetails">
                  <li> Langues</li>
                  <li> Arabe , Français</li>
                </ul>
              </Col>
              <Col sm={4}>
                <ul className="listdetails">
                  <li>Disponibilité</li>
                  <li>Plein temps</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </article>
    </div>
  );
}

export default JobInformation;
