export default{
  render(h){
    const {routeMap, current} = this.$router;
    // console.log(current, routeMap)
    return h(routeMap[current].component || null);
  }
} 