# Memory Copilot

A system-wide AI assistant that instantly surfaces relevant content from your personal knowledge base while typing anywhere on your computer.

## Features

- 🌐 System-wide integration (⌘+M shortcut)
- ⚡️ Real-time context-aware suggestions
- 🔒 Local-first architecture for privacy
- 📝 Smart formatting based on application context
- 🔄 Cross-application support

## Architecture

- **Desktop App**: Tauri (Rust + React)
- **Storage**: Local SQLite + Vector DB
- **Cloud**: Lightweight sync service
- **Browser Extension**: Web integration

## Project Structure

```
/apps
  /desktop        # Main Tauri application
  /cloud-sync    # Sync service
  /web-dashboard # User settings & management
/packages
  /core          # Shared logic
  /ui            # Component library
  /indexer       # Content processing
```

## Development

### Prerequisites

- Node.js 18+
- Rust toolchain
- SQLite

### Setup

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start development server: `pnpm dev`

## License

MIT
