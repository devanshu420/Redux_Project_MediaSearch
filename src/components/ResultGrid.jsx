import { useDispatch, useSelector } from "react-redux";
import { fetchGIF, fetchVideo, fetchPhoto } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";


const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector((store) => store.search);
  const dispatch = useDispatch()
  useEffect(() => {
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
        data = res.data.results.map((item) => ({
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
  }, [query, activeTab]);



  return <div></div>;
};

export default ResultGrid;
