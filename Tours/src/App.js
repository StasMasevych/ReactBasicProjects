import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project'

function App() {

const [loading, setLoading] = useState(true)
const [tours, setTours] = useState([])

const removeTourHandler = (id) => {
  const newTours = tours.filter((tour) => tour.id !== id)
  console.log('hi!')
  setTours(newTours)
}

const fetchTours = async () => {
  console.log('hi from fetch!')
  setLoading(true);

  try {
    const response = await fetch(url);
    const tours = await response.json();
    /* console.log(tours) */
    setLoading(false);
    setTours(tours);

  } catch (error) {
    setLoading(false);
    console.log(error)
  } 
}

useEffect(() => {
  console.log('hi from useEffect!')
  fetchTours()
}, [])

  if (loading) {
    return (
      <main>
        <Loading/>
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button onClick={fetchTours} className="btn">Refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTourHandler}/>
    </main>
  )
}

export default App
