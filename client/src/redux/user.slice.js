const userSlice=createSlice({
    name:"user",
    initialState:{
        userData:[]

    },
    reducers:{
        setUserData:(state,action)=>{
            state.userData=action.payload
        }
    }
})