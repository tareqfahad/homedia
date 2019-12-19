import axios from "axios";
import decode from "jwt-decode";


export const register = newUser => {
  return axios
    .post("api/users/register", newUser)
    .then(res => {
        console.log(res);
        
      return res;
    })
    .catch(err => console.log(err));
};
export const login = user => {
    
  return axios
    .post("api/users/login", user)
    .then(async res => {
      localStorage.setItem("usertoken", res.data.token);
      const decodedToken = await decode(res.data.token);
      localStorage.setItem("user_id", decodedToken.id);
      return res.data.token;
    })
    .catch(err => console.log(err));
};
export const checkAuth = async props => {
  var dateNow = new Date();
  if (!localStorage.usertoken) {
    props.history.push("/signin");
    console.log("offline");
    window.location.reload();
  } else {
    const token = localStorage.getItem("usertoken");
    var decodedToken = await decode(token);
    var exp = decodedToken.exp;
    if (exp < dateNow.getTime() / 1000) {
      this.props.history.push("/signin");
      window.location.reload();
    }
  }
};
export const getUserData = async () => {
  const uid = localStorage.getItem("user_id");
  if (uid) {
    axios
      .get(`/api/v1/users/${uid}`)
      .then(user => {
        return user.data;
      })
      .catch(err => console.log(err));
  }
};
