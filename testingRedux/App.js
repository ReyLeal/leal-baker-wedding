// import React from 'react';
// import { connect } from 'react-redux';
// import {add, subtract} from './actions';
// import {Grid, Button} from 'material-ui'
//
// let Counter = ({count, dispatch}) => (
//   <Grid container justify='center' align="center">
//     <Grid item sm={2}>
//       <Button onClick={() => dispatch(add(count + 1))} style={{'backgroundColor' : 'lightblue'}} variant={'raised'}>
//        ADD
//       </Button>
//     </Grid>
//     <Grid item sm={2}>
//       <Button onClick={() => dispatch(subtract(count -1))} style={{'backgroundColor' : 'orange'}} variant={'raised'}>
//        SUBTRACT
//       </Button>
//     </Grid>
//     <Grid container justify='center' align="center">
//       <Grid item sm={3}>
//         <h2>
//           Count is at : {count}
//         </h2>
//       </Grid>
//     </Grid>
//   </Grid>
// )
//
// Counter = connect((state) => {
//   return {
//     count: state.count.count
//   }
// })(Counter)
//
// export default Counter
