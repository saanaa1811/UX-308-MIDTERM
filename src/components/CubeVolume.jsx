import { cubeVolume } from "../cubeVolume.js";
import {
  View,Text
} from 'react-native';
export function CubeVolume() {
  const small = cubeVolume(1);
  const medium = cubeVolume(2);
  const large = cubeVolume(3);

  return (
    <div>
      <h2>Cube Volume Calculator</h2>
      <p>1m cube volume: {small} m³</p>
      <p>2m cube volume: {medium} m³</p>
      <p>3m cube volume: {large} m³</p>
    </div>
  );
}