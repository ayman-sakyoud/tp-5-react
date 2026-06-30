export default function TemperatureInput({ temperature, onTemperatureChange }) {
    const handleChange = (event) => {
    const rawValue = event.target.value;
    const processedValue = rawValue.trim();
    
    onTemperatureChange(processedValue);
  };

  return (
    <input
      type="number"
      value={temperature}
      onChange={handleChange}
      placeholder="Température °C"
    />
  );
}