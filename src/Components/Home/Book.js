import { Button, Card, CardActions, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CartService from '../Service/CartService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useId, useState } from 'react';
import { Box } from '@mui/system';
import Header from '../Header/Header';
import Image from '../../Assests/BookImages/Constitution.png'

const Book=(props)=>{
    const[cartArray, setCartArray]= useState([]);
    const[checker, setChecker]= useState(true);
    console.log(cartArray);
    console.log(props.bookArray);
    console.log(checker);

    const addToCart = (id) => {
        console.log(id);
        CartService.addBookTocart(id);
        console.log(id);
        toast.success("Book added to cart")
        setChecker(false);
        window.location.reload();
    }
    
    useEffect(()=>{
        CartService.getCart().then((result)=>{
            setCartArray(result.data.data)
            //check();
            setChecker(true);
        })
    },[]);
    return(
        <><Header length={cartArray.length}/><div className='bookfive' style={{ "marginTop": "20px", margin: "100px" }}>
            <div className='book-five-container'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {props.bookArray.map(book => <Card sx={{ maxWidth: 300, background: "#F5F5F5", minHeight: 10 }} style={{ "marginTop": "20px", margin: "20px", "marginLeft": "50px" }}>
                        {book.quantity === 0 ?
                            <Box sx={{ "margin": 5, "marginTop": 0 }}>
                                <img src={Image} alt={book.bookName} width="100" height="200" style={{ "marginTop": "5px" }} />
                                <Typography style={{ "color": "red", "font": "normal normal bold 25px/25px Lato", "marginTop": "-80px" }}>OUT OF STOCK</Typography><div style={{ "marginTop": "100px" }}></div>
                            </Box>
                            :
                            <img src={Image} alt={book.bookName} width="150" height="200" style={{ "marginTop": "50px", margin: "20px" }} />
                        }
                        <CardContent sx={{ background: "white", minHeight: 200 }} style={{ textAlign: "left", "marginTop": "10px" }}>
                            <Typography sx={{ color: "#0A0102", font: "20px/25px Lato" }}>{book.bookName}</Typography>
                            <Typography sx={{ color: "#9D9D9D", font: "15px/20px Lato" }}>{book.authorName}</Typography>
                            <Typography>Rs.{book.prize}</Typography>
                            <CardActions style={{ margin: "20px" }} sx={{ width: "1000px" }}>
                                {book.quantity === 1 ?
                                    <>
                                        <Button sx={{ border: '1px #9D9D9D solid' }} size="medium" style={{ "backgroundColor": "#A03037", "color": "white", "marginLeft": "-20px" }}
                                            onClick={() => addToCart(book.id)}>{'Add to cart'}</Button>
                                        <Button sx={{ border: '1px #9D9D9D solid' }} size="medium" style={{ "color": "#A03037" }}>Add to Wishlist</Button></>
                                    :
                                    
                                        
                                        <>
                                         <Button sx={{ border: '1px #9D9D9D solid' }} size="medium" style={{ "backgroundColor": "#A03037", "color": "white", "marginLeft": "-20px" }}
                                            onClick={() => addToCart(book.id)}>{'Add to cart'}</Button>
                                        <Button sx={{ border: '1px #9D9D9D solid' }} size="medium" style={{ "color": "#A03037" }}>Add to Wishlist</Button></>
                                        
                                    }
                                    
                            </CardActions>
                        </CardContent>
                    </Card>
                    )}
                </Grid>
            </div>
            <ToastContainer />
        </div></>
    );
}
export default Book;