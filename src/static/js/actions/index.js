import axios from 'axios';

import {
    ADD_TOOL,
    DELETE_TOOL,
    DISPLAY_ERROR,
    GET_RESULTS,
    GET_SORTED_RESULTS,
    GET_TOOL,
    GET_TOOLS,
    UPDATE_TOOL,
} from './types';
import history from '../utils/history';
import { sortByFieldAndOrder } from '../utils/sort';

export const addTool = ({ newName, newQuantity }) => async (dispatch) => {
    try {
        const response = await axios.post('/api/tools', {newName, newQuantity});
        const { tool } = response.data;
        dispatch({
            type: ADD_TOOL,
            payload: tool,
        });
        history.push(`/tools/${tool.id}`);
    } catch (err) {
        dispatch({
            type: DISPLAY_ERROR,
            payload: `Your tool, ${newName} could not be created.`,
        });
    }
};

export const decrementTool = ({id}) => async (dispatch) => {
    try {
        await axios.patch(`/api/tools/${id}/decrement`);
    } catch (err) {
        dispatch({
            type: DISPLAY_ERROR,
            payload: `Your tool with ID: ${id} could not be decremented.`,
        });
    }
};

export const deleteTool = ({id}) => async (dispatch) => {
    try {
        const response = await axios.delete(`/api/tools/${id}`);
        const { tools } = response.data;
        dispatch({
            type: DELETE_TOOL,
            payload: tools,
        })
    } catch (err) {
        dispatch({
            type: DISPLAY_ERROR,
            payload: `Your tool with ID: ${id} could not be deleted.`,
        });
    }
};

export const getSortedResults = (field, order) => async (dispatch, getState) => {
    try {
        const { tools } = getState().tools;
        dispatch({
            type: GET_SORTED_RESULTS,
            payload: sortByFieldAndOrder(field, order, tools),
        });
    } catch (err) {
        dispatch({
            type: DISPLAY_ERROR,
            payload: `Tools could not be sorted by ${field} in ${order} order.`,
        });
    }
};

export const getTool = ({id}) => async (dispatch) => {
    try {
        const response = await axios.get(`/api/tools/${id}`);
        const { tool } = response.data;
        dispatch({
            type: GET_TOOL,
            payload: tool,
        });
    } catch (err) {
        dispatch({
            type: DISPLAY_ERROR,
            payload: `Your tool with ID: ${id} could not be retrieved.`,
        });
    }
};

export const getTools = () => async (dispatch) => {
    try {
        const response = await axios.get('/api/tools');
        const { tools } = response.data;
        dispatch({
            type: GET_TOOLS,
            payload: tools,
        });
    } catch (err) {
        dispatch({
            type: DISPLAY_ERROR,
            payload: `Your tools could not be retrieved.`,
        });
    }
};

export const incrementTool = ({id}) => async (dispatch, getState) => {
    try {
        await axios.patch(`/api/tools/${id}/increment`);
    } catch (err) {
        dispatch({
            type: DISPLAY_ERROR,
            payload: `Your tool with ID: ${id} could not be incremented.`,
        });
    }
};

export const searchToolsByName = (value) => async (dispatch, getState) => {
    try {
        const { tools } = getState().tools;
        const searchResults = tools.filter((tool) => {
            const regex = new RegExp(value, 'gi');
            return tool.name.match(regex);
        });
        dispatch({
            type: GET_RESULTS,
            payload: searchResults,
        });
    } catch (err) {
        dispatch({
            type: DISPLAY_ERROR,
            payload: `Searching by tool name is not working now.`,
        });
    }
};

export const updateTool = ({
    id,
    updatedName,
    updatedQuantity,
}) => async (dispatch) => {
    try {
        const response = await axios.patch(`/api/tools/${id}`, {
            updatedName,
            updatedQuantity,
        });
        const { tool } = response.data;
        dispatch({
            type: UPDATE_TOOL,
            payload: tool,
        });
        history.push(`/tools/${id}`);
    } catch (err) {
        dispatch({
            type: DISPLAY_ERROR,
            payload: `Your tool with ID: ${id} could not be updated.`,
        });
    }
};
