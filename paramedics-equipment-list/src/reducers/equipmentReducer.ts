import fullEquipmentList from '../data/db';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  EquipmentListInitialState,
  ShiftItem,
  EquipmentItem,
} from '../types/types';

const initialState: EquipmentListInitialState = {
  requiredEquipmentList: fullEquipmentList,
  shiftList: [],
};
export const equipmentSlice = createSlice({
  name: 'equipment',
  initialState,
  reducers: {
    reset: state => {
      return initialState;
    },
    addItem: (state, { payload }: PayloadAction<EquipmentItem>) => {
      const newItem = {
        name: payload.name,
        fullQuantity: payload.fullQuantity,
        deleteAble: true,
      };
      return {
        ...state,
        requiredEquipmentList: [...state.requiredEquipmentList, newItem],
      };
    },
    deleteItem: (state, { payload }: PayloadAction<{ index: number }>) => {
      const filteredArr = [
        ...state.requiredEquipmentList.filter(
          (item, i: number) => i !== payload.index
        ),
      ];
      return {
        ...state,
        requiredEquipmentList: filteredArr,
      };
    },
    submitEquipmentForm: (
      state,
      { payload }: PayloadAction<{ data: ShiftItem[] }>
    ) => {
      return { ...state, shiftList: payload.data };
    },
  },
});

export const { reset, addItem, deleteItem, submitEquipmentForm } =
  equipmentSlice.actions;

export default equipmentSlice.reducer;
