import { nanoid } from "nanoid";

const initialState = {
  notesNumber: 0,
  notes: {
    1: [],
  },
};

export const notesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_NOTES": {
      const note = {
        ...action.payload,
        id: nanoid(),
        notesNumber: state.notesNumber + 1,
      };
      const totalPage = Object.keys(state.notes).length;
      const pageItemCount = state.notes[totalPage].length;
      if (pageItemCount !== 10) {
        const notes = {
          ...state.notes,
          [totalPage]: [...state.notes[totalPage], note],
        };
        return { ...state, notes, notesNumber: state.notesNumber + 1 };
      }
      const notes = { ...state.notes, [totalPage + 1]: [note] };
      return { ...state, notes };
    }
    default:
      return state;
  }
};
