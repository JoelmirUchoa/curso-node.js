import * as http from 'http';

import { Route } from './routes/routes';
import { HttpMethod } from './utils/http-methods';
import {getFilterEpisodes, getListEpisodes } from './controllers/podscasts-controlle';

export const app = async (req: http.IncomingMessage, res: http.ServerResponse ) => {
    const baseUrl = req.url?.split('?') [0];

    if (baseUrl === Route.LIST && req.method === HttpMethod.GET) {
      await getListEpisodes(req, res);
    }
    if (baseUrl === Route.EPISODE && req.method === HttpMethod.GET) {
      await getFilterEpisodes(req, res);
    }
  }