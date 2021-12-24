import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity, FlatList,TouchableHighlight, SectionList, SafeAreaView, StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TextAncestorContext from "react-native-web/dist/exports/Text/TextAncestorContext";




const LoginScreen = ({navigation}) => {
      const [text, onChangeText] = React.useState(null);
      const [password, onChangePassword] = React.useState(null);
    return (
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <SafeAreaView>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Nazwa użytkownika"
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    secureTextEntry={true}
                    value={password}
                    placeholder="Hasło"
                  />
                </SafeAreaView>
            <Button
                title="Loguj"
                onPress = {() => navigation.navigate('Menu')}
            />
        </View>
    );
}

function MenuScreen({ navigation}) {
    return (
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Menu</Text>
            <Button
                title="Restauracje"
                onPress = {() => navigation.navigate('Restauracje')}
            />
            <Button title = "Ustawienia" onPress= {() => navigation.navigate('Ustawienia')} />
            <Button title = "Wyloguj" onPress = {() => navigation.navigate("Login")} />
        </View>
    );
}


////////////////////////////////////////////////////////////////////////////////////


const RestauracjeScreen = ({ navigation}) => {
    let listViewRef;
      const [dataSource, setDataSource] = useState([
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
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8',
            }}
          />
        );
      };
    const getItem = (item) => {
          // Function for click on an item
           navigation.navigate('Jedzenie', {itemId: item.id, name: item.title});

    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
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

    if(itemId == 1) {
        let listViewRef;
                  const [dataSource, setDataSource] = useState([
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
                      height: 0.5,
                      width: '100%',
                      backgroundColor: '#C8C8C8',
                    }}
                  />
                );
              };
            const getItem = (item) => {
                  // Function for click on an item
                  navigation.navigate('Potrawa', {itemId: item.id, name: item.title});

            };

            return (
                <SafeAreaView style={{ flex: 1 }}>
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

    } else if (itemId == 2) {
    let listViewRef;
                      const [dataSource, setDataSource] = useState([
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
                          height: 0.5,
                          width: '100%',
                          backgroundColor: '#C8C8C8',
                        }}
                      />
                    );
                  };
                const getItem = (item) => {
                      // Function for click on an item
                      navigation.navigate('Potrawa', {itemId: item.id, name: item.title});

                };

                return (
                    <SafeAreaView style={{ flex: 1 }}>
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
    } else if (itemId == 3) {
          let listViewRef;
                            const [dataSource, setDataSource] = useState([
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
                                height: 0.5,
                                width: '100%',
                                backgroundColor: '#C8C8C8',
                              }}
                            />
                          );
                        };
                      const getItem = (item) => {
                            // Function for click on an item
                            navigation.navigate('Potrawa', {itemId: item.id, name: item.title});

                      };

                      return (
                          <SafeAreaView style={{ flex: 1 }}>
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
   } else if (itemId == 4) {
         let listViewRef;
                           const [dataSource, setDataSource] = useState([
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
                               height: 0.5,
                               width: '100%',
                               backgroundColor: '#C8C8C8',
                             }}
                           />
                         );
                       };
                     const getItem = (item) => {
                           // Function for click on an item
                            navigation.navigate('Potrawa', {itemId: item.id, name: item.title});

                     };

                     return (
                         <SafeAreaView style={{ flex: 1 }}>
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
   } else if (itemId == 5) {
         let listViewRef;
                           const [dataSource, setDataSource] = useState([
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
                               height: 0.5,
                               width: '100%',
                               backgroundColor: '#C8C8C8',
                             }}
                           />
                         );
                       };
                     const getItem = (item) => {
                           // Function for click on an item
                            navigation.navigate('Potrawa', {itemId: item.id, name: item.title});

                     };

                     return (
                         <SafeAreaView style={{ flex: 1 }}>
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
    return (
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
               <Text>Restauracje</Text>
               <Button title = "Wyloguj" onPress = {() => navigation.navigate("Login")} />
        </View>
    );
}

const PotrawaScreen = ({route, navigation}) => {
    const {itemId} = route.params;
    if(itemId === 6) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
            </View>
        );
    }
    if(itemId === 7) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
            </View>
        );
    }
    if(itemId === 8) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
            </View>
        );
    }
    if(itemId === 9) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
            </View>
        );
    }

    if(itemId === 10) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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

                </View>
            );
        }

    if(itemId === 11) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
                </View>
            );
        }

    if(itemId === 12) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
                </View>
            );
        }

    if(itemId === 13) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
                </View>
            );
        }

    if(itemId === 14) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        style={styles.logo}
                        source={require('pam\\assets\\flurry.png')}
                    />
                    <Text style={styles.nazwa}> MCFlurry </Text>
                    <Text style={styles.opis}> Smak czekoladowy</Text>
                </View>
            );
        }

    if(itemId === 15) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        style={styles.logo}
                        source={require('pam\\assets\\kubelek.jpg')}
                    />
                    <Text style={styles.nazwa}> Kubełek Classic </Text>
                    <Text style={styles.opis}> 2 x Kawałki kurczaka </Text>
                    <Text style={styles.opis}> 4 x Hot Wings </Text>
                    <Text style={styles.opis}> 4 x Hot Strips</Text>
                    <Text style={styles.opis}> 2 x Frytki</Text>
                </View>
            );
        }

    if(itemId === 16) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        style={styles.logo}
                        source={require('pam\\assets\\besmart.webp')}
                    />
                    <Text style={styles.nazwa}> BeSmart </Text>
                    <Text style={styles.opis}> Longer</Text>
                    <Text style={styles.opis}> Frytki</Text>
                </View>
            );
        }

    if(itemId === 17) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        style={styles.logo}
                        source={require('pam\\assets\\frytki.png')}
                    />
                    <Text style={styles.nazwa}> Frytki duże </Text>
                    <Text style={styles.opis}> 200 g</Text>
                </View>
            );
        }

    if(itemId === 18) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        style={styles.logo}
                        source={require('pam\\assets\\nuggets.png')}
                    />
                    <Text style={styles.nazwa}> Chicken Nuggets </Text>
                    <Text style={styles.opis}> 8 x Nugget</Text>
                    <Text style={styles.opis}> Małe frytki</Text>
                </View>
            );
        }

    if(itemId === 19) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        style={styles.logo}
                        source={require('pam\\assets\\oreo.png')}
                    />
                    <Text style={styles.nazwa}> Oreo Shake </Text>
                    <Text style={styles.opis}> Shake klaszyczny</Text>
                </View>
            );
        }

    if(itemId === 20) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
                </View>
            );
        }
}

const Stack = createNativeStackNavigator();




function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={ LoginScreen } options = {{ title: 'Kucharek' }}/>
                <Stack.Screen name="Menu" component={ MenuScreen } options = {{ title: 'Menu' }}/>
                <Stack.Screen name="Restauracje" component={ RestauracjeScreen } options = {{ title: 'Restauracje' }}/>
                <Stack.Screen name="Ustawienia" component={ UstawieniaScreen } options = {{ title: 'Ustawienia' }}/>
                <Stack.Screen name="Jedzenie" component={ JedzenieScreen } options = {({ route }) => ({ title: route.params.name })}/>
                <Stack.Screen name="Potrawa" component={ PotrawaScreen } options = {({ route }) => ({ title: route.params.name })}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
       itemStyle: {
           padding: 30,
           fontSize: 20,
        },
      input: {
         height: 50,
         margin: 20,
         borderWidth: 1,
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
    },
    opis: {
           flex: 0.5,
    },
});

export default App;