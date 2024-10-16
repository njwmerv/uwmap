import {View, StyleSheet} from 'react-native';
import Map from '../Components/Map';
import {useNodeContext} from '../Contexts/NodesContext';

function App() {

  // Instance Variables

  const {start, finish} = useNodeContext();

  // Methods

  // Render

  return (
    <View>
      <Map/>

      <View style={styles.controlMenu}
      >
        <p>Start: {start || 'None'}</p>

        <p>Finish: {finish || 'None'}</p>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  controlMenu:{
    left:0,
    width:300,
    bottom:0,
    height:'50%',
    position:'absolute',
    backgroundColor:'red'
  }
});
