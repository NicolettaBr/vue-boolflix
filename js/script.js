var app = new Vue(
    {
        el: '#root',
        data: {
            userResearch: '',
            arrayMovies: [],
            arraySeries:[],
            flagIt: '"img/flag-ita.png',
            flagEn: '"img/flag-en.png'
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



        },

        mounted(){
           
          

        }
    },
) 