import { Action } from 'redux'
import { START } from './actions';
// initial state
//store structure in iappstate
export interface IAppState {
    title: string;
}

export const INITIAL_STATE: IAppState = {
    title: ""
};
export function rootReducer(state: IAppState, action: Action): IAppState {
    switch (action.type) {
        case START:
            return Object.assign({}, state, {
                title:action['payload']
            })
    }
    return state;
};
