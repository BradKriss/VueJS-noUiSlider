Vue.component('no-ui-slider', {
  template: "<div :id='sliderId'></div>",
  props: {
            sliderId: {
                type: String,
                default: function() {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                        return v.toString(16);
                    });
                }

            },
            sliderConfig: Object,
            sliderValue: {
                type: Array,
                twoWay: true
            }
        },

        data() {
            return {
                //sliderId: this.uuid4(),
                slider: null
            }

        },
        methods: {

            updateValue: function (value, handle) {

                this.$set('sliderValue['+handle+']', value[handle]);

            },

            checkForInputs: function() {
                var self = this,
                    i = 0,
                    numOfValues = this.sliderValue.length;
                
                this.sliderValue.forEach(function(value) {

                    if (document.getElementById(self.sliderId+"-input-"+i)) {
                        var arrayKey = i,
                            valueArray = Array.apply(null, Array(numOfValues)).map(function () {});

                        document.getElementById(self.sliderId+"-input-"+i).addEventListener('change', function () {

                            valueArray[arrayKey] = this.value;

                            self.slider.noUiSlider.set(valueArray);

                        });

                    }

                    i++;
                })
            }

        },
        ready: function () {
            this.slider = document.getElementById(this.sliderId);

            this.sliderConfig.start = this.sliderValue;

            noUiSlider.create(this.slider, this.sliderConfig);

            this.slider.noUiSlider.on('update', this.updateValue);

            this.checkForInputs();

        }

})
