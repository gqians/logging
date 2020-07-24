import { dealLog } from './logger/loggerMemory';
const loggerPlugin = {
	name: 'logger',
	version: '1.0.0',
	register: async function (server, options) {
		const ServerProto = Object.getPrototypeOf(server);
		const log = dealLog(options);
		Object.defineProperty(ServerProto, 'log', {
			get() {
				return log;
			},
		});
		server.log.debug({ path: 'logger/index.js' }, '插件logger启动');
	},
};

export { dealLog, loggerPlugin };
