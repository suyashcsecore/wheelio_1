import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'

const AddCar = () => {

  const {axios, currency} = useAppContext()

  // const currency = import.meta.env.VITE_CURRENCY

  const [image, setImage] = useState(null)
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: 0,
    pricePerDay: 0,
    category: '',
    transmission: '',
    fuel_type: '',
    seating_capacity: 0,
    location: '',
    description: ''
  })

  const [isLoading, setIsLoading] = useState(false) // whenever we submit the form it will become true

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if(isLoading) return null // it is already adding the data that's why it is in the loading state
    setIsLoading(true)
    try {
      const formData = new FormData()
      formData.append('image', image)
      formData.append('carData', JSON.stringify(car))

      const {data} = await axios.post('/api/owner/add-car', formData)

      if(data.success) {
        toast.success(data.message)
        setImage(null)
        setCar({
          brand: '',
          model: '',
          year: 0,
          pricePerDay: 0,
          category: '',
          transmission: '',
          fuel_type: '',
          seating_capacity: 0,
          location: '',
          description: ''
        })
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      <Title title='Add New Car' subTitle='Provide all required details to list a new car for booking, including pricing, availability, and vehicle specifications.'/>

      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>

        {/* Car Image */}
        <div className='flex items-center gap-2 w-full'>
          <label htmlFor="car-image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-14 rounded cursor-pointer'/>
            <input type="file" id='car-image' accept='image/*' hidden onChange={(e) => setImage(e.target.files[0])}/>
          </label>
          <p className='text-sm text-gray-500'>Upload a picture of your car</p>
        </div>

        {/* Car Brand and Model */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Brand</label>
            <input type="text" placeholder='e.g. BMW, Mercedes, Audi...' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.brand} onChange={(e) => setCar({...car, brand: e.target.value})}/>
          </div>

          <div className='flex flex-col w-full'>
            <label>Model</label>
            <input type="text" placeholder='e.g. M5, E-Class, M4...' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.model} onChange={(e) => setCar({...car, model: e.target.value})}/>
          </div>
          
        </div>

        {/* Car Year, Price, Category */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Year</label>
            <input type="number" placeholder='2026' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.year} onChange={(e) => setCar({...car, year: e.target.value})}/>
          </div>

          <div className='flex flex-col w-full'>
            <label>Daily Price ({currency})</label>
            <input type="number" placeholder='101' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.pricePerDay} onChange={(e) => setCar({...car, pricePerDay: e.target.value})}/>
          </div>

          <div className='flex flex-col w-full'>
            <label>Category</label>
            <select onChange={(e) => setCar({...car, category: e.target.value})} value={car.category} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
              <option value="">Select a category</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="MUV">MUV</option>
              <option value="Luxury">Luxury</option>
              <option value="Sports">Sports</option>
              <option value="Electric">Electric</option>
              <option value="Convertible">Convertible</option>
            </select>
          </div>


        </div>

        {/* Car Transmission, Fuel Type, Seating Capacity */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Transmission</label>
            <select onChange={(e) => setCar({...car, transmission: e.target.value})} value={car.transmission} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
              <option value="">Select a transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>

          <div className='flex flex-col w-full'>
            <label>Fuel Type</label>
            <select onChange={(e) => setCar({...car, fuel_type: e.target.value})} value={car.fuel_type} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
              <option value="">Select a fuel type</option>
              <option value="Gas">Gas</option>
              <option value="Diesel">Diesel</option>
              <option value="Petrol">Petrol</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className='flex flex-col w-full'>
            <label>Seating Capacity</label>
            <input type="number" placeholder='4' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.seating_capacity} onChange={(e) => setCar({...car, seating_capacity: e.target.value})}/>
          </div>
        </div>

        {/* Car Location */}
        <div className='flex flex-col w-full'>
          <div className='flex flex-col w-full'>
            <label>Location</label>
            <select onChange={(e) => setCar({...car, location: e.target.value})} value={car.location} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
              <option value="">Select a location</option>
              {/* <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Houston">Houston</option>
              <option value="Chicago">Chicago</option> */}
              <option value="Agra">Agra</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Ajmer">Ajmer</option>
              <option value="Aligarh">Aligarh</option>
              <option value="Allahabad">Allahabad</option>
              <option value="Amritsar">Amritsar</option>
              <option value="Aurangabad">Aurangabad</option>
              <option value="Bareilly">Bareilly</option>
              <option value="Belgaum">Belgaum</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Bhopal">Bhopal</option>
              <option value="Bhubaneswar">Bhubaneswar</option>
              <option value="Bikaner">Bikaner</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chennai">Chennai</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Cuttack">Cuttack</option>
              <option value="Dehradun">Dehradun</option>
              <option value="Delhi">Delhi</option>
              <option value="Dhanbad">Dhanbad</option>
              <option value="Faridabad">Faridabad</option>
              <option value="Ghaziabad">Ghaziabad</option>
              <option value="Goa">Goa</option>
              <option value="Gorakhpur">Gorakhpur</option>
              <option value="Guntur">Guntur</option>
              <option value="Gurugram">Gurugram</option>
              <option value="Guwahati">Guwahati</option>
              <option value="Gwalior">Gwalior</option>
              <option value="Hubli">Hubli</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Indore">Indore</option>
              <option value="Jabalpur">Jabalpur</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Jalandhar">Jalandhar</option>
              <option value="Jammu">Jammu</option>
              <option value="Jamshedpur">Jamshedpur</option>
              <option value="Jhansi">Jhansi</option>
              <option value="Jodhpur">Jodhpur</option>
              <option value="Kanpur">Kanpur</option>
              <option value="Kochi">Kochi</option>
              <option value="Kolhapur">Kolhapur</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Kota">Kota</option>
              <option value="Kozhikode">Kozhikode</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Ludhiana">Ludhiana</option>
              <option value="Madurai">Madurai</option>
              <option value="Mangalore">Mangalore</option>
              <option value="Meerut">Meerut</option>
              <option value="Moradabad">Moradabad</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Mysuru">Mysuru</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Nashik">Nashik</option>
              <option value="Noida">Noida</option>
              <option value="Patna">Patna</option>
              <option value="Prayagraj">Prayagraj</option>
              <option value="Pune">Pune</option>
              <option value="Raipur">Raipur</option>
              <option value="Rajkot">Rajkot</option>
              <option value="Ranchi">Ranchi</option>
              <option value="Rourkela">Rourkela</option>
              <option value="Salem">Salem</option>
              <option value="Siliguri">Siliguri</option>
              <option value="Srinagar">Srinagar</option>
              <option value="Surat">Surat</option>
              <option value="Thane">Thane</option>
              <option value="Tiruchirappalli">Tiruchirappalli</option>
              <option value="Tirupati">Tirupati</option>
              <option value="Udaipur">Udaipur</option>
              <option value="Vadodara">Vadodara</option>
              <option value="Varanasi">Varanasi</option>
              <option value="Vijayawada">Vijayawada</option>
              <option value="Visakhapatnam">Visakhapatnam</option>
              <option value="Warangal">Warangal</option>
            </select>
          </div>
        </div>

        {/* Car Description */}
        <div className='flex flex-col w-full'>
          <label>Description</label>
          <textarea rows={5} placeholder='e.g. A premium SUV offering a spacious cabin and powerful performance.' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.description} onChange={(e) => setCar({...car, description: e.target.value})}></textarea>
        </div>

        <motion.button whileHover={{scale: 1.1}} className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer'>
          <img src={assets.tick_icon} alt="" />
          {isLoading ? 'Listing...' : 'List Your Car'}
        </motion.button>

      </form>
    </div>
  )
}

export default AddCar