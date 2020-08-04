import {
    ADD_TOOL,
    DELETE_TOOL,
    DISPLAY_ERROR,
    GET_RESULTS,
    GET_SORTED_RESULTS,
    GET_TOOL,
    GET_TOOLS,
    UPDATE_TOOL,
} from '../actions/types';

import { defaultSorting } from '../utils/sort';

const INITIAL_STATE = {
    error: '',
    tool: {},
    tools: [],
    results: [],
};

const tools = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TOOL:
            return {
                ...state,
                error: '',
                tool: action.payload,
                tools: [...state.tools, action.payload],
            };
        case GET_TOOL:
            return {
                ...state,
                error: '',
                tool: action.payload,
            };
        case GET_RESULTS:
            return {
                ...state,
                error: '',
                results: defaultSorting(action.payload),
            };
        case GET_TOOLS:
            return {
                ...state,
                error: '',
                tools: action.payload,
                results: defaultSorting(action.payload),
            };
        case GET_SORTED_RESULTS:
            return {
                ...state,
                error: '',
                results: [...action.payload],
            };
        case DISPLAY_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case UPDATE_TOOL:
            return {
                ...state,
                error: '',
                tool: action.payload,
            };
        case DELETE_TOOL:
            return {
                ...state,
                error: '',
                tools: action.payload,
                results: defaultSorting(action.payload),
            };
        default:
            return state;
    };
};

export default tools;
