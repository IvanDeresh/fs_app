import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchSuperHeroes, createSuperHeroes } from "./shared/api/api";
import { useState } from "react";

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchSuperHeroes,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createSuperHeroes,
    onSuccess: () => {
      queryClient.invalidateQueries(["superheroes"]);
    },
  });

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = async () => {
    if (value.trim()) {
      mutation.mutate(value);
      setValue("");
    }
  };

  return (
    <div className="main">
      <h1 className="main__header">Superheroes List</h1>
      <div className="main__superhero">
        <input
          placeholder="Write name"
          value={value}
          type="text"
          onChange={handleChange}
          className="main__superhero--input"
        />
        <button className="main__superhero--button" onClick={handleAdd}>
          Add
        </button>
      </div>
      <ul className="main__list">
        {data?.map((hero) => (
          <li className="main__list--item" key={hero.id}>
            {hero.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
