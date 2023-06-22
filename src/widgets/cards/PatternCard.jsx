import "./card.css";
import {Link} from "react-router-dom";

function PatternCard({title, description, imageSRC, link}) {
    return (
        <Link to={link} key={title}
            className="card bg-white rounded-lg shadow-lg px-4 transform hover:scale-105 transition-transform duration-300">
            <img src={imageSRC} className="rounded pb-2" style={{width: 280 + 'px', height: 200 + 'px',}} alt={title}/>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <p className="text-blue-500 hover:underline mt-4">بیشتر بخوانید</p>
        </Link>
    );
}

export default PatternCard;