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
    FlatList

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
            const res = await api.get(`pam3etim/bd/usuarios/listar.php?`);
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
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.containerHeader}>

                 


                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                           <MaterialIcons name="menu" size={35} color="white" style={styles.icon}/>
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
                                            <Text style={styles.rText}>Bem-Vindo!</Text>
                                              
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.boxx}> 

                                <View style={styles.box3}>
                                <View style={styles.textos}>
                                            <Text style={styles.sText}>Sugestões de Fretes e trabalhos para você!</Text>
                                </View>
                                </View>
                               
                                <TouchableOpacity onPress={() => navigation.navigate("EnconFretes")}>
                                    <View style={styles.box2}>
                                        <View style={styles.textos}>
                                            <View>
                                                <Text style={styles.sText}>Mudança</Text>
                                                <Text style={styles.sText}>De Registro a Jacupiranga</Text>
                                                <Text style={styles.sText}>R$: 300,00</Text>

                                                <Text style={styles.paragraph}>
                                                    {`  `}
                                                </Text>

                                                 <Text style={styles.sText}>Transporte</Text>
                                                <Text style={styles.sText}>De Cajati a São Paulo</Text>
                                                <Text style={styles.sText}>R$: 1000,00</Text>
                                                
                                            </View>
                                            
                                            
                                        </View>
                                    </View>
                                    </TouchableOpacity>

                                    
                                </View>


                           
                        </View>


                    </ScrollView>
                
            </View>
        </View>






    )
}