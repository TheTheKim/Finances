import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcoming from '../pages/Welcoming/Welcoming'
import SignIn from '../pages/SignIn/SignIn'
import Registering from '../pages/Registering/Registering'
const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcoming"
                component={Welcoming}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name="Registering"
                component={Registering}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}