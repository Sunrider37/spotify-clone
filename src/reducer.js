export const initialState = {
    user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
 // token: "BQBQfM6GQ56hHHnZPQz88ezr2uN-MWr7Q3In5WoXx2lwESsxNWTfTrkLM07df7LuBqMeCyhgcapY8XN_ba5Qx-gAOZhYtxDxkiKOUyAqqgBuBvsgaYzJm3vg7-uWDGMoC_zWufjg_4FkWYm6OiwlMsVofEv-xroc4AtJ--E1MdGOSZb0HjY"
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':{
            return {
                ...state, token: action.token
            }

        }
        
        case 'SET_PLAYLISTS':{
            return {
                ...state, playlists: action.playlists
            }
        }
        case 'SET_DISCOVER_WEEKLY':{
            return{
                ...state, discover_weekly: action.discover_weekly
            }
        }
            default: return state
    }
}

export default reducer;