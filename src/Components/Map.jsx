import {Image, useWindowDimensions, View} from 'react-native';
import Building from './Building';
import {BuildingsArray} from '../Constants/BuildingsConstants';
import {TransformWrapper, TransformComponent} from 'react-zoom-pan-pinch';

export default function Map({
}){

  // Instance Variables

  const {width, height} = useWindowDimensions();

  // Render

  return (
    <TransformWrapper maxScale={2}
                      minScale={0.75}
    >
      <TransformComponent wrapperStyle={{width:width, height:height}}>
        <View>
          <Image style={{width:2480, height:1475}}
                 source={require('./UWCampusMap2.png')}
          />

          {BuildingsArray.map((aBuilding) => (
            <Building code={aBuilding.code}
                      position={aBuilding.position}
            />
          ))}
        </View>
      </TransformComponent>
    </TransformWrapper>
  );
}
