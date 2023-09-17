import ShiftCard from './ShiftCard';
import './ShiftListView.css';

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
                shifts.map((shift) => {
                    const { name, time, color } = shift
                    return <ShiftCard name={name} time={time} color={color} />
                })
            }
        </div>
    )
}


export default ShiftListView