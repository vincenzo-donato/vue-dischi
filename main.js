// AZIONE: Inizializzo il js per applicare Vue js e Axios 
let app = new Vue({

    // AZIONE: Assegno l'id 
	el: '#Container-generale',
    //FINE AZIONE: Assegno l'id 

    // AZIONE: Inizializzo le variabili 
	data: {
		albums:[],
		generi: ['All'],
		visualizza: 'All'
	},
    //FINE AZIONE: Inizializzo le variabili 

	// AZIONI: Azioni eseguite senza necessita di azionare un comando 
	mounted(){

		// AZIONE: Esegue in automatico il push degli elementi dentro la mia array albums + generi diversi per poi visualizzarli 
        axios
		.get('https://flynn.boolean.careers/exercises/api/array/music')
		.then((result) => {

            this.albums = result.data.response;

			this.albums.forEach(element => {
				if(!this.generi.includes(element.genre)){
					this.generi.push(element.genre);
				}
			});

		});
		//FINE AZIONE: Esegue in automatico il push degli elementi dentro la mia array albums + generi diversi per poi visualizzarli 

	},
	//FINE AZIONI: Azioni eseguite senza necessita di azionare un comando 

	// AZIONI: Eseguite dopo un determinato comando (click/key/ecc)
	methods: {

	}
	//FINE AZIONI: Eseguite dopo un determinato comando (click/key/ecc)

});
//FINE AZIONE: Inizializzo il js per applicare Vue js e Axios 