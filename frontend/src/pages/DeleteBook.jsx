import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useParams, useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'


const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();
  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`/books/${id}`)
    .then(() => {
      setLoading(false);
      enqueueSnackbar("Book deleted successfully!", {variant:'success'});
      navigate('/');
    }).catch((error) => {
      console.log(error);
      enqueueSnackbar("Error!", {variant:'error'});
      setLoading(false);
    });
  };
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? ( <Spinner /> ) : ('')}
      <div className='flex flex-col items-center border-2 border-shy-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are your sure you want to delete the book?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>
          Yes, Delete please.
        </button>
      </div>
    </div>
  )
}

export default DeleteBook
