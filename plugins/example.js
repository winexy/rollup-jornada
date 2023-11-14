export function example() {
	return {
		name: 'my-example', // this name will show up in logs and errors
		resolveId(source) {
			this.debug(`[example] resolveId ${source}`);

			if (source === 'virtual-module') {
				// this signals that Rollup should not ask other plugins or check
				// the file system to find this id
				return source;
			}
			return null; // other ids should be handled as usually
		},
		load(id) {
			this.debug(`[example] load ${id}`);

			if (id === 'virtual-module') {
				// the source code for "virtual-module"
				return `
				import x from 'external';
				
				x();
				
				export default "This is virtual!"`;
			}

			return null; // other ids should be handled as usually
		}
	};
}