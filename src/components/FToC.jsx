import {
    Text,
    View,
} from 'react-native';

import { fToC } from "../fToC";

export function FToC({ fahrenheit }) {

    let celsius = fToC(fahrenheit);

    return (
        <View>
            <Text>
                fToC({fahrenheit}) returned {celsius.toFixed(2)}°C
            </Text>
        </View>
    );
}
