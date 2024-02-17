import fetcher from '@/api/fetcher';
import getAuthorization from '@/utils/getAuthorization';
import { JobData, JobInput } from '@/api/types/Job.type';

class JobProvider {
  public static async create(data: JobInput): Promise<JobData> {
    return (await fetcher.post('/job', data, { headers: getAuthorization() }))
      .data;
  }

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

  public static async update(id: string, data: JobInput): Promise<JobData> {
    return (
      await fetcher.patch(`/job/${encodeURIComponent(id)}`, data, {
        headers: getAuthorization(),
      })
    ).data;
  }

  public static async delete(id: string): Promise<JobData> {
    return (
      await fetcher.delete(`/job/${encodeURIComponent(id)}`, {
        headers: getAuthorization(),
      })
    ).data;
  }
}

export default JobProvider;
