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
    FlatList,
    Button, 
} from 'react-native';
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useIsFocused } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    async function listarDados() {
        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`pam3etim/bd/usuarios/listarMinhoneiro.php`);
   
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

    const aceitar_frete = async (item) => {
        try {
            const user = await AsyncStorage.getItem('@user');
        
            await api.post('pam3etim/bd/usuarios/salvar_frete.php', {
                id: item.id,
                tipo: item.tipo,
                rota: item.rota,
                peso: item.peso,
                preco: item.preco,
                tempo: item.tempo,
          
            });
         
            Alert.alert('Frete aceito com sucesso!');
         
            listarDados();
        } catch (error) {
            console.log('Erro ao aceitar frete: ', error);
            Alert.alert('Erro ao aceitar frete. Tente novamente mais tarde.');
        }
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

          

            <View style={styles.boxt}>
                <Text style={styles.titulo}>Fretes e Transportes</Text>
            </View>
            <FlatList
                 data={dados}
                 keyExtractor={(item, index) => index.toString()}
                 showsVerticalScrollIndicator={false}
                 nestedScrollEnabled={true}
                 refreshControl={
                     <RefreshControl
                         refreshing={refreshing}
                         onRefresh={onRefresh}
                     />
                 }
                renderItem={({ item, index }) => (

                
                    <View style={styles.box}>

                     
                       
                        <View style={styles.textos}>
                            
                            <Text style={styles.sText}>Tipo de Frete:   {item.tipo}</Text>
                            <Text style={styles.sText}>Rota:   {item.rota}</Text>                
                            <Text style={styles.sText}>Preço:  {item.preco}R$</Text>
                                        
                        <View style={styles.box3}>
                            <TouchableOpacity
                             style={styles.txt}
                             onPress={() => aceitar_frete(item)}
                            >
                                <Text style={styles.buttonText}>Aceitar Frete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                )}
            />
        </View>
    );
}
