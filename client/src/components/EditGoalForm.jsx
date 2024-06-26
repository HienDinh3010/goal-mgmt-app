
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_GOAL } from "../queries/goalQueries";
import { UPDATE_GOAL } from "../mutations/goalMutations";

export default function EditGoalForm({ goal }) {
    const [name, setName] = useState(goal.name);
    const [description, setDescription] = useState(goal.description);
    const [status, setStatus] = useState(() => {
        switch(goal.status) {
            case "Not Started":
                return "new";
            case "In Progress":
                return "progress";
            case "Completed":
                return "completed";
            default:
                throw new Error(`Unknow status: ${goal.status}`);
        }
    });

    const [updateGoal] = useMutation(UPDATE_GOAL, {
        variables: { id: goal.id, name, description, status },
        refetchQueries: [{ query: GET_GOAL, variables: {id: goal.id} }],
    });

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name || !description || !status) {
            return alert("Please fill out all fields");
        }

        updateGoal(name, description, status);
    };

    return (
        <div className="mt-5">
            <h3>Update Goal Details</h3>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select 
                        className="form-select"
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="new">Not Started</option>
                        <option value="progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}