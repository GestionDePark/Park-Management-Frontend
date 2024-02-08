interface EmployeeData {
  id: string;
  userId: string;
  jobId: string;
  salary: number;
  joinedAt: string;
}

interface JobData {
  id: string;
  name: string;
}

export { type EmployeeData, type JobData };
