import $ from 'jquery'
import {TimelineMax} from 'gsap'
import './css/file.styl';
// import Styles from 'style-loader!css-loader?modules!./main.css';

let tl = new TimelineMax();
tl.from($('.logo__u'), 1, {
    y: -60
})



$('.title').html('Some ')




