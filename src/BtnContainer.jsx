let BtnContainer = ({ jobs, setCurrentItem, currentItem }) => {


    return (


        <div className="text-center flex justify-evenly items-center flex-col">
            {
                jobs.map((job, index) => {
                    return <button className="bg-blue-600 rounded py-1 my-4 text-2xl text-white hover:bg-blue-800 w-40" onClick={() => { setCurrentItem(index) }} key={job.id}>{job.company}</button>
                })
            }

        </div>



    )
}


export default BtnContainer;