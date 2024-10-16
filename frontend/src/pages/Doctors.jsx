import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const { speciality } = useParams()
  const [filterDoc,setFilterDoc] =useState([])
  const navigate = useNavigate()
  
  const{doctors} = useContext(AppContext)


  const applyFilter = () =>{
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
     applyFilter()
  },doctors,speciality)
  
  return (
   <div>
    <div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
             filterDoc.map((items,index)=>(
              <div onClick={()=>navigate(`/appointment/${items._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                  <img className='bg-blue-50' src={items.image} alt="" />
                  <div className='p-4'>
                      <div className='flex  items-center gap-2 text-sm text-center text-green-500'>
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                      </div>
                      <p className='text-gray-900 text-lg font-medium'>{items.name}</p>
                      <p className='text-gray-600 text-sm'>{items.speciality}</p>
                  </div>
              </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors
