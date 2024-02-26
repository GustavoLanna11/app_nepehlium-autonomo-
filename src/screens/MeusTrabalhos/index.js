/*import React, { useEffect, useState } from 'react';
import { styles } from './style';

import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    RefreshControl,
    StatusBar,
    Alert,

} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { useIsFocused } from '@react-navigation/native';

export default function Home() {
    const navigation= useNavigation();
    const isFocused = useIsFocused();

    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [usu, setUsu] = useState('');


    async function listarDados() {

        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`pam3etim/bd/dashboard/listar-cards.php?user=${user}`);
            setDados(res.data);

        } catch (error) {
            console.log("Erro ao Listar " + error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);

        }
    }

    useEffect(() => {
        listarDados();
    }, [isFocused]);

    const onRefresh = () => {
        setRefreshing(true);
        listarDados();

    };


    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.containerHeader}>

                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                           
                        </TouchableOpacity>

                        <Image style={styles.nephelium} source={require('../../assets/nephelium.png')} />

                    </View>
                </View>

                <Image style={styles.bolas} source={require('../../assets/bolas.png')} />

                    <ScrollView
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >

                        


                        <View style={styles.containerBox}>

                            <TouchableOpacity onPress={() => navigation.navigate("Usuario")}>

                            </TouchableOpacity>
                                
                                <View>
                                    <View style={styles.box}>
                                        <View style={styles.textos}>
                                            <Text style={styles.lenghtText}>Acompanhe aqui, seus trabalhos concluídos!{}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.boxx}> 
                                <Text style={styles.lenghtText2}>Data: 25/02/2022 {}</Text>
                                    <View style={styles.box2}>
                                    
                                        <View style={styles.textos}>
                                            <View>
                                                <Text style={styles.sText}>Frete (Mudança)</Text>
                                                <Text style={styles.sText}>De São Paulo à Jacupiranga</Text>
                                                <Text style={styles.sText}>Duração: 5 horas</Text>

                                                <Text style={styles.paragraph}>
                                                    {`  `}
                                                </Text>

                                                <View style={styles.inv}> 
                                                     <View style={styles.invisible}></View>
                                                </View>

                                                <Text style={styles.paragraph}>
                                                    {`  `}
                                                </Text>
                                               

                                                 <Text style={styles.sText}>R$:1000,00</Text>
                                                <Text style={styles.sText}>Peso: 2 toneladas</Text>
                                                
                                            </View>
                                            
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.boxx}> 
                                <Text style={styles.lenghtText2}>Data: 25/02/2022 {}</Text>
                                    <View style={styles.box2}>
                                    
                                        <View style={styles.textos}>
                                            <View>
                                                <Text style={styles.sText}>Frete (Mudança)</Text>
                                                <Text style={styles.sText}>De São Paulo à Jacupiranga</Text>
                                                <Text style={styles.sText}>Duração: 5 horas</Text>

                                                <Text style={styles.paragraph}>
                                                    {`  `}
                                                </Text>

                                                <View style={styles.inv}> 
                                                     <View style={styles.invisible}></View>
                                                </View>

                                                <Text style={styles.paragraph}>
                                                    {`  `}
                                                </Text>
                                               

                                                 <Text style={styles.sText}>R$:1000,00</Text>
                                                <Text style={styles.sText}>Peso: 2 toneladas</Text>
                                                
                                            </View>
                                            
                                        </View>
                                    </View>
                                </View>


                            
                        </View>


                    </ScrollView>
                
            </View>
        </View>






    )
                    }

*/

                    import React, { useEffect, useState } from 'react';
                    import { styles } from './style';
                    
                    import {
                        SafeAreaView,
                        Text,
                        View,
                        ScrollView,
                        TouchableOpacity,
                        Image,
                        ActivityIndicator,
                        RefreshControl,
                        StatusBar,
                        Alert,
                    
                    } from 'react-native';
                    
                    import { MaterialIcons } from '@expo/vector-icons';
                    import Load from '../../components/Load';
                    import { DrawerActions, useNavigation } from '@react-navigation/core';
                    import api from '../../services/api';
                    import { AnimatedCircularProgress } from 'react-native-circular-progress';
                    import axios from 'axios';
                    import { useIsFocused } from '@react-navigation/native';
                    import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    async function listarDados() {
        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`pam3etim/bd/usuarios/listarFretesAceitos.php`);
   
            setDados(res.data.resultado); 
        } catch (error) {
            console.log("Erro ao Listar " + error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);
        }
    }

    useEffect(() => {
        listarDados();
    }, [isFocused]);

    const onRefresh = () => {
        setRefreshing(true);
        listarDados();
    };


    return (
        <View style={{ flex: 1 }}>
       
                <View style={styles.header}>
                    <View style={styles.containerHeader}>

                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                           
                        </TouchableOpacity>

                        <Image style={styles.nephelium} source={require('../../assets/nephelium.png')} />

                    </View>
                </View>

                <Image style={styles.bolas} source={require('../../assets/bolas.png')} />
            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <View style={styles.boxaviso}>
                    <Text style={styles.aviso}>Acompanhe seus trabalhos aqui!</Text>
                </View>
                
                {dados.map((item, index) => (
        
                        <View style={styles.containerBox} key={index}>
                        <View>
                                    <View style={styles.box}>
                                        <View style={styles.textos}>
                                            <Text style={styles.lenghtText}>Acompanhe aqui, seus trabalhos concluídos!{}</Text>
                                        </View>
                                    </View>
                                </View>
                            <View style={styles.box}>
                            <View style={styles.textos}>
                                            <View>
                                            <Text style={styles.sText}>{`Tipo de Frete: ${item.tipo}`}</Text>
                                            <Text style={styles.lenghtText}>{`Rota: ${item.rota}`}</Text>
                                            <Text style={styles.lenghtText}>{`Duração: ${item.tempo}`}</Text>

                                                <Text style={styles.paragraph}>
                                                    {`  `}
                                                </Text>

                                                <View style={styles.inv}> 
                                                     <View style={styles.invisible}></View>
                                                </View>

                                                <Text style={styles.paragraph}>
                                                    {`  `}
                                                </Text>
                                               

                                                <Text style={styles.lenghtText}>{`Preço: ${item.preco}`} R$</Text>
                                                <Text style={styles.lenghtText}>{`Peso: ${item.peso}`}</Text>
                                                
                                            </View>
                                            
                                        </View>
                            </View>
                        </View>
                   
                ))}
            </ScrollView>
        </View>
    );
}
