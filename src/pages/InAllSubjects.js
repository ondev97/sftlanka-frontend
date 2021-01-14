import React, {useEffect, useState} from 'react';
import rjs from '../img/rjs.jpg';
import child from '../img/child.png';
import { useDispatch } from 'react-redux';
import { activeAccount } from '../actions';
import { loadStDetails } from '../actions/stDetailsAction';
import '../assets/css/allsubjects.css';
import Axios from "axios";
import InTeacher from "../components/InTeacher";
import AllSubCard from "../components/AllSubCard";
import InfiniteScroll from "react-infinite-scroll-component";

export default function InAllSubjects() {
    const dispatch = useDispatch();
    const [allSubDetails, setallSubDetails] = useState([])
    const [nextPage, setnextPage] = useState(null);
    const [search, setsearch] = useState('');
    const [page, setpage] = useState(1);

    useEffect(() => {
        dispatch(activeAccount());
        dispatch(loadStDetails());
        Axios.get(`${process.env.REACT_APP_LMS_MAIN_URL}/course-api/indexsub/?page=${page}`).then(res=>{
                if(page > 1){
                    setallSubDetails([...allSubDetails,...res.data.results]);
                }
                else{
                    setallSubDetails([...res.data.results]);
                }
                setnextPage(res.data.next);
            }).catch(err=>{

            });
        window.scrollTo(0, 0);
      },[dispatch, page]);

    function next(){
        if(nextPage){
            setpage(page+1);
        }
    }

    return (
        <div className='maininde'>
            <div className="upper_cover">
                <h1>Subjects</h1>
            </div>
            <div className="popular_subjects">
                <div className="">
                    <InfiniteScroll dataLength={allSubDetails.length} next={next} hasMore={true} className="subject_area">
                        {
                            allSubDetails.map((tdata,index)=> <AllSubCard key={index} subject={tdata}/>)
                        }
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    )
}
