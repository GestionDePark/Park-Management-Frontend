export interface EmployeeData {
  id: string;
  userId: string;
  jobId: string;
  salary: number;
  joinedAt: string;
}

export interface EmployeeInput extends Omit<EmployeeData, 'id' | 'joinedAt'> {}
