import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = `https://course-api.com/react-tabs-project`;

let Tabs = () => {

    let [isLoading, setIsLoading] = useState(true);
    let [jobs, setJobs] = useState([]);
    let [currentItem, setCurrentItem] = useState(0);


    let fetchJobs = async () => {
        let response = await fetch(url);
        let data = await response.json()
        setJobs(data);
        setIsLoading(false)

    }

    useEffect(() => {
        fetchJobs();
    }, [])


    if (isLoading) {
        return <h2 className="text-5xl text-center my-32">Loading...</h2>
    }


    return (
        <div className="container max-w-[1500px] mx-auto flex justify-center items-center">

            <section className="w-[90%] min-h-[70vh] h-auto bg-blue-300 mx-auto grid grid-cols-12 gap-4 place-items-center">
                <div className="lg:col-span-3 col-span-12 bg--200">
                    <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
                </div>
                <JobInfo jobs={jobs} currentItem={currentItem} />
            </section>


        </div>)



}


export default Tabs;