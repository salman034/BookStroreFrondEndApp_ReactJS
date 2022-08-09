import { Button, Card, CardContent, Typography } from "@mui/material";
//import './CoustomerInfo.css';
import './CoustomerDetails.css';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import React, {useState} from 'react';
import CoustomerService from "../Service/CoustomerService";
import Summary from "../Summary/Summary";

const CoustomerDetails =() =>{
    let startValue = {
        fullName: "",
        phoneNumber: "",
        pinCode: "",
        address: "",
        city: "",
        landMark:"",
        isUpdate: false,
        }

        const[summaryPage, setSummary] = useState(false);
        const [button, setButton] = useState(true);
        const [formValue, setForm] = useState(startValue);
        const params = useParams();

        const onNameChange = async (event) => {
            setForm({ ...formValue, [event.target.name]: event.target.value });
            console.log('value for', event.target.name, event.target.value);
        }

        const save = async (event) => {
            event.preventDefault();
            
            let object = {
                fullName: formValue.fullName,
                phoneNumber:formValue.phoneNumber,
                pinCode: formValue.pinCode,
                address: formValue.address,
                city: formValue.city,
                landMark: formValue.landMark,
            };
            console.log(object.phoneNumber);
            
            if(formValue.isUpdate) {
                CoustomerService.editCustomer(params.id,object);
            } else {
                CoustomerService.addCoustomer(object);
                console.log(object);
                alert("Customer details added sucessfully..");
                setButton(false);
            setSummary(true);
                  }          
                }    
            
    return(
    <div style={{"marginTop":"70px", "marginLeft":"10px"}} className="cart">
        <form onSubmit={save}>
        <Card sx={{ maxWidth: 1000, minHeight:450 }} style={{"marginTop":"20px", margin:"20px"}}>
            <div className="coustomer_header">
                <Typography variant='h5' margin='10px'>Customer Details</Typography>
            </div>
            <div margin="10px">
                <CardContent className="name_number">
                    <TextField label="Full Name" name="fullName" id="fullName" onChange={onNameChange} value={formValue.fullName} color="success" focused style={{margin:"10px"}}/>
                    <TextField label="Phone Number" name="phoneNumber" id="phoneNumber" onChange={onNameChange} value={formValue.phoneNumber} color="success" focused style={{margin:"10px"}}/>
                </CardContent>

                <CardContent className="name_number">
                <TextField sx={{"width":450}} label="address" color="success"name="address" onChange={onNameChange} value={formValue.address} id="address" focused style={{margin:"10px"}}/>
                    {/* <TextField label="Locality" name="locality" id="locality" onChange={onNameChange} value={formValue.locality} color="primary" focused style={{margin:"10px"}}/> */}
                </CardContent>

                <CardContent className="name_number">
                <TextField label="Pin Code"name="pinCode"id="pinCode" onChange={onNameChange} value={formValue.pinCode} color="success" focused style={{margin:"10px"}}/>
                </CardContent>

                <CardContent className="name_number">
                    <TextField label="City" name="city" id="city" onChange={onNameChange} value={formValue.city} color="success" focused style={{margin:"10px"}}/>
                    <TextField label="Land Mark" color="success" onChange={onNameChange} value={formValue.landMark} name="landMark" id="landMark" focused style={{margin:"10px"}}/>
                </CardContent>
            </div>
            {
                button? 
                <Button sx={ {"backgroundColor": "#A03037" }} type="submit" size="large" variant='contained'
        style={{"display":"flex", "flexDirection":"row", "marginLeft":"50rem", "marginTop":"3rem"}}>
            Continue</Button>
            : <div></div>
            } 
        </Card>
        </form>
        {
                summaryPage?
                <Summary/>:
                <div style={{"marginTop":"70px", "marginLeft":"10px"}} className="cart">
        <Card sx={{ maxWidth: 1000, minHeight:50 }} style={{"marginTop":"20px", margin:"20px"}}>
            <div className="coustomer_header">
                <Typography margin='10px'>Summary</Typography>
            </div>
        </Card>
        </div>
            }
    </div>
    );
}

export default CoustomerDetails;