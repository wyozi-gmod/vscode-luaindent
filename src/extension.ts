'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    vscode.languages.setLanguageConfiguration('lua', {
        indentationRules: {
            decreaseIndentPattern: /^\s*(elseif|else|end|until,?|\}\)?).*$/i,
            increaseIndentPattern: /\b(else|elseif|(local\s+)?function|then|do|repeat)\b((?!end).)*$|\{\s*$/i
        }
    });
}

export function deactivate() {
}