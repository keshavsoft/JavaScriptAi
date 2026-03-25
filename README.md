# JavaScriptAI VS Code Extension

## Overview

**JavaScriptAI** is a Visual Studio Code extension developed by **KeshavSoft** that helps automate JavaScript setup, event listener creation, and business logic injection directly from the Explorer context menu.

* Version: 1.2.7
* Engine: VS Code ^1.109.0
* Module Type: ES Modules
* Supports untrusted workspaces

## Features

* Initialize JavaScript structure in HTML projects
* Automatically add event listeners
* Inject business logic using user input
* Context menu integration for quick access
* Modular orchestration-based architecture

## Commands

| Command                | Title                 | Description                      |
| ---------------------- | --------------------- | -------------------------------- |
| extension.build        | Build                 | Available on folders             |
| extension.initJs       | Initiate JS           | Initializes JavaScript setup     |
| extension.addListeners | Initiate addListeners | Adds event listeners             |
| extension.addBusiness  | Initiate addBusiness  | Adds business logic with HTML ID |

## Context Menu Integration

Commands appear in Explorer based on conditions:

* On folders:

  * Build
* On `.html` files:

  * Initiate JS
  * Initiate addListeners
  * Initiate addBusiness

## Project Structure

```
src/
 └── V9/
     ├── InitJs/
     ├── AddListeners/
     └── AddBusiness/
```

## How It Works

* Commands are registered using `vscode.commands.registerCommand`
* Each command triggers a specific orchestration module
* Shared parameter: `context.extensionPath`
* `addBusiness` collects user input via input box (HTML ID)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/keshavsoft/keshavai.git
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the extension:

   * Press `F5` in VS Code

## Usage

1. Open a project in VS Code
2. Right-click on:

   * Folder → Build
   * HTML file → Select desired command
3. Follow prompts if required (e.g., HTML ID)

## Scripts

* `npm run lint` → Run ESLint
* `npm test` → Run VS Code extension tests

## Development Stack

* JavaScript (ES Modules)
* VS Code Extension API
* ESLint for linting
* PostCSS + Tailwind CLI (dev dependencies)

## Activation

* No explicit activation events
* Activated when commands are invoked

## Deactivation

The extension exposes a `deactivate` function for cleanup.

## Future Improvements

* Add error handling
* Improve logging and debugging
* Add UI feedback (notifications)
* Expand orchestration modules

## Repository

[https://github.com/keshavsoft/keshavai.git](https://github.com/keshavsoft/keshavai.git)

## License

Refer to `license.txt` for details.
