import React from 'react';
import Person from '../components/Person';

// Current
import Marcus from '../assets/MemberPhotos/Marcus.jpg';
import Alex from '../assets/MemberPhotos/Alex.png';

//Alumni
import Brian from '../assets/AlumniPhotos/Brian.png';
import Jinsung from '../assets/AlumniPhotos/Jinsung.png';
import Alayna from '../assets/AlumniPhotos/Alayna.png';
import Trevor from '../assets/AlumniPhotos/Trevor.png';
import Joanne from '../assets/AlumniPhotos/Joanne.png';
import Kevin from '../assets/AlumniPhotos/Kevin.png';
import Bruno from '../assets/AlumniPhotos/Bruno.png';

function Members() {
  return (
    <div className='officers'>
      <div className='container'>
        <h1 className='mt-5 p5-5' align='center'>
          Officers
        </h1>
        <div className='row pt-3 my-3'>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person
              img={Alex}
              name='Alex Kosan'
              role='President'
              linkedin='https://www.linkedin.com/in/akosan/'
            />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person name='Alfred Guo' role='Vice President' />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person name='Colton Reimers' role='Director of Content' />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person name='Max Calixto' role='Director of External Affairs' />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person
              img={Marcus}
              name='Marcus Leung'
              role='Web Developer | Officer of External Affairs'
              linkedin='https://www.linkedin.com/in/marcus-leung-582006252/'
            />
          </div>
        </div>
      </div>
      <div className='container'>
        <h1 className='' align='center'>
          Alumni
        </h1>
        <div className='row pt-3 my-3'>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person
              img={Brian}
              name='Brian Shen'
              role='President'
              linkedin='https://www.linkedin.com/in/baihe-shen-591125244/'
            />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person
              img={Jinsung}
              name='Jinsung Park'
              role='Vice President'
              linkedin='https://www.linkedin.com/in/floofyjin/'
            />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person
              img={Alayna}
              name='Alayna Rangel'
              role='Director of External Affairs'
              linkedin='https://www.linkedin.com/in/alayna-rangel-818484166/'
            />
          </div>

          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person img={Kevin} name='Kevin Habek' role='Director of Content' />
          </div>

          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person
              img={Bruno}
              name='Bruno Madrid'
              role='Venture Capital Lead'
              linkedin='https://www.linkedin.com/in/brunoramamadrid/'
            />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person
              img={Trevor}
              name='Trevor Le'
              role='Officer of External Affairs'
            />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person
              img={Joanne}
              name='Joanne Liu'
              role='Officer of External Affairs'
              linkedin='https://www.linkedin.com/in/joanne-liu-91803a294/'
            />
          </div>

          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person name='Steven Shieh' role='President' />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person
              name='Carter Wang'
              role='Vice President | Venture Capital Lead'
            />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person name='Tim Vidales' role='Director of Content' />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person name='Jackson Kohls' role='Crypto Lead' />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person name='Thiago Brasile' role='Equity Analyst Lead' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
