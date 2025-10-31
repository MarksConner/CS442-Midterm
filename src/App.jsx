import { useState, useEffect } from 'react';
import { Button, Heading, Flex, View, Grid, Divider } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";

import { generateClient } from "aws-amplify/data";   // ✅ typo fixed
import outputs from "./amplify_outputs.json";

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

/**
 * @type {import('aws-amplify/data').Client<import('./amplify/data/resource').Schema>}
 */
Amplify.configure(outputs);

const client = generateClient({
  authMode: "userPool",  // ✅ correct casing
});

export default function App() {
  const [userProfiles, setUserProfiles] = useState([]);
  const { signOut, user } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    fetchUserProfiles();
  }, []);

  async function fetchUserProfiles() {
    try {
      const response = await client.models.UserProfiles.list(); // Example API call
      setUserProfiles(response.data);
    } catch (err) {
      console.error("Error fetching user profiles:", err);
    }
  }

  return (
    <View className="App">
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Heading level={3}>Welcome, {user?.username}</Heading>
        <Divider />
        <Button onClick={signOut}>Sign out</Button>

        <Grid
          templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          gap="1rem"
          marginTop="2rem"
        >
          {userProfiles.map((profile) => (
            <View key={profile.id} border="1px solid #ccc" padding="1rem" borderRadius="8px">
              <Heading level={5}>{profile.name}</Heading>
              <p>{profile.email}</p>
            </View>
          ))}
        </Grid>
      </Flex>
    </View>
  );
}


/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          My favorite restaurant is Coconut Downtown
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
