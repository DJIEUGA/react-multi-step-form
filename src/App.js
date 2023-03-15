import { useState } from 'react';
import './App.css';

const App = () => {

  // toggle next form
  const nextForm = (e) => {

    e.preventDefault()
    setShowForm(showForm + 1)
    console.log('next form ' + showForm)

  }

  const NextButton = () => {
    if (showForm === 4) {
      return (<button onClick={(e) => e.preventDefault()} style={{ display: '' }} className='next'>Confirm</button>);
    }
    else {
      return (<button onClick={nextForm} style={{ display: showForm === 4 ? '' : '' }} className='next'>Next Step</button>);
    }
  }

  // toggle previous form
  const prevForm = (e) => {

    e.preventDefault()
    setShowForm(showForm - 1)
    console.log('previous form ' + showForm)
  }


  const [showForm, setShowForm] = useState(1)
  // const [display, setDisplay] = useState('none')
  // const [btnContent, setBtnContent] = useState('Next step')
  return (
    <div className="container">
      <div className='side-block'>
        <ul className='nav-link'>
          <li>
            <div className='nav-link-numbers' style={{ backgroundColor: showForm === 1 ? 'blue' : '' }}>
              1
            </div>
            <div className='nav-link-text'>
              <p className='step'>STEP 1</p>
              <h3>YOUR INFO</h3>
            </div>
          </li>
          <li>
            <div className='nav-link-numbers' style={{ backgroundColor: showForm === 2 ? 'blue' : '' }}>
              2
            </div>
            <div className='nav-link-text'>
              <p className='step'>STEP 2</p>
              <h3>SELECT PLAN</h3>
            </div>
          </li>
          <li>
            <div className='nav-link-numbers' style={{ backgroundColor: showForm === 3 ? 'blue' : '' }}>
              3
            </div>
            <div className='nav-link-text'>
              <p className='step'>STEP 3</p>
              <h3>ADD-ONS</h3>
            </div>
          </li>
          <li>
            <div className='nav-link-numbers' style={{ backgroundColor: showForm === 4 ? 'blue' : '' }}>
              4
            </div>
            <div className='nav-link-text'>
              <p className='step'>STEP 4</p>
              <h3>SUMMARY</h3>
            </div>
          </li>
        </ul>
      </div>
      <div className='form-container'>
        <form >
          {/* step 1 */}
          <div className='form-body' style={{ display: showForm === 1 ? "" : "none" }}>
            <h1>Personal Info</h1>
            <p>Please provide your name, email and phone number.</p>
            <div className='col'>
              <div>
                <label for="name">
                  <span>name</span>
                  <input type="text" name="name" placeholder='e.g Djieuga Ryle' />
                </label>
              </div>
              <div>
                <label for="name">
                  <span>email address</span>
                  <input type="text" name="name" placeholder='e.g. johnsteff@gmail.com' style={{marginRight:'16px'}} />
                </label>
              </div>
              <div>
                <label for="name">
                  <span>phone number</span>
                  <input type="text" name="name" placeholder='e.g +237 6788298730' style={{marginRight:'16px'}} />
                </label>
              </div>
            </div>
          </div>
          {/* step 2 */}
          <div className='form-body' style={{ display: showForm === 2 ? "" : "none" }}>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly biling.</p>
            <div className='row'>
              <div className='p-5'>
                <i className='plan-icon'>Icon</i>
                <div>
                  <h3 className='plan-categorie'>Arcade</h3>
                  <p>$9/mo</p>
                </div>
              </div>
              <div className='p-5'>
                <i className='plan-icon'>Icon</i>
                <div>
                  <h3 className='plan-categorie'>Advanced</h3>
                  <p>$12/mo</p>
                </div>
              </div>
              <div className='p-5'>
                <i className='plan-icon'>Icon</i>
                <div>
                  <h3 className='plan-categorie'>Pro</h3>
                  <p>$15/mo</p>
                </div>
              </div>
            </div>
          </div>
          {/* step 3 */}
          <div className='form-body' style={{ display: showForm === 3 ? "" : "none"}}>
              <h1>
                Pick add-ons
              </h1>
              <p>Add-ons help enhance your gaming experience.</p>
              <div className='row'>
                <div>
                  <input className='form-check' type="checkbox" name="online_service" />
                  <div>
                    <h3>Online service</h3> <br/>
                    <h5>Access to multiplayer games</h5>
                    <p>+$1/mon</p>
                  </div>
                </div>
                <div>
                  <input className='form-check' type="checkbox" name="larger_storage" />
                  <div>
                    <h3>Larger storage</h3><br/>
                    <h5>Extra 1TB of cloud save</h5>
                    <p>+$2/mon</p>
                  </div>
                </div>
                <div>
                  <input className='form-check' type="checkbox" name="custom_profile" />
                  <div>
                    <h3>Customizable profile</h3><br/>
                    <h5>Custom theme on your profile</h5>
                    <p className='pt-1'>+$2/mon</p>
                  </div>
                </div>
              </div>
          </div>
          {/* step 4 */}
          <div className='form-body' style={{ display: showForm === 4 ? "" : "none" }}>
            <h1>
              Finishing Up
            </h1>
            <p>Double-check everything looks okay before confirming.</p>
            <div className='row outline border-radius'>
              <div className='p-3'>
                <h2>Arcade</h2>
                <a style={{ color: "white" }} href="javascript:void" >change</a>
                <div style={{marginTop:'-5px'}}>
                  <p>$9/mo</p>
                </div>
              </div>
              <div className='p-3'>
                <i>Online service</i>
                <div>
                  <p>$51/mo</p>
                </div>
              </div>
              <div className='p-3'>
                <i>Larger storage</i>
                <div>
                  <p>$52/mo</p>
                </div>
              </div>
            </div>
          </div>
          <div className='form-footer'>
            <button onClick={prevForm} style={{ display: showForm === 1 ? 'none' : '' }} className='prev'>Go Back</button>
            <NextButton />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
