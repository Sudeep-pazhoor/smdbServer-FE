import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateMovieApi } from '../Services/allApis';

function Edit({ movie,edit }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState({
        name: movie.name, year: movie.year, image: movie.image
    })

    const updateMovie = async () => {
        const { name, year, image } = data
        if (!name || !year || !image){
            alert("Enter Valid Inputs")
        }
        else{
            const result=await updateMovieApi(movie.id,data)
            console.log(result)
            if(result.status==200){
                alert("Movie details updated")
                handleClose()
                edit(result)
            }
            else{
                alert("Operation failed")
            }
        }
    }

    return (
        <>
            <button className='btn btn-warning me-5' onClick={handleShow}>Edit</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Movie Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input type="text" defaultValue={movie?.name} onChange={(e)=>{setData({...data,name:e.target.value})}} placeholder='Enter Movie Name' className='form-control mb-3' />
                        <input type="text" defaultValue={movie?.year} onChange={(e)=>{setData({...data,year:e.target.value})}} placeholder='Enter Movie Year' className='form-control mb-3' />
                        <input type="text" defaultValue={movie?.image} onChange={(e)=>{setData({...data,image:e.target.value})}} placeholder='Enter Movie Image' className='form-control mb-3' />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateMovie}>Update</Button>
                </Modal.Footer>
            </Modal >
        </>
    )
}

export default Edit