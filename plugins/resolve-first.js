export function resolveFirst() {
	return {
		name: 'resolve-first',
		resolveId: {
			order: 'pre',
			handler(source) {
				this.debug(`[resolve-first] load ${source}`);

				if (source === 'external') {
					return {id: source, external: true};
				}
				return null;
			}
		}
	};
}