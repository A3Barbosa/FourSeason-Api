const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 4000


app.use(cors())

const Seasons = {
    'winter': {
        'temp': 'mid-20s to mid-30s Fahrenheit',
        'urlImage': 'https://bdc2020.o0bc.com/wp-content/uploads/2021/11/courtesy-of-MOTT-61a269bb0056c-768x432.jpg',
        'activites': 'Winter in Massachusetts offers many activities such as skiing, snowboarding, and ice-skating.The state is home to many ski resorts and outdoor ice rinks, as well as indoor options like museums and theaters.Other winter activities in Massachusetts include visiting holiday markets, enjoying seasonal treats, and participating in winter festivals.'
    },
    'summer':{
        'temp': 'mid-60s to mid-80s Fahrenheit',
        'urlImage': 'https://newengland.com/wp-content/uploads/CapeCodMarkFleming.jpg',
        'activites': 'Massachusetts offers many fun summer activities such as hiking, attending festivals, and whale watching.The popular summer destinations in the state include Cape Cod, Boston, and Marthas Vineyard Other great summer activities in Massachusetts include visiting the beach, attending a Red Sox game, and taking a scenic road trip.' 
    },

    'fall':{
        'temp': 'mid-40s to mid-60s Fahrenheit',
        'urlImage': 'https://newenglandmomma.com/wp-content/uploads/2020/08/apple-orchard-land-1024x683.jpg',
        'activites': 'Massachusetts is beautiful in the fall, with many activities such as apple picking, leaf-peeping, and visiting pumpkin patches.Hiking in the states many parks and forests is a popular fall activity due to the stunning foliage.Other fall activities in Massachusetts include attending fall festivals, visiting historical sites, and enjoying seasonal treats like cider and donuts.' 
    },

    'spring':{
        'temp':'mid-30s to mid-60s Fahrenheit',
        'urlImage': 'https://media.istockphoto.com/id/508959528/photo/park-bench-charles-river-boston-ma-springtime-cherry-blossoms.jpg?s=612x612&w=0&k=20&c=kMPP9VEu6ThqGUTYGXf9MS9obMfBfAtq_5oTGGZjbCQ=',
        'activites': 'Spring in Massachusetts offers many activities such as visiting botanical gardens, hiking, and biking.The states many parks and forests come alive with blossoming flowers and trees during the spring months.Other spring activities in Massachusetts include visiting farms for fresh produce, attending outdoor festivals, and enjoying seasonal treats like maple syrup.' 
    },

    'unknown':{
        'temp': 0,
        'urlImage': 'unknown',
        'activites': 'unknown'
    }
}




app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/weather-api/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})


app.get('/api/:name',(request,response)=>{
    const Season = request.params.name.toLowerCase()

    if( Seasons[Season] ){
        response.json(Seasons[Season])
    }else{
        response.json(Seasons['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})