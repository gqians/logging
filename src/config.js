import path from 'path';
export default {
	logger: {
		name: 'automan',
		pathInfo: path.join(process.cwd(), './loggers/info.log'),
		pathError: path.join(process.cwd(), './loggers/error.log'),
		period: '1d',
		count: 7,
	},
};
