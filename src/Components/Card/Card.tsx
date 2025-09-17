import "./Card.scss";

interface CardProps {
    color?: "blue" | "red" | "green" | "purple";
    value?: number;
    position?: number;
    status?: "default" | "active" | "sorted";
}

function Card({ color, value, position, status }: CardProps) {
    return (
        <div
            className={`cardBackground--${color} ${status}`}
            style={{ order: position }}>
            <div className="card">
                <div className="number">
                    <p className="number__p">{value}</p>
                </div>
                <div className="position">
                    <p className="position__p">{position}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
