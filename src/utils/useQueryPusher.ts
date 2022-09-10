import { useLocation, useNavigate } from "react-router-dom";
interface Obj {
  title: string;
  value: string;
}

export const QueryPusher = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const setQuery = (obj: Obj) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(obj.title, obj.value.toString());
    console.log(searchParams.get(obj.title));
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };
  return { setQuery };
};
