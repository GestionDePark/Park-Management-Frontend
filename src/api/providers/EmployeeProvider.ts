import fetcher from '@/api/fetcher.ts';
import getAuthorization from '@/utils/getAuthorization.ts';
import { EmployeeData } from '@/api/types/Employee.type.ts';

class EmployeeProvider {
  public static async delete(id: string): Promise<EmployeeData> {
    return (
      await fetcher.delete(`/employee/${encodeURIComponent(id)}`, {
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
