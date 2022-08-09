import { Button, Card, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CartService from '../Service/CartService'
import { Component } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Image from '../../Assests/BookImages/Constitution.png'

class Summary extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bookArray: [],
            coustomerDetails: false,
            cartButton: true,
            cartPrice :[]
        };
    }

    componentDidMount(){
        this.getall();
        this.getCartPrice();
    } 

    getall(){
        CartService.getCart().then((response)=>{
       // CartService.getUserCart().then((response)=>{
            this.setState({
                bookArray:response.data.data
            });
            console.log(response.data.data);
        })
    }

    getCartPrice(){
        CartService.getCartPrice().then((response)=>{
            this.setState({
                cartPrice:response.data.data
            });
            console.log(response.data.data);
        })
    }

    placeOrder(){
        CartService.emptyCart()
        alert("Order placed successfully");
    }
render(){
    return(
        <div style={{"marginTop":"70px", "marginLeft":"10px"}}>
            <Card sx={{ maxWidth: 1000, minHeight:450 }} style={{"marginTop":"20px", margin:"20px"}}>
        <Typography variant='h6' style={{marginRight:"70rem",marginTop:"1rem" }}>Summary({this.state.bookArray.length})</Typography>
        {
            this.state.bookArray.map(book =>
                <><img src={Image} width='90' height='120' style={{"marginRight":"65rem", "marginTop":"3rem"}}/>
        <CardContent style={{"marginLeft":"7rem", "marginTop":"-7rem", "textAlign":"left"}}>
            <Typography sx={{color:"#0A0102", font:"18px/20px Lato"}}>{book.bookName}</Typography>
            <Typography sx={{color:"#9D9D9D", font:"15px/15px Lato"}}>{book.authorName}</Typography>
            <Typography>Rs. {book.prize}</Typography>
        </CardContent>
        </>  
        )
        }   
        <Typography sx={{color:"#0A0102", font:"30px/30px Lato"}}>Total Book price is = Rs.{this.state.cartPrice}</Typography>
        <Link to='/order'><Button sx={{ border: '1px #9D9D9D solid'}} size="large" variant='contained' onClick={()=>this.placeOrder()}
        style={{"display":"flex", "flexDirection":"row", "marginLeft":"50rem", "marginTop":"5rem", "backgroundColor":"#A03037"}}>
            Checkout</Button></Link>
        </Card>
        <ToastContainer/>
        </div>
    );
}
}

export default Summary;