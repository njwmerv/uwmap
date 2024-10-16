import {createContext, useContext, useState} from 'react';

const NodeContext = createContext();

export function NodeProvider({children}){

  // Instance Variables

  const [start, setStart] = useState('');
  const [finish, setFinish] = useState('');

  // Methods

  const setNode = (aCode) => {
    if(start === '' && finish === ''){
      setStart(aCode);
    }
    else if(start === aCode){
      setStart('');
      setFinish('');
    }
    else if(finish === aCode){
      setFinish('');
    }
    else{
      setFinish(aCode);
    }
  };

  return (
    <NodeContext.Provider value={{start, finish, setNode}}>
      {children}
    </NodeContext.Provider>
  );
}

export const useNodeContext = () => {
  return useContext(NodeContext);
};
