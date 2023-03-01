
var API_key='b03af8cb18cb861532746d22b1381cf8'

async function api(){
    url="https://restcountries.com/v2/all"
    v=fetch(url)
    out=await v
    prom=out.json()
    out1=await prom
    console.log(out1)
    var api_data=document.querySelector('.col')
   try {
    for(let i of out1){
        var data_count=document.createElement('div')
        
        lat=i.latlng[0]
        lon=i.latlng[1]
        data_count.setAttribute('lat',lat)
        data_count.setAttribute('lon',lon)
        data_count.classList.add('country_data')
        data_count.style.display='inline-block'
        api_data.append(data_count)

        var country_name=document.createElement('p')
        country_name.innerHTML= i.name
        country_name.style.color='white'
        country_name.classList.add('child2')

        data_count.append(country_name)


        var country_img=document.createElement('img')
        country_img.setAttribute('src',i.flags.png)
        country_img.classList.add('size')
        data_count.append(country_img)

        var country_capital=document.createElement('p')
        country_capital.innerText=`Capital:${i.capital}`
        country_capital.style.color='white'
        country_capital.classList.add('child1')
        data_count.append(country_capital)

       var country_region=document.createElement('p')
       country_region.innerText=`Region:${i.region}`
       country_region.style.color='white'
       country_region.classList.add('child1')
       data_count.append(country_region)

       var country_code=document.createElement('p')
       country_code.innerText=`Country Code:${i.alpha3Code}`
       country_code.style.color='white'
       country_code.classList.add('child1')
       data_count.append(country_code)

      var country_weather=document.createElement('button')
      country_weather.classList.add('center')
      country_weather.setAttribute('onclick','weatherapi(this)')
      country_weather.innerText='click for weather'
      data_count.append(country_weather)

}
    
   } catch {
    
    
    
   }
}
api()

async function weatherapi(e){
  console.log(e.parentElement)
  var parent=e.parentElement
  var show=document.querySelector('.getdata')
  var lat=parent.getAttribute('lat')
  var lon=parent.getAttribute('lon')
 var weather_url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
v=fetch(weather_url)
out=await v
prom=out.json()
out1=await prom
var latone=document.createElement('p')
latone.style.color='white'
latone.style.br
latone.innerText=`Lat:${out1.coord.lat}`

show.append(latone)
var lonone=document.createElement('p')
lonone.style.color='white'
lonone.innerText=`Lon:${out1.coord.lon}`
show.append(lonone)

var weather=document.createElement('p')
weather.style.color='white'
weather.innerText=`Description:${out1.weather[0]. description}`
show.append(weather)

}

