/***** WORKER REDUCER *****/
export interface WorkerInitialState {
  fullName: string;
  date: Date | string;
  ambulanceNumber: number;
  shift: string;
  logged: boolean;
}

/***** EQUIPMENT REDUCER *****/
export interface EquipmentItem {
  name: string;
  fullQuantity: number;
  deleteAble?: boolean;
}

export interface ShiftItem {
  name: string;
  missing: number;
}

export interface EquipmentListInitialState {
  requiredEquipmentList: EquipmentItem[];
  shiftList: ShiftItem[];
}

/***** PROPS *****/
export interface ItemRowProps {
  item: EquipmentItem;
  i: number;
  setMissingItems: React.Dispatch<React.SetStateAction<ShiftItem[]>>;
}

export type CheckIsLoginFunc = (loggedAnswer: boolean) => void;
