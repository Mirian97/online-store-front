import { useNavigate } from "react-router-dom";
import useGlobal from "./useGlobal";

function useRequests() {
  const navigate = useNavigate();
  const {
    setHeroContent,
    setArticle,
    search,
    setArticles,
    setTotalPages,
    orderByRelevance,
    currentPage,
  } = useGlobal();

  return {};
}

export default useRequests;
