import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Button from "@material-ui/core/Button";

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

function TrendBar() {
  const classes = useStyles();

    return (
        <div>
            <div className="container">
	<div className="row">
		<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
			<div className="ui-block responsive-flex">
				<div className="ui-block-title">
					<div className="h6 title">#Telnet_ChalengeOne</div>
                    
    
          <label htmlFor="icon-button-file">
                        <Button
                          variant="contained"
                          style={style1}
                          size="small"
                          className={classes.button}
                        >
                          Follow
                        </Button>
                      </label>
      
                   
				</div>
			</div>
		</div>
	</div>
</div>
        </div>
    )
}

export default TrendBar
