import './ShiftCard.css';
import { BiEdit } from "react-icons/bi";


const ShiftCard = ({ name, time, color }) => {

    return <div key={name} className='shift-card' style={{ borderLeftColor: color }}>
        <div className='shift-details'>
            <div className='shift-time'>{time}</div>
            <div className="shift-name">Shift {name}</div>
        </div>
        <div>
            <BiEdit size={18} />
        </div>
    </div>
}


export default ShiftCard