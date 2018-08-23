Vue.component('my-content', {
  template: '<div class="sectionContent"><h3 class="sectionTitle">piyo</h3><div class="description">HTML</div></div>'
})

var vm = new Vue({
  el: '#app',
  data: {
    isActive: true
  },
  mounted: function () {
    var width = window.screen.availWidth;
    if (width > 786) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  },
})
