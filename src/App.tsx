import { useState, useEffect, ChangeEvent } from "react";

import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import { getData } from "./components/utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

function App() {
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users/");
      setMonsters(users);
    };

    fetchUsers()
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      const monsterName = monster.name.toLocaleLowerCase();
      return monsterName.includes(searchField);
    });

    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchField(e.target.value.toLocaleLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Roledex</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="Buscar Monstros"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
