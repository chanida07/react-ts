export interface contacts {
    firstName: string;
    lastName: string;
    phone: string;
}

export interface Action {
    type: "ADD_CONTACT":
    payload: Contact
}

export interface State {
    contacts: contacts [] ;
}

export const contactsReducer = (state: State, action: Action) =>{
    switch (action.type){
        case "ADD_CONTACT":
        payload: Contact
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        default:
            return state
    }
}