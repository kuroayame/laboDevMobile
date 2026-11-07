import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function A() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Welcome page</Text>
            <Button title="Profile" onPress={() => navigation.navigate('B')} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});