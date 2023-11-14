import {resolve} from 'node:path';
import {readdir} from 'node:fs/promises';

/**
 *
 * @returns {import('rollup').Plugin}
 */
export function getFilesOnDisk() {
	return {
		name: 'getFilesOnDisk',
		writeBundle: {
			sequential: true,
			order: 'post',
			async handler({dir}) {
				if (dir) {
					this.debug(`[getFilesOnDisk] writeBundle dir=${dir}`)
					const topLevelFiles = await readdir(resolve(dir));
					console.log(topLevelFiles);
				} else {
					this.debug(`[getFilesOnDisk] no dir`)
				}
			}
		}
	};
}