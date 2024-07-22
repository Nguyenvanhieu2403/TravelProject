import { EnvironmentSchema } from './environment-schema';

export const environment: EnvironmentSchema = <EnvironmentSchema>{
  apiDomain: {
    gateway: 'api-gateway',
    notificationHub: '',
    coreEndpoint: '',
    prodEndpoint: '',
    scheduleEndpoint: '',
    logEndpoint: '',
    storageEndpoint: '',
    devEndpoint: 'https://localhost:7000',
  },
};
