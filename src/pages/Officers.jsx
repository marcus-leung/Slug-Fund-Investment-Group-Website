import React from 'react';
import Person from '../components/Person';

// Current
import Joshua from '../assets/MemberPhotos/Joshua.jpg';
import Sushane from '../assets/MemberPhotos/Sushane.jpg';
import Julian from '../assets/MemberPhotos/Julian.jpg';
import Nicholas from '../assets/MemberPhotos/Nicholas.jpg';
import Vincent from '../assets/MemberPhotos/Vincent.jpg';
import KevinYu from '../assets/MemberPhotos/KevinYu.jpg';
import Aryan from '../assets/MemberPhotos/Aryan.png';

//Alumni
import Brian from '../assets/AlumniPhotos/Brian.png';
import Jinsung from '../assets/AlumniPhotos/Jinsung.png';
import Alayna from '../assets/AlumniPhotos/Alayna.png';
import Trevor from '../assets/AlumniPhotos/Trevor.png';
import Joanne from '../assets/AlumniPhotos/Joanne.png';
import Kevin from '../assets/AlumniPhotos/Kevin.png';
import Bruno from '../assets/AlumniPhotos/Bruno.png';
import Marcus from '../assets/AlumniPhotos/Marcus.jpg';
import Alex from '../assets/AlumniPhotos/Alex.png';

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
              img={Joshua}
              name='Joshua Morris'
              role='President'
              linkedin='https://www.linkedin.com/in/jmo202/'
            />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person
              img={Vincent}
              name='Vincent Call'
              role='Vice President'
              linkedin='http://www.linkedin.com/in/vincent-call-b58119303'
            />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person img={Sushane} name='Sushane Atmakuri' role='Officer' />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person
              img={Julian}
              name='Julian Marquit'
              role='Chief Operating Officer'
              linkedin='http://www.linkedin.com/in/julian-marquit'
            />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person
              img={Nicholas}
              name='Nicholas Hetter'
              role='Director of External Affairs'
            />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person
              img={KevinYu}
              name='Kevin Yu'
              role='Chief Technical Officer'
              linkedin='https://www.linkedin.com/in/kevinyufkwvs/'
            />
          </div>
                    <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person
              name='Spencer Ng'
              role='Director of Crypto'
            />
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
            align='center'
          >
            <Person
              img={Aryan}
              name='Aryan Ray'
              role='Chief Director of Equity'
              linkedin='http://www.linkedin.com/in/aryan-ray0901'
            />
          </div>
        </div>
      </div>
      <div className='container'>
        <h1 className='' align='center'>
          Alumni
        </h1>
        <div className=''>
          <h2 className='' align='center'>
            2024 - 2025
          </h2>
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
          <h2 className='' align='center'>
            2023 - 2024
          </h2>
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
              <Person
                img={Marcus}
                name='Marcus Leung'
                role='Web Developer | Officer of External Affairs'
                linkedin='https://www.linkedin.com/in/marcus-leung-582006252/'
              />
            </div>
            <div
              className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
              align='center'
            >
              <Person
                img={Kevin}
                name='Kevin Habek'
                role='Director of Content'
              />
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
                img={Alex}
                name='Alex Kosan'
                role='Equity Analyst Lead'
                linkedin='https://www.linkedin.com/in/akosan/'
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
          </div>
          <h2 className='' align='center'>
            2022 - 2023
          </h2>
          <div className='row pt-3 my-3'>
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
            <div
              className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'
              align='center'
            >
              <Person
                img={Jinsung}
                name='Jinsung Park'
                role='Director of External Affairs'
                linkedin='https://www.linkedin.com/in/floofyjin/'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
