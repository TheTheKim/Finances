import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcoming from '../pages/Welcoming'
import SignIn from '../pages/SignIn'

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
        </Stack.Navigator>
    )
}