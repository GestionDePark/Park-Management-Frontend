import fetcher from '@/api/fetcher.ts';

class Employee {
  public static async delete(id: string, adminToken: string) {
    return (
      await fetcher.delete(`/employee/${encodeURIComponent(id)}`, {
        headers: { Authorization: 'Bearer ' + adminToken },
      })
    ).data;
  }
}

export default Employee;
