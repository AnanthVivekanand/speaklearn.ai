import { Speaking } from '@/pages/api/speaking';
import { GoogleSpeechRecognition } from '../../pages/api/google-cloud-speech-webaudio';
import React, { useState } from 'react';

const AudioRecorder = ({ onRecord } : any) => {
const speechRecognition = new GoogleSpeechRecognition("AIzaSyCg2Q9oqiiNXdt09dEAPaIjtwD8mJZAGXk", "https://us-speech.googleapis.com");
  const startRecording = async () => {
    try {
        await speechRecognition.startListening();
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = async () => {
    let result;
    if (Speaking.language == "") {
        result = await speechRecognition.stopListening("en-US", ["ja-JP", "fr-FR", "es-ES", "de-DE", "ru-RU"]);
    } else {
        result = await speechRecognition.stopListening(Speaking.language);
    }
    console.log(result)
    if (result.results) {
        onRecord(result.results[0].alternatives[0].transcript)
    }
  };

  return (
    <div>
      <button onClick={startRecording} className="inline-flex p-3 mr-2 rounded bg-slate-200">
        Record
      </button>
      <button onClick={stopRecording} className="inline-flex p-3 rounded bg-slate-200">
        Stop
      </button>
    </div>
  );
};

export default AudioRecorder;