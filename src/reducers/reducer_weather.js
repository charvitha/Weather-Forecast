import {FETCH_WEATHER} from '../actions/index';

export default function(state= [],action){
  switch(action.type){
    case FETCH_WEATHER:
      //return state.concate([action.payload.data]);
      return [action.payload.data, ...state]; //is city,city,city not city[city,city]
  }
  //console.log('Action received:', action);
  return  state;
}
