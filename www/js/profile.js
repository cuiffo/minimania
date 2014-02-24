var profile = {

  //Initialize the page
  initialize: function(){
    this.bindEvents();
  },

  //Bind any events we need
  bindEvents: function(){
    document.addEventListener("menubutton", this.onMenuButton, false);
  },

  onMenuButton: function(){
    alert("you pressed the menu button")
    //window.history.back();
  },










}
