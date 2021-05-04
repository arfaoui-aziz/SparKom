import React, { useState } from "react";
import { Container, MenuItem } from "@material-ui/core";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import {
  populateJobs,
  setErrors,
  selectJobs,
  addJob,
} from "../../../store/slices/jobs";
import { queryApi } from "../../../utils/queryApi";
import { useHistory, Redirect } from "react-router-dom";
import * as Yup from "yup";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  IconButton,
} from "@material-ui/core";
const countries = [
  { label: "AD", value: "Andorra" },
  { label: "AE", value: "United Arab Emirates" },
  { label: "AF", value: "Afghanistan" },
  { label: "AG", value: "Antigua and Barbuda" },
  { label: "AI", value: "Anguilla" },
  { label: "AL", value: "Albania" },
  { label: "AM", value: "Armenia" },
  { label: "AO", value: "Angola" },
  { label: "AQ", value: "Antarctica" },
  { label: "AR", value: "Argentina" },
  { label: "AS", value: "American Samoa" },
  { label: "AT", value: "Austria" },
  { label: "AU", value: "Australia" },
  { label: "AW", value: "Aruba" },
  { label: "AX", value: "Alland Islands" },
  { label: "AZ", value: "Azerbaijan" },
  { label: "BA", value: "Bosnia and Herzegovina" },
  { label: "BB", value: "Barbados" },
  { label: "BD", value: "Bangladesh" },
  { label: "BE", value: "Belgium" },
  { label: "BF", value: "Burkina Faso" },
  { label: "BG", value: "Bulgaria" },
  { label: "BH", value: "Bahrain" },
  { label: "BI", value: "Burundi" },
  { label: "BJ", value: "Benin" },
  { label: "BL", value: "Saint Barthelemy" },
  { label: "BM", value: "Bermuda" },
  { label: "BN", value: "Brunei Darussalam" },
  { label: "BO", value: "Bolivia" },
  { label: "BR", value: "Brazil" },
  { label: "BS", value: "Bahamas" },
  { label: "BT", value: "Bhutan" },
  { label: "BV", value: "Bouvet Island" },
  { label: "BW", value: "Botswana" },
  { label: "BY", value: "Belarus" },
  { label: "BZ", value: "Belize" },
  { label: "CA", value: "Canada" },
  { label: "CC", value: "Cocos (Keeling) Islands" },
  { label: "CD", value: "Congo, Democratic Republic of the" },
  { label: "CF", value: "Central African Republic" },
  { label: "CG", value: "Congo, Republic of the" },
  { label: "CH", value: "Switzerland" },
  { label: "CI", value: "Cote d'Ivoire" },
  { label: "CK", value: "Cook Islands" },
  { label: "CL", value: "Chile" },
  { label: "CM", value: "Cameroon" },
  { label: "CN", value: "China" },
  { label: "CO", value: "Colombia" },
  { label: "CR", value: "Costa Rica" },
  { label: "CU", value: "Cuba" },
  { label: "CV", value: "Cape Verde" },
  { label: "CW", value: "Curacao" },
  { label: "CX", value: "Christmas Island" },
  { label: "CY", value: "Cyprus" },
  { label: "CZ", value: "Czech Republic" },
  { label: "DE", value: "Germany" },
  { label: "DJ", value: "Djibouti" },
  { label: "DK", value: "Denmark" },
  { label: "DM", value: "Dominica" },
  { label: "DO", value: "Dominican Republic" },
  { label: "DZ", value: "Algeria" },
  { label: "EC", value: "Ecuador" },
  { label: "EE", value: "Estonia" },
  { label: "EG", value: "Egypt" },
  { label: "EH", value: "Western Sahara" },
  { label: "ER", value: "Eritrea" },
  { label: "ES", value: "Spain" },
  { label: "ET", value: "Ethiopia" },
  { label: "FI", value: "Finland" },
  { label: "FJ", value: "Fiji" },
  { label: "FK", value: "Falkland Islands (Malvinas)" },
  { label: "FM", value: "Micronesia, Federated States of" },
  { label: "FO", value: "Faroe Islands" },
  { label: "FR", value: "France" },
  { label: "GA", value: "Gabon" },
  { label: "GB", value: "United Kingdom" },
  { label: "GD", value: "Grenada" },
  { label: "GE", value: "Georgia" },
  { label: "GF", value: "French Guiana" },
  { label: "GG", value: "Guernsey" },
  { label: "GH", value: "Ghana" },
  { label: "GI", value: "Gibraltar" },
  { label: "GL", value: "Greenland" },
  { label: "GM", value: "Gambia" },
  { label: "GN", value: "Guinea" },
  { label: "GP", value: "Guadeloupe" },
  { label: "GQ", value: "Equatorial Guinea" },
  { label: "GR", value: "Greece" },
  { label: "GS", value: "South Georgia and the South Sandwich Islands" },
  { label: "GT", value: "Guatemala" },
  { label: "GU", value: "Guam" },
  { label: "GW", value: "Guinea-Bissau" },
  { label: "GY", value: "Guyana" },
  { label: "HK", value: "Hong Kong" },
  { label: "HM", value: "Heard Island and McDonald Islands" },
  { label: "HN", value: "Honduras" },
  { label: "HR", value: "Croatia" },
  { label: "HT", value: "Haiti" },
  { label: "HU", value: "Hungary" },
  { label: "ID", value: "Indonesia" },
  { label: "IE", value: "Ireland" },
  { label: "IL", value: "Israel" },
  { label: "IM", value: "Isle of Man" },
  { label: "IN", value: "India" },
  { label: "IO", value: "British Indian Ocean Territory" },
  { label: "IQ", value: "Iraq" },
  { label: "IR", value: "Iran, Islamic Republic of" },
  { label: "IS", value: "Iceland" },
  { label: "IT", value: "Italy" },
  { label: "JE", value: "Jersey" },
  { label: "JM", value: "Jamaica" },
  { label: "JO", value: "Jordan" },
  { label: "JP", value: "Japan" },
  { label: "KE", value: "Kenya" },
  { label: "KG", value: "Kyrgyzstan" },
  { label: "KH", value: "Cambodia" },
  { label: "KI", value: "Kiribati" },
  { label: "KM", value: "Comoros" },
  { label: "KN", value: "Saint Kitts and Nevis" },
  { label: "KP", value: "Korea, Democratic People" },
  { label: "KR", value: "Korea, Republic of" },
  { label: "KW", value: "Kuwait" },
  { label: "KY", value: "Cayman Islands" },
  { label: "KZ", value: "Kazakhstan" },
  { label: "LA", value: "Lao People's Democratic Republic" },
  { label: "LB", value: "Lebanon" },
  { label: "LC", value: "Saint Lucia" },
  { label: "LI", value: "Liechtenstein" },
  { label: "LK", value: "Sri Lanka" },
  { label: "LR", value: "Liberia" },
  { label: "LS", value: "Lesotho" },
  { label: "LT", value: "Lithuania" },
  { label: "LU", value: "Luxembourg" },
  { label: "LV", value: "Latvia" },
  { label: "LY", value: "Libya" },
  { label: "MA", value: "Morocco" },
  { label: "MC", value: "Monaco" },
  { label: "MD", value: "Moldova, Republic of" },
  { label: "ME", value: "Montenegro" },
  { label: "MF", value: "Saint Martin (French part)" },
  { label: "MG", value: "Madagascar" },
  { label: "MH", value: "Marshall Islands" },
  { label: "MK", value: "Macedonia, the Former Yugoslav Republic of" },
  { label: "ML", value: "Mali" },
  { label: "MM", value: "Myanmar" },
  { label: "MN", value: "Mongolia" },
  { label: "MO", value: "Macao" },
  { label: "MP", value: "Northern Mariana Islands" },
  { label: "MQ", value: "Martinique" },
  { label: "MR", value: "Mauritania" },
  { label: "MS", value: "Montserrat" },
  { label: "MT", value: "Malta" },
  { label: "MU", value: "Mauritius" },
  { label: "MV", value: "Maldives" },
  { label: "MW", value: "Malawi" },
  { label: "MX", value: "Mexico" },
  { label: "MY", value: "Malaysia" },
  { label: "MZ", value: "Mozambique" },
  { label: "NA", value: "Namibia" },
  { label: "NC", value: "New Caledonia" },
  { label: "NE", value: "Niger" },
  { label: "NF", value: "Norfolk Island" },
  { label: "NG", value: "Nigeria" },
  { label: "NI", value: "Nicaragua" },
  { label: "NL", value: "Netherlands" },
  { label: "NO", value: "Norway" },
  { label: "NP", value: "Nepal" },
  { label: "NR", value: "Nauru" },
  { label: "NU", value: "Niue" },
  { label: "NZ", value: "New Zealand" },
  { label: "OM", value: "Oman" },
  { label: "PA", value: "Panama" },
  { label: "PE", value: "Peru" },
  { label: "PF", value: "French Polynesia" },
  { label: "PG", value: "Papua New Guinea" },
  { label: "PH", value: "Philippines" },
  { label: "PK", value: "Pakistan" },
  { label: "PL", value: "Poland" },
  { label: "PM", value: "Saint Pierre and Miquelon" },
  { label: "PN", value: "Pitcairn" },
  { label: "PR", value: "Puerto Rico" },
  { label: "PS", value: "Palestine, State of" },
  { label: "PT", value: "Portugal" },
  { label: "PW", value: "Palau" },
  { label: "PY", value: "Paraguay" },
  { label: "QA", value: "Qatar" },
  { label: "RE", value: "Reunion" },
  { label: "RO", value: "Romania" },
  { label: "RS", value: "Serbia" },
  { label: "RU", value: "Russian Federation" },
  { label: "RW", value: "Rwanda" },
  { label: "SA", value: "Saudi Arabia" },
  { label: "SB", value: "Solomon Islands" },
  { label: "SC", value: "Seychelles" },
  { label: "SD", value: "Sudan" },
  { label: "SE", value: "Sweden" },
  { label: "SG", value: "Singapore" },
  { label: "SH", value: "Saint Helena" },
  { label: "SI", value: "Slovenia" },
  { label: "SJ", value: "Svalbard and Jan Mayen" },
  { label: "SK", value: "Slovakia" },
  { label: "SL", value: "Sierra Leone" },
  { label: "SM", value: "San Marino" },
  { label: "SN", value: "Senegal" },
  { label: "SO", value: "Somalia" },
  { label: "SR", value: "Suriname" },
  { label: "SS", value: "South Sudan" },
  { label: "ST", value: "Sao Tome and Principe" },
  { label: "SV", value: "El Salvador" },
  { label: "SX", value: "Sint Maarten (Dutch part)" },
  { label: "SY", value: "Syrian Arab Republic" },
  { label: "SZ", value: "Swaziland" },
  { label: "TC", value: "Turks and Caicos Islands" },
  { label: "TD", value: "Chad" },
  { label: "TF", value: "French Southern Territories" },
  { label: "TG", value: "Togo" },
  { label: "TH", value: "Thailand" },
  { label: "TJ", value: "Tajikistan" },
  { label: "TK", value: "Tokelau" },
  { label: "TL", value: "Timor-Leste" },
  { label: "TM", value: "Turkmenistan" },
  { label: "TN", value: "Tunisia" },
  { label: "TO", value: "Tonga" },
  { label: "TR", value: "Turkey" },
  { label: "TT", value: "Trinidad and Tobago" },
  { label: "TV", value: "Tuvalu" },
  { label: "TW", value: "Taiwan, Province of China" },
  { label: "TZ", value: "United Republic of Tanzania" },
  { label: "UA", value: "Ukraine" },
  { label: "UG", value: "Uganda" },
  { label: "US", value: "United States" },
  { label: "UY", value: "Uruguay" },
  { label: "UZ", value: "Uzbekistan" },
  { label: "VA", value: "Holy See (Vatican City State)" },
  { label: "VC", value: "Saint Vincent and the Grenadines" },
  { label: "VE", value: "Venezuela" },
  { label: "VG", value: "British Virgin Islands" },
  { label: "VI", value: "US Virgin Islands" },
  { label: "VN", value: "Vietnam" },
  { label: "VU", value: "Vanuatu" },
  { label: "WF", value: "Wallis and Futuna" },
  { label: "WS", value: "Samoa" },
  { label: "XK", value: "Kosovo" },
  { label: "YE", value: "Yemen" },
  { label: "YT", value: "Mayotte" },
  { label: "ZA", value: "South Africa" },
  { label: "ZM", value: "Zambia" },
  { label: "ZW", value: "Zimbabwe" },
];

const availabilitytime = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
  { label: "13", value: "13" },
  { label: "14", value: "14" },
  { label: "15", value: "15" },
  { label: "16", value: "16" },
  { label: "17", value: "17" },
  { label: "18", value: "18" },
  { label: "19", value: "19" },
];
function HiringForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const [timeavailable, setavailabilitytime] = React.useState("Select a time");
    const handletimechange = (event) => {
      setavailabilitytime(event.target.value);
    };

    const [country, setCountry] = React.useState("Select a location");
    const handleChange = (event) => {
      setCountry(event.target.value);
    };
    const initialValues = {
      
      title : "",
      description : "",
      country : "",
      startingdate : "",
      contract : "",
      salary : "",
      experience : "",
      study : "",
      startingtime : "",
      endingtime : "",
      languages : "",
      responsibility : "",
      employesNeeded : "",
      image: ''
    };
    
  const formik = useFormik({
    initialValues,
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      console.log(values,currentFile,"-----------------");
      values.image=currentFile;
     /* let formData = new FormData();    
      formData.append('image',currentFile);
      formData.append('endingtime',values.endingtime);
      formData.append('languages',values.languages);
      formData.append('responsibility',values.responsibility);
      formData.append('employesNeeded',values.employesNeeded);
      formData.append('startingtime',values.startingtime);
      formData.append('study',values.study);
      formData.append('experience',values.experience);
      formData.append('salary',values.salary);
      formData.append('country',values.country);
      formData.append('startingdate',values.startingdate);
      formData.append('contract',values.contract);
      formData.append('title',values.title);
      formData.append('description',values.description);*/

      setShowLoader(true);
      const [res, err] = await queryApi("job/", values, "POST", true);
      if (err) {
        setShowLoader(false);
        setError({
          visible: true,
          message: err,
        });
      } else {
        dispatch(addJob(res));
        history.push("/findjob");
      }
    },
    
  });
  const [currentFile, setCurrentFile] = useState(0);
  const  selectFile= (event) =>{
    setCurrentFile(event.target.files[0]);
  }

  return (
    <div>
      <Container>
      <form className="content" onSubmit={formik.handleSubmit}>
        <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
          <h2 className="presentation-margin">Hiring Form</h2>
          <div className="ui-block">
            <div className="ui-block-content">
                <div className="row">
                  <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group label-floating is-empty">
                      <TextField
                  className="is-invalid"
                  id="title"
                  name="title"
                  label="Title"
                  variant="outlined"
                  value={formik.values.title}
                  helpertext={formik.touched.title && formik.errors.title}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                  onChange={formik.handleChange}
                  fullWidth
                />
                    </div>
                    <div className="form-group label-floating is-empty">
                      <TextField
                  className="is-invalid"
                  id="description"
                  name="description"
                  label="Description"
                  variant="outlined"
                  value={formik.values.description}
                  helpertext={formik.touched.description && formik.errors.description}
                  error={formik.touched.description && Boolean(formik.errors.description)}
                  onChange={formik.handleChange}
                  fullWidth
                />
                    </div>
                    
                    
                    <div className="form-group label-floating is-empty">
                    <TextField
                  className="is-invalid"
                  id="contract"
                  name="contract"
                  label="Contract"
                  variant="outlined"
                  value={formik.values.contract}
                  helpertext={formik.touched.contract && formik.errors.contract}
                  error={formik.touched.contract && Boolean(formik.errors.contract)}
                  onChange={formik.handleChange}
                  fullWidth
                />
                    </div>
                    <div className="form-group label-floating is-empty">
                    <TextField
                  className="is-invalid"
                  id="salary"
                  name="salary"
                  label="Salary"
                  variant="outlined"
                  value={formik.values.salary}
                  helpertext={formik.touched.salary && formik.errors.salary}
                  error={formik.touched.salary && Boolean(formik.errors.salary)}
                  onChange={formik.handleChange}
                  fullWidth
                />
                    </div>
                    <div className="form-group label-floating is-empty">
                    <TextField
                  className="is-invalid"
                  id="experience"
                  name="experience"
                  label="Experience"
                  variant="outlined"
                  value={formik.values.experience}
                  helpertext={formik.touched.experience && formik.errors.experience}
                  error={formik.touched.experience && Boolean(formik.errors.experience)}
                  onChange={formik.handleChange}
                  fullWidth
                />
                    </div>
                    <div className="form-group label-floating is-empty">
                    <TextField
                  className="is-invalid"
                  id="study"
                  name="study"
                  label="Study"
                  variant="outlined"
                  value={formik.values.study}
                  helpertext={formik.touched.study && formik.errors.study}
                  error={formik.touched.study && Boolean(formik.errors.study)}
                  onChange={formik.handleChange}
                  fullWidth
                />
                    </div>
                    <div className="form-group label-floating is-empty">
                    <TextField
                  className="is-invalid"
                  id="languages"
                  name="languages"
                  label="Languages"
                  variant="outlined"
                  value={formik.values.languages}
                  helpertext={formik.touched.languages && formik.errors.languages}
                  error={formik.touched.languages && Boolean(formik.errors.languages)}
                  onChange={formik.handleChange}
                  fullWidth
                />
                    </div>
                    <div className="form-group label-floating is-empty">
                    <TextField
                  className="is-invalid"
                  id="responsibility"
                  name="responsibility"
                  label="Responsibility"
                  variant="outlined"
                  value={formik.values.responsibility}
                  helpertext={formik.touched.responsibility && formik.errors.responsibility}
                  error={formik.touched.responsibility && Boolean(formik.errors.responsibility)}
                  onChange={formik.handleChange}
                  fullWidth
                />
                    </div>
                    <div className="form-group label-floating is-empty">
                    <TextField
                  className="is-invalid"
                  id="employesNeeded"
                  name="employesNeeded"
                  label="EmployesNeeded"
                  variant="outlined"
                  value={formik.values.employesNeeded}
                  helpertext={formik.touched.employesNeeded && formik.errors.employesNeeded}
                  error={formik.touched.employesNeeded && Boolean(formik.errors.employesNeeded)}
                  onChange={formik.handleChange}
                  fullWidth
                />
                    </div>
                    <div className="form-group label-floating is-empty">
                  
                    </div>
                  </div>
                </div>
                <div className="row mb30">
                  <div className="col col-lg-12">
                    <h6>Upload Logo</h6>
                  </div>
                  <div className="col col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="file-upload">
                   
                      <input  type="file" className="form-control" 
                       id="image"
                       name="image"
                       label="Image"
                       variant="outlined"
                       accept="image/*" 
                       onChange={selectFile} 
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-lg-12">
                  <button
                type="submit"
                className="btn btn-lg btn-primary full-width"
              >
                Hire Now
              </button>

                  </div>
                </div>
            </div>
          </div>
        </div>
     </form>
      </Container>
    </div>
  );
}

const yupSchema = Yup.object({
  title: Yup.string()
    .min(8, "Minimum 3 caractéres")
    .max(40, "Maximum 40 caractéres")
    .required("Champs requis!"),
  description: Yup.string()
    .min(7, "Minimum 7 caractéres")
    .max(80, "Maximum 80 caractéres")
    .required("Champs requis!"),
});

export default HiringForm;
