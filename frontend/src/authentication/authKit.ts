import createStore from "react-auth-kit/createStore"
function Store(){
    const store = createStore({
    authName:'localstorage',
    authType:'cookie',
    cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
  })

  return store
}

export default Store