import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import "../../../assets/css/Jobs.css";




const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
      
    },
    formControl: {
      margin: '0 1rem',
      minWidth: 120,
    },
  }));

function Filter() {
    return (
       <div className="container">
      <div className="row">
        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="ui-block responsive-flex1200">
            <div className="ui-block-title">
         
             
              <form className="w-search">
                <div className="form-group with-button">
                  <input className="form-control" type="text" placeholder="Search For a Job ..." />
                  <button>
                    <svg className="olymp-magnifying-glass-icon"><use xlinkHref="../../../assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon" /></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Filter
