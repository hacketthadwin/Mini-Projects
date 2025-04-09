import Card from './components/Card.jsx'

const App = () => {





  return (
    <>
    <div className='bg-black min-h-screen jusrify-center items-center flex flex-col'>
      <div className='text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>IS WEATHER WEATHERING?</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        <Card name="Raipur" />
        <Card name="Patna" />
        <Card name="Delhi" />
        <Card name="Mumbai" />
        <Card name="Jaipur" />
        <Card name="Kolkata" />
        <Card name="Pune" />
        <Card name="Calicut" />
        <Card name="Srinagar" />
        
      </div>
    </div>

    </>
  )
}

export default App