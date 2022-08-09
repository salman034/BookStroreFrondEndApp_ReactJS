import { Button, Card, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CartService from '../Service/CartService'
import { Component } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CoustomerDetails from '../CoustomerDetails/CoustomerDetails';
import Book from '../Home/Book';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import Image from '../../Assests/BookImages/Constitution.png'

class Cart extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bookArray: [],
            coustomerDetails: false,
            cartButton: true,
        };
    }

    coustomerDeatils(){
        this.setState({
            coustomerDetails: true,
            cartButton: false
        })
        console.log(this.state.coustomerDetails);
        
    }

    componentDidMount(){
        this.getall();
    } 

    getall(){
        CartService.getCart().then((response)=>{
            this.setState({
                bookArray:response.data.data
            });
            console.log(response.data.data);
           // Book(this.state.bookArray);
        })
    }

    delete(id){
        CartService.deleteBookFromCart(id);
        window.location.reload();
        toast.success("Book deleted from cart")
    }

    reduceBookQuantity(id){
        CartService.decreaseBookQuantity(id);
        window.location.reload();
        toast.success("Removed by one quantity")
    }

    increaseBookQuantity(id){
        console.log(id);
        CartService.increaseBookQuantity(id);
        toast.success("Added one more quantity")
        window.location.reload();
    }
    render(){
    return(
        <><Header length = {this.state.bookArray.length}/><div style={{ "marginTop": "70px", "marginLeft": "150px" }}>
            <Card sx={{ maxWidth: 1000, minHeight: 100 }} style={{ "marginTop": "20px", margin: "20px" }}>
                <Typography variant='h5' style={{ marginRight: "70rem", marginTop: "1rem" }}>MyCart({this.state.bookArray.length})</Typography>
                {this.state.bookArray.map(book => <><img src={Image} width='110' height='170' style={{ "marginRight": "55rem", "marginTop": "3rem" }} />
                    <CardContent style={{ "marginLeft": "10rem", "marginTop": "-10rem", "textAlign": "left" }}>
                        <Typography sx={{ color: "#0A0102", font: "18px/20px Lato" }}>{book.bookName}</Typography>
                        <Typography sx={{ color: "#9D9D9D", font: "15px/15px Lato" }}>{book.authorName}</Typography>
                        <Typography>Rs.{book.prize}</Typography>
                    </CardContent>
                    <CardContent style={{ "display": "flex", "flexDirection": "row", "marginLeft": "9rem", "marginTop": "-1rem" }}>
                        <Fab color="success" aria-label="add" size='small'>
                            {(book.quantity === 1) ?
                                <RemoveIcon disabled />
                                :
                                <RemoveIcon onClick={() => this.reduceBookQuantity(book.id)} />}
                        </Fab>
                        <Button variant="outlined" sx={{ width: 10, height: 30 }} style={{ color: "InfoText", font: "13px/20px Lato" }}
                        >{book.quantity}</Button>
                        <Fab color="success" aria-label="add" size='small'>
                            <AddIcon onClick={() => this.increaseBookQuantity(book.id)} />
                        </Fab>

                    </CardContent>
                    <Button  sx={ {"backgroundColor": "#A03037" }} type="Remove"  size='small' variant='contained' onClick={() => this.delete(book.id)}
                        style={{ "marginLeft": "3rem", "marginTop": "-6rem"}}>Remove</Button>
                </>
                )}
                {
                    this.state.bookArray.length === 0 ?
                    <><Typography>Oops!! Books are not available in the cart..</Typography><Link to='/home'>
                            <Button sx={{ border: '1px #9D9D9D solid' }} size="large" variant='contained' onClick={() => this.coustomerDeatils()}
                                style={{ "display": "flex", "flexDirection": "row", "marginLeft": "50rem", "marginTop": "3rem", "backgroundColor": "#A03037" }}>
                                Back to home</Button>
                        </Link>
                        </>
                        :     
                        this.state.cartButton ?                     
                        <Button sx={{ border: '1px #9D9D9D solid' }} size="large" variant='contained' onClick={() => this.coustomerDeatils()}
                        style={{ "display": "flex", "flexDirection": "row", "marginLeft": "50rem", "marginTop": "3rem", "backgroundColor": "#A03037" }}>
                        Proceed</Button>:<div></div> }                        
            </Card>
            <ToastContainer />
            {this.state.coustomerDetails ?
                            <CoustomerDetails /> :
                            <div></div>} 
        </div></>
    );}
}
export default Cart;

// {
//     button? 
//     <Button sx={ {"backgroundColor": "#A03037" }} type="submit" size="large" variant='contained'
// style={{"display":"flex", "flexDirection":"row", "marginLeft":"50rem", "marginTop":"3rem"}}>
// Continue</Button>
// : <div></div>
// } 