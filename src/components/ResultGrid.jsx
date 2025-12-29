import { useDispatch, useSelector } from "react-redux";
import { fetchGIF, fetchVideo, fetchPhoto } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return;

    try {
      dispatch(setLoading());

      const getData = async () => {
        let data = [];

        if (activeTab == "photos") {
          let res = await fetchPhoto(query);
          data = res.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        }

        if (activeTab == "videos") {
          let res = await fetchVideo(query);
          data = res.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        }
        if (activeTab == "gif") {
          let res = await fetchGIF(query);
          data = res.results.map((item) => ({
            id: item.id,
            title: item.title || "GIF",
            type: "gif",
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url: item.url,
          }));
        }
        console.log(data);
        dispatch(setResults(data));
      };
      getData();
    } catch (err) {
      dispatch(setError(err.message));
    }
  }, [query, activeTab, dispatch]);

  if (error) return <h1>Error</h1>;
 if (loading)
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="h-14 w-14 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
        <p className="text-gray-500 text-lg font-medium tracking-wide">
          Loading results...
        </p>
      </div>
    </div>
  );


  return (
    <div className="flex justify-between w-full flex-wrap gap-6 overflow-auto px-10">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        )
      })}
    </div>
    
  );
};

export default ResultGrid;
