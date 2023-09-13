import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#383535',
        paddingHorizontal: 35
    },
    main: {
        marginTop: 50,
        alignContent: 'center',
        alignItems: 'center',
    },
    mainTittle: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold'
    },
    points: {
        width: 320,
        marginTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    pointsCorrects:{
        width: 65,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    pointsWrongs: {
        width: 65,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    corrects: {
        color: '#4EA8DE'
    },
    wrongs: {
        color: '#D34C6C'
    },
    textCorrectsWrongs: {
        color: '#FFFFFF'
    },
    boxButtonSort:{
        alignContent: 'center',
        alignItems: 'center'
    },
    buttonSort:{
        backgroundColor: '#5D5FEF',
        justifyContent: 'center',
        width: 279,
        height: 48,
        marginTop: 12,
        borderRadius: 12,
        alignItems: 'center',
    },
    textButtonSort: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    line: {
        alignContent: 'center',
        alignItems: 'center',

        width: 360,
        backgroundColor: '#FFFFFF',
        height: 1,
        marginTop: 12,
        borderRadius: 1
    },
    boxQuestionTittle:{
        paddingTop: 65
    },
    questionTittle:{
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    boxQuestion:{
        marginTop: 35,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    boxAnswerTittle:{
        paddingTop: 40 
    },
    boxInput:{
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        backgroundColor: '#FFFFFF',
        width: 178,
        height: 64,
        borderRadius: 16
    },
    input:{
        color: '#8C4FCA',
        fontSize: 25,
        fontWeight: 'bold'
    },
    boxButtonValidate:{
        paddingTop: 25,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    buttonValidate:{
        backgroundColor: '#04D361',
        justifyContent: 'center',
        width: 340,
        height: 64,
        marginTop: 12,
        borderRadius: 12,
        alignItems: 'center',
    },
    textButtonValidate: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    boxButtonNewGame:{
        paddingTop: 100,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    buttonNewGame: {
        backgroundColor: '#D34C6C',
        justifyContent: 'center',
        width: 260,
        height: 51,
        marginTop: 12,
        borderRadius: 12,
        alignItems: 'center',
    },
    textButtonNewGame: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    }
})