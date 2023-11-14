import { defineConfig} from 'rollup'
import {example} from './plugins/example.js';
import {resolveFirst} from "./plugins/resolve-first.js";
import {getFilesOnDisk} from "./plugins/get-files-on-disk.js";

export default defineConfig({
	input: 'virtual-module', // resolved by our plugin
	plugins: [resolveFirst(), example(), getFilesOnDisk()],
	output: [{
		// dir: 'dist',
		file: 'dist/virtual-bundle.js',
		format: 'es'
	}]
});