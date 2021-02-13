function _midpoint(point_1, point_2){
  
  let midpoint = {}
  
  midpoint.x = (point_1.x + point_2.x) / 2
  midpoint.y = (point_1.y + point_2.y) / 2

  return(midpoint)
}