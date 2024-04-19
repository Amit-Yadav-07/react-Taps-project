import { v4 } from "uuid";
import { AiOutlineRight } from "react-icons/ai";


let Duties = ({ duties }) => {
    return (
        <div>{
            duties.map((duty) => {
                return <div className="flex items-center" key={v4()}>
                    <AiOutlineRight className="mr-4 text-3xl text-blue-800" /><p className="my-3 text-1xl">{duty}</p>
                </div>
            })
        }</div>
    )
}


export default Duties;