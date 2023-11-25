// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
    
//     name:"",
//     lastName:"",
//     phone:"",
//     address:"",
//     email:"",
//     password:"",
//     connect: ""
// }

// const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//       register: (state, action) => {
//         const { name, lastName, phone, address, email, password, connect } = action.payload;
//         state.name = name;
//         state.lastName = lastName;
//         state.phone = phone;
//         state.address = address;
//         state.email = email;
//         state.password = password;
//         state.connect = connect;
//       },
//       login: (state, action) => {
//         const { name, lastName, phone, address, email, password, connect } = action.payload;
//         state.name = name;
//         state.lastName = lastName;
//         state.phone = phone;
//         state.address = address;
//         state.email = email;
//         state.password = password;
//         state.connect = connect;
        
//       }

      
//     },
//   });
  

//   export const { register,login } = userSlice.actions;
// export default userSlice.reducer