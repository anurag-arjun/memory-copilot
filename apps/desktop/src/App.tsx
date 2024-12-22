import { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { register, unregister } from '@tauri-apps/api/globalShortcut';

function App() {
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    // Register global shortcut (⌘+M)
    register('CommandOrControl+M', async () => {
      try {
        // Toggle listening state
        setIsListening(prev => !prev);
        // Invoke Rust backend function
        const response = await invoke('toggle_listener');
        console.log('Toggle response:', response);
      } catch (error) {
        console.error('Failed to toggle listener:', error);
      }
    });

    // Cleanup on unmount
    return () => {
      unregister('CommandOrControl+M').catch(console.error);
    };
  }, []);

  return (
    <div className="container">
      <h1>Memory Copilot</h1>
      <div className="status">
        Status: {isListening ? 'Listening' : 'Idle'}
      </div>
    </div>
  );
}

export default App;
