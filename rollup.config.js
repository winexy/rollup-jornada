import { example } from './example.js';

export default ({
	input: 'virtual-module', // resolved by our plugin
	plugins: [example()],
	output: [{
		file: 'dist/virtual-bundle.js',
		format: 'es'
	}]
});