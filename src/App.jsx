import './App.css';
import Switcher from "./Switcher"

//Pictures
import UStory from "./Pictures/UStory.png"
import Hotel from "./Pictures/Hotel.png"
import image1 from "./Pictures/image1.png"
import image2 from "./Pictures/image2.png"
import image3 from "./Pictures/image3.png"
import image4 from "./Pictures/image4.png"
import map from "./Pictures/map.png"
import woman from "./Pictures/woman.png"
import man from "./Pictures/man.png"
import object from "./Pictures/object.png"
import finish from "./Pictures/finish.png"
import "./i18next"
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import "aos/dist/aos.css"

function App() {
  const [ lng, setLng ] = useState('ru')
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => (
    i18n.changeLanguage(language)
  );

  const handleChange = (event) => {
    const { value } = event.target
    changeLanguage(value)
    setLng(value)
  }


  useEffect((e)=>{
    Aos.init({
      delay:500,
    });
  },[])
  

  return (
    <div className="App">
      <div className="container">
         
       <div className="navbar flex justify-between pt-[50px] pb-[20px] dark:bg-[black]">
          <div className="navbar-left flex justify-center pl-[40px]"><p className=" text-2xl dark:text-[white]">+38 (066) 123 45—67</p></div>
          <div className="navbar-middle flex justify-center"><img src={UStory} alt="" /></div>
          <div className="navbar-right flex justify-center"><p className="text-2xl dark:text-[white]">{t("text1")}</p></div>
          <div className="navbar-last flex justify-center pt-[3px]">
            <select value={lng} onChange={handleChange} >
              <option value="ru">RU</option>
              <option value="en">EN</option>
              <option value="tj">TJ</option>
            </select>
          </div>

          <div className="navbar-last-one flex justify-center pr-[40px]"><Switcher/></div>

         </div>
       
       <div className="junior-content dark:bg-[black]">
       <div className="content flex justify-evenly">
        <div data-aos="zoom-in" className=" content-one dark:text-[white]"><p>{t("text2")}</p></div>
        <div className="content-two"><div className="white-two"></div></div>
        <div data-aos="zoom-in" className="content-one dark:text-[white]"><p>{t("text3")}</p></div>
        <div className="content-two"><div className="white-two"></div></div>
        <div data-aos="zoom-in" className="content-one dark:text-[white]"><p>{t("text4")}</p></div>
        <div className="content-two"><div className="white-two"></div></div>
        <div data-aos="zoom-in" className="content-one dark:text-[white]"><p>{t("text5")}</p></div>
        <div className="content-two"><div className="white-two"></div></div>
        <div data-aos="zoom-in" className="content-one dark:text-[white]"><p>{t("text6")}</p></div>
        <div className="content-two"><div className="white-two"></div></div>
        <div data-aos="zoom-in" className="content-one dark:text-[white]"><p>{t("text7")}</p></div>
       </div>
       </div>
       
       <div className="blue-content ">
        <div className="content-blue flex justify-between">
        <div className="blue-left">
          <div data-aos="zoom-in" className="blue-left-text flex justify-start pl-[50px]"><h1>{t("text8")}</h1></div>
          <div data-aos="zoom-in" className="blue-left-top flex justify-start pl-[50px]"><h2>{t("text9")}</h2></div>
          <div data-aos="zoom-in" className="blue-left-title flex justify-start pl-[50px]"><p>{t("text10")}</p></div>
        </div>

        <div className="blue-right"><img src={Hotel} alt="" /></div>
        </div>

       </div>

       <div className="some-text dark:bg-[black]">
        <h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text11")}</h1>
       </div>

       <div className="choose-places flex justify-center pb-[40px] dark:bg-[black]">
        <div className="alone-place">
          <div className="choose-place">
          <div className="div-place flex justify-center pt-[40px]"><div className="place-color dark:bg-[white]"></div></div>
          <div className="div-place-text flex justify-center pt-[10px]"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text12")}</h1></div>
          <div className="div-place-title flex justify-center pt-[10px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text13")}</p></div>
        </div>
        </div>

        <div className="alone-place">
          <div className="choose-place">
          <div className="div-place flex justify-center pt-[40px]"><div className="place-color dark:bg-[white]"></div></div>
          <div className="div-place-text flex justify-center pt-[10px]"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text14")}</h1></div>
          <div className="div-place-title flex justify-center pt-[10px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text13")}</p></div>
        </div>
        </div>

        <div className="alone-place">
          <div className="choose-place">
          <div className="div-place flex justify-center pt-[40px]"><div className="place-color dark:bg-[white]"></div></div>
          <div className="div-place-text flex justify-center pt-[10px]"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text15")}</h1></div>
          <div className="div-place-title flex justify-center pt-[10px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text13")}</p></div>
        </div>
        </div>

        <div className="alone-place">
          <div className="choose-place">
          <div className="div-place flex justify-center pt-[40px]"><div className="place-color dark:bg-[white]"></div></div>
          <div className="div-place-text flex justify-center pt-[10px]"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text16")}</h1></div>
          <div className="div-place-title flex justify-center pt-[10px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text13")}</p></div>
        </div>
        </div>
        

       </div>
        
       <div className="some-text dark:bg-[black]">
        <h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text17")}</h1>
       </div>

       <div className="our-objects flex justify-center p-[40px] gap-[30px] dark:bg-[black]">
         <div className="object">
          <div className="object-image"><img src={image1} alt="" /></div>
          <div className="object-text"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text18")}</h1></div>
          <div className="object-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text19")}</p></div>
          <div className="object-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text20")}</p></div>
          <div className="object-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text21")}</p></div>
         </div>
         
         <div className="object">
          <div className="object-image"><img src={image2} alt="" /></div>
          <div className="object-text"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text22")}</h1></div>
          <div className="object-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text19")}</p></div>
          <div className="object-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text20")}</p></div>
          <div className="object-title"><p data-aos="zoom-in" className='dark"text-[white]'>{t("text21")}</p></div>
         </div>


         <div className="object">
          <div className="object-image"><img src={image3} alt="" /></div>
          <div className="object-text"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text23")}</h1></div>
          <div className="object-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text19")}</p></div>
          <div className="object-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text20")}</p></div>
          <div className="object-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text21")}</p></div>
         </div>

         <div className="object">
          <div className="object-image"><img src={image4} alt="" /></div>
          <div className="object-text"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text24")}</h1></div>
          <div className="object-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text19")}</p></div>
          <div className="object-title"><p data-aos="zoom-in" className='dark:text-white'>{t("text20")}</p></div>
          <div className="object-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text21")}</p></div>
         </div>

       </div>

      <div className="blue-btn flex justify-start pl-[40px] pt-[10px] dark:bg-[black]">
      <div className="blue-button">
        <button className='pt-[11px]'>{t("text25")}</button>
       </div>
      </div>
       
      <div className="some-textt pl-[40px] pt-[30px] dark:bg-[black]">
        <h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text26")}</h1>
       </div>
     
       <div className="div-middle flex justify-evenly pt-[50px] pb-[70px] dark:bg-[black]">
        <div className="junior-middle flex justify-center">
        <div className="middle">
          <div className="middle-text"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text27")}</h1></div>
          <div className="middle-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text28")}</p></div>
          <div className="middle-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text29")}</p></div>
          <div className="middle-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text30")}</p></div>
        </div>
        </div>
        
        <div className="junior-middle flex justify-center">
        <div className="middle">
          <div className="white-middle"><div className="middle-white dark:bg-[white]"></div></div>
          <div className="middle-text"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text31")}</h1></div>
          <div className="middle-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text32")}</p></div>
          <div className="middle-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text34")}</p></div>
          <div className="middle-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text35")}</p></div>
        </div>
        </div>

        <div className="junior-middle flex justify-center">
        <div className="middle">
        <div className="white-middle"><div className="middle-white dark:bg-[white]"></div></div>
          <div className="middle-text"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text35")}</h1></div>
          <div className="middle-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text36")}</p></div>
          <div className="middle-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text37")}</p></div>
          <div className="middle-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text38")}</p></div>
        </div>
        </div>

        <div className="junior-middle flex justify-center">
        <div className="middle">
        <div className="white-middle"><div className="middle-white dark:bg-[white]"></div></div>
          <div className="middle-text"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text39")}</h1></div>
          <div className="middle-title"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text40")}</p></div>
          <div className="middle-title"><p data-aos="zoom-in" className='dark:text-[white]'>—</p></div>
          <div className="middle-title"><p data-aos="zoom-in" className='dark:text-[white]'>—</p></div>
        </div>
        </div>

       </div>
       
       <div className="my-gray-div dark:bg-[black]">
       <div className="some-textt pl-[40px] pt-[30px]">
        <h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text41")}</h1>
       </div>

       <div className="choose-places flex justify-around pr-[200px] pb-[40px]">
        <div className="alone-place">
          <div className="choose-place">
          <div className="div-place flex justify-center pt-[40px]"><div className="place-color dark:bg-[white]"></div></div>
          <div className="div-place-text flex justify-center pt-[10px]"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text42")}</h1></div>
          <div className="div-place-title flex justify-center pt-[10px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text43")}</p></div>
        </div>
        </div>

        <div className="alone-place">
          <div className="choose-place">
          <div className="div-place flex justify-center pt-[40px]"><div className="place-color dark:bg-[white]"></div></div>
          <div className="div-place-text flex justify-center pt-[10px]"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text44")}</h1></div>
          <div className="div-place-title flex justify-center pt-[10px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text43")}</p></div>
        </div>
        </div>

        <div className="alone-place">
          <div className="choose-place">
          <div className="div-place flex justify-center pt-[40px]"><div className="place-color dark:bg-[white]"></div></div>
          <div className="div-place-text flex justify-center pt-[10px]"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text45")}</h1></div>
          <div className="div-place-title flex justify-center pt-[10px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text43")}</p></div>
        </div>
        </div>

       </div>
       

       </div>

       <div className="my-texts flex justify-between p-[45px] dark:bg-[black]">
        <div className="tit"> <h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text46")}</h1></div>
        <div className="tit"> <h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text47")}</h1></div>
       </div>
        
        <div className="maps dark:bg-[black]">
          <div className="map flex justify-center p-[40px]">
           <div className="map-left pt-[30px]">
            <img src={map} alt="" />
           </div>

           <div className="map-middle">
           <div className="alone-place">
          <div className="choose-place">
          <div className="div-place flex justify-center pt-[40px]"><div className="place-color dark:bg-[white]"></div></div>
          <div className="div-place-text flex justify-center pt-[10px]"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text48")}</h1></div>
          <div className="div-place-title flex justify-center pt-[10px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text49")}</p></div>
        </div>
        </div>

        <div className="map-image"><img src={woman} alt="" /></div>

           </div>

           <div className="map-right">
           <div className="alone-place">
          <div className="choose-place">
          <div className="div-place flex justify-center pt-[40px]"><div className="place-color dark:bg-[white]"></div></div>
          <div className="div-place-text flex justify-center pt-[10px]"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text50")}</h1></div>
          <div className="div-place-title flex justify-center pt-[10px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text51")}</p></div>
        </div>
        </div>
          
          <div className="name flex justify-center"><h1 data-aos="zoom-in" className='dark:text-[white]'>{t("text52")}</h1></div>
          <div className="surname flex justify-center pt-[10px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text53")}</p></div>
          <div className="name-btn flex justify-center pt-[20px]"><button>{t("text54")}</button></div>

           </div>

          </div>

        </div>
     
        <div className="adress flex justify-start pl-[40px] pb-[40px] dark:bg-[black]">
          <div className="adres">
            <div className="adress-p"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text55")}</p></div>
            <div className="adress-p"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text56")}</p></div>
            <div className="adress-p"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text57")}</p></div>
            <div className="adress-p"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text58")}</p></div>
          </div>
        </div>

        <div className="about flex justify-center">
          <div className="about-mine flex justify-center">
          <div className="about-first">
            <div className="about-text flex justify-start pl-[40px] pt-[20px]"><h1 data-aos="zoom-in">{t("text59")}</h1></div>
            <div className="about-image flex justify-center pt-[40px]"><img className='w-[30%]' src={man} alt="" /></div>
            <div className="about-title flex justify-start pl-[40px] pt-[20px]"><p data-aos="zoom-in">{t("text60")}</p></div>
          </div>
          </div>
          
            <div className="about-mine flex justify-center">
            <div className="about-second">
            <div className="about-text flex justify-start pl-[40px] pt-[20px]"><h1 data-aos="zoom-in">{t("text61")}</h1></div>
            <div className="about-image flex justify-center pt-[40px]"><img className='w-[30%]' src={object} alt="" /></div>
            <div className="about-title flex justify-start pl-[40px] pt-[20px]"><p data-aos="zoom-in"> {t("text60")}</p></div>
          </div>
            </div>
          
           <div className="about-mine flex justify-center">
           <div className="about-second">
            <div className="about-second-text flex justify-center"><h1 data-aos="zoom-in">{t("text62")}</h1></div>
            <div className="about-title flex justify-start pl-[40px] pt-[20px]"><p data-aos="zoom-in">{t("text60")}</p></div>
          </div>
           </div>
          
           <div className="about-mine flex justify-center">
           <div className="about-first">
            <div className="about-second-text flex justify-center"><h1 data-aos="zoom-in">{t("text63")}</h1></div>
            <div className="about-title flex justify-start pl-[40px] pt-[20px]"><p data-aos="zoom-in">{t("text60")}</p></div>
          </div>
           </div>
          

        </div>


        <div className="finish flex justify-evenly pt-[50px] dark:bg-[black]">
          <div className="social flex justify-center">
          <div className="finish-one">
            <div className="finish-text"><h2 data-aos="zoom-in">{t("text64")}</h2></div>
            <div className="finish-title pt-[5px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text65")}</p></div>
            <div className="finish-title pt-[5px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text66")}</p></div>
            <div className="finish-title pt-[5px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text67")}</p></div>
          </div>
          </div>

          <div className="social flex justify-center">
          <div className="finish-one">
            <div className="finish-text"><h2>{t("text68")}</h2></div>
            <div className="finish-title pt-[5px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text69")}</p></div>
            <div className="finish-title pt-[5px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text70")}</p></div>
            <div className="finish-title pt-[5px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text71")}</p></div>
            <div className="finish-title pt-[5px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text72")}</p></div>
            <div className="finish-title pt-[5px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text73")}</p></div>
            <div className="finish-title pt-[5px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text74")}</p></div>
          </div>
          </div>

          <div className="social flex justify-center">
          <div className="finish-one">
            <div className="finish-text"><h2>{t("text75")}</h2></div>
            <div className="finish-title pt-[5px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text76")}</p></div>
            <div className="finish-title pt-[5px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text77")}</p></div>
            <div className="finish-title pt-[5px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text78")}</p></div>
            <div className="finish-title pt-[5px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text79")}</p></div>
          </div>
          </div>

          <div className="social flex justify-center">
          <div className="finish-one">
            <div className="finish-image"><img src={UStory} alt="" /></div>
            <div className="finish-title pt-[5px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text80")}</p></div>
            <div className="finish-title pt-[5px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text81")}</p></div>
            <div className="finish-title pt-[5px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text82")}</p></div>
            <div className="finish-title pt-[5px]"><p data-aos="zoom-in" className='dark:text-[white]'>{t("text83")}</p></div>
          </div>
          </div>
          

        </div>

         <div className="footer flex justify-evenly gap-[60px] pt-[30px] dark:bg-[black]">
          <div className="footer-left"><p data-aos="zoom-in">{t("text84")}</p></div>
          <div className="footer-left pl-[60px]"><p data-aos="zoom-in">{t("text85")}</p></div>
          <div className="footer-left"><p data-aos="zoom-in">{t("text86")}</p></div>
         </div>

         <div className="last-one pt-[30px] dark:bg-[black]">
          <img src={finish} alt="" />
         </div>


      </div>
    </div>
  );
}

export default App;