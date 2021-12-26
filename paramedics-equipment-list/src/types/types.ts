export interface EquipmentList {
  name: string;
  fullQuantity: number;
}

/***** WORKER REDUCER *****/
export interface WorkerInitialState {
  fullName: string;
  date: Date | string;
  ambulanceNumber: number;
  shift: string;
  logged: boolean;
}
