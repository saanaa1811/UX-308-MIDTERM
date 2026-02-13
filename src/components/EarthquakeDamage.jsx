import {
    Text,
    View,
} from 'react-native';

import { earthquakeDamage } from "../earthquakeDamage";

export function EarthquakeDamage({ intensity }) {

    let result = earthquakeDamage(intensity);

    return (
        <View>
            <Text>
                earthquakeDamage({intensity}) returned "{result}"
            </Text>
        </View>
    );
}
