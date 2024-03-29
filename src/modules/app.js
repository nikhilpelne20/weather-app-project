const getTemperature = (()=>{
    const convertData = async (data)=>{
      const name = data.location.name
      const {
        temp_c:temp_in_c,
        feelslike_c:what_feelslike_c,
        temp_f:temp_in_f,
        feelslike_f:what_feelslike_f,
        wind_kph:wind_in_kph,
        humidity:what_humidity
        } = data.current;
       const condition = data.current.condition.text;
       const gifImageUrl = await getWeatherConditionImage(condition)
       return{name,temp_in_c,what_feelslike_c,temp_in_f,what_feelslike_f,wind_in_kph,what_humidity,condition,gifImageUrl}
    }

    async function getWeatherData(city){
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=1fb9b24b0ecd46f3b25110719242301&q=${city}`;
        
        try{
            const response = await fetch(apiUrl, {mode:'cors'})
            if(!response.ok) throw new Error(`entered ${city} is not a city`)
            const data = convertData(await response.json())
            return data
        }
        catch(error){
            alert(error)
            return null
        }
    }

    async function getWeatherConditionImage(condition){
        const conditionUrl = `https://api.giphy.com/v1/gifs/translate?api_key=fBYwmg7FlJvqtqxC3qON93YDNj3hpuUP&s=${condition}`;

        try{
            const response = await fetch(conditionUrl,{mode:'cors'})
            if(!response.ok) throw new Error(`Condition Unclear`)
            const data = await response.json()
            return data.data.images.original.url;
        }
        catch(error){
            alert(error)
            return null
        }
    }
return{getWeatherData}
})();

export default getTemperature;

