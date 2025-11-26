/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Disposable } from '../../../../../../../base/common/lifecycle.js';
import type { ICommandLineRewriter, ICommandLineRewriterOptions } from './commandLineRewriter.js';

export class SandboxCommandLineRewriter extends Disposable implements ICommandLineRewriter {

	rewrite(options: ICommandLineRewriterOptions) {
		if (!options.sandboxed) {
			return undefined;
		} else {
			// For sandboxed terminals, we could add specific command line rewrites here if needed in future.
			return { 'rewritten': `srt "${options.commandLine}"`, 'reasoning': 'appending srt for sandboxed terminal' };
		}
	}
}
