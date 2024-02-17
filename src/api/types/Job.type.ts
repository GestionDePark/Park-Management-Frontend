export interface JobData {
  id: string;
  name: string;
}

export interface JobInput extends Omit<JobData, 'id'> {}
