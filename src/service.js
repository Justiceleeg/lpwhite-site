// server call to user DB
import axios from 'axios';

export function getAboutInfo() {
  const aboutInfo = axios.get( 'http://localhost:8000/api/about' ).then(response => {
    return response.data
  });
  return aboutInfo
}

// export function getCurrentRank() {
//   const promise = axios.get( 'http://localhost:8000/api/rank/:gameId' );
//   store.dispatch( getCurrentRank(promise) );
// }

// export function pushRank(user, score) {
//   const promise = axios.post( `http://localhost:8000/api/userInfo/${user}/${score}` );
//   store.dispatch( pushRank(promise) );
// }
