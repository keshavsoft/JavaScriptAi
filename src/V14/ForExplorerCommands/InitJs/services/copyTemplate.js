// src/.../services/copyTemplate.js
import fs from 'fs';
import { fileURLToPath } from 'url';
import * as vscode from 'vscode';

export function copyTemplate({ targetPath }) {
    const templatePath = fileURLToPath(new URL('../templates/Base', import.meta.url));

    if (!fs.existsSync(templatePath)) {
        vscode.window.showErrorMessage('❌ Server error. Please try again later.');
        throw new Error('Template not found');
    }

    fs.cpSync(templatePath, targetPath, { recursive: true });
};