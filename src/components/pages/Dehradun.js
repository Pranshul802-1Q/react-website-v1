import React from 'react';
import '../../App.css';
import ImageSlider from '../ImageSlider';
import { SliderData} from '../SliderDataDehradun';

export default Dehradun;

function Dehradun() {
    return (
    <div class='doc-container'>
        <ImageSlider slides={SliderData}/>
        <div class='text-area'>
            <p>
            Nature Care Village is an organic farm situated in the footsteps of great Himalayas ,in Rishikesh .
            About us...
             Enjoy farm produced organic ayurvedic food with a traditional village touch.
             Learn and experience yoga and meditation in a completely natural and peaceful environment.
             Learn about properties of various medicinal plants and their uses for a healthy life from our experts.
             Experience the astonishing view of Natural environment free from all kinds of pollution , be it air , land , water or noise .
             On demand wildlife safari,experience the wildlife in their natural habitat in Rajaji national park.
             Enjoy Bird watching and learn about rare varieties of birds .
            And lot more ......
            </p>
        </div>
    
   
    </div>);
  }