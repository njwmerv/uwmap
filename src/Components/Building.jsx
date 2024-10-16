import {Pressable, StyleSheet} from 'react-native';
import {useNodeContext} from '../Contexts/NodesContext';

export default function Building({
  code,
  position = {top:0, left:0}
}){

  // Instance Variables

  const {start, finish, setNode} = useNodeContext();

  // Effects

  // Render

  return (
    <Pressable style={[
                 styles.pressable,
                 {top:position.top, left:position.left},
                 (code === start || code === finish) ? {backgroundColor:'blue'} : {backgroundColor:'gold'}
               ]}
               onPress={() => setNode(code)}
    >
      {code}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable:{
    width:50,
    height:50,
    display:'flex',
    fontSize:20,
    position:'absolute',
    alignItems:'center',
    fontWeight:'bold',
    borderRadius:'50%',
    justifyContent:'center',
  }
})
