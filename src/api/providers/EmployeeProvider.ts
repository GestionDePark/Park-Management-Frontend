import fetcher from '@/api/fetcher';
import getAuthorization from '@/utils/getAuthorization';
import { EmployeeData, EmployeeInput } from '@/api/types/Employee.type';

class EmployeeProvider {
  public static async delete(id: string): Promise<EmployeeData> {
    return (
      await fetcher.delete(`/employee/${encodeURIComponent(id)}`, {
        headers: getAuthorization(),
      })
    ).data;
  }

  public static async create(data: EmployeeInput): Promise<EmployeeData> {
    return (
      await fetcher.post('/employee', data, { headers: getAuthorization() })
    ).data;
  }

  public static async findOne(id: string): Promise<EmployeeData> {
    return (await fetcher.get(`/employee/${encodeURIComponent(id)}`)).data;
  }

  public static async update(
    id: string,
    data: EmployeeInput,
  ): Promise<EmployeeData> {
    return (
      await fetcher.patch(`/employee/${encodeURIComponent(id)}`, data, {
        headers: getAuthorization(),
      })
    ).data;
  }

  public static async findAll(): Promise<EmployeeData[]> {
    return (
      await fetcher.get('/employee', {
        headers: getAuthorization(),
      })
    ).data;
  }
}

export default EmployeeProvider;
