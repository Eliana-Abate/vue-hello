Vue.config.devtools = true;

console.log ('collegato', Vue);


const root = new Vue({
    el: '#root',
    data: {
        message: 'Benvenuto sul vulcano più alto d\'Europa!',
        volcanoName: 'Etna',
        height: '3340',
        location: 'Sicily',
        volcanoType: 'Stratovolcano',
        lastEruption: '20 July 2021',
    
    }
});