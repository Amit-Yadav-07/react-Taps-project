import Duties from "./Duties";

let JobInfo = ({ jobs, currentItem }) => {

    let { title, company, dates, order, duties } = jobs[currentItem];



    return (
        <div className="lg:col-span-9 col-span-12">
            {
                <div className="p-6 w-[100%] h-[100%]">
                    <h2 className="text-4xl mb-3">{title}</h2>
                    <span className="text-2xl">{company}</span>
                    <p className="text-stale-400 text-1xl mt-3">{dates}</p>
                    <Duties duties={duties} />
                </div>
            }
        </div>
    )
}


export default JobInfo;