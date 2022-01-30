import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    itemStyle: {
        padding: 30,
        fontSize: 20,
        color: '#BA2C73',
        width: '100%',
    },
    input: {
        height: 60,
        width: 225,
        margin: 20,
        borderWidth: 2,
        borderColor: '#BA2C73',
        color: '#BA2C73',
        padding: 10,
    },
    logo: {
        flex: 5,
        height: 70,
        resizeMode: 'contain',
    },
    nazwa: {
        flex: 1,
        fontSize: 30,
        margin: 0,
        padding: 0,
        color: '#BA2C73',
    },
    opis: {
        flex: 0.5,
        color: '#BA2C73',
    },
    list: {
        width: 160,
        alignItems: "center",
        color: '#BA2C73',
    },
    picker: {
        flex: 0.7,
        alignItems: "center",
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#BA2C73',
        borderRadius: 4,
    },
    flex: {
        flex: 1,
    },
    markerImage: {
        width: 35,
        height: 35,
    },
    ilosc: {
        flex: 0.5,
        color: '#BA2C73',
        fontSize: 20,
    },

    container: {
        flex: 1,
        backgroundColor: '#282F44',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    contentContainer: {
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#BA2C73',
        paddingBottom: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: '400',
        color: '#BA2C73',
    },

    text_button: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#282F44',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#BA2C73',
        margin: 20,
    },
    list_menu: {
        flex:1,
        backgroundColor: '#282F44',
        justifyContent: 'center',
        width: '100%',
    },
});