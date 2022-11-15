import { NavigationContainer } from '@react-navigation/native';
import Stacks from './src/navigation/Stacks';
import UserProvider from './src/stores/UserContext';


export default function App() {

  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <Stacks />
        </NavigationContainer>
      </UserProvider>
    </>
    
  );
}

