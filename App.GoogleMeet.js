
//url https://meet.google.com/axv-qnyb-kgb

import React, { useState, useEffect } from 'react'; // Import React and hooks
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const [transcript, setTranscript] = useState(''); // State for the transcript
  const [isInCall, setIsInCall] = useState(false); // State to track if in call

  // Function to simulate joining a Google Meet
  const joinCall = () => {
    Alert.alert("Joining Call", "You have joined the Google Meet!");
    setIsInCall(true); // Set in call state to true
  };

  // Function to simulate ending a Google Meet
  const endCall = () => {
    Alert.alert("Ending Call", "You have left the Google Meet.");
    setIsInCall(false); // Set in call state to false
    setTranscript(''); // Clear the transcript when ending the call
  };

  // Simulate transcript updates
  useEffect(() => {
    let interval;
    if (isInCall) {
      interval = setInterval(() => {
        setTranscript(prev => `${prev}\nNew transcript line...`); // Update transcript
      }, 5000); // Update every 5 seconds
    }
    return () => clearInterval(interval); // Clear interval on unmount
  }, [isInCall]);

  // Function to toggle mute/unmute
  const toggleMute = () => {
    console.log("Toggling mute...");
    // Implement mute/unmute functionality here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Google Meet Integration</Text>
      
      {/* WebView to display the Google Meet link only if in call */}
      {isInCall && (
        <View style={styles.videoContainer}>
          <WebView
            source={{ uri: 'https://meet.google.com/ftt-umux-trb' }} // Your Google Meet link
            style={styles.webView}
          />
        </View>
      )}
      
      {/* Button to join the call */}
      <Button title="Join Call" onPress={joinCall} />
      
      {/* Mute/Unmute button */}
      <Button title="Mute/Unmute" onPress={toggleMute} />
      
      {/* Button to end the call */}
      <Button title="End Call" onPress={endCall} />
      
      {/* Display the transcript */}
      <Text style={styles.transcript}>
        {transcript || 'Transcript will appear here...'} {/* Show updated transcript */}
      </Text>
    </View>
  );
};

// Styling for the components
const styles = StyleSheet.create({
  container: {
    flex: 1, // Allow the container to take full height
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#f0f0f0', // Light gray background
    padding: 16,
  },
  title: {
    fontSize: 24, // Title font size
    marginBottom: 20, // Space below the title
  },
  videoContainer: {
    width: '100%', // Full width
    height: 400, // Fixed height for the video area
    backgroundColor: '#000', // Black background for video area
    marginBottom: 20, // Space below the video area
  },
  webView: {
    flex: 1, // Fill the video container
  },
  transcript: {
    marginTop: 20, // Space above the transcript
    fontSize: 16, // Transcript font size
    color: 'gray', // Transcript color
  },
});

export default App;

