export default function GoalCard({ goal }) {
    return (
        <div className="col-md-4">
            <div className="card mb-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{goal.name}</h5>
                        <a href={`/goals/${goal.id}`} className="btn btn-light">View</a>
                    </div>
                    <p className="small">Status: <strong>{goal.status}</strong></p>
                </div>
            </div>
        </div>
    )
}