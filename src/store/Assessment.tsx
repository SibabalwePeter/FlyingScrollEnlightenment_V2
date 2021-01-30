import { Action, Reducer } from 'redux';

// Assessment State
export class AssessmentState {
    Realistic!: number;
    Investigative!: number;
    Artistic!: number;
    Social!: number;
    Enterprising!: number;
    Conventional!: number;
}


// ActionTypes
export interface IncrementRealisticAction { type: 'INCREMENT_Realistic' }
export interface IncrementInvestigativeAction { type: 'INCREMENT_Investigative' }
export interface IncrementArtisticAction { type: 'INCREMENT_Artistic' }
export interface IncrementSocialAction { type: 'INCREMENT_Social' }
export interface IncrementEnterprisingAction { type: 'INCREMENT_Enterprising' }
export interface IncrementConventionalAction { type: 'INCREMENT_Conventional' }

// Enforce type to be know
export type KnownAction = IncrementRealisticAction | IncrementInvestigativeAction | IncrementArtisticAction | IncrementSocialAction | IncrementEnterprisingAction | IncrementConventionalAction;

// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
export const actionCreators = {
    incrementRealistic: () => ({ type: 'INCREMENT_Realistic' } as IncrementRealisticAction),
    incrementInvestigative: () => ({ type: 'INCREMENT_Investigative' } as IncrementInvestigativeAction),
    incrementArtistic: () => ({ type: 'INCREMENT_Artistic' } as IncrementArtisticAction),
    incrementSocial: () => ({ type: 'INCREMENT_Social' } as IncrementSocialAction),
    incrementEnterprising: () => ({ type: 'INCREMENT_Enterprising' } as IncrementEnterprisingAction),
    incrementConventional: () => ({ type: 'INCREMENT_Conventional' } as IncrementConventionalAction),

};

// REDUCER - For a given state and action, returns the new state.

export const reducer: Reducer<AssessmentState> = (state: AssessmentState | undefined, incomingAction: Action): AssessmentState => {
    if (state === undefined) {
        return { Realistic: 0, Investigative: 0, Artistic: 0, Social: 0, Enterprising: 0, Conventional:0};
        }

    const action = incomingAction as KnownAction;
    console.log("Reducer:" + action)
    switch (action.type) {
        case 'INCREMENT_Realistic':
            console.log(action);
            return { Realistic: state.Realistic + 1, Investigative: state.Investigative, Artistic: state.Artistic, Social: state.Social, Enterprising: state.Enterprising, Conventional: state.Conventional };
        case 'INCREMENT_Investigative':
            return { Realistic: state.Realistic + 1, Investigative: state.Investigative, Artistic: state.Artistic, Social: state.Social, Enterprising: state.Enterprising, Conventional: state.Conventional}; 
        case 'INCREMENT_Artistic':
            return { Realistic: state.Realistic + 1, Investigative: state.Investigative, Artistic: state.Artistic, Social: state.Social, Enterprising: state.Enterprising, Conventional: state.Conventional };
        case 'INCREMENT_Social':
            return { Realistic: state.Realistic + 1, Investigative: state.Investigative, Artistic: state.Artistic, Social: state.Social, Enterprising: state.Enterprising, Conventional: state.Conventional};
        case 'INCREMENT_Enterprising':
            return { Realistic: state.Realistic + 1, Investigative: state.Investigative, Artistic: state.Artistic, Social: state.Social, Enterprising: state.Enterprising, Conventional: state.Conventional};
        case 'INCREMENT_Conventional':
            return { Realistic: state.Realistic + 1, Investigative: state.Investigative, Artistic: state.Artistic, Social: state.Social, Enterprising: state.Enterprising, Conventional: state.Conventional };
        default:
            return state;
    }
};