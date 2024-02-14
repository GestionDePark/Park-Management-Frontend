import fetcher from '@/api/fetcher.ts';
import getAuthorization from '@/utils/getAuthorization.ts';
import { JobData } from '@/api/types/Job.type.ts';

class JobProvider {
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

export default JobProvider;
