import React, { useEffect, useState } from 'react'
import Edit from './Edit'
import { deleteMovieApi, getMoviesApi } from '../Services/allApis'

function List({success}) {

    const [movielist, setMovielist] = useState([])
    const [editRes, setEditRes]=useState([])


    useEffect(() => {
        getData()
    }, [success,editRes])//dependency list

    const getData = async () => {
        const result = await getMoviesApi()
        console.log(result)
        if (result.status === 200) {
            setMovielist(result.data)
        }
    }

    const deleteMovie=async(id)=>{
        const result=await deleteMovieApi(id)
        console.log(result)
        if(result.status===200){
            getData()
        }
        else{
            alert("Something went wrong !")
        }
    }

    return (
        <>
            {
                movielist.length > 0 ?
                    <table className='table table-bordered border-5 shadow border-dark text-light'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Movie Name</th>
                                <th>Year</th>
                                <th>Movie Poster</th>
                                <th>Methods</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movielist.map(item => (
                                    <tr>
                                        <th>{item.id}</th>
                                        <th>{item.name}</th>
                                        <th>{item.year}</th>
                                        <td>
                                        <img src={item.image} style={{ height: '200px', width:"180px" }} alt="Description" />

                                        </td>
                                        <td>
                                            <Edit movie={item} edit={setEditRes}/>
                                            <button onClick={()=>{deleteMovie(item.id)}} className='btn btn-danger' >Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                            {/*  <tr>
                            <td>1</td>
                            <td>Pushpa 2</td>
                            <td>2024</td>
                            <td>
                            <img src="https://m.media-amazon.com/images/M/MV5BNWU1ZWFhNGQtZDhlZC00ZWFlLTlmNmEtN2VmYmZiN2Y5ZmQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="" height="200px" />
                            </td>
        
                            <td>
                            <Edit/>
                            <button className='btn btn-danger'>Delete</button>
                            </td>
                            </tr> */}
                        </tbody>
                    </table> :
                    <h3>No movies Found</h3>
            }

        </>
    )
}

export default List