import 'module-alias/register';

import http from 'http';

import { TypeormHelper } from './db/config';
import app from './app';

(async () => {
  await TypeormHelper.connect();

  const httpServer = http.createServer(app);

  httpServer.listen(3000, () => {
    console.log('Server running in port 3000');
  });
})();
