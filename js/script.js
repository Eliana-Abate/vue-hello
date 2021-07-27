Vue.config.devtools = true;

console.log ('collegato', Vue);


const root = new Vue({
    el: '#root',
    data: {
        message: 'Benvenuto sul vulcano più alto d\'Europa!',
        volcanoName: 'Etna',
        height: '3340 mt',
        location: 'Sicily',
        volcanoType: 'Stratovolcano',
        lastEruption: '20 July 2021',
        image: './img/Etna.jpg',
    }, 
    methods: {
        redirect() {
            alert('Visit: https://www.unescoparcoetna.it/sentieri/');
        }
    },
});