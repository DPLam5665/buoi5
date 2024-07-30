import axios from 'axios'
const url = 'https://66a07c777053166bcabb9364.mockapi.io/Products'
export default function API(){
    axios.get(url)
.then(function(res){
    setData(res.data)
})
.catch(function(error){
  console.log(error)
})
}
