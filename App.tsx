import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  console.log('App is running!'); // 실행 여부 확인

  return (
    <View style={styles.container}>
      <Text style={styles.text}>🚀 App is running! 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
  },
  text: {
    fontSize: 20,
    color: '#61dafb',
    fontWeight: 'bold',
  },
});

export default App;
