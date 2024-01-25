<template>
  <div>
  <div style="display: flex;background-color: white;">
    <div style="width: 1000px; justify-content: center; height: 60px; background-color: white;">
      <center style="background-color: white;">
      <div style="margin-top: 100px;background-color: white;"><spam style="font-family: Instrument Serif, serif; font-size: 20px;">PORTFOLIO</spam></div>
      <div style="margin-top: 50px;background-color: white;width: 530px;"><h1 class="typingeffect" style="font-family: Instrument Serif, serif; font-size: 80px; ">SHRIKANTH </h1></div>
        <div style="margin-top: 0px;background-color: white; width: 630px;"><h1 class="typingeffect2" style="font-family: Instrument Serif, serif; font-size: 80px;">VILVADRINATH</h1></div>
      </center>
      <div style="display: flex;">
        <h5  class="fun" style="margin-top: 200px; margin-left: 20px;font-family: Instrument Serif, serif;">MACHINE LEARNING | PYTHON DEVELOPER</h5>
        <button class="cta" style="margin-top: 190px; margin-left: 350px;">
        <span>Email Me</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
        </button>

        </div>
      </div>
      <div  class="imageclass" style="background-color: black;width: 480px; height: 630px">
        <img src="../assets/myphoto.jpg" width="480px" height="630px">
      </div>
  </div>
  <div style="background-color: black; min-height: 700px;">
    <div class="newclass">

    <br><br>
    <div class="project" style="display: flex;">

    <h1 class="one1" style="margin-left: 30px;font-family: Instrument Serif, serif; color: white;">P</h1>
    <h1 class="one2" style="margin-left: 3px;font-family: Instrument Serif, serif; color: white;">R</h1>
    <h1 class="one3" style="margin-left: 3px;font-family: Instrument Serif, serif; color: white;">O</h1>
    <h1 class="one4" style="margin-left: 3px;font-family: Instrument Serif, serif; color: white;">J</h1>
    <h1 class="one5" style="margin-left: 3px;font-family: Instrument Serif, serif; color: white;">E</h1>
    <h1 class="one6" style="margin-left: 3px;font-family: Instrument Serif, serif; color: white;">C</h1>
    <h1 class="one7" style="margin-left: 3px;font-family: Instrument Serif, serif; color: white;">T</h1>
    </div>
    <br><br>
    <br><br>
    
<button @click="toggleVisibility">Machine Learning</button>
    <div v-if="clicked" class="animated-div">
      <!-- Your animated content goes here -->
    </div>


        <div>
          </div>

  </div>
  </div>

  <div style="background-color:#DCE9F5; height: 830px;">
    <br><br><br>
    <div style="display: flex;" >
      
      <div style="width: 700px;margin-left: 20px;" class="newclass">
        
        <h3 style=" margin-left: 20px;font-family: Instrument Serif, serif;"><strong>EDUCATION</strong></h3>
        <br>
        <h3 style=" margin-left: 20px;font-family: Instrument Serif, serif;">B.E. Electronics And Communication</h3>
        <br>
        <h5 style=" margin-left: 100px;font-family: Instrument Serif, serif;">Currently pursuing a Bachelor of Engineering in Electronics and
Communication at Vishwakarma Government Engineering College,
I am gaining a strong foundation in electronics and communication
engineering. My coursework includes extensive study of analog and
digital electronics, communication systems, signal processing, and
microprocessors. This program is equipping me with the technical
skills necessary for a future career in telecommunications,
electronics design, and embedded systems.
 </h5>
 <br><br>
 <h3 style=" margin-left: 20px;font-family: Instrument Serif, serif;">BSc. Data Science And Programming</h3>
        <br>
        <h5 style=" margin-left: 100px;font-family: Instrument Serif, serif;">Simultaneously, I am enrolled in a Bachelor of Science program in
Data Science and Programming at the esteemed Indian Institute of
Technology Madras. This program is providing me with a
comprehensive understanding of data science concepts,
programming languages such as Python and R, machine learning,
and software development practices. Currently immersed in
courses covering statistical analysis, data visualization, and
predictive modeling, I am developing the skills needed for roles in
data analysis, machine learning engineering, and software
development. The combination of these degrees reflects my
commitment to a well-rounded education at the intersection of
electronics engineering and cutting-edge data-driven technologies.
 </h5>

          </div>
          <div>
          </div>
        </div>
        <div style="background-color: beige; min-height: 700px;" >
          <div class="newclass">
          <br><br>
          <h3 style=" margin-left: 20px;font-family: Instrument Serif, serif;font-weight: bold;">INTERNSHIP</h3>
          <br><br>
          <h3 style=" margin-left: 20px;font-family: Instrument Serif, serif;">Python Developer</h3> 
          <h7 style=" margin-left: 100px;font-family: Instrument Serif, serif; font-weight: bold;">Fractal31</h7> <br>
          <h7 style=" margin-left: 100px;font-family: Instrument Serif, serif;">March, 2023 - Augest, 2023</h7> 
          <br><br>
          
          <h5 style=" margin-left: 100px;font-family: Instrument Serif, serif;">Worked on GoDot, Blender and Python to make some interesting
robotic simulation.<br> Used GoDot for simulations and making some
virtual interface to connect with the robot.<br> Used Blender to make
some equipment (Servomotors, Arms, Body, etc.) for the Robot.<br>
Used Python as an interpreter, between the user and the robot for
the ease to control it.
          </h5>
</div>
          </div>
        
</div>

    </div>
    
   
</template>

<script>
import VueScrollTo from 'vue-scrollto';
export default {
  name: "HomeView",
  data() {
    return {
      isVisible: false,
      originalText: "SHRIK",
      typedText: "",
      intervalId: null,
      clicked:  false,
    
    };
    
  }, 
  mounted() {
  },
  methods: {
        toggleVisibility() {
          this.isVisible = !this.isVisible;
          this.clicked = !this.clicked;
        },
       
   
},
}
</script>

<style scoped>
.animated-div {
  width: 100px;
  height: 100px;
  background-color: #3498db; /* Adjust background color as needed */
  animation: fadeIn 2s ease; /* Example animation, adjust as needed */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.one1{
 animation: one1 4s infinite;

}
.one2{
 animation: one1 4s 0.5s  infinite;

}
.one3{
 animation: one1 4s 1s infinite;

}
.one4{
 animation: one1 4s 1.5s infinite;

}
.one5{
 animation: one1 4s 2s infinite;

}
.one6{
 animation: one1 4s 2.5s infinite;

}
.one7{
 animation: one1 4s 3s infinite;

}


@keyframes one1 {
  0%{
    transform: translateY(0px);
  }
  20%{
    transform: translateY(-15px) ;
  }
  40%{
    transform: translateY(0px) ;
  }
 
  
  
}
.newh1 {
  animation: moveLetter 4s ease-in-out infinite;
}


.typingeffect{
  width: 0;
  margin-right: 5px;
  overflow: hidden;
  border-right: 2px solid black;
  white-space: nowrap;
}


.typingeffect2{
  width: 0;
  margin-right: 5px;
  overflow: hidden;
  border-right: 2px solid white;
  white-space: nowrap;
}

.typingeffect{
  animation: typing 2s steps(30) forwards, blink;
  
}

.typingeffect2{
  animation: typing2 2s steps(30) 2s forwards, blink;
}


@keyframes typing {
  from {
    width: 0;
  }
  100%{
    border-color: transparent;
  }
  to {
    width: 100%;
  }

  
}
@keyframes typing2 {
  0%{
    border-color: black;
  }

  90%{
    border-color: black;
  }
  from {
    width: 0;
  }
  
  to {
    width: 100%;
  }

  
}

@keyframes blink {
  0%, 45% {
    border-color: black;
  }
  50%, 100% {
    border-color: black;
  }
}

@keyframes blink2 {
  0%, 45% {
    border-color: transparent;
  }
  50%, 100% {
    border-color: black;
  }
}

.card {

 margin-left: 40px;
 width: 200px;
 height: 300px;
 border-radius: 20px;
 background: #F5F5DC;
 position: relative;
 padding: 1.8rem;
 border: 2px solid #c3c6ce;
 transition: 0.5s ease-out;
 overflow: visible;
}

.card-details {
 color: black;
 height: 100%;
 gap: .5em;
 display: grid;
 place-content: center;
}

.card-button {
 transform: translate(-50%, 125%);
 width: 60%;
 border-radius: 1rem;
 border: none;
 background-color: #008bf8;
 color: #fff;
 font-size: 1rem;
 padding: .5rem 1rem;
 position: absolute;
 left: 50%;
 bottom: 0;
 opacity: 0;
 transition: 0.3s ease-out;
}

.text-body {
 color: rgb(134, 134, 134);
}

/*Text*/
.text-title {
 font-size: 1.5em;
 font-weight: bold;
}

/*Hover*/
.card:hover {
 border-color: #008bf8;
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
 transform: translate(-50%, 50%);
 opacity: 1;
}
.cta {
  position: relative;
  margin: auto;
  padding: 13px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  cursor: pointer;
}

.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 50px;
  background: #b1dae7;
  width: 45px;
  height: 45px;
  transition: all 0.3s ease;
}

.cta span {
  position: relative;
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #234567;
}

.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #234567;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.cta:hover:before {
  width: 100%;
  background: #b1dae7;
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active {
  transform: scale(0.95);
}
.container {
  width: 100%;
  height: 100%;
  background: linear-gradient(#3f87a6 10%, #ebf8e1a2 10%),
    linear-gradient(to right, #ebf8e100 10%, #c73030 10% 10.2%, #ebf8e100 10.5%);
  background-size: 100% 30px, 100% 100%;
  background-repeat: repeat, no-repeat;
  /* Add your background pattern here */
}

.newclass {
  scale:  .8; opacity: 0;
  animation: fade-in linear forwards;
  animation-timeline: view();
  animation-range: 50px 500px;

}

@keyframes fade-in{
  to { scale: 1; opacity: 1;  }
}


@keyframes pop{
  to {scale: 1; opicity: 1;}
}
.imageclass{
  scale:  .9; opacity: 0;
  animation: fade-in linear 1s forwards;
 
  
}



</style>
