import './App.css';
import { useState, useEffect } from 'react';
import DataBase from './firebaseconnection'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
function App() {
  const getUsers = async () => {
    const data = await getDocs(collectionUsers);
    setUdata(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  const [newname, setNewname] = useState("");
  const [newage, setNewage] = useState(0);
  const [newcompany, setNewcompany] = useState("");

  let [udata, setUdata] = useState([]);
  const collectionUsers = collection(DataBase, 'Users');

  const CreateUser = async () => {
    await addDoc(collectionUsers, { Name: newname, Age: newage, Company: newcompany });
    getUsers();
  }

  const UpdateUser = async (id, age) => {
    const Updata = doc(DataBase, "Users", id);
    await updateDoc(Updata, { Age: age + 1 });
    getUsers();
  }
  const Decreaseage = async (id, age) => {
    const DecData = doc(DataBase, "Users", id);
    await updateDoc(DecData, { Age: age - 1 });
    getUsers();
  }

  const deletedata = async (id) => {
    const Deldata = doc(DataBase, "Users", id);
    await deleteDoc(Deldata);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="App">
      {/* <pre>
        {JSON.stringify(udata, undefined, 2)}
      </pre> */}

      <input type='text' placeholder='Name' onChange={(e) => { setNewname(e.target.value) }} /> <br />
      <input type='number' placeholder='age' onChange={(e) => { setNewage(e.target.value) }} /> <br />
      <input type='text' placeholder='Company name' onChange={(e) => { setNewcompany(e.target.value) }} /> <br />
      <button onClick={CreateUser} >Add user</button>
      {udata.map((user) => {
        return <div id={user.id}>
          <h3> Age: {user.Age}</h3>
          {console.log(user.id, " , ", user.Age)}
          <button onClick={() => { UpdateUser(user.id, user.Age) }}> Increase Age </button><br />
          <button onClick={() => { Decreaseage(user.id, user.Age) }}> Decrease Age </button>
          <br />
          <button onClick={() => { deletedata(user.id) }} >Delete data</button>
        </div>
      })}
    </div>
  );
}
export default App;
