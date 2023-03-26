import { View,Text,StyleSheet ,Image,FlatList,useWindowDimensions,ScrollView,
Pressable} from "react-native"
import { cartSlice } from "../store/cartSlice";
import products from "../data/products";
import { useSelector ,useDispatch} from "react-redux";



const ProductDetailScreen = () => {

    const product = useSelector((state) => state.products.selectedProduct);
    const dispatch = useDispatch();
    const { width } = useWindowDimensions();
    

    const addToCart = () => {
        dispatch(cartSlice.actions.addCartItem({product:product}));
    }
    return(
        <View>
         <ScrollView> 
        <FlatList 
        data = {product.images}
        renderItem = { ({item}) => (
            <Image  source = {{uri: item}} style =  {{width,aspectRatio:1}}/>
        )}
        horizontal
        showsHorizontalScrollIndicator ={false}
        pagingEnabled= {true}/>


            {/* Image Carousel
        <Image  source = {{uri: product.image}} style = {styles.image}/> */}
      <View style = {{padding:10}}>
      {/* Title */}
      <Text style = {styles.title}>{product.name}</Text>

      {/* Price */}
      <Text style = {styles.price}>${product.price}</Text>
      {/* Description */}
      <Text style = {styles.description}>{product.description}</Text>
      </View>
      </ScrollView>  
      {/* Add to cart button */}

      <Pressable onPress={addToCart} style = {styles.button}>
       <Text style = {styles.buttonText}>Add to cart</Text>
      </Pressable>

      {/* Navigation icon */}

        </View>
    );
};


const styles = StyleSheet.create({
   title:{
    fontSize:34,
    fontWeight:'500',
    
    marginVertical:10


   },
   price:{
    fontWeight:'500',
    fontSize:16,
    letterSpacing:1.5

   },
   description:{
    marginVertical:10,
    fontSize:18,
    lineHeight:30,
    fontWeight:'300'

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

});



export default ProductDetailScreen;