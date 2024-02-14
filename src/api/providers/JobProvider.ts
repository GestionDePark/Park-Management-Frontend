import fetcher from '@/api/fetcher.ts';
import { JobData } from '@/api/types.ts';
import getAuthorization from '@/utils/getAuthorization.ts';

class Job {
  public static async findAll(): Promise<JobData[]> {
    return (await fetcher.get('/job', { headers: getAuthorization() })).data;
  }

  public static async findById(uuid: string): Promise<JobData> {
    return (
      await fetcher.get(`/job/${encodeURIComponent(uuid)}`, {
        headers: getAuthorization(),
      })
    ).data;
  }
}

export default Job;
