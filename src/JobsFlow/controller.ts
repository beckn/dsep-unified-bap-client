import { app } from '../index';
import { getJob } from './services';

export const jobSearchController = app.post('/search', async (req: Request, res: Response) => {
  const response = await getJob(req.body);
  res.send(response);
});