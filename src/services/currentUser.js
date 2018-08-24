export default {
	    // getToken recupère le jeton de l'utilisateur connecté
    getToken () {
       return localStorage.getItem('token')
    },
        // deleteToken Supprime le Token de l'utilisateur connecté
    deleteToken () {
        return localStorage.removeItem('token')
    },
    // getUser recupère les infos de l'utilisateur connecté
    getUser () {
        return localStorage.getItem('user')
     },
     formatDate(date) {
        var monthNames = [
          "Janvier", "Février", "Mars",
          "Avril", "Mai", "Juin", "Juillet",
          "Août", "Septembre", "Octobre",
          "Novembre", "Décembre"
        ];
      
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
      
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      }
      
    //   console.log(formatDate(new Date()));
    
     

}