const initialstatemultiplydiv = 5;

const MuliDiviTheNumber = (state = initialstatemultiplydiv,action) =>{
        switch (action.type) {
            case "MULTIPLICATION":return state * action.payload;
            case "DIVISION":return state / action.payload;
            default: return state;  
        }
}

export default MuliDiviTheNumber;