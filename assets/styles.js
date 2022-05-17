import { StyleSheet } from 'react-native';

const root ={
    titleBackgroundsColor: '#FFC732',
    primaryBackgroundsColor: '#e0e0dc',
    titleColor: '#6C6656',
    titleFontZise: 30,
    primaryFontZise: 24,
    titleFontWeight: '700',
    primaryFontWeight: '400',
};

export default StyleSheet.create({
    // Body
    body: {
        flex: 1,
    },
    // Header
    header: {
        backgroundColor: root.titleBackgroundsColor,
        padding: 10,
        margin: 10,
        borderRadius: 15,
    },
    title: { 
        textAlign: 'center',
        color: root.titleColor,
        fontSize: root.titleFontZise,
        fontWeight: root.titleFontWeight,
    },
    // Primary game section
    gameContainer: {},
    // Section primary styles
    section: {
        margin: 10,
        marginBottom: 5,
        paddingHorizontal: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: root.titleBackgroundsColor,
    },
    // Form
    formInput: {
        flex: 1,
    },
    // Button
    formBtn: {
        paddingHorizontal: 10,
        marginVertical: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    btnFont: {
        color: root.titleColor,
        fontSize: 30,
    },
    // Footer
    footer: {
        backgroundColor: root.titleBackgroundsColor,
        padding: 10,
        margin: 10,
        borderRadius: 15,
    },
    footerTitle: {
        textAlign: 'center',
        color: root.titleColor,
        fontSize: root.titleFontZise,
        fontWeight: root.titleFontWeight,
    },
    counter: {
        paddingVertical: 20,
        minHeight: 200,
        display: 'flex',
        alignItems: 'center',
    },
    counterBtnSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 200,
    },
});

