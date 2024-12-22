#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::State;
use std::sync::Mutex;

// Application state
struct AppState {
    is_listening: Mutex<bool>,
}

// Toggle listener command
#[tauri::command]
fn toggle_listener(state: State<AppState>) -> Result<String, String> {
    let mut is_listening = state.is_listening.lock().map_err(|e| e.to_string())?;
    *is_listening = !*is_listening;
    
    Ok(format!("Listener {}", if *is_listening { "started" } else { "stopped" }))
}

fn main() {
    tauri::Builder::default()
        .manage(AppState {
            is_listening: Mutex::new(false),
        })
        .invoke_handler(tauri::generate_handler![toggle_listener])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
