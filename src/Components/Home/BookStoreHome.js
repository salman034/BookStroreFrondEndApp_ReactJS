import React, {Component} from "react";
import BookService from "../Service/BookService";
import Book from "./Book";
import { toast } from 'react-toastify';
import { Typography } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import './Home.css';


class BookStoreHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bookArray: [],
        };
    }

    handleChange = (event) => {
        console.log(event.target.value)
        if(event.target.value === 1){
            this.priceByHighToLow();
        }else if(event.target.value === 2){
            this.priceByLowToHigh();
        }
    };

    searchByName(){
        BookService.name().then((result)=>{
            this.getAll({
                bookArray:result.data.data
            });
        }
    )}
    
    priceByHighToLow(){
        BookService.sortPriceHighToLow().then((result)=>{
            this.setState({
                bookArray:result.data.data
            });
        }
    )}

    priceByLowToHigh(){
        BookService.sortPriceLowToHigh().then((result=>{
            this.setState({
                bookArray:result.data.data
            });
        }))  
    }

    componentDidMount() {
        this.fetchData();  
    }
    fetchData = () => {
        BookService.getAll().then((response) => {
            this.setState({ 
                bookArray: response.data.data,
            });
            console.log(this.state.bookArray);
            console.log(response);
        })
        .catch((err) => {
          toast.error("Something went wrong", err);
          console.log(err)
        });
    };

    render(){
    return(
        <div>
        <Box sx={{ maxWidth: 500 }} style={{"marginRight":"10px"}}>
        <Typography className="body" variant='h5' style={{"marginTop":"80px", "textAlign":"left"}}>Books<div className="bookNumber">({this.state.bookArray.length}books)</div>
        <Box sx={{ maxWidth: 300 }} style={{"marginRight":"100px"}}>  
      <FormControl fullWidth className="body" style={{"marginLeft":"800px"}}>
        <InputLabel id="demo-simple-select-label" sx={{ maxWidth: 1000 }} >Sort by relevent</InputLabel> 
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.age}
          label="Age"
          onChange={(e)=>this.handleChange(e)}
        >
          <MenuItem value={1}>Price: High to Low</MenuItem>
          <MenuItem value={2}>Price: Low to High</MenuItem>
          <MenuItem value={3}>Book:</MenuItem>
        </Select>
      </FormControl></Box>
      </Typography>
    </Box>
        <Book bookArray={this.state.bookArray} />
        </div>
    );
    }
}
export default BookStoreHome;