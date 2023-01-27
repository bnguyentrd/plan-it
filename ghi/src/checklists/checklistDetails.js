import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChecklistForm from  './checklistForm';

// this will get all the checklists for a given event
const ChecklistDetail = () => {
    const { id } = useParams()

    const [ChecklistDetail, setChecklistDetail] = useState([{
        event_id: 0,
        id: 0,
        items: ['dummy'],
        status: [false]
    }])



    useEffect(() =>{
        const fetchChecklists = async () => {
            const url = `http://localhost:8001/event/checklists/${id}`;
            const res = await fetch(url);
            const data = await res.json();
            setChecklistDetail(data)
        }
        fetchChecklists()
    }, [id])




    const handleDelete = async (list_id) => {
       const response = await fetch(`http://localhost:8001/checklists/${list_id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    }




    class table_row {
        constructor(item, stat, list_id){
            this.item = item;
            this.stat = stat;
            this.list_id = list_id;
        }
    }


    function combine_elements(obj){
        if (obj === undefined){
            return null;
        }
        let table_obj = [];
        for(let n=0; n<obj.items.length; n++){
            let temp_obj = new table_row(obj.items[n], obj.status[n], obj.id)
            table_obj.push(temp_obj)
        }
        return table_obj;
    }



    let arr = [];
    for(let i=0; i<ChecklistDetail.length; i++){
        arr.push(combine_elements(ChecklistDetail[i]));
    }


    return (
        <div className = 'card-body'>
            <ChecklistForm id/>

            <div className = 'card-body'>
                {arr.map((list)=>{
                    return(
                        <div>
                            <table className='table is-striped'>
                                <thead>
                                    <tr>
                                        <th>item</th>
                                        <th>status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list.map(obj=>{
                                    return(
                                        <tr>
                                            <td>{obj.item}</td>
                                            <td>{obj.stat ? 'complete': 'in progress'}</td>
                                        </tr>
                                    )})}
                                </tbody>
                            </table>
                            <button className='btn btn-primary' onClick={() => handleDelete(list[0].list_id)} >
                                Delete Checklist
                            </button>
                            {/* <EditChecklistForm id={list[0].list_id}/> */}
                        </div>
                )})}

            </div>
        </div>
    )
}

export default () => {
    return(
        <ChecklistDetail />
    )
}
