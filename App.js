import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity, FlatList,TouchableHighlight, SectionList, SafeAreaView, StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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

const JedzenieScreen = ({route, navigation}) => {
    const {itemId} = route.params;

    if(itemId == 1) {
        let listViewRef;
                  const [dataSource, setDataSource] = useState([
                    { id: 1, title: 'John burg'},
                    { id: 2, title: 'Bó' },
                    { id: 3, title: 'MC Donalds' },
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
                   navigation.navigate('Jedzenie', {itemId: food.id, name: food.title});

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
    return (
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>

               <Button title = "Wyloguj" onPress = {() => navigation.navigate("Login")} />
        </View>
    );
    } else if (itemId == 3) {
          return (
              <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                     <Button title = "Wyloguj" onPress = {() => navigation.navigate("Login")} />
              </View>
          );
   } else if (itemId == 4) {
         return (
             <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                    <Button title = "Wyloguj" onPress = {() => navigation.navigate("Login")} />
             </View>
         );
   } else if (itemId == 5) {
         return (
             <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                    <Button title = "Wyloguj" onPress = {() => navigation.navigate("Login")} />
             </View>
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
});

export default App;