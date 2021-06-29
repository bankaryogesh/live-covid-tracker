import React, { useEffect, useState } from 'react'
import './covid.css';


const Covid = () => {

  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch('https://api.covid19india.org/data.json');
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);

    } catch (err) {
      console.log(err);
    }

  }
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>

      <section >
        <div className="about_intro">
          <div className="about_us">
            <div className="header_t">
              <h2>Live Covid-19 Tracker</h2>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div className='col-md-4'>
              <div className="box-wrap1">
                <h5>COUNTRY INDIA</h5>
                <h3>{data.recovered}</h3>
                <h6>TOTAL ACTIVE</h6>
                <h3>{data.active}</h3>
                <h6> TOTAL CONFIRMED</h6>
                <h3>{data.confirmed}</h3>
                <h6> TOTAL DEATHS</h6>
                <h3>{data.deaths}</h3>

              </div>
            </div>

            <div class="col-md-8">
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <div className="box-wrap2">
                      <h2>{data.migratedother}</h2>
                      <h5>TOTAL MIGRATED OTHER</h5>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div className="box-wrap3">
                      <h3>{data.recovered}</h3>
                      <h5>TOTAL RECOVERED CASES</h5>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div className="box-wrap4">
                      <h3>{data.confirmed}</h3>
                      <h5>TOTAL CONFIRMED</h5>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div className="box-wrap5">
                      <h3>{data.deaths}</h3>
                      <h5>TOTAL NO. OF DEATHS</h5>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div className="box-wrap6">
                      <h3>{data.active}</h3>
                      <h5>TOTAL ACTIVE CASES</h5>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div className="box-wrap7">
                      <h4>{data.lastupdatedtime}</h4>
                      <h5>LAST UPDATE</h5>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Covid