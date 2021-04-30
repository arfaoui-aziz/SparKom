

import React from "react";
import { isLogged } from "../../../helpers/auth";
import { useDispatch } from "react-redux";
import TopicPic from "../../../assets/img/playlist9.jpg";
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const ITEM_HEIGHT = 8;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));
const style1 = {
    border: 0,
    color: "#fff",
    background: "#236aed",
  };

export default function TopicComp({ topic }) {
  const classes = useStyles();
  const date = new Date(topic.createdAt);
  const jwt = isLogged();
  const dispatch = useDispatch();
  const image = topic.image;

  

 

  return (
    <div class="ui-block">
    <div class="birthday-item inline-items badges">
                <div class="author-thumb ">
                    <img src={TopicPic} alt="author" />
                </div>
    
                <div class="birthday-author-name">
                    <a href="topicpage" class="h6 author-name"> {topic.name}</a>
                    <div class="birthday-date">{topic.followers.length}{" "} followers</div>
                </div>
                <div class="skills-item">
                                    <Button
                                      variant="contained"
                                      style={style1}
                                      size="small"
                                      className={classes.button}
                                    >
                                      Follow
                                    </Button>
                                  </div>
                </div>
    
    
            </div>
  );
}