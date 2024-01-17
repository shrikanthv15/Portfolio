<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #41b3a3; width: 1481px;">
    <div class="container-fluid" style="transition-property: opacity, transform; font-family: &quot;Rubik_Doodle_Shadow variant0&quot;, Tofu; font-weight: 400; font-style: normal; font-stretch: normal; font-optical-sizing: auto; line-height: initial; opacity: 1; transition-duration: 350ms;">
      <a class="navbar-brand" href="#" > <img src="../assets/PHOTO.jpg" style="border-radius: 200px; " width="30px" height="30px;"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link"></router-link>
          </li>
          
          


        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import router from '@/router';
import axios from 'axios';

export default {
  data() {
    return {
      // Assuming you have a variable to determine if the user is logged in
      isLoggedIn: false,
      iscart: false, 
      searchQuery: '',
      userRole: localStorage.getItem('role'),
      user_id: localStorage.getItem("user_id")// Set this to true when the user is logged in
    };
    
  },
  mounted() {
    this.check();
    this.isCart();
  },
  methods: {
    handleSearch() {
      // You may want to add some debounce logic here to avoid making too many requests in a short time
      if (this.searchQuery.trim() !== '') {
        this.performSearch();
      } else {
        console.log("what?")
      }
    },
  check(){
    if(localStorage.getItem('token')){
      console.log("hello")
      this.isLoggedIn = true;
      
    }
    else{
      this.isLoggedIn = false;
    }
  },
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('role');
    localStorage.removeItem("ok");
    
    this.$router.push('/');
    
    this.isLoggedIn = false;
  },
  isCart(){
    if(localStorage.getItem('role') == 'admin'){
      this.iscart = false;
    }
    else{
    const jwtToken = localStorage.getItem('token')
        const headers = {
            Authorization: `Bearer ${jwtToken}`,
          };
    axios.get("http://localhost:5000/user/get-cart-items/" + this.user_id, {headers} )
    .then(response => {
    if(response.data.len =='0'){
      this.iscart = false;
      localStorage.setItem('ok', 0) 

    }
    else{
      this.iscart = true;
      localStorage.setItem('ok', 1) 
    }
  })
  .catch(error => {
            console.error('Error fetching products:', error);
            this.loading = false;
          });
  }
},

// Inside your existing component
performSearch() {
  const jwtToken = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${jwtToken}`,
  };

  axios.post(`http://localhost:5000/search/${this.searchQuery}`, {}, { headers })
    .then(response => {
      // Redirect to the search results page with the search results as props
      this.$router.push({
        name: 'SearchResults',
        params: { searchResults: response.data },
      });
    })
    .catch(error => {
      console.error('Error searching:', error);
    });
},

  }
}
</script>

<style scoped>
.Btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: rgb(255, 65, 65);
}

/* plus sign */
.sign {
  width: 100%;
  transition-duration: .3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign svg {
  width: 17px;
}

.sign svg path {
  fill: white;
}
/* text */
.text {
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  color: white;
  font-size: 1.2em;
  font-weight: 600;
  transition-duration: .3s;
}
/* hover effect on button width */
.Btn:hover {
  width: 125px;
  border-radius: 40px;
  transition-duration: .3s;
}

.Btn:hover .sign {
  width: 30%;
  transition-duration: .3s;
  padding-left: 20px;
}
/* hover effect button's text */
.Btn:hover .text {
  font-size: 15px;
  opacity: 1;
  width: 70%;
  transition-duration: .3s;
  padding-right: 10px;
}
/* button click effect*/
.Btn:active {
  transform: translate(2px ,2px);
}
</style>