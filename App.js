import React, {useEffect, useState} from 'react';
import { Image, StatusBar, FlatList, SafeAreaView, TextInput, Text, View, Alert, Pressable  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Picker} from '@react-native-picker/picker';
import * as Location from 'expo-location';
import {styles} from "./styles";
import MapView, {Marker} from 'react-native-maps';



const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];



const LoginScreen = ({navigation}) => {

    const [text, onChangeText] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [hidden] = useState(false);
    const [statusBarStyle] = useState(STYLES[0]);
    const [statusBarTransition] = useState(TRANSITIONS[0]);

    return (
        <SafeAreaView style = {styles.container}>
                <StatusBar
                animated={true}
                backgroundColor="#BA2C73"
                barStyle={statusBarStyle}
                showHideTransition={statusBarTransition}
                hidden={hidden} />
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Nazwa użytkownika"
                    placeholderTextColor= '#BA2C73'
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    secureTextEntry={true}
                    value={password}
                    placeholder="Hasło"
                    placeholderTextColor= '#BA2C73'
                  />
            <Pressable style={styles.button} onPress = {() => navigation.navigate('Menu')}>
                <Text style={styles.text_button}>Loguj</Text>
            </Pressable>
        </SafeAreaView>
    );
}

function MenuScreen({ navigation}) {
    return (
        <View style = {styles.container}>
            <Pressable style={styles.button} onPress = {() => navigation.navigate('Restauracje')}>
                <Text style={styles.text_button}>Restauracje</Text>
            </Pressable>
            <Pressable style={styles.button} onPress= {() => navigation.navigate('Ustawienia')}>
                <Text style={styles.text_button}>Ustawienia</Text>
            </Pressable>
            <Pressable style={styles.button} onPress = {() => navigation.navigate("Mapa")}>
                <Text style={styles.text_button}>Mapa Restauracji</Text>
            </Pressable>
            <Pressable style={styles.button} onPress = {() => navigation.navigate("Login")}>
                <Text style={styles.text_button}>Wyloguj</Text>
            </Pressable>

        </View>
    );
}


////////////////////////////////////////////////////////////////////////////////////


const RestauracjeScreen = ({ navigation}) => {
    let listViewRef;
      const [dataSource] = useState([
        { id: 1, title: 'John burg'},
        { id: 2, title: 'Bó' },
        { id: 3, title: 'MC Donalds' },
        { id: 4, title: 'KFC' },
        { id: 5, title: 'Burger King' },
      ]);
    const ItemView = ({ item }) => {
        return (
          // Flat List Item
          <Text style={styles.itemStyle} onPress={() => getItem(item)}>
            {item.title.toUpperCase()}
          </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 1.5,
              width: '100%',
              backgroundColor: '#BA2C73',
            }}
          />
        );
      };
    const getItem = (item) => {
          // Function for click on an item
           navigation.navigate('Jedzenie', {itemId: item.id, name: item.title});

    };

    return (
        <SafeAreaView style={styles.list_menu}>
              <FlatList
                data={dataSource}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
                ref={(ref) => {
                  listViewRef = ref;
                }}
              />
        </SafeAreaView>
    );
}

///////////////////////////////////////////////////////////////////////////////////////////


const JedzenieScreen = ({route, navigation}) => {
    const {itemId} = route.params;

    if(itemId === 1) {
        let listViewRef;
                  const [dataSource] = useState([
                    { id: 6, title: 'Classic'},
                    { id: 7, title: 'BBQ Burger' },
                    { id: 8, title: 'Vege Burger' },
                  ]);
                const ItemView = ({ item }) => {
                    return (
                      // Flat List Item
                      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
                        {item.title.toUpperCase()}
                      </Text>
                    );
                };
         const ItemSeparatorView = () => {
                return (
                  // Flat List Item Separator
                  <View
                    style={{
                      height: 1.5,
                      width: '100%',
                      backgroundColor: '#BA2C73',
                    }}
                  />
                );
              };
            const getItem = (item) => {
                  // Function for click on an item
                  navigation.navigate('Potrawa', {itemId: item.id, name: item.title});

            };

            return (
                <SafeAreaView style={styles.list_menu}>
                      <FlatList
                        data={dataSource}
                        keyExtractor={(food, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={ItemView}
                        ref={(ref) => {
                          listViewRef = ref;
                        }}
                      />
                </SafeAreaView>
            );

    } else if (itemId === 2) {
    let listViewRef;
                      const [dataSource] = useState([
                        { id: 9, title: 'Jalapeno Burger'},
                        { id: 10, title: 'Triple Cheese Burger' },
                        { id: 11, title: 'Spicy Burger' },
                      ]);
                    const ItemView = ({ item }) => {
                        return (
                          // Flat List Item
                          <Text style={styles.itemStyle} onPress={() => getItem(item)}>
                            {item.title.toUpperCase()}
                          </Text>
                        );
                    };
             const ItemSeparatorView = () => {
                    return (
                      // Flat List Item Separator
                      <View
                        style={{
                          height: 1.5,
                          width: '100%',
                          backgroundColor: '#BA2C73',
                        }}
                      />
                    );
                  };
                const getItem = (item) => {
                      // Function for click on an item
                      navigation.navigate('Potrawa', {itemId: item.id, name: item.title});

                };

                return (
                    <SafeAreaView style={styles.list_menu}>
                          <FlatList
                            data={dataSource}
                            keyExtractor={(food, index) => index.toString()}
                            ItemSeparatorComponent={ItemSeparatorView}
                            renderItem={ItemView}
                            ref={(ref) => {
                              listViewRef = ref;
                            }}
                          />
                    </SafeAreaView>
                );
    } else if (itemId === 3) {
          let listViewRef;
                            const [dataSource] = useState([
                              { id: 12, title: 'Drwal'},
                              { id: 13, title: 'McWrap' },
                              { id: 14, title: 'McFlurry' },
                            ]);
                          const ItemView = ({ item }) => {
                              return (
                                // Flat List Item
                                <Text style={styles.itemStyle} onPress={() => getItem(item)}>
                                  {item.title.toUpperCase()}
                                </Text>
                              );
                          };
                   const ItemSeparatorView = () => {
                          return (
                            // Flat List Item Separator
                            <View
                              style={{
                                height: 1.5,
                                width: '100%',
                                backgroundColor: '#BA2C73',
                              }}
                            />
                          );
                        };
                      const getItem = (item) => {
                            // Function for click on an item
                            navigation.navigate('Potrawa', {itemId: item.id, name: item.title});

                      };

                      return (
                          <SafeAreaView style={styles.list_menu}>
                                <FlatList
                                  data={dataSource}
                                  keyExtractor={(food, index) => index.toString()}
                                  ItemSeparatorComponent={ItemSeparatorView}
                                  renderItem={ItemView}
                                  ref={(ref) => {
                                    listViewRef = ref;
                                  }}
                                />
                          </SafeAreaView>
                      );
   } else if (itemId === 4) {
         let listViewRef;
                           const [dataSource] = useState([
                             { id: 15, title: 'Kubełek Classic'},
                             { id: 16, title: 'BeSmart' },
                             { id: 17, title: 'Frytki' },
                           ]);
                         const ItemView = ({ item }) => {
                             return (
                               // Flat List Item
                               <Text style={styles.itemStyle} onPress={() => getItem(item)}>
                                 {item.title.toUpperCase()}
                               </Text>
                             );
                         };
                  const ItemSeparatorView = () => {
                         return (
                           // Flat List Item Separator
                           <View
                             style={{
                               height: 1.5,
                               width: '100%',
                               backgroundColor: '#BA2C73',
                             }}
                           />
                         );
                       };
                     const getItem = (item) => {
                           // Function for click on an item
                            navigation.navigate('Potrawa', {itemId: item.id, name: item.title});

                     };

                     return (
                         <SafeAreaView style={styles.list_menu}>
                               <FlatList
                                 data={dataSource}
                                 keyExtractor={(food, index) => index.toString()}
                                 ItemSeparatorComponent={ItemSeparatorView}
                                 renderItem={ItemView}
                                 ref={(ref) => {
                                   listViewRef = ref;
                                 }}
                               />
                         </SafeAreaView>
                     );
   } else if (itemId === 5) {
         let listViewRef;
                           const [dataSource] = useState([
                             { id: 18, title: 'Nuggets'},
                             { id: 19, title: 'Oreo Shake' },
                             { id: 20, title: 'Whopper' },
                           ]);
                         const ItemView = ({ item }) => {
                             return (
                               // Flat List Item
                               <Text style={styles.itemStyle} onPress={() => getItem(item)}>
                                 {item.title.toUpperCase()}
                               </Text>
                             );
                         };
                  const ItemSeparatorView = () => {
                         return (
                           // Flat List Item Separator
                           <View
                             style={{
                               height: 1.5,
                               width: '100%',
                               backgroundColor: '#BA2C73',
                             }}
                           />
                         );
                       };
                     const getItem = (item) => {
                           // Function for click on an item
                            navigation.navigate('Potrawa', {itemId: item.id, name: item.title});

                     };

                     return (
                         <SafeAreaView style={styles.list_menu}>
                               <FlatList
                                 data={dataSource}
                                 keyExtractor={(food, index) => index.toString()}
                                 ItemSeparatorComponent={ItemSeparatorView}
                                 renderItem={ItemView}
                                 ref={(ref) => {
                                   listViewRef = ref;
                                 }}
                               />
                         </SafeAreaView>
                     );
   }

}


const UstawieniaScreen = ({ navigation}) => {
    const [setLocationServiceEnabled] = useState(false);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
        'Czekaj, pobieramy Twoją lokalizację...'
    );

    // first update the useEffect hook
    useEffect(() => {
        CheckIfLocationEnabled();
        GetCurrentLocation();
    }, []);


// create the handler method
    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();

        if (!enabled) {
            Alert.alert(
                'Usługa lokalizacji nie jest włączona',
                'Włącz usługi lokalizacyjne, aby kontynuować',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        } else {
            setLocationServiceEnabled(enabled);
        }
    };

    const GetCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert(
                'Nie udzielono pozwolenia',
                'Zezwól aplikacji na korzystanie z usługi lokalizacyjnej.',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        }

        let { coords } = await Location.getCurrentPositionAsync();

        if (coords) {
            const { latitude, longitude } = coords;
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude
            });

            for (let item of response) {
                let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;

                setDisplayCurrentAddress(address);
                if (address.length > 0) {
                    setTimeout(() => {
                        navigation.navigate('Menu', { item: address });
                    }, 2000);
                }
            }
        }
    };
    return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Twoja aktualna lokalizacja</Text>
                </View>
                <Text style={styles.text}>{displayCurrentAddress}</Text>
            </View>
        );
}


const MapaScreen = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <MapView
                style={styles.flex}
                initialRegion={{
                    latitude: 50.87033,
                    longitude: 20.62752,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04
                }}>
                <Marker
                    description="John Burg"
                    coordinate={{latitude: 50.87135, longitude: 20.62453}} >
                <Image
                    style={styles.markerImage}
                    source={require("./assets/mark.png")} />
                </Marker>
                <Marker
                    title="Bó burgers"
                    description="Burgery"
                    coordinate={{latitude: 50.87330, longitude: 20.62952}} >
                    <Image
                        style={styles.markerImage}
                        source={require("./assets/mark.png")} />
                </Marker>
                <Marker
                    description="Mc Donalds"
                    coordinate={{latitude: 50.87225, longitude: 20.62840}} >
                    <Image
                        style={styles.markerImage}
                        source={require("./assets/mark.png")} />
                </Marker>
                <Marker
                    description="KFC"
                    coordinate={{latitude: 50.87120, longitude: 20.62545}} >
                    <Image
                        style={styles.markerImage}
                        source={require("./assets/mark.png")} />
                </Marker>
                <Marker
                    description="Burger King"
                    coordinate={{latitude: 50.87410, longitude: 20.62640}} >
                    <Image
                        style={styles.markerImage}
                        source={require("./assets/mark.png")} />
                </Marker>
            </MapView>
        </SafeAreaView>
    );
}

const ZamowScreen = ({}) => {
    const [text1, onChangeText1] = React.useState(null);
    const [text2, onChangeText2] = React.useState(null);
    const [text3, onChangeText3] = React.useState(null);
    const [text4, onChangeText4] = React.useState(null);
    const [text5, onChangeText5] = React.useState(null);
    return (
        <SafeAreaView style = {styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText1}
                value={text1}
                placeholder="Imie"
                placeholderTextColor= '#BA2C73'
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText2}
                value={text2}
                placeholder="Nazwisko"
                placeholderTextColor= '#BA2C73'
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText3}
                value={text3}
                placeholder="Adres"
                placeholderTextColor= '#BA2C73'
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText4}
                value={text4}
                placeholder="Kod Pocztowy"
                placeholderTextColor= '#BA2C73'
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText5}
                value={text5}
                placeholder="Numer telefonu"
                placeholderTextColor= '#BA2C73'
            />
            <Pressable style={styles.button} onPress={() => Alert.alert('Zamówione byczq', "Imię: "+text1 + "\n" +"Nazwisko: "+ text2 + "\n" +"Adres: "+ text3 + "\n" + "Kod Pocztowy: "+text4 + "\n" + "Numer Telefonu: "+text5)}>
                <Text style={styles.text_button}>Zamów</Text>
            </Pressable>
        </SafeAreaView>

    );
}


////////////////////////////////////////////////////////////////////////////////

const PotrawaScreen = ({route, navigation}) => {
    const {itemId} = route.params;
    const [selectedValue, setSelectedValue] = useState("1");
    if(itemId === 6) {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('pam\\assets\\classic.jpg')}
                />
                <Text style={styles.nazwa}> Classic Burger </Text>
                <Text style={styles.opis}> 1x burger wołowy 100% 200g</Text>
                <Text style={styles.opis}> Pomidor</Text>
                <Text style={styles.opis}> Bułka świeżo pieczona</Text>
                <Text style={styles.opis}> Ser</Text>
                <Text style={styles.opis}> Cebula</Text>
                <Text style={styles.opis}> Sałata</Text>
                <Text style={styles.opis}> Sos</Text>
                <Text style={styles.opis}> Cena: 17.50</Text>
                <Text style={styles.ilosc}> Ilość </Text>
                <View style={styles.picker}>
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.list}
                        dropdownIconColor={'#BA2C73'}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                    </Picker>
                </View>
                <Pressable style={styles.button} onPress = {() => navigation.navigate('Zamow', {itemId: itemId})}>
                    <Text style={styles.text_button}>Zamów</Text>
                </Pressable>
            </View>
        );
    }
    if(itemId === 7) {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('pam\\assets\\bbq.jpg')}
                />
                <Text style={styles.nazwa}> BBQ Burger </Text>
                <Text style={styles.opis}> 1x burger wołowy 100% 200g</Text>
                <Text style={styles.opis}> Bekon</Text>
                <Text style={styles.opis}> Bułka świeżo pieczona</Text>
                <Text style={styles.opis}> Ser</Text>
                <Text style={styles.opis}> Cebula</Text>
                <Text style={styles.opis}> Pomidor</Text>
                <Text style={styles.opis}> Ogórek kiszony</Text>
                <Text style={styles.opis}> Sos BBQ</Text>
                <Text style={styles.opis}> Cena: 19.50</Text>
                <Text style={styles.ilosc}> Ilość </Text>
                <View style={styles.picker}>
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.list}
                        dropdownIconColor={'#BA2C73'}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                    </Picker>
                </View>
                <Pressable style={styles.button} onPress = {() => navigation.navigate('Zamow', {itemId: itemId})}>
                    <Text style={styles.text_button}>Zamów</Text>
                </Pressable>
            </View>
        );
    }
    if(itemId === 8) {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('pam\\assets\\vege.jpg')}

                />
                <Text style={styles.nazwa}> VEGE Burger </Text>
                <Text style={styles.opis}> Burger z buraka</Text>
                <Text style={styles.opis}> Ser wędzony</Text>
                <Text style={styles.opis}> Bułka świeżo pieczona</Text>
                <Text style={styles.opis}> Pomidor</Text>
                <Text style={styles.opis}> Rukola</Text>
                <Text style={styles.opis}> Sos</Text>
                <Text style={styles.opis}> Cena: 16.00</Text>
                <Text style={styles.ilosc}> Ilość </Text>
                <View style={styles.picker}>
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.list}
                        dropdownIconColor={'#BA2C73'}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                    </Picker>
                </View>
                <Pressable style={styles.button} onPress = {() => navigation.navigate('Zamow', {itemId: itemId})}>
                    <Text style={styles.text_button}>Zamów</Text>
                </Pressable>
            </View>
        );
    }
    if(itemId === 9) {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('pam\\assets\\jalapeno.jpg')}
                />
                <Text style={styles.nazwa}> Jalapeno Burger </Text>
                <Text style={styles.opis}> 1x burger wołowy 100% 200g</Text>
                <Text style={styles.opis}> Papryczka Jalapeno</Text>
                <Text style={styles.opis}> Bułka świeżo pieczona</Text>
                <Text style={styles.opis}> Ser od krówki</Text>
                <Text style={styles.opis}> Cebula</Text>
                <Text style={styles.opis}> Pomidor</Text>
                <Text style={styles.opis}> Cena: 22.00</Text>
                <Text style={styles.ilosc}> Ilość </Text>
                <View style={styles.picker}>
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.list}
                        dropdownIconColor={'#BA2C73'}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                    </Picker>
                </View>
                <Pressable style={styles.button} onPress = {() => navigation.navigate('Zamow', {itemId: itemId})}>
                    <Text style={styles.text_button}>Zamów</Text>
                </Pressable>
            </View>
        );
    }

    if(itemId === 10) {
            return (
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('pam\\assets\\tcb.jpg')}
                    />
                    <Text style={styles.nazwa}> Triple Cheese Burger </Text>
                    <Text style={styles.opis}> 2x burger wołowy 100% 100g</Text>
                    <Text style={styles.opis}> Ser cheddar</Text>
                    <Text style={styles.opis}> Bułka świeżo pieczona</Text>
                    <Text style={styles.opis}> Ser od krówki</Text>
                    <Text style={styles.opis}> Cebula</Text>
                    <Text style={styles.opis}> Pomidor</Text>
                    <Text style={styles.opis}> Sałata</Text>
                    <Text style={styles.opis}> Sos</Text>
                    <Text style={styles.opis}> Cena: 25.50 </Text>
                    <Text style={styles.ilosc}> Ilość </Text>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.list}
                            dropdownIconColor={'#BA2C73'}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                        </Picker>
                    </View>
                    <Pressable style={styles.button} onPress = {() => navigation.navigate('Zamow', {itemId: itemId})}>
                        <Text style={styles.text_button}>Zamów</Text>
                    </Pressable>
                </View>
            );
        }

    if(itemId === 11) {
            return (
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('pam\\assets\\spicy.jpg')}
                    />
                    <Text style={styles.nazwa}> Spicy Burger </Text>
                    <Text style={styles.opis}> 1x burger wołowy 100% 200g</Text>
                    <Text style={styles.opis}> Papryczka Chilli</Text>
                    <Text style={styles.opis}> Bułka świeżo pieczona</Text>
                    <Text style={styles.opis}> Ser od krówki</Text>
                    <Text style={styles.opis}> Cebula</Text>
                    <Text style={styles.opis}> Ogórek</Text>
                    <Text style={styles.opis}> Extra Hot Sos</Text>
                    <Text style={styles.opis}> Cena: 22.50 </Text>
                    <Text style={styles.ilosc}> Ilość </Text>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.list}
                            dropdownIconColor={'#BA2C73'}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                        </Picker>
                    </View>
                    <Pressable style={styles.button} onPress = {() => navigation.navigate('Zamow', {itemId: itemId})}>
                        <Text style={styles.text_button}>Zamów</Text>
                    </Pressable>
                </View>
            );
        }

    if(itemId === 12) {
            return (
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('pam\\assets\\drwal.png')}
                    />
                    <Text style={styles.nazwa}> Burger Drwala </Text>
                    <Text style={styles.opis}> Wołowina</Text>
                    <Text style={styles.opis}> Zapiekany Ser</Text>
                    <Text style={styles.opis}> Boczek</Text>
                    <Text style={styles.opis}> Sałata</Text>
                    <Text style={styles.opis}> Sos</Text>
                    <Text style={styles.opis}> Cena: 17.90 </Text>
                    <Text style={styles.ilosc}> Ilość </Text>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.list}
                            dropdownIconColor={'#BA2C73'}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                        </Picker>
                    </View>
                    <Pressable style={styles.button} onPress = {() => navigation.navigate('Zamow', {itemId: itemId})}>
                        <Text style={styles.text_button}>Zamów</Text>
                    </Pressable>
                </View>
            );
        }

    if(itemId === 13) {
            return (
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('pam\\assets\\wrap.png')}
                    />
                    <Text style={styles.nazwa}> McWrap </Text>
                    <Text style={styles.opis}> Pszenny wrap</Text>
                    <Text style={styles.opis}> Kurczak</Text>
                    <Text style={styles.opis}> Rukola</Text>
                    <Text style={styles.opis}> Pomidor</Text>
                    <Text style={styles.opis}> Ser Cheddar</Text>
                    <Text style={styles.opis}> Sos</Text>
                    <Text style={styles.opis}> Cena: 16.90 </Text>
                    <Text style={styles.ilosc}> Ilość </Text>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.list}
                            dropdownIconColor={'#BA2C73'}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                        </Picker>
                    </View>
                    <Pressable style={styles.button} onPress = {() => navigation.navigate('Zamow', {itemId: itemId})}>
                        <Text style={styles.text_button}>Zamów</Text>
                    </Pressable>
                </View>
            );
        }

    if(itemId === 14) {
            return (
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('pam\\assets\\flurry.png')}
                    />
                    <Text style={styles.nazwa}> MCFlurry </Text>
                    <Text style={styles.opis}> Smak czekoladowy</Text>
                    <Text style={styles.opis}> Cena: 8.90 </Text>
                    <Text style={styles.ilosc}> Ilość </Text>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.list}
                            dropdownIconColor={'#BA2C73'}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                        </Picker>
                    </View>
                    <Pressable style={styles.button} onPress = {() => navigation.navigate('Zamow', {itemId: itemId})}>
                        <Text style={styles.text_button}>Zamów</Text>
                    </Pressable>
                </View>
            );
        }

    if(itemId === 15) {
            return (
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('pam\\assets\\kubelek.jpg')}
                    />
                    <Text style={styles.nazwa}> Kubełek Classic </Text>
                    <Text style={styles.opis}> 2 x Kawałki kurczaka </Text>
                    <Text style={styles.opis}> 4 x Hot Wings </Text>
                    <Text style={styles.opis}> 4 x Hot Strips</Text>
                    <Text style={styles.opis}> 2 x Frytki</Text>
                    <Text style={styles.opis}> Cena: 43.99 </Text>
                    <Text style={styles.ilosc}> Ilość </Text>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.list}
                            dropdownIconColor={'#BA2C73'}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                        </Picker>
                    </View>
                    <Pressable style={styles.button} onPress = {() => navigation.navigate('Zamow', {itemId: itemId})}>
                        <Text style={styles.text_button}>Zamów</Text>
                    </Pressable>
                </View>
            );
        }

    if(itemId === 16) {
            return (
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('pam\\assets\\besmart.webp')}
                    />
                    <Text style={styles.nazwa}> BeSmart </Text>
                    <Text style={styles.opis}> Longer</Text>
                    <Text style={styles.opis}> Frytki</Text>
                    <Text style={styles.opis}> Cena: 8.99 </Text>
                    <Text style={styles.ilosc}> Ilość </Text>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.list}
                            dropdownIconColor={'#BA2C73'}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                        </Picker>
                    </View>
                    <Pressable style={styles.button} onPress = {() => navigation.navigate('Zamow', {itemId: itemId})}>
                        <Text style={styles.text_button}>Zamów</Text>
                    </Pressable>
                </View>
            );
        }

    if(itemId === 17) {
            return (
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('pam\\assets\\frytki.png')}
                    />
                    <Text style={styles.nazwa}> Frytki duże </Text>
                    <Text style={styles.opis}> 200 g</Text>
                    <Text style={styles.opis}> Cena: 3.99 </Text>
                    <Text style={styles.ilosc}> Ilość </Text>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.list}
                            dropdownIconColor={'#BA2C73'}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                        </Picker>
                    </View>
                    <Pressable style={styles.button} onPress = {() => navigation.navigate('Zamow', {itemId: itemId})}>
                        <Text style={styles.text_button}>Zamów</Text>
                    </Pressable>
                </View>
            );
        }

    if(itemId === 18) {
            return (
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('pam\\assets\\nuggets.png')}
                    />
                    <Text style={styles.nazwa}> Chicken Nuggets </Text>
                    <Text style={styles.opis}> 8 x Nugget</Text>
                    <Text style={styles.opis}> Małe frytki</Text>
                    <Text style={styles.opis}> Cena: 11.99 </Text>
                    <Text style={styles.ilosc}> Ilość </Text>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.list}
                            dropdownIconColor={'#BA2C73'}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                        </Picker>
                    </View>
                    <Pressable style={styles.button} onPress = {() => navigation.navigate('Zamow', {itemId: itemId})}>
                        <Text style={styles.text_button}>Zamów</Text>
                    </Pressable>
                </View>
            );
        }

    if(itemId === 19) {
            return (
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('pam\\assets\\oreo.png')}
                    />
                    <Text style={styles.nazwa}> Oreo Shake </Text>
                    <Text style={styles.opis}> Shake klaszyczny</Text>
                    <Text style={styles.opis}> Cena: 6.99 </Text>
                    <Text style={styles.ilosc}> Ilość </Text>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.list}
                            dropdownIconColor={'#BA2C73'}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                        </Picker>
                    </View>
                    <Pressable style={styles.button} onPress = {() => navigation.navigate('Zamow', {itemId: itemId})}>
                        <Text style={styles.text_button}>Zamów</Text>
                    </Pressable>
                </View>
            );
        }

    if(itemId === 20) {
            return (
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('pam\\assets\\whopper.png')}
                    />
                    <Text style={styles.nazwa}> Whopper Classic </Text>
                    <Text style={styles.opis}> 1x burger wołowy</Text>
                    <Text style={styles.opis}> Sałata</Text>
                    <Text style={styles.opis}> Pomidor</Text>
                    <Text style={styles.opis}> Cebula</Text>
                    <Text style={styles.opis}> Ogórek Konserwowy</Text>
                    <Text style={styles.opis}> Majonez, Ketchup</Text>
                    <Text style={styles.opis}> Cena: 8.99 </Text>
                    <Text style={styles.ilosc}> Ilość </Text>
                    <View style={styles.picker}>
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.list}
                        dropdownIconColor={'#BA2C73'}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                    </Picker>
                    </View>
                    <Pressable style={styles.button} onPress = {() => navigation.navigate('Zamow', {itemId: itemId})}>
                            <Text style={styles.text_button}>Zamów</Text>
                    </Pressable>
                </View>
            );
        }
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function  Root() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Menu" component={MenuScreen}/>
                <Tab.Screen name="Restauracje" component={RestauracjeScreen}/>
                <Tab.Screen name="Ustawienia" component={UstawieniaScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={ LoginScreen } options = {{ title: 'Kucharek', headerTintColor: '#282F44', headerStyle: {backgroundColor: '#BA2C73'},}}/>
                <Stack.Screen name="Menu" component={ MenuScreen } options = {{ title: 'Menu', headerTintColor: '#282F44', headerStyle: {backgroundColor: '#BA2C73'}, }}/>
                <Stack.Screen name="Restauracje" component={ RestauracjeScreen } options = {{ title: 'Restauracje', headerTintColor: '#282F44', headerStyle: {backgroundColor: '#BA2C73'}, }}/>
                <Stack.Screen name="Ustawienia" component={ UstawieniaScreen } options = {{ title: 'Ustawienia', headerTintColor: '#282F44', headerStyle: {backgroundColor: '#BA2C73'}, }}/>
                <Stack.Screen name="Jedzenie" component={ JedzenieScreen } options = {({ route }) => ({ title: route.params.name, headerTintColor: '#282F44', headerStyle: {backgroundColor: '#BA2C73'}, })}/>
                <Stack.Screen name="Potrawa" component={ PotrawaScreen } options = {({ route }) => ({ title: route.params.name, headerTintColor: '#282F44', headerStyle: {backgroundColor: '#BA2C73'}, })}/>
                <Stack.Screen name="Mapa" component={ MapaScreen } options = {{ title: 'Mapa', headerTintColor: '#282F44', headerStyle: {backgroundColor: '#BA2C73'}, }}/>
                <Stack.Screen name="Zamow" component={ ZamowScreen } options = {{ title: 'Zamówienie', headerTintColor: '#282F44', headerStyle: {backgroundColor: '#BA2C73'}, }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;