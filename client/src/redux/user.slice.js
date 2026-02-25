const userSlice=createSlice({
    name:"user",
    initialState:{
        userData:null

    },
    reducers:{
        setUserData:(state,action)=>{
            state.userData=action.payload 
        }
    }
})