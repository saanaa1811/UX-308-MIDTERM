import { coinTotal } from "../coinTotal.js";
import {
  View,Text
} from 'react-native';
export function CoinTotal({ nickels, dimes, quarters, loonies, toonies }) {

    let total = coinTotal(nickels, dimes, quarters, loonies, toonies);

    return (
        <View>
            <Text>
                CoinTotal({nickels}, {dimes}, {quarters}, {loonies}, {toonies}) returned ${total.toFixed(2)}
            </Text>
        </View>
    );
}
