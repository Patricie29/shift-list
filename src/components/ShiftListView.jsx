import './ShiftListView.css';
import { BiEdit } from "react-icons/bi";

const shifts = [
    { name: 'a', time: '6:30 - 14:00', color: '#6bb6ff' },
    { name: 'b', time: '6:30 - 14:00', color: '#ff9f69' },
    { name: 'c', time: '6:30 - 14:00', color: '#00c070' },
    { name: 'd', time: '6:30 - 14:00', color: '#ff6872' },
    { name: 'e', time: '6:30 - 14:00', color: '#037cf1' },
    { name: 'f', time: '6:30 - 14:00', color: '#ce69fe' },
]


const ShiftListView = () => {

    return (
        <div className="shift-list">
            {
                shifts.map((shift) => (
                    <div key={shift.name} className='shift-card' style={{ borderLeftColor: shift.color }}>
                        <div className='shift-details'>
                            <div className='shift-time'>{shift.time}</div>
                            <div className="shift-name">Shift {shift.name}</div>
                        </div>
                        <div>
                            <BiEdit size={18} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


export default ShiftListView