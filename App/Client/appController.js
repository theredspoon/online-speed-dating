import temp from './appTemp.vue';

var app = {
  template: temp.template,
  data: function() {
    return { 
      msg: 'Welcome To Do-We! ' + this.$store.state.user.username
    };
  }
};


export default app;