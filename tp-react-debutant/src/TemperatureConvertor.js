import { useReducer } from 'react';
import TemperatureInput from './TemperatureInput';
function temperatureReducer(state, action) {
  switch (action.type) {
    case 'UPDATE':
      return action.payload;
    default:
      return state;
  }
}

export default function TemperatureConvertor() {
  const [celsius, dispatch] = useReducer(temperatureReducer, '');

  return (
    <div>
      <TemperatureInput
        temperature={celsius}
        onTemperatureChange={dispatch}
      />
      <p>
        {!!celsius
          ? ("Température saisie : " + celsius + " °C")
          : 'Aucune température saisie'}
      </p>
    </div>
  );
}