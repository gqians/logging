import bunyan from 'bunyan';
import log from './loggerConsole';
import options from '../config';
const makeLogger = (options) => {
	return bunyan.createLogger({
		name: options.logger.name,
		time: new Date().toLocaleString(),
		serializers: {
			req: bunyan.stdSerializers.req,
			res: bunyan.stdSerializers.res,
			err: bunyan.stdSerializers.err,
		},
		streams: [
			{
				// stream: process.stdout
				type: 'rotating-file',
				level: 'info',
				path: options.logger.pathInfo,
				period: options.logger.period, // daily rotation
				count: options.logger.count, // keep 7 back copies
			},
			{
				type: 'rotating-file',
				level: 'error',
				path: options.logger.pathError,
				period: options.logger.period, // daily rotation
				count: options.logger.count, // keep 7 back copies
			},
		],
	});
};
const dealLog = (config = options) => {
	const logger = makeLogger(config);
	return {
		debug: (infoObj, msg) => {
			log.debug(msg, infoObj);
		},
		error: (infoObj, msg) => {
			logger.error(infoObj, msg);
			log.error(msg, infoObj);
		},
		info: (infoObj, msg) => {
			logger.info(infoObj, msg);
			log.info(msg, infoObj);
		},
	};
};
export { dealLog };
