import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <BackgroundImageContainer/>
        <ContentContainer/>

      </div>
    </>
  )
}

function BackgroundImageContainer() {
  return (
    <div className="backgroundImageContainer">
    </div>
  )
}


function ContentContainer() {
  return (
    <div className="contentContainer">
      <div className="labelContainer">
        {/* <p className="labelText">Book Now</p> */}
        <p className="labelText">Tulsi has zombie deer disease<br/> and is not witty</p>
      </div>
      {/* <div className="timeContainer">
        <div className="dateContainer">
          <p className="dateText">Thursday Feb 7 2025</p>
        </div>
        <div className="slotContainer">
          <p className="availableSlotsText">Available Slots</p>
          <div className="slot">
            <p className="slotText">10:00 am - 11:00 am</p>
          </div>
          <div className="slot">
            <p className="slotText">11:00 am - 12:00 am</p>
          </div>
          <div className="slot">
            <p className="slotText">1:00 am - 2:00 am</p>
          </div>
          <div className="slot">
            <p className="slotText">2:00 am - 3:00 am</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default App
