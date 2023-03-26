import {View,Text,StyleSheet,FlatList,Pressable} from 'react-native';
import CartListItem from '../components/CartListItem';
import { useSelector } from 'react-redux';
import { selectDeliveryPrice,selectSubtotal,selectTotal ,cartSlice} from '../store/cartSlice';


const ShoppingCartTotals = () => {
    const subtotal = useSelector(selectSubtotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);
  
    return (
      <View style={styles.totalsContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>{subtotal} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>{deliveryFee} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}>{total} US$</Text>
        </View>
    </View> 
    );
  }; 
const ShoppingCart =() =>{
    const cartItems = useSelector((state) => state.cart.items);
    return(
        <> 
            <FlatList 
            data = {cartItems} 
            renderItem = {({item}) => <CartListItem cartItem={item} />}
    ListFooterComponent = {ShoppingCartTotals}/>





<Pressable  style = {styles.button}>
       <Text style = {styles.buttonText}>Checkout</Text>
      </Pressable>
      </>      
    );
};


const styles = StyleSheet.create({
    totalsContainer:{margin:20,
        paddingTop:10,
        borderColor:'gainsboro',
        borderTopWidth:1,
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:2
    },text:{
        fontSize:12,
        color:'gray'
    },
    textBold:{
        fontSize:12,
        color:'gray',
        fontWeight:'500'
    },
    button:{
        position:'absolute',
        borderRadius:100,
        borderWidth:5,
        backgroundColor:'black',
        bottom:10,
        width :'90%',
        alignSelf:'center',
        borderColor:'black',
        padding:10,
        
        alignItems:'center'
    },
    buttonText :{
        color:'white',
        fontSize:16,
        fontWeight:'500'
    
       }

})
export default ShoppingCart;
