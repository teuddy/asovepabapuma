import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../services/apiInstance";


const useGetPokemons = ()=>{
    const query = useQuery({
        queryKey: ["getPokemons"],
        queryFn: () => getPokemons(),
      });
      return query;
}

export default useGetPokemons;