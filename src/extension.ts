import { ExtensionContext, ProviderResult, SymbolInformation, SymbolKind, languages } from "vscode";

export function activate(context: ExtensionContext) {
	context.subscriptions.push(
		languages.registerDocumentSymbolProvider(
			{ scheme: "file" },
			{
				provideDocumentSymbols(document, _token): ProviderResult<SymbolInformation[]> {
					return [{
						name: document.fileName,
						containerName: document.fileName,
						kind: SymbolKind.File,
						location: {
							uri: document.uri,
							range: document.lineAt(0).range
						}
					}];
				},
			}
		)
	);
}

export function deactivate() { }
