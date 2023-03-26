import { useNavigation } from '@react-navigation/native';
import {View, Image, FlatList,StyleSheet,Pressable} from 'react-native';
import { useSelector , useDispatch} from 'react-redux';
import { productsSlice } from '../store/productsSlice';


const ProductScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  //const navigation = useNavigation();
    return (
    <FlatList 
        data = {products}
        renderItem= {({item}) => (
          <Pressable 
          onPress ={() =>{
            dispatch(productsSlice.actions.setSelectedProduct(item.id));
            navigation.navigate('Product Details');
          } }
          style = {styles.imagecontainer}>
        <Image source= {{uri:item.image}} style = {styles.image}/>
        </Pressable>
        )}
        
        numColumns = {2}/> );
};

export default ProductScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagecontainer:{
      width:'50%',
      padding:1,
      
  
    },
    image:{
      width :"100%",
      aspectRatio:1,
    }
  });