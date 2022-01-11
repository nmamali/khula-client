import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import React from 'react';
import {ApolloClient, ApolloProvider, NormalizedCacheObject} from "@apollo/client";
import { LogBox } from 'react-native';
import {cache} from "./cache";

// Initialize Apollo Client
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache,
    name: "KhulaSchools",
    version: "1.0.1"
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <ApolloProvider client={client}>
            <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
         </ApolloProvider>
    );
  }
}
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();