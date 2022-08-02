

// the navagation menu
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    //Toggle Nav
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      //Animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.5}s`;
        }
      });
      //Burger animation
      burger.classList.toggle('toggle');
    });
    
  }
navSlide();
  
  // the alert and prompt
  function myfunc() {
      // welcoming the visitor with an alert
  
  alert("Hello!");
  
  var person;
  
  // prompting visitor for his / her name
  
  person = prompt("Please enter your name", "Firstname Lastname");
  
  alert( "Welcome to my personal page, " + person + "!");
  
  //enter two numbers with a prompt
  
  var num1 = prompt("Enter first number: ");
  
  var num2 = prompt("Enter second number: ");
  
  var re = add(num1,num2); //function calling
  
  
  
   // function to add two numbers together
  
   function add(num1,num2){
  
      return Number(num1)+Number(num2); //returns the sum of two numbers
  
  }
  
  //Displays the result with an alert
  
  alert("The sum of your two numbers is : "+re);
  
  //checking the sum
  
  if(re>10)
  
      alert("That is a big number!");
  
  else
  
      alert("That is a small number!");
  
  //Asking the user whether he/she want to continue or not with a prompt
  
  var opinion = prompt("Do you want to add again?","yes or no");
  
  //loop if the user enters yes
  
  while(opinion == "yes"){
  
      var num1 = prompt("Enter first number: ");
  
      var num2 = prompt("Enter second number: ");
  
      var re = add(num1,num2);
  
      alert("The sum of your two numbers is: "+re);
  
      if(re>10)
  
          alert("That is a big number!");
  
      else
  
          alert("That is a small number!");
  
      var opinion = prompt("Do you want to add again?","yes or no");
  
  }
  
  // Writing the results in the form if the user enters no
  
  if(opinion == "no"){
  alert("Thanks for visiting my personal page !");
  }
  }