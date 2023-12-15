export default {
    /**
     * 
     * @param {number} f 
     * @returns {number}
     */
    toCelcius : (f)=>{
        return (f-32)*5 / 9;
    },


    /**
     * 
     * @param {number} c 
     * @returns {number}
     */
    toFahrenheit : (c)=>{
        return (c * 9 / 5) + 32;
    },

    tryConvert : (temperature,convert)=>{
        const input  = parseFloat(temperature);

        if(Number.isNaN(input)){
            return "";
        }
        const output = convert(input);
        const rounded = Math.round(output*1000)/1000;
        return rounded.toString();
    }
}