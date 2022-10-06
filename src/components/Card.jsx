import { useNavigate } from "react-router-dom";

export const Card = (props) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/detail/${props.id}`)}>
            <img src={props.img} alt="" />
            <p>{props.enTitle}</p>
            <p>{props.jpTitle}</p>
        </div>
    );
}