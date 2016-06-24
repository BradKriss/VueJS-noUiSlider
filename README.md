# VueJS-noUiSlider
No extra dependencies and two way binding


## Usage

All the data that the component uses is passed through 3 props.



#### - sliderConfig (slider-config)
So here you just pass through the standard object that nouislider wants. with the exception of the 'start' object, we do that seperately

Example:
  ```
{
  step: 10,
  range: {
  	'min': [ 0 ],
  	'max': [ 100 ]
  }
} 
```
You can look up [nouislider's docs](http://refreshless.com/nouislider/) for more info on this object

#### - sliderValue (slider-value)
This is an array of the starting values for nouislider. You'll want to pass these as a two way sync.

You can pass one or two values through here depending how many handles you want.

#### - sliderId (slider-id)
This is only needed if you want to link the slider to an input box, if no data is passed through the slider will be given a uuid4 id.

## Linking input boxes
Input boxes are linked by naming convention and must also include a model for the linked slider value.

Example: If your slider has an id of `my-slider` your inputs id should be `my-slider-input-0` for the first handle and `my-slider-input-1` for the second handle (0 and 1 refrence the array key)
```
<input id="my-slider-input-0" v-model="sliderValue[0]">
```

**You can check out a working example here:** https://jsfiddle.net/bradkriss/s2o0Ltzv/

---
Constructive criticism welcomed.

LICENSE: [WTFPL](http://www.wtfpl.net/) (DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE)
