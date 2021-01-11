// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { ClassBuilder } from '../ClassBuilder';


function splitLines(t:string) { return t.split(/\r\n|\r|\n/); }


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log(
        'Congratulations, your extension "nestjsscaffolder" is now active!'
    );

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand(
        'nestjsscaffolder.helloWorld',
        () => {
            var editor = vscode.window.activeTextEditor;
            const selection = editor!.selection;

            if (selection.isEmpty) {
                vscode.window.showInformationMessage('Nothing Selected');
            } else {
                vscode.window.showInformationMessage('Success');

                var docText = editor?.document.getText();
                var textLines = docText?.split(/\r?\n/);
                
                let classDef = new ClassBuilder(); 
                if (textLines) {
                    textLines.forEach((line:string) => { 
                        if(line.toLowerCase().indexOf('export') > -1 && line.toLowerCase().indexOf('class') > -1) {
                            let words = line.toLowerCase().split(" ");
                            let classIndex = words.indexOf("class") + 1;
                            classDef.className = line.split(" ")[classIndex];
                        }
                        

                    
                    
                    
                    
                    });

                }
            }

            // const wsedit = new vscode.WorkspaceEdit();
            // const wsPath = vscode.workspace.rootPath; // gets the path of the first workspace folder
            // const filePath = vscode.Uri.file(wsPath + '/hello/world.md');
            // vscode.window.showInformationMessage(filePath.toString());
            // wsedit.createFile(filePath, { ignoreIfExists: true });
            // vscode.workspace.applyEdit(wsedit);
            // vscode.window.showInformationMessage(
            //     'Created a new file: hello/world.md'
            // );
        }
    );

    let disposableCreateModule;

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
