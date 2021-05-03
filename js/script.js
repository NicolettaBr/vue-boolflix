var app = new Vue(
    {
        el: '#root',
        data: {
            userResearch: '',
            arrayMovies: [],
            arraySeries:[],
            flagIt: 'https://cdn.countryflags.com/thumbs/italy/flag-400.png',
            flagEn: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5hGaA58A_koepgHCIREg0Dt6ZIx6bbGHavyPXi4u5wIbs0l7GggJVZmbI7gIP7Wta-pE&usqp=CAU',
            imgNotFound: 'https://bitsofco.de/content/images/2018/12/broken-1.png',

        },

        methods:{
            search(){
            
               if(this.userResearch.length > 0){

                    /*chiamata dei film*/
                    axios
                    .get('https://api.themoviedb.org/3/search/movie', {
                        params:{
                            api_key: 'b24d6d28719609dba95ff636cc59a0e3',
                            query: this.userResearch,
                        }
                    })
                    .then((response)=>{
                    //console.log(response);
                    const result = response.data;
                    //console.log(result);
                    //console.log(result.results);
                    this.arrayMovies = result.results;
                    console.log(this.arrayMovies);
                    })

                    /*chiamata delle serieTV*/
                    axios
                    .get('https://api.themoviedb.org/3/search/tv', {
                        params:{
                            api_key: 'b24d6d28719609dba95ff636cc59a0e3',
                            query: this.userResearch,
                        }
                    })
                    .then((response)=>{
                    //console.log(response);
                    const result = response.data;
                    //console.log(result);
                    //console.log(result.results);
                    this.arraySeries = result.results;
                    console.log(this.arraySeries);
                    })
                
                    /*resetta barra input*/ 
                    this.userResearch = '';  
                }

            },

            //ritorna flags in base alla lingua
            getFlag(language){
                
                if(language == 'it'){

                    return this.flagIt;
                    
                }else if(language == 'en'){

                    return this.flagEn;
                };
                
            },

            //ritorna flags in base alla lingua
            getPoster(url){

                if(url == null ){

                    return this.imgNotFound;

                }else {
                    
                    return 'https://image.tmdb.org/t/p/w342/' + url;
                }
            },

            //ritorna voto arrotondato per eccesso ad un intero
           getRounded(number){
               //console.log(number);

               let numberRounded = Math.ceil(number);
               //console.log(numberRounded);

               return numberRounded;
           },

          


        },

        mounted(){
            

        }
    },
) 