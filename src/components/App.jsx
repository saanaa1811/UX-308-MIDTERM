import { Hello } from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';

import { CoinTotal } from './CoinTotal.jsx';
import { FToC } from './FToC.jsx';
import { CubeVolume } from './CubeVolume.jsx';
import { GymCost } from './GymCost.jsx';
import { EarthquakeDamage } from './EarthquakeDamage.jsx';

import {
  View,
} from 'react-native';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />

      <SnowRemoval cm={3} />

      <CoinTotal />
      <FToC />
      <CubeVolume  />
      <GymCost />
      <EarthquakeDamage />

    </View>
  );
}

