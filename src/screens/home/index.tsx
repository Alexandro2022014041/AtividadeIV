import { SafeAreaView, Text, TextInput, View } from "react-native"
import { style } from "./style"
import { useState, useEffect } from "react"
import { Buttons } from "../../components/buttons"
import { BoxView } from "../../components/boxView"


export const Home = () => {
    const operators = ['*', '/', '+', '-']
    const calc = String
    const [correts, setCorrets] = useState(0)
    const [wrongs, setwrongs] = useState(0)
    const [points, setPoints] = useState(0)
    const [numberOne, setNumberOne] = useState(0)
    const [numberTwo, setNumberTwo] = useState(0)
    const [result, setResult] = useState(0)
    const [operator, setOperator] = useState('')

    const handleSortNumber = (bool: boolean) =>{
        bool? setNumberOne(RandomNumber) : setNumberTwo(RandomNumber)
    }

    const RandomNumber = () =>{
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1
    }

    const RandomOperator = () =>{
        setOperator(operators[Math.floor(Math.random() * 4)])
    }

    const SetPoints = (value: boolean) => {
        if(value){
            setPoints(points + 10)
        }else{
            setPoints(points - 5)
        }
    }

    const Validate = () =>{
        var calc = OperationValidade(numberOne, numberTwo)
        if(calc = result){
            SetPoints(true)
            CountPoints(true)
        }else{
            SetPoints(false)
            CountPoints(false)
        }
    }

    const CountPoints = (value: boolean) =>{
        if(value){
            setCorrets(correts + 1)
        }else{
            setwrongs(wrongs + 1)
        }
    }
    
    const OperationValidade = (numberOne: number, numberTwo: number) =>{
        var calc = 0
            if(operator == '*'){
                calc = numberOne * numberTwo
            }else if(operator == '/'){
                calc = numberOne / numberTwo
            }else if(operator == '+'){
                calc = numberOne + numberTwo
            }else{
                calc = numberOne - numberTwo
            }
        return calc
    }

    const Sort = () =>{
        RandomOperator()
        handleSortNumber(true)
        handleSortNumber(false)
    }

    useEffect(() => {
        Sort()
    }, [])

    return(
        <View style={style.container}>
            <View style={style.main}>
                <Text style={style.mainTittle}>Você tem {points} pontos</Text>
                <View>
                    <View style={style.points}>
                        <View style={style.pointsCorrects}>
                            <Text style={style.corrects}>Certas</Text>
                            <Text style={style.textCorrectsWrongs}>{correts}</Text>
                        </View>
                        <View style={style.pointsWrongs}>
                            <Text style={style.wrongs}>Erradas</Text>
                            <Text style={style.textCorrectsWrongs}>{wrongs}</Text>
                        </View>
                    </View>
                    <View style={style.boxButtonSort}>
                        <Buttons style={style.buttonSort} textStyle={style.textButtonSort} texts={'Sortear Desafio'} onChangeNumber={Sort}/>
                    </View>
                </View>
                <View style={style.line}/>
            </View>
            <View>
                <View style={style.boxQuestionTittle}>
                    <Text style={style.questionTittle}>Quanto é:</Text>
                </View>                    
                <View style={style.boxQuestion}>
                    <BoxView value={numberOne}/>
                    <BoxView value={operator}/>
                    <BoxView value={numberTwo}/>
                </View>
                <View style={style.boxAnswerTittle}>
                    <Text style={style.questionTittle}>Informe sua resposta</Text>
                </View>       
                <View style={style.boxInput}>
                    <TextInput style={style.input} keyboardType='number-pad'>{result}</TextInput>
                </View>
                <View style={style.boxButtonValidate}>
                    <Buttons style={style.buttonValidate} textStyle={style.textButtonValidate} texts={'Validar'} onChangeNumber={Validate}/>
                </View>
            </View>
            <View style={style.boxButtonNewGame}>
                <Buttons style={style.buttonNewGame} textStyle={style.textButtonNewGame} texts={'Novo Jogo'} onChangeNumber={Sort}/>
            </View>
        </View>
    )
}