import axios from "axios"
import {GET_ERRORS} from "./types";

export const createProject = {project, history} = async dispatch => {
    try {
        const res = await axios.post("http://localhost:8080/projects", project)
        history.push("/dashboard")
    } catch (e) {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        })
    }
}
